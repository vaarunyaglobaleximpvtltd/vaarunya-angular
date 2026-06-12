const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');

// 1. Read and parse .env file
const envPath = path.join(__dirname, '..', '.env');
const env = {};
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split(/\r?\n/).forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const k = match[1];
      let val = match[2] || '';
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      else if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
      env[k] = val;
    }
  });
}

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const cloudName = env.CLOUD_NAME;
const apiKey = env.CLOUDNARY_API_KEY;
const apiSecret = env.CLOUDNARY_API_SCERET;

if (!supabaseUrl || !supabaseAnonKey || !cloudName || !apiKey || !apiSecret) {
  console.error('❌ Missing configuration in .env!');
  console.log('Required keys:');
  console.log('- NEXT_PUBLIC_SUPABASE_URL:', !!supabaseUrl);
  console.log('- NEXT_PUBLIC_SUPABASE_ANON_KEY:', !!supabaseAnonKey);
  console.log('- CLOUD_NAME:', !!cloudName);
  console.log('- CLOUDNARY_API_KEY:', !!apiKey);
  console.log('- CLOUDNARY_API_SCERET:', !!apiSecret);
  process.exit(1);
}

// 2. Configure Cloudinary
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

// Helper: Get public ID from Vercel Blob URL
function getPublicIdFromUrl(url) {
  try {
    const parsedUrl = new URL(url);
    let pathname = decodeURIComponent(parsedUrl.pathname);
    if (pathname.startsWith('/')) pathname = pathname.slice(1);
    
    // Remove the file extension
    const extIndex = pathname.lastIndexOf('.');
    if (extIndex !== -1) {
      pathname = pathname.substring(0, extIndex);
    }
    
    // Sanitize special characters to make it Cloudinary-compatible
    let sanitized = pathname
      .replace(/[^a-zA-Z0-9_\-\/\.]/g, '_')
      .replace(/_+/g, '_');
      
    return sanitized;
  } catch (err) {
    return `image_${Date.now()}`;
  }
}

// Helper: Download image to buffer
async function downloadImage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error ${res.status}: ${res.statusText}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Helper: Compress and resize image using sharp
async function compressImage(buffer) {
  return await sharp(buffer)
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();
}

// Helper: Upload to Cloudinary
async function uploadToCloudinary(buffer, publicId) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        public_id: publicId,
        overwrite: true,
        invalidate: true,
        resource_type: 'image',
        format: 'webp'
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(buffer);
  });
}

// Helper: Update Category in Supabase
async function updateCategoryUrl(id, newUrl) {
  const res = await fetch(`${supabaseUrl}/rest/v1/categories?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ image_url: newUrl })
  });
  if (!res.ok) throw new Error(`HTTP error ${res.status} updating category ${id}`);
}

// Helper: Update Product Image in Supabase
async function updateProductImageUrl(id, newUrl) {
  const res = await fetch(`${supabaseUrl}/rest/v1/product_images?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ image_url: newUrl })
  });
  if (!res.ok) throw new Error(`HTTP error ${res.status} updating product image ${id}`);
}

// Main execution function
async function runMigration() {
  const args = process.argv.slice(2);
  const isTest = args.includes('--test');
  
  console.log(`Starting migration... Mode: ${isTest ? 'TEST (Single Image)' : 'FULL'}`);

  const headers = {
    'apikey': supabaseAnonKey,
    'Authorization': `Bearer ${supabaseAnonKey}`
  };

  // 1. Fetch categories
  console.log('Fetching categories...');
  const catRes = await fetch(`${supabaseUrl}/rest/v1/categories?select=*`, { headers });
  if (!catRes.ok) throw new Error(`Failed to fetch categories: ${catRes.statusText}`);
  const categories = await catRes.json();
  console.log(`Found ${categories.length} categories.`);

  // 2. Fetch product images
  console.log('Fetching product images...');
  const imgRes = await fetch(`${supabaseUrl}/rest/v1/product_images?select=*`, { headers });
  if (!imgRes.ok) throw new Error(`Failed to fetch product images: ${imgRes.statusText}`);
  const productImages = await imgRes.json();
  console.log(`Found ${productImages.length} product images.`);

  // Filter items that need migration (pointing to Vercel Blob)
  const targetCategories = categories.filter(c => c.image_url && c.image_url.includes('vercel-storage.com'));
  const targetProductImages = productImages.filter(img => img.image_url && img.image_url.includes('vercel-storage.com'));

  console.log(`\nItems needing migration:`);
  console.log(`- Categories: ${targetCategories.length}`);
  console.log(`- Product Images: ${targetProductImages.length}`);

  let processedCount = 0;

  // Process Category Images
  for (const cat of targetCategories) {
    console.log(`\n----------------------------------------`);
    console.log(`Processing Category: ${cat.name} (${cat.id})`);
    console.log(`Original URL: ${cat.image_url}`);

    try {
      console.log('Downloading...');
      const origBuffer = await downloadImage(cat.image_url);
      const origSize = (origBuffer.length / (1024 * 1024)).toFixed(2);
      console.log(`Downloaded. Original Size: ${origSize} MB`);

      console.log('Compressing...');
      const compBuffer = await compressImage(origBuffer);
      const compSize = (compBuffer.length / 1024).toFixed(2);
      console.log(`Compressed. Optimized Size: ${compSize} KB`);

      const publicId = getPublicIdFromUrl(cat.image_url);
      console.log(`Uploading to Cloudinary as webp (Public ID: ${publicId})...`);
      const uploadResult = await uploadToCloudinary(compBuffer, publicId);
      console.log(`Uploaded! Cloudinary URL: ${uploadResult.secure_url}`);

      if (isTest) {
        console.log('🧪 TEST MODE: Skipping database update.');
        processedCount++;
        break; // Exit categories loop
      } else {
        console.log('Updating database...');
        await updateCategoryUrl(cat.id, uploadResult.secure_url);
        console.log('✅ Database updated successfully!');
      }
      processedCount++;
    } catch (err) {
      console.error(`❌ Error processing category ${cat.name}:`, err.message || err);
    }
  }

  // If we processed a category image in test mode, we stop here
  if (isTest && processedCount > 0) {
    console.log('\n🧪 Test execution completed successfully.');
    return;
  }

  // Process Product Images
  for (const img of targetProductImages) {
    console.log(`\n----------------------------------------`);
    console.log(`Processing Product Image ID: ${img.id} (Product ID: ${img.product_id})`);
    console.log(`Original URL: ${img.image_url}`);

    try {
      console.log('Downloading...');
      const origBuffer = await downloadImage(img.image_url);
      const origSize = (origBuffer.length / (1024 * 1024)).toFixed(2);
      console.log(`Downloaded. Original Size: ${origSize} MB`);

      console.log('Compressing...');
      const compBuffer = await compressImage(origBuffer);
      const compSize = (compBuffer.length / 1024).toFixed(2);
      console.log(`Compressed. Optimized Size: ${compSize} KB`);

      const publicId = getPublicIdFromUrl(img.image_url);
      console.log(`Uploading to Cloudinary as webp (Public ID: ${publicId})...`);
      const uploadResult = await uploadToCloudinary(compBuffer, publicId);
      console.log(`Uploaded! Cloudinary URL: ${uploadResult.secure_url}`);

      if (isTest) {
        console.log('🧪 TEST MODE: Skipping database update.');
        processedCount++;
        break; // Exit product images loop
      } else {
        console.log('Updating database...');
        await updateProductImageUrl(img.id, uploadResult.secure_url);
        console.log('✅ Database updated successfully!');
      }
      processedCount++;
    } catch (err) {
      console.error(`❌ Error processing product image ${img.id}:`, err.message || err);
    }
  }

  console.log(`\n========================================`);
  console.log(`Migration complete! Successfully processed ${processedCount} images.`);
}

runMigration().catch(err => {
  console.error('❌ Fatal Migration Error:', err.message || err);
});
