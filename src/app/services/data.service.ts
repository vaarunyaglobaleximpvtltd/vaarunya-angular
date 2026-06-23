import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, shareReplay, forkJoin, map, catchError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataService {
  private cache = new Map<string, Observable<any>>();

  constructor(private http: HttpClient) {}

  private getData<T>(path: string): Observable<T> {
    if (!this.cache.has(path)) {
      this.cache.set(
        path,
        this.http.get<T>(`assets/data/${path}`).pipe(shareReplay(1))
      );
    }
    return this.cache.get(path)!;
  }

  getSiteData(): Observable<any> {
    return this.getData('site.json');
  }

  getHomeData(): Observable<any> {
    return this.getData('home.json');
  }

  getAboutData(): Observable<any> {
    return this.getData('about.json');
  }

  getProductsData(): Observable<any> {
    if (!environment.supabaseUrl || !environment.supabaseAnonKey) {
      console.warn('Supabase URL or Anon Key is missing. Falling back to static products.json');
      return this.getData('products.json');
    }

    const headers = {
      'apikey': environment.supabaseAnonKey,
      'Authorization': `Bearer ${environment.supabaseAnonKey}`
    };

    const categories$ = this.http.get<any[]>(`${environment.supabaseUrl}/rest/v1/categories?select=*`, { headers });
    const subcategories$ = this.http.get<any[]>(`${environment.supabaseUrl}/rest/v1/subcategories?select=*`, { headers });
    const products$ = this.http.get<any[]>(`${environment.supabaseUrl}/rest/v1/products?select=*`, { headers });
    const productImages$ = this.http.get<any[]>(`${environment.supabaseUrl}/rest/v1/product_images?select=*`, { headers });

    return forkJoin({
      categories: categories$,
      subcategories: subcategories$,
      products: products$,
      productImages: productImages$
    }).pipe(
      map(({ categories, subcategories, products, productImages }) => {
        // Map images to their respective products
        const imagesMap = new Map<number, any[]>();
        productImages.forEach((img: any) => {
          if (!imagesMap.has(img.product_id)) {
            imagesMap.set(img.product_id, []);
          }
          imagesMap.get(img.product_id)!.push(img);
        });

        // Map products
        const productsMapped = products.map((p: any) => {
          const pImgs = imagesMap.get(p.id) || [];
          // Sort so primary image comes first
          const sortedImgs = [...pImgs].sort((a: any, b: any) => {
            if (a.is_primary && !b.is_primary) return -1;
            if (!a.is_primary && b.is_primary) return 1;
            return (a.sort_order || 0) - (b.sort_order || 0);
          });
          const primaryImg = sortedImgs[0];
          const imageUrl = primaryImg ? primaryImg.image_url : 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80';

          return {
            name: p.name,
            image: imageUrl,
            images: sortedImgs.map((img: any) => ({
              url: img.image_url,
              isPrimary: !!img.is_primary
            })),
            origin: p.origin || 'India',
            grade: p.grade || 'Export Quality',
            packaging: p.packaging || 'Custom Packing',
            moq: p.moq || '1 MT',
            hsCode: p.hs_code || ''
          };
        });

        // Group products by subcategory
        const productsBySubcat = new Map<string, any[]>();
        productsMapped.forEach((p: any, idx: number) => {
          const dbProd = products[idx];
          const subcatId = dbProd.subcategory_id;
          if (!productsBySubcat.has(subcatId)) {
            productsBySubcat.set(subcatId, []);
          }
          productsBySubcat.get(subcatId)!.push(p);
        });

        // Map subcategories
        const subcategoriesMapped = subcategories.map((sub: any) => ({
          id: sub.id,
          name: sub.name,
          products: productsBySubcat.get(sub.id) || []
        }));

        // Group subcategories by category
        const subcategoriesByCat = new Map<string, any[]>();
        subcategoriesMapped.forEach((sub: any, idx: number) => {
          const dbSub = subcategories[idx];
          const catId = dbSub.category_id;
          if (!subcategoriesByCat.has(catId)) {
            subcategoriesByCat.set(catId, []);
          }
          subcategoriesByCat.get(catId)!.push(sub);
        });

        // Map categories
        const categoriesMapped = categories.map((cat: any) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon || 'package',
          image: cat.image_url || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
          description: cat.description || '',
          subcategories: subcategoriesByCat.get(cat.id) || []
        }));

        return {
          hero: {
            title: "Our Premium Export Products",
            subtitle: "Discover India's finest — from farm-fresh spices to world-class leather. Browse our categories, subcategories, and export-ready products."
          },
          stats: {
            categories: categories.length,
            products: products.length,
            countries: 30,
            certifications: 12
          },
          categories: categoriesMapped
        };
      }),
      catchError(error => {
        console.error('Error fetching dynamic products from Supabase:', error);
        console.warn('Falling back to static products.json data');
        return this.getData('products.json');
      })
    );
  }

  getContactData(): Observable<any> {
    return this.getData('contact.json');
  }

  submitInquiry(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'apikey': environment.supabaseAnonKey,
      'Authorization': `Bearer ${environment.supabaseAnonKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    });
    return this.http.post(`${environment.supabaseUrl}/rest/v1/inquiries`, formData, { headers });
  }
}
