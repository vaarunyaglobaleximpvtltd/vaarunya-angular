import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { CountUpDirective } from '../../directives/count-up.directive';
import { IllustrationComponent } from '../../components/illustrations/illustrations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RevealDirective, CountUpDirective, IllustrationComponent],
  template: `
    <!-- Hero Slider -->
    <section class="hero">
      @if (slides(); as sl) {
        @for (slide of sl; track slide.title; let i = $index) {
          <div class="hero-slide" [class.active]="i === currentSlide()">
            <div class="hero-bg" [style.background-image]="'url(' + slide.image + ')'"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
              <div class="hero-badge">
                <span class="badge-dot"></span>
                Premium Export Quality
              </div>
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.subtitle }}</p>
              <div class="hero-actions">
                <a [routerLink]="slide.cta.route" [fragment]="slide.cta.route === '/contact' ? 'contact-form' : undefined" class="btn-primary btn-glow">{{ slide.cta.label }}</a>
                <a routerLink="/about" class="btn-ghost">
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </div>
        }
        <!-- Nav arrows -->
        <button class="hero-nav hero-prev" (click)="prevSlide()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button class="hero-nav hero-next" (click)="nextSlide()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
        <div class="hero-progress">
          @for (slide of sl; track slide.title; let i = $index) {
            <button [class.active]="i === currentSlide()" (click)="currentSlide.set(i); resetInterval()">
              <span class="progress-fill" [class.animate]="i === currentSlide()"></span>
            </button>
          }
        </div>
        <div class="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div class="scroll-mouse">
            <div class="scroll-dot"></div>
          </div>
        </div>
      }
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container">
        @for (stat of stats(); track stat.label; let i = $index) {
          <div class="stat-item" appReveal="fadeUp" [revealDelay]="i * 120">
            <span class="stat-value" [appCountUp]="stat.value" [countDuration]="2200"></span>
            <span class="stat-label">{{ stat.label }}</span>
            <div class="stat-divider"></div>
          </div>
        }
      </div>
    </section>

    <!-- About Preview -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-content" appReveal="fadeRight">
            <span class="section-tag">About Vaarunya</span>
            <h2 class="about-heading">Building Trust Across Borders</h2>
            <p class="about-lead">{{ companyDesc() }}</p>
            <p>{{ companyDesc2() }}</p>
            <blockquote>
              <svg class="quote-icon" viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              {{ founderQuote() }}
            </blockquote>
            <a routerLink="/about" class="btn-outline">
              Know More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          <div class="about-image" appReveal="fadeLeft" [revealDelay]="200">
            <img src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" alt="About Vaarunya" />
            <div class="image-accent"></div>
            <div class="image-float-badge">
              <span class="float-number">15+</span>
              <span class="float-text">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Why Choose Us</span>
          <h2>Why Choose Vaarunya?</h2>
          <p>We don't just facilitate trade — we build lasting partnerships that transcend borders, cultures, and expectations.</p>
        </div>
        <div class="why-grid">
          @for (item of whyChoose(); track item.title; let i = $index) {
            <div class="why-card" appReveal="fadeUp" [revealDelay]="i * 150">
              <div class="why-icon">
                @switch (item.icon) {
                  @case ('rocket') { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg> }
                  @case ('star') { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg> }
                  @case ('search') { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> }
                  @case ('dollar') { <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> }
                }
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="why-card-shine"></div>
            </div>
          }
        </div>
        <div class="why-cta" appReveal="scale">
          <div class="cta-particles">
            <span></span><span></span><span></span>
          </div>
          <h3>Ready to Experience the Difference?</h3>
          <p>Join global buyers who trust Vaarunya for transparent sourcing and consistent quality.</p>
          <a routerLink="/contact" fragment="contact-form" class="btn-primary btn-glow">Get Your Quote</a>
        </div>
      </div>
    </section>

    <!-- Product Categories with Subcategories -->
    <section class="products-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Our Products</span>
          <h2>Explore Our Product Universe</h2>
          <p>Discover our carefully curated collection of premium products from India's diverse regions.</p>
        </div>
        <div class="products-grid">
          @for (cat of categories(); track cat.id; let i = $index) {
            <div class="product-card" appReveal="fadeUp" [revealDelay]="i * 100">
              <a [routerLink]="['/products', cat.id]" class="product-card-link">
                <div class="product-image">
                  <img [src]="cat.image" [alt]="cat.name" loading="lazy" />
                  <div class="product-overlay">
                    <span class="explore-btn">
                      Explore
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </div>
                </div>
                <div class="product-info">
                  <h3>{{ cat.name }}</h3>
                  <span class="product-count">{{ getCategoryProductCount(cat) }} products</span>
                </div>
              </a>
              <!-- Subcategories -->
              <div class="subcategory-list">
                @for (sub of cat.subcategories; track sub.id) {
                  <a [routerLink]="['/products', cat.id, sub.id]" class="subcat-link">
                    <span class="subcat-name">{{ sub.name }}</span>
                    <span class="subcat-count">{{ sub.products.length }}</span>
                  </a>
                }
              </div>
            </div>
          }
        </div>
        <div class="products-cta" appReveal="fadeUp">
          <a routerLink="/products" class="btn-view-all">
            View Full Catalog
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Order Process -->
    <section class="order-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">How It Works</span>
          <h2>Order Processing Journey</h2>
          <p>Experience our streamlined 6-step process that ensures quality, transparency, and timely fulfillment.</p>
        </div>
        <div class="order-timeline">
          @for (step of orderProcess(); track step.step; let i = $index) {
            <div class="order-step" appReveal="fadeUp" [revealDelay]="i * 100">
              <div class="order-step__marker">
                <span>{{ step.step }}</span>
              </div>
              <div class="order-step__card">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== Supply Chain Journey (Vertical Process Flow) ========== -->
    <section class="journey-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">From Farm to Global Market</span>
          <h2>How Your Products Reach You</h2>
          <p>We bridge the gap between India's finest farmers and international buyers through a transparent and quality-driven supply chain. Here's every step of the journey.</p>
        </div>

        <!-- Vertical Timeline -->
        <div class="process-timeline">

          <!-- STEP 1 — Farm Selection -->
          <div class="process-step" appReveal="fadeUp">
            <div class="process-step__left">
              <div class="process-step__illus">
                <app-illustration name="farmer"></app-illustration>
              </div>
            </div>
            <div class="process-step__center">
              <div class="process-step__number"><span>01</span></div>
            </div>
            <div class="process-step__right">
              <div class="process-step__content">
                <span class="process-step__badge process-step__badge--green">Step 1</span>
                <h3>Direct Farm Selection & Sourcing</h3>
                <p class="process-step__lead">We build relationships at the source — personally visiting farms and selecting only the finest harvests from India's most fertile regions.</p>
                <ul class="process-step__points">
                  <li><strong>500+ verified farmers</strong> across Gujarat, Rajasthan, Maharashtra & Karnataka</li>
                  <li>Direct partnerships — <strong>no middlemen</strong>, fair trade assured</li>
                  <li>Seasonal harvest tracking for peak freshness and flavor</li>
                  <li>Organic & conventional sourcing based on buyer requirements</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- STEP 2 — Quality Inspection -->
          <div class="process-step process-step--reverse" appReveal="fadeUp">
            <div class="process-step__left">
              <div class="process-step__content">
                <span class="process-step__badge process-step__badge--blue">Step 2</span>
                <h3>Rigorous Quality Inspection</h3>
                <p class="process-step__lead">Every batch undergoes our strict multi-stage quality protocol before it's approved for export — because your reputation depends on consistency.</p>
                <ul class="process-step__points">
                  <li><strong>Visual grading</strong> — color, size, shape uniformity checks</li>
                  <li><strong>Lab analysis</strong> — moisture, aflatoxin, pesticide residue testing</li>
                  <li>Contaminant screening per EU/FDA/FSSAI standards</li>
                  <li>Only <strong>top-grade products</strong> pass our quality gate</li>
                </ul>
              </div>
            </div>
            <div class="process-step__center">
              <div class="process-step__number"><span>02</span></div>
            </div>
            <div class="process-step__right">
              <div class="process-step__illus">
                <app-illustration name="inspector"></app-illustration>
              </div>
            </div>
          </div>

          <!-- STEP 3 — Processing & Packaging -->
          <div class="process-step" appReveal="fadeUp">
            <div class="process-step__left">
              <div class="process-step__illus">
                <app-illustration name="warehouse"></app-illustration>
              </div>
            </div>
            <div class="process-step__center">
              <div class="process-step__number"><span>03</span></div>
            </div>
            <div class="process-step__right">
              <div class="process-step__content">
                <span class="process-step__badge process-step__badge--orange">Step 3</span>
                <h3>Processing, Grading & Export Packaging</h3>
                <p class="process-step__lead">Products are cleaned, graded, and packed in our modern facility — ready for international shelves with proper labeling and export-grade packaging.</p>
                <ul class="process-step__points">
                  <li>Cleaning, sorting & machine grading for consistency</li>
                  <li><strong>Custom packaging</strong> — bulk bags, retail packs, private label</li>
                  <li>Vacuum sealing & nitrogen flushing for freshness</li>
                  <li>Export-grade cartons with <strong>barcoding & traceability</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- STEP 4 — Documentation & Compliance -->
          <div class="process-step process-step--reverse" appReveal="fadeUp">
            <div class="process-step__left">
              <div class="process-step__content">
                <span class="process-step__badge process-step__badge--gold">Step 4</span>
                <h3>Documentation & Regulatory Compliance</h3>
                <p class="process-step__lead">We handle the complete paperwork maze — every certificate, permit, and customs form — so your shipment clears borders without a single delay.</p>
                <ul class="process-step__points">
                  <li><strong>APEDA registration</strong>, IEC code & RCMC licensing</li>
                  <li>Phytosanitary certificate, fumigation certificate</li>
                  <li>Certificate of Origin, commercial invoice, packing list</li>
                  <li>Bill of Lading & <strong>customs clearance</strong> handled end-to-end</li>
                </ul>
              </div>
            </div>
            <div class="process-step__center">
              <div class="process-step__number"><span>04</span></div>
            </div>
            <div class="process-step__right">
              <div class="process-step__illus">
                <app-illustration name="documents"></app-illustration>
              </div>
            </div>
          </div>

          <!-- STEP 5 — Shipping & Global Delivery -->
          <div class="process-step" appReveal="fadeUp">
            <div class="process-step__left">
              <div class="process-step__illus">
                <app-illustration name="shipping"></app-illustration>
              </div>
            </div>
            <div class="process-step__center">
              <div class="process-step__number"><span>05</span></div>
            </div>
            <div class="process-step__right">
              <div class="process-step__content">
                <span class="process-step__badge process-step__badge--purple">Step 5</span>
                <h3>Global Shipping & Delivery</h3>
                <p class="process-step__lead">Your products travel safely via temperature-controlled sea or air freight to 30+ countries — with full tracking from our warehouse to your door.</p>
                <ul class="process-step__points">
                  <li><strong>Sea freight & air freight</strong> options to 30+ countries</li>
                  <li>Temperature-controlled containers for perishables</li>
                  <li><strong>Real-time shipment tracking</strong> & insurance coverage</li>
                  <li>Delivery confirmation with complete documentation handover</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ========== Documentation & Compliance ========== -->
    <section class="docs-section">
      <div class="container">
        <div class="docs-hero" appReveal="fadeUp">
          <div class="docs-hero__text">
            <span class="section-tag">Documentation & Compliance</span>
            <h2>We Handle the Paperwork, <span class="gradient-text-local">You Grow Your Business</span></h2>
            <p class="docs-lead">International trade documentation can be complex and overwhelming. Our dedicated compliance team manages every certificate, permit, and regulatory requirement so your shipments clear customs without delays.</p>
          </div>
          <div class="docs-hero__visual">
            <app-illustration name="documentation"></app-illustration>
          </div>
        </div>

        <div class="docs-cards">
          <!-- Card 1 -->
          <div class="doc-card doc-card--green" appReveal="fadeUp" [revealDelay]="100">
            <div class="doc-card__accent"></div>
            <div class="doc-card__header">
              <div class="doc-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="6" y="4" width="28" height="36" rx="4" fill="currentColor" opacity="0.12"/>
                  <rect x="10" y="8" width="28" height="36" rx="4" fill="#fff" stroke="currentColor" stroke-width="2"/>
                  <line x1="16" y1="18" x2="32" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <line x1="16" y1="24" x2="28" y2="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
                  <line x1="16" y1="30" x2="30" y2="30" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
                  <circle cx="34" cy="36" r="8" fill="currentColor" opacity="0.15"/>
                  <path d="M30 36 L33 39 L39 33" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="doc-card__num">01</span>
            </div>
            <h3>Export License & APEDA Registration</h3>
            <p>Complete licensing assistance including <strong>RCMC</strong>, <strong>IEC code</strong>, and <strong>APEDA membership</strong> for agricultural exports. We handle the full application process.</p>
            <div class="doc-card__divider"></div>
            <ul class="doc-card__list">
              <li>Import Export Code (IEC)</li>
              <li>RCMC Registration</li>
              <li>APEDA Membership</li>
              <li>FSSAI License</li>
            </ul>
          </div>

          <!-- Card 2 -->
          <div class="doc-card doc-card--blue" appReveal="fadeUp" [revealDelay]="200">
            <div class="doc-card__accent"></div>
            <div class="doc-card__header">
              <div class="doc-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M24 4 L36 10 V22 C36 32 24 40 24 40 C24 40 12 32 12 22 V10 Z" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="2"/>
                  <path d="M18 22 L22 26 L30 18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="38" cy="10" r="6" fill="currentColor" opacity="0.1"/>
                  <path d="M36 10 L38 12 L41 8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                </svg>
              </div>
              <span class="doc-card__num">02</span>
            </div>
            <h3>Phytosanitary & Health Certificates</h3>
            <p>Plant quarantine clearance, <strong>fumigation certificates</strong>, and <strong>FSSAI compliance</strong> for food-safe exports to every destination country.</p>
            <div class="doc-card__divider"></div>
            <ul class="doc-card__list">
              <li>Phytosanitary Certificate</li>
              <li>Fumigation Certificate</li>
              <li>Health Certificate</li>
              <li>FSSAI Compliance</li>
            </ul>
          </div>

          <!-- Card 3 -->
          <div class="doc-card doc-card--gold" appReveal="fadeUp" [revealDelay]="300">
            <div class="doc-card__accent"></div>
            <div class="doc-card__header">
              <div class="doc-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="18" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
                  <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
                  <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
                  <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
                  <circle cx="14" cy="16" r="3" fill="currentColor" opacity="0.3"/>
                  <circle cx="34" cy="32" r="3" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <span class="doc-card__num">03</span>
            </div>
            <h3>Customs & Shipping Documentation</h3>
            <p><strong>Bill of lading</strong>, packing lists, insurance certificates, and customs declarations — all prepared and handled <strong>end-to-end</strong>.</p>
            <div class="doc-card__divider"></div>
            <ul class="doc-card__list">
              <li>Bill of Lading</li>
              <li>Commercial Invoice</li>
              <li>Packing List</li>
              <li>Insurance Certificate</li>
            </ul>
          </div>

          <!-- Card 4 -->
          <div class="doc-card doc-card--purple" appReveal="fadeUp" [revealDelay]="400">
            <div class="doc-card__accent"></div>
            <div class="doc-card__header">
              <div class="doc-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <rect x="4" y="12" width="40" height="28" rx="4" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
                  <path d="M4 20 L24 30 L44 20" stroke="currentColor" stroke-width="2" fill="none"/>
                  <rect x="16" y="4" width="16" height="12" rx="3" fill="currentColor" opacity="0.12" stroke="currentColor" stroke-width="1.5"/>
                  <line x1="20" y1="8" x2="28" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <line x1="20" y1="12" x2="26" y2="12" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
                </svg>
              </div>
              <span class="doc-card__num">04</span>
            </div>
            <h3>Certificate of Origin & Trade Compliance</h3>
            <p><strong>Certificate of Origin</strong>, trade agreements compliance, anti-dumping documentation, and preferential tariff certifications for smooth global trade.</p>
            <div class="doc-card__divider"></div>
            <ul class="doc-card__list">
              <li>Certificate of Origin</li>
              <li>GSP Certificate</li>
              <li>Trade Agreement Forms</li>
              <li>Customs Declaration</li>
            </ul>
          </div>
        </div>

        <!-- CTA -->
        <div class="docs-cta" appReveal="fadeUp">
          <p>Need help navigating export documentation? Our compliance experts are ready to assist.</p>
          <a routerLink="/contact" fragment="contact-form" class="btn-primary btn-glow">Talk to Our Compliance Team</a>
        </div>
      </div>
    </section>

    <!-- ========== Quality Assurance ========== -->
    <section class="quality-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Quality Guarantee</span>
          <h2>From Seed to Shipment — Quality at Every Step</h2>
          <p>Our 5-stage quality assurance pipeline ensures only the finest products bear the Vaarunya name.</p>
        </div>

        <!-- 5-Stage Pipeline -->
        <div class="qa-pipeline">
          <div class="qa-stage" appReveal="fadeUp" [revealDelay]="100">
            <div class="qa-stage__icon">
              <svg viewBox="0 0 48 48" fill="none"><path d="M24 4 C30 4 36 8 38 14 L42 14 C42 14 44 24 36 30 L36 38 C36 40 34 42 32 42 L16 42 C14 42 12 40 12 38 L12 30 C4 24 6 14 6 14 L10 14 C12 8 18 4 24 4Z" fill="rgba(255,255,255,0.08)" stroke="#4caf50" stroke-width="1.5"/><path d="M24 14 L24 28" stroke="#4caf50" stroke-width="2" stroke-linecap="round"/><circle cx="24" cy="10" r="2" fill="#4caf50"/><path d="M18 24 L24 28 L30 24" stroke="#4caf50" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
            </div>
            <div class="qa-stage__num">01</div>
            <h4>Source Selection</h4>
            <p>Farms and suppliers are pre-vetted for soil quality, growing practices, and harvest standards.</p>
          </div>

          <div class="qa-stage__arrow" appReveal="fadeUp" [revealDelay]="150">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M14 7 L19 12 L14 17" stroke="#c8a951" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>

          <div class="qa-stage" appReveal="fadeUp" [revealDelay]="200">
            <div class="qa-stage__icon">
              <svg viewBox="0 0 48 48" fill="none"><circle cx="20" cy="20" r="14" fill="rgba(255,255,255,0.08)" stroke="#42a5f5" stroke-width="1.5"/><line x1="30" y1="30" x2="42" y2="42" stroke="#42a5f5" stroke-width="3" stroke-linecap="round"/><path d="M15 20 L18 23 L26 15" stroke="#42a5f5" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="qa-stage__num">02</div>
            <h4>Visual Grading</h4>
            <p>Color, size, shape uniformity, and foreign matter screening by trained inspectors.</p>
          </div>

          <div class="qa-stage__arrow" appReveal="fadeUp" [revealDelay]="250">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M14 7 L19 12 L14 17" stroke="#c8a951" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>

          <div class="qa-stage" appReveal="fadeUp" [revealDelay]="300">
            <div class="qa-stage__icon">
              <svg viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="28" rx="4" fill="rgba(255,255,255,0.08)" stroke="#ab47bc" stroke-width="1.5"/><rect x="14" y="6" width="20" height="10" rx="3" fill="rgba(255,255,255,0.05)" stroke="#ab47bc" stroke-width="1.5"/><line x1="20" y1="24" x2="20" y2="34" stroke="#ab47bc" stroke-width="2" stroke-linecap="round"/><line x1="28" y1="28" x2="28" y2="34" stroke="#ab47bc" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="22" r="2" fill="#ab47bc"/><circle cx="28" cy="26" r="2" fill="#ab47bc"/></svg>
            </div>
            <div class="qa-stage__num">03</div>
            <h4>Lab Testing</h4>
            <p>Moisture, aflatoxin, pesticide residue, and microbiological testing per international standards.</p>
          </div>

          <div class="qa-stage__arrow" appReveal="fadeUp" [revealDelay]="350">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M14 7 L19 12 L14 17" stroke="#c8a951" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>

          <div class="qa-stage" appReveal="fadeUp" [revealDelay]="400">
            <div class="qa-stage__icon">
              <svg viewBox="0 0 48 48" fill="none"><rect x="6" y="8" width="36" height="32" rx="4" fill="rgba(255,255,255,0.08)" stroke="#c8a951" stroke-width="1.5"/><path d="M6 18 L42 18" stroke="#c8a951" stroke-width="1.5"/><line x1="14" y1="26" x2="26" y2="26" stroke="#c8a951" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/><line x1="14" y1="32" x2="22" y2="32" stroke="#c8a951" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/><circle cx="34" cy="32" r="5" fill="none" stroke="#c8a951" stroke-width="1.5"/><path d="M31 32 L33 34 L37 30" stroke="#c8a951" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
            </div>
            <div class="qa-stage__num">04</div>
            <h4>Certification</h4>
            <p>FSSAI, APEDA, phytosanitary, and destination-country certifications verified and documented.</p>
          </div>

          <div class="qa-stage__arrow" appReveal="fadeUp" [revealDelay]="450">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 12 L19 12 M14 7 L19 12 L14 17" stroke="#c8a951" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>

          <div class="qa-stage" appReveal="fadeUp" [revealDelay]="500">
            <div class="qa-stage__icon">
              <svg viewBox="0 0 48 48" fill="none"><rect x="8" y="14" width="32" height="22" rx="4" fill="rgba(255,255,255,0.08)" stroke="#ef5350" stroke-width="1.5"/><rect x="12" y="18" width="8" height="6" rx="1" fill="#ef5350" opacity="0.2" stroke="#ef5350" stroke-width="1"/><rect x="22" y="18" width="8" height="6" rx="1" fill="#4caf50" opacity="0.2" stroke="#4caf50" stroke-width="1"/><rect x="12" y="26" width="8" height="6" rx="1" fill="#42a5f5" opacity="0.2" stroke="#42a5f5" stroke-width="1"/><rect x="22" y="26" width="8" height="6" rx="1" fill="#c8a951" opacity="0.2" stroke="#c8a951" stroke-width="1"/><path d="M34 22 L38 22 M38 18 L38 26" stroke="#ef5350" stroke-width="1.5" stroke-linecap="round"/><circle cx="38" cy="10" r="4" fill="none" stroke="#4caf50" stroke-width="1.5"/><path d="M36 10 L37.5 11.5 L40 9" stroke="#4caf50" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
            </div>
            <div class="qa-stage__num">05</div>
            <h4>Final Dispatch QC</h4>
            <p>Pre-shipment sample check, container loading inspection, and temperature seal verification.</p>
          </div>
        </div>

        <!-- Stats -->
        <div class="quality-stats">
          <div class="q-stat" appReveal="fadeUp" [revealDelay]="100">
            <span class="q-stat-value" appCountUp="99" [countDuration]="2000" countSuffix="%"></span>
            <span class="q-stat-label">Quality Pass Rate</span>
          </div>
          <div class="q-stat" appReveal="fadeUp" [revealDelay]="200">
            <span class="q-stat-value" appCountUp="500" [countDuration]="2000" countSuffix="+"></span>
            <span class="q-stat-label">Verified Farmers</span>
          </div>
          <div class="q-stat" appReveal="fadeUp" [revealDelay]="300">
            <span class="q-stat-value" appCountUp="30" [countDuration]="2000" countSuffix="+"></span>
            <span class="q-stat-label">Countries Served</span>
          </div>
          <div class="q-stat" appReveal="fadeUp" [revealDelay]="400">
            <span class="q-stat-value" appCountUp="0" [countDuration]="2000"></span>
            <span class="q-stat-label">Quality Complaints</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg"></div>
      <div class="container" appReveal="fadeUp">
        <h2>Can't Find What You're Looking For?</h2>
        <p>Our product catalog extends far beyond what's shown here. We can source virtually any product from India with our extensive supplier network.</p>
        <div class="cta-buttons">
          <a routerLink="/products" class="btn-primary btn-glow">Browse All Products</a>
          <a routerLink="/contact" fragment="contact-form" class="btn-outline-light">Contact Us</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ============ Hero ============ */
    .hero {
      position: relative;
      height: 100vh;
      min-height: 650px;
      overflow: hidden;
    }

    .hero-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
      &.active { opacity: 1; }
    }

    .hero-bg {
      position: absolute;
      inset: -20px;
      background-size: cover;
      background-position: center;
      transform: scale(1.08);
      animation: heroZoom 10s ease forwards;
    }

    @keyframes heroZoom { to { transform: scale(1); } }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(26,26,46,0.88) 0%, rgba(26,26,46,0.4) 50%, rgba(15,52,96,0.6) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(200,169,81,0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(200,169,81,0.3);
      color: #c8a951;
      padding: 0.4rem 1rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      width: fit-content;
      animation: fadeInUp 0.8s ease;
    }

    .badge-dot {
      width: 8px;
      height: 8px;
      background: #c8a951;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }

    .hero-content h1 {
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 800;
      color: #fff;
      margin-bottom: 1.25rem;
      line-height: 1.12;
      max-width: 720px;
      animation: fadeInUp 0.8s ease 0.15s both;
    }

    .hero-content p {
      font-size: 1.15rem;
      color: rgba(255,255,255,0.82);
      max-width: 580px;
      margin-bottom: 2rem;
      line-height: 1.75;
      animation: fadeInUp 0.8s ease 0.3s both;
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      animation: fadeInUp 0.8s ease 0.45s both;
    }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255,255,255,0.85);
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.3s;
      &:hover { color: #c8a951; gap: 0.75rem; }
    }

    /* Hero Navigation */
    .hero-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
      svg { width: 22px; height: 22px; }
      &:hover { background: rgba(200,169,81,0.3); border-color: rgba(200,169,81,0.5); }
    }

    .hero-prev { left: 1.5rem; }
    .hero-next { right: 1.5rem; }

    /* Progress dots */
    .hero-progress {
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 0.75rem;
      z-index: 5;

      button {
        width: 40px;
        height: 4px;
        border-radius: 4px;
        border: none;
        background: rgba(255,255,255,0.25);
        cursor: pointer;
        overflow: hidden;
        padding: 0;
        position: relative;
        transition: background 0.3s;
        &.active { background: rgba(255,255,255,0.35); }
      }

      .progress-fill {
        position: absolute;
        inset: 0;
        background: #c8a951;
        transform: scaleX(0);
        transform-origin: left;
        &.animate { animation: progressFill 5s linear forwards; }
      }
    }

    @keyframes progressFill { to { transform: scaleX(1); } }

    /* Scroll hint */
    .hero-scroll-hint {
      position: absolute;
      bottom: 5rem;
      right: 2rem;
      z-index: 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      span {
        color: rgba(255,255,255,0.5);
        font-size: 0.7rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        writing-mode: vertical-lr;
      }
    }

    .scroll-mouse {
      width: 20px;
      height: 32px;
      border: 2px solid rgba(255,255,255,0.35);
      border-radius: 12px;
      position: relative;
    }

    .scroll-dot {
      width: 3px;
      height: 8px;
      background: #c8a951;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 6px;
      transform: translateX(-50%);
      animation: scrollBounce 2s infinite;
    }

    @keyframes scrollBounce {
      0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
      50% { transform: translateX(-50%) translateY(10px); opacity: 0.3; }
    }

    /* ============ Stats ============ */
    .stats-bar {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      padding: 3.5rem 0;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(200,169,81,0.5), transparent);
      }

      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        text-align: center;
      }
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      position: relative;
    }

    .stat-value {
      font-family: 'Playfair Display', serif;
      font-size: 2.8rem;
      font-weight: 800;
      background: linear-gradient(135deg, #c8a951, #e0c878);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    .stat-label {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .stat-divider {
      width: 30px;
      height: 2px;
      background: rgba(200,169,81,0.3);
      margin: 0.5rem auto 0;
      border-radius: 2px;
    }

    /* ============ About ============ */
    .about-section {
      padding: 7rem 0;
      background: #fafafa;
      position: relative;
      overflow: hidden;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }

    .section-tag {
      display: inline-block;
      color: #c8a951;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
    }

    .about-heading {
      font-size: 2.2rem;
      color: #1a1a2e;
      margin-bottom: 1.25rem;
      font-weight: 700;
    }

    .about-lead {
      font-size: 1.05rem;
      color: #555;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .about-content {
      p { color: #666; line-height: 1.8; margin-bottom: 1.25rem; }

      blockquote {
        font-style: italic;
        color: #444;
        border-left: 3px solid #c8a951;
        padding: 1rem 1.5rem;
        margin: 1.5rem 0;
        font-size: 1rem;
        line-height: 1.7;
        background: rgba(200,169,81,0.04);
        border-radius: 0 12px 12px 0;
        position: relative;

        .quote-icon {
          position: absolute;
          top: -12px;
          left: 12px;
          width: 28px;
          height: 28px;
          color: rgba(200,169,81,0.25);
        }
      }
    }

    .about-image {
      position: relative;

      img {
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 30px 60px rgba(0,0,0,0.12);
      }

      .image-accent {
        position: absolute;
        bottom: -16px;
        right: -16px;
        width: 180px;
        height: 180px;
        border: 3px solid #c8a951;
        border-radius: 20px;
        z-index: -1;
        opacity: 0.5;
      }
    }

    .image-float-badge {
      position: absolute;
      bottom: -20px;
      left: -20px;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      padding: 1.25rem 1.5rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(200,169,81,0.4);
      text-align: center;
      z-index: 2;
    }

    .float-number {
      display: block;
      font-size: 1.8rem;
      font-weight: 800;
      font-family: 'Playfair Display', serif;
      line-height: 1;
    }

    .float-text {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.9;
    }

    /* ============ Why Choose ============ */
    .why-section {
      padding: 7rem 0;
      background: #fff;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3.5rem;

      h2 { font-size: 2.3rem; color: #1a1a2e; margin-bottom: 1rem; }
      p { color: #666; max-width: 600px; margin: 0 auto; line-height: 1.75; }
    }

    .why-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.75rem;
      margin-bottom: 3rem;
    }

    .why-card {
      background: #fff;
      border: 1px solid #eee;
      border-radius: 20px;
      padding: 2.5rem;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 0;
        background: linear-gradient(180deg, #c8a951, #a88b3a);
        transition: height 0.4s;
      }

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        border-color: rgba(200,169,81,0.3);
        &::before { height: 100%; }
        .why-icon { transform: scale(1.1); }
      }

      h3 { font-size: 1.15rem; color: #1a1a2e; margin-bottom: 0.75rem; }
      p { color: #666; line-height: 1.75; font-size: 0.93rem; }
    }

    .why-card-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(200,169,81,0.04), transparent);
      transition: left 0.6s;
      .why-card:hover & { left: 100%; }
    }

    .why-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      background: linear-gradient(135deg, rgba(200,169,81,0.08), rgba(200,169,81,0.18));
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      transition: transform 0.3s;
      svg { width: 28px; height: 28px; color: #c8a951; }
    }

    .why-cta {
      text-align: center;
      background: linear-gradient(135deg, #1a1a2e, #0f3460);
      border-radius: 24px;
      padding: 3.5rem 3rem;
      color: #fff;
      position: relative;
      overflow: hidden;

      h3 { font-size: 1.6rem; margin-bottom: 0.75rem; color: #fff; }
      p { color: rgba(255,255,255,0.7); margin-bottom: 1.75rem; max-width: 500px; margin-left: auto; margin-right: auto; }
    }

    .cta-particles {
      position: absolute;
      inset: 0;
      overflow: hidden;

      span {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: rgba(200,169,81,0.3);
        animation: float 6s infinite;

        &:nth-child(1) { left: 15%; top: 20%; animation-delay: 0s; }
        &:nth-child(2) { left: 70%; top: 60%; animation-delay: 2s; }
        &:nth-child(3) { left: 45%; top: 80%; animation-delay: 4s; }
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
      50% { transform: translateY(-30px) scale(1.5); opacity: 0.8; }
    }

    /* ============ Products ============ */
    .products-section {
      padding: 7rem 0;
      background: #f8f6f0;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .product-card {
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.12);
        .product-overlay { opacity: 1; }
        img { transform: scale(1.1); }
      }
    }

    .product-card-link {
      text-decoration: none;
      color: inherit;
    }

    .product-image {
      position: relative;
      overflow: hidden;
      height: 220px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      }
    }

    .product-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(200,169,81,0.9), rgba(168,139,58,0.9));
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s;
    }

    .explore-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
      font-weight: 600;
      font-size: 0.9rem;
      letter-spacing: 1px;
      padding: 0.6rem 1.5rem;
      border: 2px solid #fff;
      border-radius: 50px;
    }

    .product-info {
      padding: 1.25rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 { font-size: 1.05rem; color: #1a1a2e; }
    }

    .product-count {
      font-size: 0.75rem;
      color: #c8a951;
      font-weight: 600;
      background: rgba(200,169,81,0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 50px;
    }

    .subcategory-list {
      padding: 0 1.25rem 1.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      border-top: 1px solid #f0ece3;
      padding-top: 1rem;
    }

    .subcat-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      text-decoration: none;
      font-size: 0.78rem;
      font-weight: 500;
      color: #1a1a2e;
      background: #f8f6f0;
      padding: 0.3rem 0.75rem;
      border-radius: 50px;
      transition: all 0.3s;

      &:hover {
        background: #c8a951;
        color: #fff;
        .subcat-count { background: rgba(255,255,255,0.25); color: #fff; }
      }
    }

    .subcat-name { white-space: nowrap; }

    .subcat-count {
      font-size: 0.65rem;
      font-weight: 700;
      background: rgba(200,169,81,0.15);
      color: #c8a951;
      padding: 0.1rem 0.4rem;
      border-radius: 50px;
      min-width: 18px;
      text-align: center;
      transition: all 0.3s;
    }

    .products-cta {
      text-align: center;
      margin-top: 3rem;
    }

    .btn-view-all {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.9rem 2.5rem;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      font-weight: 600;
      font-size: 0.95rem;
      letter-spacing: 0.5px;
      border-radius: 50px;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(200,169,81,0.3);
      transition: all 0.3s;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(200,169,81,0.4);
      }
    }

    /* ============ Order Process ============ */
    .order-section {
      padding: 7rem 0;
      background: #fff;
    }

    .order-timeline {
      max-width: 720px;
      margin: 0 auto;
      position: relative;
      padding-left: 40px;
    }

    .order-step {
      display: flex;
      align-items: flex-start;
      gap: 1.75rem;
      margin-bottom: 2rem;
      position: relative;

      /* Vertical line between steps */
      &::before {
        content: '';
        position: absolute;
        left: -21px; /* aligned with center of marker */
        top: 20px; /* start at center of current marker */
        bottom: -2rem; /* end at center of next marker */
        width: 3px;
        background: #c8a951;
        z-index: 0;
        opacity: 0.85;
      }

      &:last-child {
        margin-bottom: 0;
        &::before { display: none; } /* End line exactly at step 6 marker */
      }
    }

    .order-step__marker {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      position: relative;
      z-index: 1;
      box-shadow: 0 4px 16px rgba(200,169,81,0.35);
      font-family: 'Playfair Display', serif;
      font-size: 1.05rem;
      font-weight: 700;
      margin-left: -40px;
    }

    .order-step__card {
      flex: 1;
      background: #fafaf8;
      border-radius: 14px;
      padding: 1.35rem 1.75rem;
      border: 1px solid rgba(200,169,81,0.08);
      transition: all 0.35s;

      &:hover {
        background: #fff;
        box-shadow: 0 10px 35px rgba(0,0,0,0.06);
        border-color: rgba(200,169,81,0.25);
        transform: translateY(-3px);
      }

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.05rem;
        color: #1a1a2e;
        margin-bottom: 0.4rem;
      }

      p {
        font-size: 0.88rem;
        color: #666;
        line-height: 1.7;
        margin: 0;
      }
    }

    /* ============ Journey / Vertical Process Flow ============ */
    .journey-section {
      padding: 7rem 0;
      background: linear-gradient(180deg, #f8f6f0 0%, #fff 100%);
    }

    .process-timeline {
      max-width: 1100px;
      margin: 3rem auto 0;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .process-step {
      display: grid;
      grid-template-columns: 1fr 60px 1fr;
      gap: 0;
      align-items: start;
      margin-bottom: 0;
    }

    .process-step__left,
    .process-step__right {
      padding: 2rem 1.5rem;
    }

    .process-step__center {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      align-self: stretch;

      /* Vertical line drawn inside center column */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 3px;
        background: linear-gradient(to bottom, #c8a951, rgba(200,169,81,0.2));
        transform: translateX(-50%);
      }
    }

    /* Hide line above first step and below last step */
    .process-step:first-child .process-step__center::before { top: 58px; }
    .process-step:last-child .process-step__center::before { bottom: calc(100% - 58px); }

    .process-step__number {
      position: relative;
      z-index: 2;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 24px rgba(200,169,81,0.4);
      margin: 2rem 0 auto;

      span {
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
        font-weight: 700;
        color: #fff;
      }
    }

    .process-step__illus {
      background: #fff;
      border-radius: 24px;
      padding: 2rem;
      box-shadow: 0 8px 35px rgba(0,0,0,0.06);
      border: 1px solid rgba(200,169,81,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s;

      &:hover {
        box-shadow: 0 16px 50px rgba(200,169,81,0.12);
        transform: translateY(-4px);
      }

      app-illustration { width: 100%; }
    }

    .process-step__content {
      text-align: left;
    }

    /* Reverse steps: text on left column, illus on right column already handled by HTML order */

    .process-step__badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0.3rem 0.9rem;
      border-radius: 50px;
      margin-bottom: 0.75rem;

      &--green { background: rgba(76,175,80,0.1); color: #388e3c; }
      &--blue { background: rgba(25,118,210,0.1); color: #1565c0; }
      &--orange { background: rgba(255,152,0,0.1); color: #e65100; }
      &--gold { background: rgba(200,169,81,0.12); color: #a88b3a; }
      &--purple { background: rgba(123,31,162,0.1); color: #7b1fa2; }
    }

    .process-step__content h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.35rem;
      color: #1a1a2e;
      margin-bottom: 0.75rem;
      line-height: 1.3;
    }

    .process-step__lead {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.75;
      margin-bottom: 1rem;
    }

    .process-step__points {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.6rem;
        font-size: 0.88rem;
        color: #666;
        line-height: 1.65;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 8px;
          height: 8px;
          background: #c8a951;
          border-radius: 50%;
        }
      }
    }

    /* ============ Documentation & Compliance ============ */
    .docs-section {
      padding: 7rem 0;
      background: linear-gradient(180deg, #fff 0%, #faf9f5 50%, #fff 100%);
    }

    .docs-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 4rem;
    }

    .docs-hero__text {
      h2 {
        font-size: 2.2rem;
        color: #1a1a2e;
        margin-bottom: 1.25rem;
        line-height: 1.25;
      }
    }

    .docs-hero__visual {
      background: linear-gradient(135deg, #faf9f6, #f3efe6);
      border-radius: 24px;
      padding: 2.5rem;
      border: 1px solid rgba(200,169,81,0.12);
      box-shadow: 0 12px 40px rgba(0,0,0,0.04);
    }

    .gradient-text-local {
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .docs-lead {
      color: #666;
      line-height: 1.8;
      margin-bottom: 2rem;
      font-size: 1.02rem;
    }

    .docs-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.75rem;
    }

    .doc-card {
      background: #fff;
      border-radius: 20px;
      padding: 0 1.75rem 2rem;
      border: 1px solid #eee;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 24px 64px rgba(0,0,0,0.1);
        border-color: transparent;

        .doc-card__icon { transform: scale(1.12) rotate(-5deg); }
        .doc-card__accent { height: 5px; }
      }

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.05rem;
        color: #1a1a2e;
        margin-bottom: 0.6rem;
        line-height: 1.35;
      }

      > p {
        font-size: 0.85rem;
        color: #666;
        line-height: 1.7;
        margin-bottom: 0;
      }
    }

    /* Color-coded top accent bar */
    .doc-card__accent {
      height: 4px;
      margin: 0 -1.75rem 1.5rem;
      transition: height 0.3s;
    }
    .doc-card--green .doc-card__accent { background: linear-gradient(90deg, #4caf50, #81c784); }
    .doc-card--blue .doc-card__accent { background: linear-gradient(90deg, #1976d2, #64b5f6); }
    .doc-card--gold .doc-card__accent { background: linear-gradient(90deg, #c8a951, #e0c878); }
    .doc-card--purple .doc-card__accent { background: linear-gradient(90deg, #7b1fa2, #ba68c8); }

    .doc-card--green { --card-color: #388e3c; }
    .doc-card--blue { --card-color: #1565c0; }
    .doc-card--gold { --card-color: #a88b3a; }
    .doc-card--purple { --card-color: #7b1fa2; }

    .doc-card--green:hover { border-color: rgba(76,175,80,0.2); }
    .doc-card--blue:hover { border-color: rgba(25,118,210,0.2); }
    .doc-card--gold:hover { border-color: rgba(200,169,81,0.2); }
    .doc-card--purple:hover { border-color: rgba(123,31,162,0.2); }

    .doc-card__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .doc-card__icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      color: var(--card-color);
      background: currentColor;

      svg { width: 32px; height: 32px; }
    }

    .doc-card--green .doc-card__icon { background: rgba(76,175,80,0.08); }
    .doc-card--blue .doc-card__icon { background: rgba(25,118,210,0.08); }
    .doc-card--gold .doc-card__icon { background: rgba(200,169,81,0.1); }
    .doc-card--purple .doc-card__icon { background: rgba(123,31,162,0.08); }

    .doc-card__num {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 800;
      color: #f0ece3;
      line-height: 1;
    }

    .doc-card__divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #e0ddd5, transparent);
      margin: 1rem 0;
    }

    .doc-card__list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      li {
        font-size: 0.78rem;
        color: #888;
        padding-left: 1.1rem;
        position: relative;
        line-height: 1.55;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.45em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--card-color, #c8a951);
          opacity: 0.4;
        }
      }
    }

    .docs-cta {
      text-align: center;
      margin-top: 3rem;
      padding: 2.5rem;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      border-radius: 20px;

      p {
        color: rgba(255,255,255,0.8);
        font-size: 1.05rem;
        margin-bottom: 1.25rem;
      }
    }

    /* ============ Quality ============ */
    .quality-section {
      padding: 7rem 0;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    }

    .quality-section .section-header {
      h2 { color: #fff; }
      p { color: rgba(255,255,255,0.65); }
    }

    /* 5-Stage Pipeline */
    .qa-pipeline {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 0;
      margin: 3rem auto 3.5rem;
      max-width: 1100px;
    }

    .qa-stage {
      flex: 1;
      text-align: center;
      padding: 1.5rem 1rem;
      border-radius: 16px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
      transition: all 0.4s;
      position: relative;

      &:hover {
        background: rgba(255,255,255,0.06);
        border-color: rgba(200,169,81,0.2);
        transform: translateY(-6px);
        box-shadow: 0 12px 40px rgba(0,0,0,0.2);

        .qa-stage__icon {
          transform: scale(1.1);
          border-color: rgba(200,169,81,0.3);
        }
      }

      h4 {
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        color: #fff;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.78rem;
        color: rgba(255,255,255,0.5);
        line-height: 1.6;
      }
    }

    .qa-stage__icon {
      width: 64px;
      height: 64px;
      border-radius: 18px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      transition: all 0.4s;

      svg { width: 36px; height: 36px; }
    }

    .qa-stage__num {
      font-family: 'Playfair Display', serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: #c8a951;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
      opacity: 0.7;
    }

    .qa-stage__arrow {
      display: flex;
      align-items: center;
      padding-top: 2.5rem;
      flex-shrink: 0;
      opacity: 0.4;

      svg { width: 24px; height: 24px; }
    }

    .quality-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.06);
    }

    .q-stat {
      padding: 1.5rem;

      &-value {
        display: block;
        font-family: 'Playfair Display', serif;
        font-size: 2.8rem;
        font-weight: 800;
        background: linear-gradient(135deg, #c8a951, #e0c878);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1;
        margin-bottom: 0.5rem;
      }

      &-label {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.55);
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }
    }

    /* ============ CTA ============ */
    .cta-section {
      padding: 6rem 0;
      position: relative;
      text-align: center;
      overflow: hidden;
    }

    .cta-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at 20% 50%, rgba(200,169,81,0.08) 0%, transparent 60%);
      }
    }

    .cta-section .container {
      position: relative;
      z-index: 1;
    }

    .cta-section h2 {
      color: #fff;
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }

    .cta-section p {
      color: rgba(255,255,255,0.7);
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.75;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    /* ============ Shared Buttons ============ */
    .btn-primary {
      display: inline-block;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      padding: 0.9rem 2.25rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s;
      border: none;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(200,169,81,0.4);
      }
    }

    .btn-glow {
      box-shadow: 0 4px 15px rgba(200,169,81,0.25);
    }

    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      border: 2px solid #c8a951;
      color: #c8a951;
      padding: 0.85rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s;
      &:hover { background: #c8a951; color: #fff; gap: 0.75rem; }
    }

    .btn-outline-light {
      display: inline-block;
      border: 2px solid rgba(255,255,255,0.4);
      color: #fff;
      padding: 0.85rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s;
      &:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ============ Responsive ============ */
    @media (max-width: 1024px) {
      .products-grid { grid-template-columns: repeat(2, 1fr); }
      .why-grid { grid-template-columns: 1fr; }
      .hero-nav { display: none; }
      .docs-hero { grid-template-columns: 1fr; gap: 2rem; }
      .docs-cards { grid-template-columns: repeat(2, 1fr); }
      .qa-pipeline { flex-wrap: wrap; gap: 1rem; }
      .qa-stage { flex: 0 0 calc(33.33% - 1rem); }
      .qa-stage__arrow { display: none; }
      .quality-stats { grid-template-columns: repeat(2, 1fr); }

      .process-step { grid-template-columns: 1fr 50px 1fr; }
      .process-step__left, .process-step__right { padding: 1.5rem 1rem; }
      .process-step__illus { padding: 1.5rem; }
      .process-step__content h3 { font-size: 1.2rem; }
    }

    @media (max-width: 768px) {
      .hero-content h1 { font-size: 2.2rem; }
      .hero-content p { font-size: 1rem; }
      .hero-actions { flex-direction: column; align-items: flex-start; }
      .hero-scroll-hint { display: none; }
      .stats-bar .container { grid-template-columns: repeat(2, 1fr); }
      .about-grid { grid-template-columns: 1fr; gap: 2rem; }
      .products-grid { grid-template-columns: 1fr; }
      .section-header h2 { font-size: 1.8rem; }
      .cta-buttons { flex-direction: column; align-items: center; }
      .image-float-badge { display: none; }
      .docs-hero { grid-template-columns: 1fr; }
      .docs-cards { grid-template-columns: 1fr; }
      .qa-pipeline { flex-direction: column; gap: 0.75rem; align-items: stretch; }
      .qa-stage { flex: none; display: grid; grid-template-columns: 64px 1fr; grid-template-rows: auto auto; gap: 0 1rem; text-align: left; padding: 1.25rem; }
      .qa-stage__icon { grid-row: 1 / 3; margin: 0; }
      .qa-stage__num { grid-column: 2; margin-bottom: 0; }
      .qa-stage h4 { grid-column: 2; }
      .qa-stage p { grid-column: 2; }
      .qa-stage__arrow { display: none; }
      .quality-stats { grid-template-columns: repeat(2, 1fr); }

      .process-step {
        grid-template-columns: 44px 1fr;
        grid-template-rows: auto auto;
      }
      .process-step__left { grid-column: 2; grid-row: 2; padding: 0 1rem 1.5rem; }
      .process-step__center { grid-column: 1; grid-row: 1 / -1; }
      .process-step__right { grid-column: 2; grid-row: 1; padding: 1.5rem 1rem 0.5rem; }

      /* On mobile, always show illus first then content */
      .process-step--reverse .process-step__left { grid-row: 1; }
      .process-step--reverse .process-step__right { grid-row: 2; }

      .process-step__number {
        width: 38px;
        height: 38px;
        span { font-size: 0.95rem; }
      }
      .process-step__illus { padding: 1.25rem; }
      .process-step__content h3 { font-size: 1.15rem; }

      /* Clip lines at first/last */
      .process-step:first-child .process-step__center::before { top: 19px; }
      .process-step:last-child .process-step__center::before { bottom: calc(100% - 19px); }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  slides = signal<any[]>([]);
  stats = signal<any[]>([]);
  whyChoose = signal<any[]>([]);
  orderProcess = signal<any[]>([]);
  categories = signal<any[]>([]);
  companyDesc = signal('');
  companyDesc2 = signal('');
  founderQuote = signal('');
  currentSlide = signal(0);
  private slideInterval: any;

  constructor(private data: DataService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Indian Agricultural Exports | Spices, Rice, Dry Fruits & More | Vaarunya Global Exim',
      description: 'Buy premium Indian agricultural exports: black pepper, cardamom, cumin seeds, turmeric, basmati rice, dry fruits, coffee, tea, sesame seeds, chickpeas & more. APEDA & FSSAI certified exporter. Trusted by buyers in 30+ countries. Get a free quote today.',
      keywords: 'spices export India, black pepper export, cardamom export India, cumin seeds export, turmeric powder export, basmati rice export, dry fruits export India, sesame seeds export, chickpeas export, Indian agricultural exports, APEDA certified exporter, FSSAI certified, Darjeeling tea export, Assam tea export, coffee export India, pomegranate export, mango export India, Vaarunya Global Exim',
      canonicalPath: '/'
    });
    this.seo.injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Vaarunya Global Exim',
      'url': 'https://www.vaarunyaglobalexim.com',
      'description': 'India\'s trusted agricultural export house. APEDA & FSSAI certified. Exporting to 30+ countries.',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://www.vaarunyaglobalexim.com/products?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });

    this.data.getHomeData().subscribe(d => {
      this.slides.set(d.heroSlides);
      this.stats.set(d.stats);
      this.whyChoose.set(d.whyChoose);
      this.orderProcess.set(d.orderProcess);
      this.startSlider();
    });

    this.data.getSiteData().subscribe(d => {
      this.companyDesc.set(d.company.description);
      this.companyDesc2.set(d.company.secondParagraph);
      this.founderQuote.set(d.company.founderQuote);
    });

    this.data.getProductsData().subscribe(d => {
      this.categories.set(d.categories);
    });
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetInterval() {
    clearInterval(this.slideInterval);
    this.startSlider();
  }

  nextSlide() {
    const total = this.slides().length;
    this.currentSlide.set((this.currentSlide() + 1) % total);
  }

  prevSlide() {
    const total = this.slides().length;
    this.currentSlide.set((this.currentSlide() - 1 + total) % total);
  }

  getCategoryProductCount(cat: any): number {
    return cat.subcategories?.reduce((sum: number, sub: any) => sum + (sub.products?.length || 0), 0) || 0;
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }
}
