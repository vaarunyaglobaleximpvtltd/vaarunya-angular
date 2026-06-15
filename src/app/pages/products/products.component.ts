import { Component, OnInit, OnDestroy, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { IllustrationComponent } from '../../components/illustrations/illustrations.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, RevealDirective, IllustrationComponent],
  template: `
    <!-- JSON-LD Structured Data -->

    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
      <div class="hero-content" appReveal="fadeUp">
        <span class="tag">Our Export Catalog</span>
        <h1>{{ heroData().title }}</h1>
        <p>{{ heroData().subtitle }}</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <strong>{{ categories().length }}</strong>
            <span>Categories</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <strong>{{ totalProducts() }}</strong>
            <span>Products</span>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat">
            <strong>30+</strong>
            <span>Countries</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== BREADCRUMB + CONTROLS ========== -->
    <section class="controls-bar">
      <div class="container">
        <nav class="breadcrumb" aria-label="Catalog breadcrumb">
          <button class="crumb" [class.active]="!activeCategory()" (click)="goToCategories()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            All Categories
          </button>
          @if (activeCategory()) {
            <svg class="crumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            <button class="crumb" [class.active]="!activeSubcategory()" (click)="goToCategory(activeCategory()!)">{{ getCategoryName(activeCategory()!) }}</button>
          }
          @if (activeSubcategory()) {
            <svg class="crumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            <span class="crumb active">{{ getSubcategoryName(activeCategory()!, activeSubcategory()!) }}</span>
          }
        </nav>

        <div class="controls-right">
          <div class="search-bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search products..." [value]="searchTerm()" (input)="onSearch($event)" />
            @if (searchTerm()) {
              <button class="clear-search" (click)="clearSearch()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            }
          </div>
          @if (activeSubcategory()) {
            <div class="view-toggle" role="radiogroup" aria-label="View mode">
              <button [class.active]="viewMode() === 'card'" (click)="viewMode.set('card')" aria-label="Card view" title="Card View">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              </button>
              <button [class.active]="viewMode() === 'table'" (click)="viewMode.set('table')" aria-label="Table view" title="Table View">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              </button>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== MAIN CATALOG ========== -->

    <!-- LEVEL 1: All Categories -->
    @if (!activeCategory() && !searchTerm()) {
      <section class="catalog-section" itemscope itemtype="https://schema.org/OfferCatalog">
        <meta itemprop="name" content="Vaarunya Global Exim Product Catalog" />
        <div class="container">
          <div class="section-header" appReveal="fadeUp">
            <span class="section-tag">Browse by Category</span>
            <h2>Our Product Range</h2>
            <p>Select a category to explore subcategories and individual products</p>
          </div>
          <div class="categories-grid">
            @for (cat of filteredCategories(); track cat.id; let i = $index) {
              <article class="category-card" (click)="goToCategory(cat.id)" appReveal="fadeUp" [revealDelay]="i * 60"
                       itemprop="itemListElement" itemscope itemtype="https://schema.org/OfferCatalog">
                <div class="cat-card-image">
                  <img [src]="cat.image" [alt]="cat.name + ' exports from India'" loading="lazy" itemprop="image" />
                  <div class="cat-card-overlay">
                    <span class="explore-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                      Explore
                    </span>
                  </div>
                </div>
                <div class="cat-card-body">
                  <h3 itemprop="name">{{ cat.name }}</h3>
                  <p itemprop="description">{{ cat.description }}</p>
                  <div class="cat-card-meta">
                    <span class="sub-count">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                      {{ cat.subcategories.length }} subcategories
                    </span>
                    <span class="prod-count">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/></svg>
                      {{ getCategoryProductCount(cat) }} products
                    </span>
                  </div>
                </div>
                <div class="cat-card-hover-line"></div>
              </article>
            }
          </div>
        </div>
      </section>
    }

    <!-- LEVEL 2: Subcategories of a category -->
    @if (activeCategory() && !activeSubcategory() && !searchTerm()) {
      <section class="catalog-section">
        <div class="container">
          @if (currentCategory(); as cat) {
            <div class="category-hero-bar" appReveal="fadeUp">
              <img [src]="cat.image" [alt]="cat.name" class="cat-hero-thumb" />
              <div>
                <h2>{{ cat.name }}</h2>
                <p>{{ cat.description }}</p>
              </div>
            </div>

            <div class="subcategories-grid">
              @for (sub of cat.subcategories; track sub.id; let i = $index) {
                <article class="subcat-card" (click)="goToSubcategory(cat.id, sub.id)" appReveal="fadeUp" [revealDelay]="i * 80">
                  <div class="subcat-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>
                  </div>
                  <div class="subcat-card-body">
                    <h3>{{ sub.name }}</h3>
                    <span class="subcat-count">{{ sub.products.length }} products</span>
                  </div>
                  <div class="subcat-products-preview">
                    @for (prod of sub.products.slice(0, 3); track prod.name) {
                      <img [src]="prod.image" [alt]="prod.name" class="preview-thumb" loading="lazy" />
                    }
                    @if (sub.products.length > 3) {
                      <span class="preview-more">+{{ sub.products.length - 3 }}</span>
                    }
                  </div>
                  <svg class="subcat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                </article>
              }
            </div>
          }
        </div>
      </section>
    }

    <!-- LEVEL 3: Products in a subcategory (CARD VIEW) -->
    @if (activeSubcategory() && viewMode() === 'card' && !searchTerm()) {
      <section class="catalog-section">
        <div class="container">
          <div class="products-header" appReveal="fadeUp">
            <h2>{{ getSubcategoryName(activeCategory()!, activeSubcategory()!) }}</h2>
            <span class="results-count">{{ currentProducts().length }} products</span>
          </div>
          <div class="products-grid">
            @for (product of currentProducts(); track product.name; let i = $index) {
              <article class="product-card" appReveal="fadeUp" [revealDelay]="i * 60"
                       (mouseenter)="onCardMouseEnter(product.name, product.images)"
                       (mouseleave)="onCardMouseLeave(product.name)"
                       itemprop="itemListElement" itemscope itemtype="https://schema.org/Product">
                <div class="product-image">
                  @if (product.images && product.images.length > 1) {
                    <div class="product-carousel" (scroll)="onCarouselScroll($event, product.name, product.images.length)">
                      <div class="carousel-track" [style.transform]="'translateX(-' + (carouselIndices()[product.name] || 0) * 100 + '%)'">
                        @for (img of product.images; track img.url; let imgIdx = $index) {
                          <img
                            [src]="img.url"
                            [alt]="product.name + ' image ' + (imgIdx + 1)"
                            loading="lazy"
                            class="carousel-slide"
                            [attr.itemprop]="imgIdx === 0 ? 'image' : null"
                          />
                        }
                      </div>
                      <div class="carousel-dots">
                        @for (img of product.images; track img.url; let dotIdx = $index) {
                          <span class="carousel-dot" [class.active]="dotIdx === (carouselIndices()[product.name] || 0)"></span>
                        }
                      </div>
                    </div>
                  } @else {
                    <img [src]="product.image" [alt]="product.name + ' export quality'" loading="lazy" itemprop="image" />
                  }
                  <div class="product-badges">
                    @if (product.hsCode) {
                      <span class="badge badge-hs">HS {{ product.hsCode }}</span>
                    }
                  </div>
                </div>
                <div class="product-body">
                  <h3 itemprop="name">{{ product.name }}</h3>
                  <div class="product-specs">
                    <div class="spec-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span><strong>Origin:</strong> {{ product.origin }}</span>
                    </div>
                    <div class="spec-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span><strong>Grade:</strong> {{ product.grade }}</span>
                    </div>
                    <div class="spec-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
                      <span><strong>Packaging:</strong> {{ product.packaging }}</span>
                    </div>
                    <div class="spec-row">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                      <span><strong>MOQ:</strong> {{ product.moq }}</span>
                    </div>
                  </div>
                  <a routerLink="/contact" fragment="contact-form" class="btn-quote">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Request Quote
                  </a>
                </div>
              </article>
            }
          </div>
        </div>
      </section>
    }

    <!-- LEVEL 3: Products in a subcategory (TABLE VIEW) -->
    @if (activeSubcategory() && viewMode() === 'table' && !searchTerm()) {
      <section class="catalog-section">
        <div class="container">
          <div class="products-header" appReveal="fadeUp">
            <h2>{{ getSubcategoryName(activeCategory()!, activeSubcategory()!) }}</h2>
            <span class="results-count">{{ currentProducts().length }} products</span>
          </div>
          <div class="table-wrap" appReveal="fadeUp" [revealDelay]="100">
            <table class="products-table" itemscope itemtype="https://schema.org/OfferCatalog">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Origin</th>
                  <th>Grade</th>
                  <th>Packaging</th>
                  <th>MOQ</th>
                  <th>HS Code</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                @for (product of currentProducts(); track product.name; let i = $index) {
                  <tr itemscope itemtype="https://schema.org/Product">
                    <td class="td-product">
                      <img [src]="product.image" [alt]="product.name" loading="lazy" class="table-thumb" itemprop="image" />
                      <span itemprop="name">{{ product.name }}</span>
                    </td>
                    <td>{{ product.origin }}</td>
                    <td>{{ product.grade }}</td>
                    <td>{{ product.packaging }}</td>
                    <td><strong>{{ product.moq }}</strong></td>
                    <td><code>{{ product.hsCode }}</code></td>
                    <td><a routerLink="/contact" fragment="contact-form" class="table-quote-btn">Quote</a></td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>
    }

    <!-- ========== SEARCH RESULTS ========== -->
    @if (searchTerm()) {
      <section class="catalog-section">
        <div class="container">
          <div class="products-header" appReveal="fadeUp">
            <h2>Search Results for &ldquo;{{ searchTerm() }}&rdquo;</h2>
            <span class="results-count">{{ searchResults().length }} products found</span>
          </div>

          @if (searchResults().length > 0) {
            <div class="products-grid">
              @for (result of searchResults(); track result.product.name + result.categoryId; let i = $index) {
                <article class="product-card" appReveal="fadeUp" [revealDelay]="i * 50"
                         (mouseenter)="onCardMouseEnter(result.product.name, result.product.images)"
                         (mouseleave)="onCardMouseLeave(result.product.name)">
                  <div class="product-image">
                    @if (result.product.images && result.product.images.length > 1) {
                      <div class="product-carousel" (scroll)="onCarouselScroll($event, result.product.name, result.product.images.length)">
                        <div class="carousel-track" [style.transform]="'translateX(-' + (carouselIndices()[result.product.name] || 0) * 100 + '%)'">
                          @for (img of result.product.images; track img.url; let imgIdx = $index) {
                            <img
                              [src]="img.url"
                              [alt]="result.product.name + ' image ' + (imgIdx + 1)"
                              loading="lazy"
                              class="carousel-slide"
                            />
                          }
                        </div>
                        <div class="carousel-dots">
                          @for (img of result.product.images; track img.url; let dotIdx = $index) {
                            <span class="carousel-dot" [class.active]="dotIdx === (carouselIndices()[result.product.name] || 0)"></span>
                          }
                        </div>
                      </div>
                    } @else {
                      <img [src]="result.product.image" [alt]="result.product.name" loading="lazy" />
                    }
                    <div class="product-badges">
                      <span class="badge badge-cat">{{ result.categoryName }}</span>
                    </div>
                  </div>
                  <div class="product-body">
                    <h3>{{ result.product.name }}</h3>
                    <span class="search-path">{{ result.categoryName }} › {{ result.subcategoryName }}</span>
                    <div class="product-specs">
                      <div class="spec-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span><strong>Origin:</strong> {{ result.product.origin }}</span>
                      </div>
                      <div class="spec-row">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <span><strong>Grade:</strong> {{ result.product.grade }}</span>
                      </div>
                    </div>
                    <a routerLink="/contact" fragment="contact-form" class="btn-quote">Request Quote</a>
                  </div>
                </article>
              }
            </div>
          } @else {
            <div class="no-results">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <h3>No products found</h3>
              <p>Try a different search term or <button class="link-btn" (click)="clearSearch()">browse all categories</button></p>
            </div>
          }
        </div>
      </section>
    }

    <!-- ========== CERTIFICATIONS BANNER ========== -->
    <section class="certs-section">
      <div class="container">
        <div class="certs-bar" appReveal="fadeUp">
          <span class="certs-label">Quality Assured</span>
          <div class="certs-list">
            @for (cert of certifications; track cert) {
              <span class="cert-badge">{{ cert }}</span>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- ========== Sourcing Process ========== -->
    <section class="sourcing-section">
      <div class="container">
        <div class="sourcing-grid">
          <div class="sourcing-illustration" appReveal="fadeRight">
            <app-illustration name="quality-process"></app-illustration>
          </div>
          <div class="sourcing-content" appReveal="fadeLeft" [revealDelay]="200">
            <span class="section-tag">How We Source</span>
            <h2>Ethical & Traceable Sourcing from Indian Farms</h2>
            <p>Every product in our catalog follows a rigorous sourcing pipeline. We work directly with farming communities across India to ensure the freshest, highest-quality agricultural products.</p>

            <div class="sourcing-points">
              <div class="s-point">
                <div class="s-point-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <div>
                  <h4>Direct Farmer Partnerships</h4>
                  <p>500+ farmers across Gujarat, Rajasthan, Maharashtra, Karnataka, and more. Fair pricing, long-term relationships.</p>
                </div>
              </div>
              <div class="s-point">
                <div class="s-point-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h4>Quality Certified</h4>
                  <p>APEDA, FSSAI, ISO 22000 certified operations. Lab-tested for purity, moisture, and contaminants.</p>
                </div>
              </div>
              <div class="s-point">
                <div class="s-point-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                </div>
                <div>
                  <h4>Export-Ready Packaging</h4>
                  <p>Vacuum-sealed, moisture-proof export packaging with complete traceability barcodes and batch numbers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content" appReveal="scale">
          <h2>Can't Find What You're Looking For?</h2>
          <p>Our product catalog extends far beyond what's listed. We can source virtually any product from India.</p>
          <div class="cta-btns">
            <a routerLink="/contact" fragment="contact-form" class="btn-primary">Request Custom Quote</a>
            <a href="https://wa.me/919100477554" target="_blank" rel="noopener" class="btn-secondary">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.7-1.416A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.35 0-4.514-.793-6.252-2.122l-.438-.35-3.22.97.897-3.118-.381-.569A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ========== HERO ========== */
    .hero {
      position: relative;
      height: 55vh;
      min-height: 420px;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      background: url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80') center/cover;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(22,33,62,0.78) 100%);
    }
    .hero-shapes {
      position: absolute; inset: 0; overflow: hidden; z-index: 1;
    }
    .shape {
      position: absolute; border-radius: 50%; opacity: 0.07;
      background: #c8a951; animation: floatShape 20s ease-in-out infinite;
    }
    .shape-1 { width: 400px; height: 400px; top: -100px; right: -50px; animation-delay: 0s; }
    .shape-2 { width: 250px; height: 250px; bottom: -80px; left: 10%; animation-delay: -7s; }
    .shape-3 { width: 180px; height: 180px; top: 30%; left: 60%; animation-delay: -14s; }
    @keyframes floatShape {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -30px) scale(1.05); }
      66% { transform: translate(-20px, 20px) scale(0.95); }
    }
    .hero-content {
      position: relative; z-index: 2;
      max-width: 1280px; margin: 0 auto; padding: 0 2rem; width: 100%;
    }
    .hero-content .tag {
      color: #c8a951; font-weight: 600; letter-spacing: 2px;
      text-transform: uppercase; font-size: 0.85rem; display: block; margin-bottom: 1rem;
    }
    .hero-content h1 {
      font-size: 3rem; color: #fff; font-weight: 800; margin-bottom: 1rem; line-height: 1.1;
    }
    .hero-content > p {
      color: rgba(255,255,255,0.75); font-size: 1.05rem; margin-bottom: 2rem; max-width: 600px; line-height: 1.7;
    }
    .hero-stats {
      display: inline-flex; align-items: center; gap: 1.5rem;
      background: rgba(255,255,255,0.08); backdrop-filter: blur(16px);
      border: 1px solid rgba(200,169,81,0.25); border-radius: 60px;
      padding: 0.75rem 2rem;
    }
    .hero-stat { text-align: center; }
    .hero-stat strong { display: block; font-size: 1.4rem; color: #c8a951; font-weight: 800; }
    .hero-stat span { font-size: 0.75rem; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 1px; }
    .hero-stat-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.15); }

    /* ========== CONTROLS BAR ========== */
    .controls-bar {
      padding: 1rem 0; background: #fff;
      box-shadow: 0 2px 12px rgba(0,0,0,0.06); border-bottom: 1px solid #f0f0f0;
    }
    .controls-bar .container {
      display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
    }
    .breadcrumb {
      display: flex; align-items: center; gap: 0.5rem; font-size: 0.88rem;
    }
    .crumb {
      background: none; border: none; cursor: pointer; font-size: 0.88rem;
      color: #888; display: flex; align-items: center; gap: 0.35rem;
      padding: 0.35rem 0.6rem; border-radius: 8px; transition: all 0.2s;
      font-family: inherit;
    }
    .crumb svg { width: 14px; height: 14px; }
    .crumb:hover { background: rgba(200,169,81,0.1); color: #a88b3a; }
    .crumb.active { color: #1a1a2e; font-weight: 600; cursor: default; }
    .crumb.active:hover { background: none; }
    .crumb-arrow { width: 14px; height: 14px; color: #ccc; flex-shrink: 0; }

    .controls-right { display: flex; align-items: center; gap: 0.75rem; }

    .search-bar {
      display: flex; align-items: center; gap: 0.5rem;
      background: #f5f5f5; border-radius: 50px; padding: 0.55rem 1.2rem;
      border: 2px solid transparent; transition: all 0.3s; min-width: 260px;
    }
    .search-bar:focus-within {
      border-color: #c8a951; background: #fff;
      box-shadow: 0 4px 15px rgba(200,169,81,0.12);
    }
    .search-bar svg { width: 16px; height: 16px; color: #999; flex-shrink: 0; }
    .search-bar input {
      flex: 1; border: none; background: transparent; font-size: 0.88rem;
      color: #333; outline: none; font-family: inherit;
    }
    .search-bar input::placeholder { color: #aaa; }
    .clear-search {
      background: none; border: none; cursor: pointer; display: flex;
      align-items: center; padding: 2px; border-radius: 50%;
    }
    .clear-search:hover { background: rgba(0,0,0,0.08); }
    .clear-search svg { width: 14px; height: 14px; color: #999; }

    .view-toggle {
      display: flex; background: #f0f0f0; border-radius: 10px; overflow: hidden;
    }
    .view-toggle button {
      background: none; border: none; cursor: pointer; padding: 0.5rem 0.65rem;
      display: flex; align-items: center; justify-content: center; transition: all 0.2s;
    }
    .view-toggle button svg { width: 18px; height: 18px; color: #999; }
    .view-toggle button.active {
      background: linear-gradient(135deg, #c8a951, #a88b3a);
    }
    .view-toggle button.active svg { color: #fff; }
    .view-toggle button:hover:not(.active) { background: #e8e8e8; }

    /* ========== CATALOG SECTIONS ========== */
    .catalog-section { padding: 3rem 0 5rem; background: #fafafa; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-tag {
      display: inline-block; color: #c8a951; font-weight: 700; font-size: 0.8rem;
      letter-spacing: 3px; text-transform: uppercase; margin-bottom: 0.75rem;
    }
    .section-header h2 { font-size: 2.2rem; color: #1a1a2e; margin-bottom: 0.75rem; }
    .section-header p { color: #777; font-size: 1rem; line-height: 1.7; }

    /* ========== CATEGORY CARDS ========== */
    .categories-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
    }
    .category-card {
      background: #fff; border-radius: 20px; overflow: hidden; cursor: pointer;
      box-shadow: 0 4px 24px rgba(0,0,0,0.06); transition: all 0.35s;
      border: 2px solid transparent; position: relative;
    }
    .category-card:hover {
      transform: translateY(-8px); box-shadow: 0 20px 60px rgba(0,0,0,0.12);
      border-color: #c8a951;
    }
    .category-card:hover .cat-card-overlay { opacity: 1; }
    .category-card:hover .cat-card-image img { transform: scale(1.08); }
    .category-card:hover .cat-card-hover-line { transform: scaleX(1); }

    .cat-card-image { position: relative; height: 220px; overflow: hidden; }
    .cat-card-image img {
      width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;
    }
    .cat-card-overlay {
      position: absolute; inset: 0; background: rgba(26,26,46,0.6);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.3s;
    }
    .explore-btn {
      color: #fff; font-weight: 600; font-size: 0.95rem; letter-spacing: 1px;
      padding: 0.6rem 1.5rem; border: 2px solid #c8a951; border-radius: 50px;
      display: flex; align-items: center; gap: 0.4rem; background: rgba(200,169,81,0.2);
    }
    .explore-btn svg { width: 16px; height: 16px; }

    .cat-card-body { padding: 1.5rem; }
    .cat-card-body h3 {
      font-size: 1.25rem; color: #1a1a2e; margin-bottom: 0.5rem; font-weight: 700;
    }
    .cat-card-body p {
      color: #777; font-size: 0.85rem; line-height: 1.6; margin-bottom: 0.75rem;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .cat-card-meta { display: flex; gap: 1.25rem; }
    .sub-count, .prod-count {
      display: flex; align-items: center; gap: 0.35rem;
      font-size: 0.8rem; color: #a88b3a; font-weight: 600;
    }
    .sub-count svg, .prod-count svg { width: 14px; height: 14px; }

    .cat-card-hover-line {
      height: 3px; background: linear-gradient(90deg, #c8a951, #a88b3a);
      transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
    }

    /* ========== CATEGORY HERO BAR ========== */
    .category-hero-bar {
      display: flex; align-items: center; gap: 1.5rem;
      background: #fff; border-radius: 16px; padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06); margin-bottom: 2.5rem;
      border-left: 4px solid #c8a951;
    }
    .cat-hero-thumb {
      width: 80px; height: 80px; border-radius: 14px; object-fit: cover;
    }
    .category-hero-bar h2 { font-size: 1.6rem; color: #1a1a2e; margin-bottom: 0.35rem; }
    .category-hero-bar p { color: #777; font-size: 0.9rem; line-height: 1.6; }

    /* ========== SUBCATEGORY CARDS ========== */
    .subcategories-grid {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
    }
    .subcat-card {
      display: flex; align-items: center; gap: 1rem; padding: 1.25rem 1.5rem;
      background: #fff; border-radius: 16px; cursor: pointer;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05); transition: all 0.3s;
      border: 2px solid transparent;
    }
    .subcat-card:hover {
      border-color: #c8a951; box-shadow: 0 8px 30px rgba(200,169,81,0.15);
      transform: translateY(-3px);
    }
    .subcat-card:hover .subcat-arrow { transform: translateX(4px); color: #c8a951; }
    .subcat-card-icon {
      width: 44px; height: 44px; border-radius: 12px;
      background: linear-gradient(135deg, rgba(200,169,81,0.15), rgba(200,169,81,0.05));
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .subcat-card-icon svg { width: 20px; height: 20px; color: #c8a951; }
    .subcat-card-body { flex: 1; min-width: 0; }
    .subcat-card-body h3 { font-size: 1.05rem; color: #1a1a2e; margin-bottom: 0.2rem; }
    .subcat-count {
      font-size: 0.78rem; color: #a88b3a; font-weight: 600;
    }
    .subcat-products-preview {
      display: flex; align-items: center; gap: -8px; margin-left: auto;
    }
    .preview-thumb {
      width: 32px; height: 32px; border-radius: 50%; object-fit: cover;
      border: 2px solid #fff; margin-left: -8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .preview-thumb:first-child { margin-left: 0; }
    .preview-more {
      width: 32px; height: 32px; border-radius: 50%;
      background: rgba(200,169,81,0.15); color: #a88b3a;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.7rem; font-weight: 700; margin-left: -8px;
      border: 2px solid #fff;
    }
    .subcat-arrow {
      width: 18px; height: 18px; color: #ccc; flex-shrink: 0;
      transition: all 0.3s;
    }

    /* ========== PRODUCTS HEADER ========== */
    .products-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 2rem; flex-wrap: wrap; gap: 0.5rem;
    }
    .products-header h2 { font-size: 1.6rem; color: #1a1a2e; }
    .results-count {
      font-size: 0.85rem; color: #999; font-weight: 500;
      background: #f0f0f0; padding: 0.35rem 0.85rem; border-radius: 50px;
    }

    /* ========== PRODUCT CARDS ========== */
    .products-grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
    }
    .product-card {
      background: #fff; border-radius: 18px; overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.06); transition: all 0.35s;
      border: 2px solid transparent; display: flex; flex-direction: column;
    }
    .product-card:hover {
      transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.1);
      border-color: rgba(200,169,81,0.4);
    }
    .product-card:hover .product-image img { transform: scale(1.06); }

    .product-image { position: relative; height: 200px; overflow: hidden; }
    .product-image > img {
      width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;
    }

    /* ========== PRODUCT CAROUSEL ========== */
    .product-carousel {
      position: relative; width: 100%; height: 100%; overflow: hidden;
    }
    .carousel-track {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .carousel-slide {
      flex: 0 0 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    .product-card:hover .carousel-slide { transform: scale(1.06); }
    .carousel-dots {
      position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
      display: flex; gap: 6px; z-index: 5;
    }
    .carousel-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: rgba(255,255,255,0.45);
      transition: all 0.3s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }
    .carousel-dot.active {
      background: #c8a951; transform: scale(1.3);
      box-shadow: 0 0 6px rgba(200,169,81,0.6);
    }
    .product-badges {
      position: absolute; top: 0.75rem; left: 0.75rem; display: flex; gap: 0.4rem; flex-wrap: wrap;
    }
    .badge {
      padding: 0.25rem 0.65rem; border-radius: 50px; font-size: 0.7rem; font-weight: 700;
      backdrop-filter: blur(8px);
    }
    .badge-hs {
      background: rgba(26,26,46,0.75); color: #c8a951;
    }
    .badge-cat {
      background: rgba(200,169,81,0.9); color: #fff;
    }

    .product-body {
      padding: 1.25rem 1.5rem; flex: 1; display: flex; flex-direction: column;
    }
    .product-body h3 {
      font-size: 1.1rem; color: #1a1a2e; margin-bottom: 0.75rem; font-weight: 700;
    }
    .search-path {
      font-size: 0.75rem; color: #a88b3a; font-weight: 500;
      margin-bottom: 0.5rem; display: block;
    }
    .product-specs { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; flex: 1; }
    .spec-row {
      display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.82rem; color: #555; line-height: 1.5;
    }
    .spec-row svg { width: 14px; height: 14px; color: #c8a951; flex-shrink: 0; margin-top: 2px; }
    .spec-row strong { color: #1a1a2e; }

    .btn-quote {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      background: linear-gradient(135deg, #c8a951, #a88b3a); color: #fff;
      padding: 0.6rem 1.5rem; border-radius: 50px; font-weight: 600;
      text-decoration: none; font-size: 0.85rem; transition: all 0.3s;
      align-self: flex-start;
    }
    .btn-quote svg { width: 14px; height: 14px; }
    .btn-quote:hover {
      transform: translateY(-2px); box-shadow: 0 6px 20px rgba(200,169,81,0.35);
    }

    /* ========== TABLE VIEW ========== */
    .table-wrap {
      overflow-x: auto; border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    }
    .products-table {
      width: 100%; border-collapse: collapse; background: #fff; min-width: 800px;
    }
    .products-table thead { background: linear-gradient(135deg, #1a1a2e, #16213e); }
    .products-table th {
      padding: 1rem 1.25rem; text-align: left; font-size: 0.8rem;
      color: #c8a951; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;
      white-space: nowrap;
    }
    .products-table tbody tr {
      transition: background 0.2s; border-bottom: 1px solid #f3f3f3;
    }
    .products-table tbody tr:hover { background: rgba(200,169,81,0.04); }
    .products-table tbody tr:nth-child(even) { background: #fafafa; }
    .products-table tbody tr:nth-child(even):hover { background: rgba(200,169,81,0.06); }
    .products-table td {
      padding: 0.85rem 1.25rem; font-size: 0.88rem; color: #555; vertical-align: middle;
    }
    .td-product {
      display: flex; align-items: center; gap: 0.75rem; font-weight: 600; color: #1a1a2e !important;
    }
    .table-thumb {
      width: 40px; height: 40px; border-radius: 10px; object-fit: cover;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .products-table code {
      background: rgba(200,169,81,0.1); color: #a88b3a;
      padding: 0.2rem 0.5rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600;
    }
    .table-quote-btn {
      background: linear-gradient(135deg, #c8a951, #a88b3a); color: #fff;
      padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.78rem; font-weight: 600;
      text-decoration: none; display: inline-block; transition: all 0.2s; white-space: nowrap;
    }
    .table-quote-btn:hover { box-shadow: 0 4px 12px rgba(200,169,81,0.3); }

    /* ========== CERTIFICATIONS BANNER ========== */
    .certs-section { padding: 2.5rem 0; background: #fff; }
    .certs-bar {
      display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;
      justify-content: center; padding: 1.5rem 2rem;
      background: linear-gradient(135deg, rgba(26,26,46,0.04), rgba(200,169,81,0.06));
      border-radius: 16px; border: 1px solid rgba(200,169,81,0.15);
    }
    .certs-label {
      font-weight: 700; color: #1a1a2e; font-size: 0.85rem; text-transform: uppercase;
      letter-spacing: 2px; white-space: nowrap;
    }
    .certs-list { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; }
    .cert-badge {
      background: rgba(200,169,81,0.12); color: #a88b3a;
      padding: 0.3rem 0.85rem; border-radius: 50px; font-size: 0.78rem;
      font-weight: 600; white-space: nowrap; transition: all 0.2s;
    }
    .cert-badge:hover { background: #c8a951; color: #fff; }

    /* ========== NO RESULTS ========== */
    .no-results {
      text-align: center; padding: 5rem 0; color: #999;
    }
    .no-results svg { width: 60px; height: 60px; margin-bottom: 1rem; color: #ddd; }
    .no-results h3 { color: #666; margin-bottom: 0.5rem; font-size: 1.3rem; }
    .no-results p { color: #999; }
    .link-btn {
      background: none; border: none; color: #c8a951; font-weight: 600;
      cursor: pointer; text-decoration: underline; font-size: inherit; font-family: inherit;
    }

    /* ========== SOURCING ========== */
    .sourcing-section { padding: 6rem 0; background: #f8f6f0; }
    .sourcing-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
    }
    .sourcing-illustration {
      background: #fff; border-radius: 24px; padding: 2rem;
      box-shadow: 0 8px 40px rgba(0,0,0,0.06);
      border: 1px solid rgba(200,169,81,0.12);
    }
    .sourcing-content h2 { font-size: 2rem; color: #1a1a2e; margin-bottom: 1rem; line-height: 1.25; }
    .sourcing-content > p { color: #666; line-height: 1.8; margin-bottom: 2rem; }
    .sourcing-points { display: flex; flex-direction: column; gap: 1.5rem; }
    .s-point { display: flex; gap: 1rem; align-items: flex-start; }
    .s-point h4 { font-size: 0.98rem; color: #1a1a2e; margin-bottom: 0.25rem; }
    .s-point p { font-size: 0.88rem; color: #666; line-height: 1.7; }
    .s-point-icon {
      width: 42px; height: 42px; border-radius: 12px; background: rgba(200,169,81,0.1);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .s-point-icon svg { width: 22px; height: 22px; color: #c8a951; }

    /* ========== CTA ========== */
    .cta-section {
      padding: 5rem 0; background: linear-gradient(135deg, #1a1a2e, #16213e); text-align: center;
    }
    .cta-content h2 { color: #fff; font-size: 2rem; margin-bottom: 1rem; }
    .cta-content p {
      color: rgba(255,255,255,0.7); max-width: 520px; margin: 0 auto 2rem; line-height: 1.7;
    }
    .cta-btns { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
    .btn-primary {
      display: inline-block; background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff; padding: 0.85rem 2rem; border-radius: 50px;
      font-weight: 600; text-decoration: none; transition: all 0.3s;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(200,169,81,0.4); }
    .btn-secondary {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: rgba(255,255,255,0.08); color: #fff; padding: 0.85rem 2rem;
      border-radius: 50px; font-weight: 600; text-decoration: none;
      border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s;
    }
    .btn-secondary svg { width: 18px; height: 18px; }
    .btn-secondary:hover {
      background: rgba(255,255,255,0.15); transform: translateY(-2px);
    }

    /* ========== UTILITY ========== */
    .container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 1024px) {
      .categories-grid { grid-template-columns: repeat(2, 1fr); }
      .products-grid { grid-template-columns: repeat(2, 1fr); }
      .sourcing-grid { grid-template-columns: 1fr; gap: 2rem; }
      .subcategories-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .hero { min-height: 360px; }
      .hero-content h1 { font-size: 2rem; }
      .hero-stats { flex-direction: column; gap: 0.75rem; padding: 1rem 1.5rem; border-radius: 16px; }
      .hero-stat-divider { width: 50px; height: 1px; }
      .controls-bar .container { flex-direction: column; align-items: stretch; }
      .breadcrumb { justify-content: center; }
      .controls-right { justify-content: center; }
      .search-bar { min-width: auto; flex: 1; }
      .categories-grid { grid-template-columns: 1fr; }
      .products-grid { grid-template-columns: 1fr; }
      .category-hero-bar { flex-direction: column; text-align: center; }
      .cat-hero-thumb { width: 60px; height: 60px; }
      .certs-bar { flex-direction: column; }
    }

    /* Touch-swipe scroll-snap for touch-only/no-hover devices (like iPad, mobile) */
    @media (hover: none), (pointer: coarse) {
      .product-carousel {
        overflow-x: auto !important;
        scroll-snap-type: x mandatory !important;
        -webkit-overflow-scrolling: touch !important;
        scroll-behavior: smooth !important;
      }
      /* Hide scrollbar in touch carousel */
      .product-carousel::-webkit-scrollbar {
        display: none !important;
      }
      .product-carousel {
        -ms-overflow-style: none !important;  /* IE and Edge */
        scrollbar-width: none !important;  /* Firefox */
      }
      .carousel-track {
        transform: none !important; /* Disable JS translation scroll on touch devices */
      }
      .carousel-slide {
        scroll-snap-align: start !important;
        flex: 0 0 100% !important;
        width: 100% !important;
      }
    }
  `]
})
export class ProductsComponent implements OnInit, OnDestroy {
  categories = signal<any[]>([]);
  filteredCategories = signal<any[]>([]);
  heroData = signal<any>({ title: '', subtitle: '' });
  searchTerm = signal('');
  activeCategory = signal<string | null>(null);
  activeSubcategory = signal<string | null>(null);
  viewMode = signal<'card' | 'table'>('card');

  // Carousel state
  carouselIndices = signal<Record<string, number>>({});
  private productIntervals = new Map<string, any>();

  certifications = ['APEDA', 'FSSAI', 'ISO 22000', 'HALAL', 'BRC', 'Organic India', 'HACCP', 'GMP', 'EIA Approved'];

  totalProducts = computed(() => {
    return this.categories().reduce((sum, cat) =>
      sum + cat.subcategories.reduce((s: number, sub: any) => s + sub.products.length, 0), 0);
  });

  currentCategory = computed(() =>
    this.categories().find(c => c.id === this.activeCategory()) || null
  );

  currentProducts = computed(() => {
    const cat = this.currentCategory();
    if (!cat) return [];
    const sub = cat.subcategories.find((s: any) => s.id === this.activeSubcategory());
    return sub ? sub.products : [];
  });

  searchResults = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return [];
    const results: any[] = [];
    for (const cat of this.categories()) {
      for (const sub of cat.subcategories) {
        for (const prod of sub.products) {
          if (prod.name.toLowerCase().includes(term) ||
              prod.origin.toLowerCase().includes(term) ||
              prod.grade.toLowerCase().includes(term) ||
              cat.name.toLowerCase().includes(term)) {
            results.push({
              product: prod,
              categoryId: cat.id,
              categoryName: cat.name,
              subcategoryName: sub.name
            });
          }
        }
      }
    }
    return results;
  });

  activeDisplayProducts = computed(() => {
    if (this.searchTerm()) {
      return this.searchResults().map(r => r.product);
    }
    return this.currentProducts();
  });

  private jsonLdScript: HTMLScriptElement | null = null;

  constructor(
    private data: DataService,
    private seo: SeoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Reactively update SEO when categories or routing state changes
    effect(() => {
      const cats = this.categories();
      const catId = this.activeCategory();
      const subId = this.activeSubcategory();
      if (cats.length === 0) return; // Wait for data to load

      let title = 'Export Products: Spices, Basmati Rice, Dry Fruits, Coffee, Tea & More | Vaarunya Global Exim';
      let description = 'Buy directly from India: black pepper, cardamom, cloves, cinnamon, cumin seeds, turmeric powder, red chilli, coriander, basmati rice, chickpeas, sesame seeds, Alphonso mangoes, pomegranates, Assam tea, Darjeeling tea, Arabica coffee, seafood, buffalo meat & leather. APEDA & FSSAI certified. MOQ from 500 kg. Request free quote.';
      let canonicalPath = '/products';

      if (catId) {
        const cat = cats.find(c => c.id === catId);
        if (cat) {
          if (subId) {
            const sub = cat.subcategories.find((s: any) => s.id === subId);
            if (sub) {
              title = `${sub.name} Exporter from India - ${cat.name} | Vaarunya Global Exim`;
              description = `Premium export quality ${sub.name} (${cat.name}) from India. Sourced directly from certified farms with complete quality assurance and export packaging. Request free quote.`;
              canonicalPath = `/products/${catId}/${subId}`;
            }
          } else {
            title = `Export Quality ${cat.name} - Buy Directly from India | Vaarunya Global Exim`;
            description = `Sourcing premium ${cat.name} from traditional growing regions across India. ${cat.description} APEDA and FSSAI certified quality. Request free quote.`;
            canonicalPath = `/products/${catId}`;
          }
        }
      }

      this.seo.updateSeo({
        title,
        description,
        canonicalPath
      });
    });
  }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Export Products: Spices, Basmati Rice, Dry Fruits, Coffee, Tea & More | Vaarunya Global Exim',
      description: 'Buy directly from India: black pepper, cardamom, cloves, cinnamon, cumin seeds, turmeric powder, red chilli, coriander, basmati rice, chickpeas, sesame seeds, Alphonso mangoes, pomegranates, Assam tea, Darjeeling tea, Arabica coffee, seafood, buffalo meat & leather. APEDA & FSSAI certified. MOQ from 500 kg. Request free quote.',
      keywords: 'buy spices India export, black pepper export Kerala, cardamom export India, cloves export, cinnamon export India, cumin seeds export Gujarat, turmeric powder export Andhra Pradesh, red chilli powder export Guntur, coriander powder export, fenugreek seeds export, basmati rice 1121 export, IR-64 rice export, chickpeas export India, sesame seeds export, green mung beans export, Alphonso mango export Maharashtra, pomegranate export Nashik, Assam CTC tea export, Darjeeling tea export, Arabica coffee Karnataka, Robusta coffee Coorg, buffalo meat export India, shrimp export India, seafood export, Indian dry fruits export, APEDA certified exporter India',
      canonicalPath: '/products'
    });

    this.data.getProductsData().subscribe(d => {
      this.heroData.set(d.hero || { title: '', subtitle: '' });
      this.categories.set(d.categories);
      this.filteredCategories.set(d.categories);
      this.injectJsonLd(d.categories);
    });

    // Subscribe to route parameter changes
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('category');
      const subcategoryId = params.get('subcategory');
      this.activeCategory.set(categoryId);
      this.activeSubcategory.set(subcategoryId);
    });
  }

  ngOnDestroy() {
    this.clearAllIntervals();
    if (this.jsonLdScript) {
      this.jsonLdScript.remove();
      this.jsonLdScript = null;
    }
  }

  // ---- Carousel helpers ----
  getActiveImageIndex(productName: string): number {
    return this.carouselIndices()[productName] || 0;
  }

  onCardMouseEnter(productName: string, images: any[]) {
    // Disable hover slide cycles on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    if (images && images.length > 1) {
      this.clearProductInterval(productName);
      
      const interval = setInterval(() => {
        this.carouselIndices.update(indices => {
          const current = indices[productName] || 0;
          const next = (current + 1) % images.length;
          return { ...indices, [productName]: next };
        });
      }, 2000);
      
      this.productIntervals.set(productName, interval);
    }
  }

  onCardMouseLeave(productName: string) {
    // Disable hover cycle on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    this.clearProductInterval(productName);
    this.carouselIndices.update(indices => ({
      ...indices,
      [productName]: 0
    }));
  }

  onCarouselScroll(event: Event, productName: string, totalImages: number) {
    // Only calculate active slide index from scrolling on touch devices
    if (!window.matchMedia('(hover: none)').matches) return;

    const element = event.target as HTMLElement;
    const width = element.clientWidth;
    if (width === 0) return;
    
    const scrollPosition = element.scrollLeft;
    const index = Math.round(scrollPosition / width);
    if (index >= 0 && index < totalImages) {
      this.carouselIndices.update(indices => {
        if (indices[productName] === index) return indices;
        return { ...indices, [productName]: index };
      });
    }
  }

  private clearProductInterval(productName: string) {
    const interval = this.productIntervals.get(productName);
    if (interval) {
      clearInterval(interval);
      this.productIntervals.delete(productName);
    }
  }

  private clearAllIntervals() {
    for (const [_, interval] of this.productIntervals) {
      clearInterval(interval);
    }
    this.productIntervals.clear();
  }

  getCategoryName(id: string): string {
    return this.categories().find(c => c.id === id)?.name || '';
  }

  getSubcategoryName(catId: string, subId: string): string {
    const cat = this.categories().find(c => c.id === catId);
    return cat?.subcategories.find((s: any) => s.id === subId)?.name || '';
  }

  getCategoryProductCount(cat: any): number {
    return cat.subcategories.reduce((s: number, sub: any) => s + sub.products.length, 0);
  }

  goToCategories() {
    this.router.navigate(['/products']);
    this.clearSearch();
  }

  goToCategory(id: string) {
    this.router.navigate(['/products', id]);
    this.clearSearch();
  }

  goToSubcategory(catId: string, subId: string) {
    this.router.navigate(['/products', catId, subId]);
    this.clearSearch();
  }

  onSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.searchTerm.set(term);
    if (!term) {
      this.filteredCategories.set(this.categories());
    } else {
      const lower = term.toLowerCase();
      this.filteredCategories.set(
        this.categories().filter(c =>
          c.name.toLowerCase().includes(lower) ||
          c.description.toLowerCase().includes(lower) ||
          c.subcategories.some((s: any) =>
            s.name.toLowerCase().includes(lower) ||
            s.products.some((p: any) => p.name.toLowerCase().includes(lower))
          )
        )
      );
    }
  }

  clearSearch() {
    this.searchTerm.set('');
    this.filteredCategories.set(this.categories());
  }

  private injectJsonLd(categories: any[]) {
    // Build flat list of every individual product for Google to index each one
    const allProducts: any[] = [];
    let position = 1;
    for (const cat of categories) {
      for (const sub of cat.subcategories) {
        for (const prod of sub.products) {
          allProducts.push({
            '@type': 'Product',
            'position': position++,
            'name': prod.name,
            'description': `Premium export quality ${prod.name} from ${prod.origin}. Grade: ${prod.grade}. MOQ: ${prod.moq}. HS Code: ${prod.hsCode}. Exported by Vaarunya Global Exim, APEDA & FSSAI certified.`,
            'brand': {
              '@type': 'Brand',
              'name': 'Vaarunya Global Exim'
            },
            'countryOfOrigin': 'India',
            'category': cat.name,
            'offers': {
              '@type': 'Offer',
              'priceCurrency': 'USD',
              'availability': 'https://schema.org/InStock',
              'seller': {
                '@type': 'Organization',
                'name': 'Vaarunya Global Exim Pvt Ltd',
                'url': 'https://www.vaarunyaglobalexim.com'
              }
            }
          });
        }
      }
    }

    // ItemList schema — this is what Google uses to show product listings in search
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Indian Agricultural Export Products — Vaarunya Global Exim',
      'description': 'Premium Indian export products: spices (black pepper, cardamom, turmeric, cumin, cloves, cinnamon, coriander), basmati rice, pulses, coffee, tea, dry fruits, fresh fruits, vegetables, dairy, seafood, meat. APEDA & FSSAI certified exporter.',
      'url': 'https://www.vaarunyaglobalexim.com/products',
      'numberOfItems': allProducts.length,
      'itemListElement': allProducts
    };

    this.jsonLdScript = document.createElement('script');
    this.jsonLdScript.type = 'application/ld+json';
    this.jsonLdScript.setAttribute('data-page-schema', 'true');
    this.jsonLdScript.textContent = JSON.stringify(ld);
    document.head.appendChild(this.jsonLdScript);
  }
}
