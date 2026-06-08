import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { IllustrationComponent } from '../../components/illustrations/illustrations.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, RevealDirective, IllustrationComponent],
  template: `
    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <div class="hero-breadcrumb">
          <a routerLink="/">Home</a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="9 18 15 12 9 6"/></svg>
          <span>About Us</span>
        </div>
        <span class="tag">Our Story</span>
        <h1>{{ heroData()?.title }}</h1>
        <p>{{ heroData()?.subtitle }}</p>
        <div class="hero-stats">
          <div class="hero-stat" appReveal="fadeUp" [revealDelay]="100">
            <span class="hero-stat__num">500+</span>
            <span class="hero-stat__label">Farming Partners</span>
          </div>
          <div class="hero-stat" appReveal="fadeUp" [revealDelay]="200">
            <span class="hero-stat__num">30+</span>
            <span class="hero-stat__label">Countries</span>
          </div>
          <div class="hero-stat" appReveal="fadeUp" [revealDelay]="300">
            <span class="hero-stat__num">6</span>
            <span class="hero-stat__label">Continents</span>
          </div>
          <div class="hero-stat" appReveal="fadeUp" [revealDelay]="400">
            <span class="hero-stat__num">98%</span>
            <span class="hero-stat__label">Client Satisfaction</span>
          </div>
        </div>
        <div class="hero-buttons">
          <a routerLink="/contact" class="btn-primary btn-glow">Start Partnership</a>
          <a href="#our-story" class="btn-ghost">
            Discover Our Story
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ========== MISSION / VISION / WHAT WE DO ========== -->
    <section class="pillars-section">
      <div class="container">
        <div class="pillars-grid">
          <div class="pillar-card pillar-card--mission" appReveal="fadeUp" [revealDelay]="100">
            <div class="pillar-card__icon">
              <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="2" opacity="0.3"/><circle cx="24" cy="24" r="12" stroke="currentColor" stroke-width="2" opacity="0.5"/><circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.8"/><circle cx="24" cy="24" r="2" fill="#fff"/></svg>
            </div>
            <h3>Our Mission</h3>
            <p>To bridge the gap between India's finest agricultural producers and global markets through <strong>transparent, ethical, and technology-driven</strong> export practices that empower rural farming communities.</p>
          </div>
          <div class="pillar-card pillar-card--vision" appReveal="fadeUp" [revealDelay]="200">
            <div class="pillar-card__icon">
              <svg viewBox="0 0 48 48" fill="none"><path d="M6 24 Q24 6 42 24 Q24 42 6 24 Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/><circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.15"/><circle cx="24" cy="24" r="3" fill="currentColor"/></svg>
            </div>
            <h3>Our Vision</h3>
            <p>To become India's most <strong>trusted and purpose-driven</strong> agricultural export ecosystem — setting global benchmarks in quality, compliance, and partner satisfaction across 50+ countries.</p>
          </div>
          <div class="pillar-card pillar-card--what" appReveal="fadeUp" [revealDelay]="300">
            <div class="pillar-card__icon">
              <svg viewBox="0 0 48 48" fill="none"><path d="M8 38 L24 8 L40 38 Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/><line x1="16" y1="30" x2="32" y2="30" stroke="currentColor" stroke-width="2"/><line x1="20" y1="24" x2="28" y2="24" stroke="currentColor" stroke-width="1.5" opacity="0.5"/></svg>
            </div>
            <h3>What We Do</h3>
            <p>End-to-end agricultural exports — from <strong>farm selection & quality assurance</strong> to <strong>documentation, compliance & logistics</strong>. We handle every step so our partners can focus on their business.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== OUR STORY ========== -->
    @if (story(); as s) {
      <section class="story-section" id="our-story">
        <div class="container">
          <div class="story-grid">
            <div class="story-content" appReveal="fadeRight">
              <span class="section-tag">Making International Trade Accessible</span>
              <h2>{{ s.title }}</h2>
              <p>{{ s.content }}</p>
              <p>{{ s.content2 }}</p>
              <div class="story-milestones">
                <div class="milestone" appReveal="fadeUp" [revealDelay]="100">
                  <div class="milestone__dot"></div>
                  <div class="milestone__content">
                    <strong>Foundation</strong>
                    <span>Vaarunya Global Exim was founded with a vision to connect rural India to global markets</span>
                  </div>
                </div>
                <div class="milestone" appReveal="fadeUp" [revealDelay]="200">
                  <div class="milestone__dot"></div>
                  <div class="milestone__content">
                    <strong>APEDA & FSSAI Certified</strong>
                    <span>Achieved key certifications enabling agricultural exports to international markets</span>
                  </div>
                </div>
                <div class="milestone" appReveal="fadeUp" [revealDelay]="300">
                  <div class="milestone__dot"></div>
                  <div class="milestone__content">
                    <strong>Global Expansion</strong>
                    <span>Expanded operations to 30+ countries across 6 continents with 500+ farming partners</span>
                  </div>
                </div>
                <div class="milestone" appReveal="fadeUp" [revealDelay]="400">
                  <div class="milestone__dot"></div>
                  <div class="milestone__content">
                    <strong>Startup India Recognition</strong>
                    <span>Recognized by DPIIT under Startup India for innovation-driven export model</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="story-sidebar" appReveal="fadeLeft" [revealDelay]="200">
              <div class="story-sidebar__image">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1000&q=80" alt="Founder" loading="lazy" />
              </div>
              <blockquote class="founder-quote">
                <svg class="quote-icon" viewBox="0 0 32 32" fill="none"><path d="M4 20 V12 Q4 4 12 4 V8 Q8 8 8 12 H12 V20 Z" fill="currentColor" opacity="0.2"/><path d="M18 20 V12 Q18 4 26 4 V8 Q22 8 22 12 H26 V20 Z" fill="currentColor" opacity="0.2"/></svg>
                <p>"{{ s.founderQuote }}"</p>
                <cite>
                  <strong>{{ s.founderName }}</strong>
                  <span>{{ s.founderTitle }}</span>
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    }

    <!-- ========== WHY CHOOSE VAARUNYA ========== -->
    <section class="why-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Why Vaarunya</span>
          <h2>What Sets Us Apart</h2>
          <p>We combine deep industry expertise with transparent processes and technology-driven operations to deliver unmatched value to our partners.</p>
        </div>
        <div class="why-grid">
          <div class="why-card" appReveal="fadeUp" [revealDelay]="100">
            <div class="why-card__num">01</div>
            <div class="why-card__icon why-card__icon--green">
              <svg viewBox="0 0 40 40" fill="none"><path d="M20 4 L20 20 M14 14 L20 20 L26 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 24 Q8 34 20 34 Q32 34 32 24" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="28" r="2" fill="currentColor" opacity="0.3"/><circle cx="28" cy="28" r="2" fill="currentColor" opacity="0.3"/></svg>
            </div>
            <h3>Direct Farm Sourcing</h3>
            <p>We eliminate middlemen by sourcing directly from 500+ verified farming partners across India's prime agricultural regions, ensuring freshness and fair pricing.</p>
          </div>
          <div class="why-card" appReveal="fadeUp" [revealDelay]="200">
            <div class="why-card__num">02</div>
            <div class="why-card__icon why-card__icon--blue">
              <svg viewBox="0 0 40 40" fill="none"><rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/><path d="M12 18 L17 23 L28 12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="28" x2="28" y2="28" stroke="currentColor" stroke-width="1.5" opacity="0.3"/></svg>
            </div>
            <h3>Zero Customs Rejection</h3>
            <p>Our meticulous documentation process and multi-stage quality testing ensure a perfect track record with customs authorities across all destination countries.</p>
          </div>
          <div class="why-card" appReveal="fadeUp" [revealDelay]="300">
            <div class="why-card__num">03</div>
            <div class="why-card__icon why-card__icon--gold">
              <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/><path d="M10 20 Q20 8 30 20 Q20 32 10 20 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.2"/><line x1="20" y1="5" x2="20" y2="9" stroke="currentColor" stroke-width="1.5"/><line x1="20" y1="31" x2="20" y2="35" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <h3>Global Compliance Expertise</h3>
            <p>APEDA, FSSAI, Spices Board, Tea Board, Coffee Board, and CEPCI certified. We handle FDA (USA), EU, GCC, and all destination-specific compliance requirements.</p>
          </div>
          <div class="why-card" appReveal="fadeUp" [revealDelay]="400">
            <div class="why-card__num">04</div>
            <div class="why-card__icon why-card__icon--purple">
              <svg viewBox="0 0 40 40" fill="none"><circle cx="14" cy="16" r="6" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/><circle cx="26" cy="16" r="6" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/><path d="M8 30 Q8 24 14 24 Q17 24 20 26 Q23 24 26 24 Q32 24 32 30" stroke="currentColor" stroke-width="2" fill="none"/></svg>
            </div>
            <h3>Dedicated Account Manager</h3>
            <p>Every client gets a dedicated relationship manager who provides real-time updates, handles customization requests, and ensures smooth communication across time zones.</p>
          </div>
          <div class="why-card" appReveal="fadeUp" [revealDelay]="500">
            <div class="why-card__num">05</div>
            <div class="why-card__icon why-card__icon--orange">
              <svg viewBox="0 0 40 40" fill="none"><rect x="4" y="14" width="14" height="20" rx="2" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/><rect x="22" y="6" width="14" height="28" rx="2" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/><path d="M18 24 L22 24" stroke="currentColor" stroke-width="2" stroke-dasharray="2 2"/><circle cx="11" cy="20" r="2" fill="currentColor" opacity="0.3"/><circle cx="29" cy="14" r="2" fill="currentColor" opacity="0.3"/></svg>
            </div>
            <h3>Full QR Traceability</h3>
            <p>Every shipment carries a QR traceability code linked to complete origin data — farm source, quality test results, processing details, and shipping information.</p>
          </div>
          <div class="why-card" appReveal="fadeUp" [revealDelay]="600">
            <div class="why-card__num">06</div>
            <div class="why-card__icon why-card__icon--teal">
              <svg viewBox="0 0 40 40" fill="none"><path d="M20 4 L36 12 V22 C36 32 20 38 20 38 C20 38 4 32 4 22 V12 Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/><path d="M14 20 L18 24 L26 16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h3>End-to-End Insurance</h3>
            <p>Marine insurance, transit protection, and complete risk coverage. We handle CIF, FOB, or CFR Incoterms as per your preference with real-time GPS tracking.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== TEAM ========== -->
    <section class="team-section" id="team">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Leadership</span>
          <h2>Meet the Minds Behind Our Success</h2>
          <p>Our leadership team combines deep expertise in international trade, operations, and strategic partnerships with a shared commitment to ethical business.</p>
        </div>
        <div class="team-grid">
          @for (member of team(); track member.name; let i = $index) {
            <div class="team-card" appReveal="fadeUp" [revealDelay]="i * 150">
              <div class="team-card__photo">
                <img [src]="member.image" [alt]="member.name" loading="lazy" />
                <div class="team-card__overlay">
                  <blockquote>"{{ member.quote }}"</blockquote>
                </div>
              </div>
              <div class="team-card__info">
                <h3>{{ member.name }}</h3>
                <span class="team-card__role">{{ member.title }}</span>
                <p>{{ member.bio }}</p>
                <div class="team-card__skills">
                  @for (skill of member.skills; track skill) {
                    <span class="skill-tag">{{ skill }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== VALUES ========== -->
    <section class="values-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Our DNA</span>
          <h2>The Principles That Guide Us</h2>
          <p>Our core values shape every decision we make and every relationship we build in the global trade ecosystem.</p>
        </div>
        <div class="values-grid">
          @for (value of values(); track value.title; let i = $index) {
            <div class="value-card" appReveal="fadeUp" [revealDelay]="i * 150">
              <div class="value-card__accent" [style.background]="valueColors[i]?.gradient"></div>
              <div class="value-card__header">
                <div class="value-card__icon" [style.background]="valueColors[i]?.bg" [style.color]="valueColors[i]?.color">
                  <svg viewBox="0 0 40 40" fill="none">
                    @switch (i) {
                      @case (0) {
                        <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
                        <circle cx="20" cy="16" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
                        <line x1="20" y1="21" x2="20" y2="32" stroke="currentColor" stroke-width="2"/>
                        <line x1="14" y1="28" x2="26" y2="28" stroke="currentColor" stroke-width="2"/>
                      }
                      @case (1) {
                        <path d="M20 4 L36 12 V22 C36 32 20 38 20 38 C20 38 4 32 4 22 V12 Z" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
                        <path d="M14 20 L18 24 L26 16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                      }
                      @default {
                        <circle cx="14" cy="16" r="7" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
                        <circle cx="26" cy="16" r="7" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
                        <path d="M7 32 Q7 25 14 25 Q18 25 20 27 Q22 25 26 25 Q33 25 33 32" stroke="currentColor" stroke-width="2" fill="none"/>
                      }
                    }
                  </svg>
                </div>
                <span class="value-card__badge">{{ value.subtitle }}</span>
              </div>
              <h3>{{ value.title }}</h3>
              <p class="value-card__tagline">{{ value.description }}</p>
              <p class="value-card__detail">{{ value.detail }}</p>
              <div class="value-card__divider"></div>
              <h4>How We Practice This:</h4>
              <ul class="value-card__list">
                @for (practice of value.practices; track practice) {
                  <li>{{ practice }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== PARTNERSHIP PRINCIPLES ========== -->
    <section class="partnership-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Partnership Philosophy</span>
          <h2>Building Relationships, Not Just Transactions</h2>
          <p>Our partnership philosophy goes beyond traditional trading relationships to create lasting bonds built on trust.</p>
        </div>
        <div class="principles-grid">
          @for (principle of principles(); track principle.title; let i = $index) {
            <div class="principle-card" appReveal="fadeUp" [revealDelay]="i * 120">
              <div class="principle-card__num">{{ (i + 1).toString().padStart(2, '0') }}</div>
              <div class="principle-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                  @switch (i) {
                    @case (0) {
                      <circle cx="24" cy="20" r="14" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/>
                      <path d="M16 18 L24 10 L32 18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
                      <line x1="24" y1="10" x2="24" y2="36" stroke="currentColor" stroke-width="2"/>
                    }
                    @case (1) {
                      <path d="M12 24 Q12 12 24 12 Q36 12 36 24 Q36 36 24 36 Q12 36 12 24" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/>
                      <path d="M18 24 L24 24 M24 18 L24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      <path d="M16 30 L24 24 L32 30" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.4"/>
                    }
                    @case (2) {
                      <circle cx="16" cy="24" r="8" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/>
                      <circle cx="32" cy="24" r="8" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/>
                      <path d="M21 20 Q24 16 27 20 Q30 24 27 28 Q24 32 21 28 Q18 24 21 20" fill="currentColor" opacity="0.15"/>
                    }
                    @default {
                      <rect x="8" y="10" width="32" height="28" rx="4" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/>
                      <line x1="16" y1="20" x2="32" y2="20" stroke="currentColor" stroke-width="1.5"/>
                      <line x1="16" y1="26" x2="28" y2="26" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
                      <line x1="16" y1="32" x2="24" y2="32" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
                    }
                  }
                </svg>
              </div>
              <h3>{{ principle.title }}</h3>
              <p class="principle-card__tagline">{{ principle.description }}</p>
              <p>{{ principle.detail }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== CERTIFICATIONS ========== -->
    <section class="certifications-section" id="certifications-gallery">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Compliance & Registrations</span>
          <h2>Trusted by Industry Standards</h2>
          <p>Our certifications demonstrate our commitment to excellence, compliance, and continuous improvement across every regulatory body.</p>
        </div>
        <div class="certs-grid">
          @for (cert of certifications(); track cert.name; let i = $index) {
            <div class="cert-card" appReveal="scale" [revealDelay]="i * 100">
              <div class="cert-card__icon">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="20" r="14" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.08"/>
                  <path d="M18 20 L22 24 L30 16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 34 L24 38 L30 34" stroke="currentColor" stroke-width="2" fill="currentColor" opacity="0.1"/>
                  <line x1="24" y1="34" x2="24" y2="38" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>
              <div class="cert-card__badge">{{ cert.badge }}</div>
              <h3>{{ cert.name }}</h3>
              <p class="cert-card__authority">{{ cert.fullName }}</p>
              <p class="cert-card__desc">{{ cert.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== GLOBAL REACH ========== -->
    <section class="global-reach-section">
      <div class="container">
        <div class="global-grid">
          <div class="global-content" appReveal="fadeRight">
            <span class="section-tag">Our Global Reach</span>
            <h2>Connecting India to the World</h2>
            <p>From the spice gardens of Kerala to the grain fields of Punjab, we bring India's finest agricultural products to doorsteps across 6 continents and 30+ countries.</p>
            <div class="reach-highlights">
              <div class="reach-item">
                <span class="reach-number">30+</span>
                <span class="reach-label">Countries Served</span>
              </div>
              <div class="reach-item">
                <span class="reach-number">6</span>
                <span class="reach-label">Continents Covered</span>
              </div>
              <div class="reach-item">
                <span class="reach-number">500+</span>
                <span class="reach-label">Active Buyers</span>
              </div>
            </div>
            <p class="reach-desc">Our established logistics network and compliance expertise in each region ensures smooth, reliable deliveries regardless of destination.</p>
            <div class="reach-regions">
              <span class="region-tag">Middle East & GCC</span>
              <span class="region-tag">Southeast Asia</span>
              <span class="region-tag">Europe & UK</span>
              <span class="region-tag">North America</span>
              <span class="region-tag">Africa</span>
              <span class="region-tag">Australia & Oceania</span>
            </div>
          </div>
          <div class="global-illustration" appReveal="fadeLeft" [revealDelay]="200">
            <app-illustration name="global-reach"></app-illustration>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== HOW WE SOURCE & DELIVER ========== -->
    <section class="how-we-work-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Our Process</span>
          <h2>How We Source & Deliver</h2>
          <p>Our end-to-end process ensures every product meets international quality standards while supporting local farming communities.</p>
        </div>

        <!-- Phase Navigation -->
        <div class="phase-nav" appReveal="fadeUp" [revealDelay]="50">
          <div class="phase-nav__track">
            <div class="phase-nav__item phase-nav__item--active">
              <div class="phase-nav__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div class="phase-nav__text">
                <span class="phase-nav__label">Phase 1</span>
                <span class="phase-nav__title">Sourcing & Delivery</span>
              </div>
            </div>
            <div class="phase-nav__connector">
              <svg viewBox="0 0 60 24" fill="none"><path d="M0 12 H50 M44 6 L52 12 L44 18" stroke="#c8a951" stroke-width="2" stroke-linecap="round"/></svg>
            </div>
            <div class="phase-nav__item">
              <div class="phase-nav__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <div class="phase-nav__text">
                <span class="phase-nav__label">Phase 2</span>
                <span class="phase-nav__title">Export Documentation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ===== PHASE 1: Sourcing & Delivery Steps ===== -->
        <div class="phase-section" appReveal="fadeUp">
          <div class="phase-section__header">
            <span class="phase-section__badge">Phase 1</span>
            <h3>From Farm to Ship — The Complete Supply Chain</h3>
            <p>5 critical stages ensuring quality, compliance, and timely delivery — every step fully transparent.</p>
          </div>
        </div>

        <!-- Detailed Steps — Alternating Illustrated Cards -->
        <div class="process-flow">
          <div class="process-line"></div>

          <!-- Step 1: Farm Selection -->
          <div class="process-card" appReveal="fadeUp" [revealDelay]="100">
            <div class="process-card__illust process-card__illust--green">
              <svg viewBox="0 0 320 220" fill="none">
                <!-- Sky -->
                <rect width="320" height="220" rx="12" fill="#f1f8e9"/>
                <!-- Sun -->
                <circle cx="260" cy="45" r="22" fill="#FFD54F" opacity="0.9"/>
                <line x1="260" y1="15" x2="260" y2="25" stroke="#FFD54F" stroke-width="2" stroke-linecap="round"/>
                <line x1="290" y1="45" x2="280" y2="45" stroke="#FFD54F" stroke-width="2" stroke-linecap="round"/>
                <line x1="260" y1="75" x2="260" y2="68" stroke="#FFD54F" stroke-width="2" stroke-linecap="round"/>
                <line x1="281" y1="24" x2="275" y2="30" stroke="#FFD54F" stroke-width="2" stroke-linecap="round"/>
                <line x1="281" y1="66" x2="275" y2="60" stroke="#FFD54F" stroke-width="2" stroke-linecap="round"/>
                <!-- Hills -->
                <path d="M0 160 Q80 100 160 140 Q240 100 320 130 V220 H0 Z" fill="#c8e6c9"/>
                <path d="M0 180 Q100 140 200 170 Q280 150 320 160 V220 H0 Z" fill="#a5d6a7"/>
                <!-- Ground -->
                <rect x="0" y="190" width="320" height="30" rx="0" fill="#8d6e63" opacity="0.2"/>
                <!-- Crop rows -->
                <g opacity="0.7">
                  <line x1="40" y1="195" x2="40" y2="185" stroke="#4caf50" stroke-width="2"/><circle cx="40" cy="183" r="3" fill="#66bb6a"/>
                  <line x1="60" y1="195" x2="60" y2="183" stroke="#4caf50" stroke-width="2"/><circle cx="60" cy="181" r="3" fill="#66bb6a"/>
                  <line x1="80" y1="195" x2="80" y2="186" stroke="#4caf50" stroke-width="2"/><circle cx="80" cy="184" r="3" fill="#66bb6a"/>
                  <line x1="100" y1="195" x2="100" y2="184" stroke="#4caf50" stroke-width="2"/><circle cx="100" cy="182" r="3" fill="#66bb6a"/>
                  <line x1="120" y1="195" x2="120" y2="186" stroke="#4caf50" stroke-width="2"/><circle cx="120" cy="184" r="3" fill="#66bb6a"/>
                </g>
                <!-- Farmer character -->
                <circle cx="190" cy="140" r="12" fill="#ffcc80"/><!-- head -->
                <rect x="183" y="152" width="14" height="22" rx="4" fill="#4caf50"/><!-- body -->
                <rect x="179" y="174" width="7" height="14" rx="2" fill="#5d4037"/><!-- leg L -->
                <rect x="192" y="174" width="7" height="14" rx="2" fill="#5d4037"/><!-- leg R -->
                <circle cx="190" cy="133" r="13" fill="#8d6e63" opacity="0.3"/><!-- hat brim -->
                <rect x="183" y="123" width="14" height="10" rx="3" fill="#8d6e63" opacity="0.4"/><!-- hat top -->
                <!-- Basket -->
                <ellipse cx="220" cy="170" rx="18" ry="10" fill="#d7ccc8"/>
                <path d="M204 170 Q212 155 220 170 Q228 155 236 170" stroke="#a1887f" stroke-width="1.5" fill="none"/>
                <circle cx="214" cy="162" r="4" fill="#ff7043"/><circle cx="225" cy="163" r="3" fill="#ffc107"/><circle cx="218" cy="158" r="3" fill="#ef5350"/>
                <!-- Tree -->
                <rect x="44" y="128" width="6" height="32" rx="2" fill="#795548"/>
                <circle cx="47" cy="118" r="16" fill="#66bb6a" opacity="0.7"/>
                <circle cx="40" cy="125" r="10" fill="#43a047" opacity="0.5"/>
                <circle cx="55" cy="122" r="10" fill="#81c784" opacity="0.6"/>
                <!-- Cloud -->
                <ellipse cx="140" cy="35" rx="30" ry="12" fill="#fff" opacity="0.7"/>
                <ellipse cx="125" cy="38" rx="18" ry="10" fill="#fff" opacity="0.5"/>
              </svg>
            </div>
            <div class="process-card__content">
              <div class="process-card__badge process-card__badge--green">Step 01</div>
              <h3>Farm Selection & Sourcing</h3>
              <p>Our procurement team personally visits farms across <strong>Gujarat, Rajasthan, Maharashtra, Karnataka, and Kerala</strong>. We assess soil health, growing practices, water quality, and harvest timing. Only farms meeting our strict standards become Vaarunya-certified partners.</p>
              <div class="process-card__stats">
                <div class="process-card__stat"><strong>500+</strong><span>Farming Partners</span></div>
                <div class="process-card__stat"><strong>Direct</strong><span>No Middlemen</span></div>
                <div class="process-card__stat"><strong>Fair</strong><span>Trade Pricing</span></div>
              </div>
              <ul><li>Verified farming partner network across India</li><li>Seasonal crop calendar tracking</li><li>Organic & conventional sourcing options</li></ul>
            </div>
          </div>

          <!-- Step 2: Quality Inspection -->
          <div class="process-card process-card--reverse" appReveal="fadeUp" [revealDelay]="200">
            <div class="process-card__illust process-card__illust--blue">
              <svg viewBox="0 0 320 220" fill="none">
                <rect width="320" height="220" rx="12" fill="#e3f2fd"/>
                <!-- Lab Table -->
                <rect x="40" y="140" width="240" height="6" rx="2" fill="#90a4ae"/>
                <rect x="60" y="146" width="8" height="50" rx="2" fill="#78909c"/>
                <rect x="252" y="146" width="8" height="50" rx="2" fill="#78909c"/>
                <!-- Microscope -->
                <rect x="80" y="100" width="6" height="40" rx="2" fill="#455a64"/>
                <rect x="70" y="132" width="26" height="8" rx="3" fill="#546e7a"/>
                <circle cx="83" cy="97" r="10" stroke="#1976d2" stroke-width="2" fill="#bbdefb"/>
                <rect x="76" y="82" width="14" height="8" rx="2" fill="#455a64"/>
                <!-- Test tubes -->
                <rect x="140" y="105" width="10" height="35" rx="4" fill="#e1f5fe" stroke="#42a5f5" stroke-width="1.5"/>
                <rect x="140" y="125" width="10" height="15" rx="4" fill="#42a5f5" opacity="0.3"/>
                <rect x="160" y="100" width="10" height="40" rx="4" fill="#fce4ec" stroke="#ef5350" stroke-width="1.5"/>
                <rect x="160" y="128" width="10" height="12" rx="4" fill="#ef5350" opacity="0.3"/>
                <rect x="180" y="108" width="10" height="32" rx="4" fill="#e8f5e9" stroke="#66bb6a" stroke-width="1.5"/>
                <rect x="180" y="128" width="10" height="12" rx="4" fill="#66bb6a" opacity="0.3"/>
                <!-- Clipboard with checkmarks -->
                <rect x="220" y="85" width="50" height="55" rx="5" fill="#fff" stroke="#90a4ae" stroke-width="1.5"/>
                <rect x="235" y="80" width="20" height="10" rx="3" fill="#1976d2"/>
                <line x1="230" y1="100" x2="260" y2="100" stroke="#ccc" stroke-width="1.5"/>
                <path d="M228 106 L232 110 L238 104" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
                <line x1="242" y1="108" x2="262" y2="108" stroke="#ddd" stroke-width="1.5"/>
                <path d="M228 116 L232 120 L238 114" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
                <line x1="242" y1="118" x2="262" y2="118" stroke="#ddd" stroke-width="1.5"/>
                <path d="M228 126 L232 130 L238 124" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
                <line x1="242" y1="128" x2="258" y2="128" stroke="#ddd" stroke-width="1.5"/>
                <!-- Inspector character -->
                <circle cx="120" cy="65" r="12" fill="#ffcc80"/>
                <rect x="113" y="77" width="14" height="20" rx="4" fill="#fff"/>
                <rect x="113" y="77" width="14" height="20" rx="4" stroke="#1976d2" stroke-width="1"/>
                <line x1="120" y1="82" x2="120" y2="92" stroke="#1976d2" stroke-width="1" stroke-dasharray="2 2"/>
                <rect x="109" y="97" width="7" height="16" rx="2" fill="#37474f"/>
                <rect x="122" y="97" width="7" height="16" rx="2" fill="#37474f"/>
                <!-- Magnifying glass in hand -->
                <circle cx="107" cy="90" r="7" stroke="#1976d2" stroke-width="2" fill="none"/>
                <line x1="102" y1="95" x2="97" y2="100" stroke="#1976d2" stroke-width="2" stroke-linecap="round"/>
                <!-- Quality badge -->
                <circle cx="55" cy="40" r="18" fill="#1976d2" opacity="0.1" stroke="#1976d2" stroke-width="1.5"/>
                <text x="55" y="44" text-anchor="middle" fill="#1976d2" font-size="9" font-weight="700">95%+</text>
              </svg>
            </div>
            <div class="process-card__content">
              <div class="process-card__badge process-card__badge--blue">Step 02</div>
              <h3>Multi-Stage Quality Inspection</h3>
              <p>Every batch undergoes a rigorous <strong>4-point quality check</strong> — visual grading, lab analysis for moisture & contaminants, aflatoxin testing, and pesticide residue screening. Only batches scoring <strong>95%+</strong> on our Quality Index are cleared.</p>
              <div class="process-card__stats">
                <div class="process-card__stat"><strong>NABL</strong><span>Accredited Labs</span></div>
                <div class="process-card__stat"><strong>99%</strong><span>Pass Rate</span></div>
                <div class="process-card__stat"><strong>COA</strong><span>Per Batch</span></div>
              </div>
              <ul><li>Moisture, aflatoxin & pesticide screening</li><li>Certificate of Analysis for every batch</li><li>Multi-stage visual + lab testing</li></ul>
            </div>
          </div>

          <!-- Step 3: Processing & Packaging -->
          <div class="process-card" appReveal="fadeUp" [revealDelay]="300">
            <div class="process-card__illust process-card__illust--orange">
              <svg viewBox="0 0 320 220" fill="none">
                <rect width="320" height="220" rx="12" fill="#fff3e0"/>
                <!-- Factory building -->
                <rect x="30" y="80" width="120" height="100" rx="4" fill="#fff" stroke="#ffb74d" stroke-width="1.5"/>
                <rect x="30" y="80" width="120" height="20" rx="4" fill="#ff9800" opacity="0.15"/>
                <text x="90" y="94" text-anchor="middle" fill="#e65100" font-size="8" font-weight="600">ISO 22000</text>
                <!-- Windows -->
                <rect x="42" y="110" width="20" height="16" rx="2" fill="#e3f2fd" stroke="#90caf9" stroke-width="1"/>
                <rect x="72" y="110" width="20" height="16" rx="2" fill="#e3f2fd" stroke="#90caf9" stroke-width="1"/>
                <rect x="102" y="110" width="20" height="16" rx="2" fill="#e3f2fd" stroke="#90caf9" stroke-width="1"/>
                <!-- Door -->
                <rect x="78" y="150" width="24" height="30" rx="3" fill="#ffcc80"/>
                <!-- Conveyor belt -->
                <rect x="160" y="150" width="140" height="8" rx="4" fill="#bdbdbd"/>
                <circle cx="170" cy="158" r="6" fill="#9e9e9e" stroke="#757575" stroke-width="1.5"/>
                <circle cx="290" cy="158" r="6" fill="#9e9e9e" stroke="#757575" stroke-width="1.5"/>
                <!-- Packages on belt -->
                <rect x="195" y="135" width="22" height="15" rx="3" fill="#ff9800" opacity="0.3" stroke="#ff9800" stroke-width="1"/>
                <rect x="230" y="132" width="22" height="18" rx="3" fill="#ffb74d" opacity="0.3" stroke="#ff9800" stroke-width="1"/>
                <rect x="265" y="134" width="22" height="16" rx="3" fill="#ffe0b2" stroke="#ff9800" stroke-width="1"/>
                <!-- QR codes on packages -->
                <rect x="199" y="138" width="7" height="7" rx="1" fill="#5d4037" opacity="0.4"/>
                <rect x="234" y="136" width="7" height="7" rx="1" fill="#5d4037" opacity="0.4"/>
                <rect x="269" y="137" width="7" height="7" rx="1" fill="#5d4037" opacity="0.4"/>
                <!-- Worker -->
                <circle cx="220" cy="100" r="10" fill="#ffcc80"/>
                <rect x="214" y="110" width="12" height="18" rx="3" fill="#ff9800"/>
                <rect x="211" y="128" width="6" height="12" rx="2" fill="#5d4037"/>
                <rect x="221" y="128" width="6" height="12" rx="2" fill="#5d4037"/>
                <!-- Hard hat -->
                <path d="M210 96 Q220 88 230 96" fill="#ffc107" stroke="#f9a825" stroke-width="1"/>
                <!-- Vacuum seal indicator -->
                <circle cx="280" cy="85" r="16" fill="#fff" stroke="#ff9800" stroke-width="1.5"/>
                <text x="280" y="83" text-anchor="middle" fill="#e65100" font-size="6" font-weight="600">VACUUM</text>
                <text x="280" y="91" text-anchor="middle" fill="#e65100" font-size="6" font-weight="600">SEALED</text>
                <!-- Smoke/steam -->
                <path d="M60 75 Q65 65 70 75" stroke="#bdbdbd" stroke-width="1.5" fill="none" opacity="0.5"/>
                <path d="M70 70 Q75 60 80 70" stroke="#bdbdbd" stroke-width="1.5" fill="none" opacity="0.4"/>
              </svg>
            </div>
            <div class="process-card__content">
              <div class="process-card__badge process-card__badge--orange">Step 03</div>
              <h3>Processing & Export Packaging</h3>
              <p>Products are cleaned, sorted, graded, and packaged in our <strong>ISO 22000 certified facility</strong>. Export-grade packaging with vacuum sealing, moisture barriers, and tamper-proof seals. Every package carries a <strong>QR traceability code</strong>.</p>
              <div class="process-card__stats">
                <div class="process-card__stat"><strong>ISO</strong><span>22000 Certified</span></div>
                <div class="process-card__stat"><strong>QR</strong><span>Traceability</span></div>
                <div class="process-card__stat"><strong>Custom</strong><span>Buyer Specs</span></div>
              </div>
              <ul><li>Vacuum-sealed moisture-proof packing</li><li>Full QR traceability per batch</li><li>Custom packaging per buyer specifications</li></ul>
            </div>
          </div>

          <!-- Step 4: Compliance & Certification -->
          <div class="process-card process-card--reverse" appReveal="fadeUp" [revealDelay]="400">
            <div class="process-card__illust process-card__illust--pink">
              <svg viewBox="0 0 320 220" fill="none">
                <rect width="320" height="220" rx="12" fill="#fce4ec"/>
                <!-- Desk -->
                <rect x="40" y="140" width="240" height="6" rx="2" fill="#8d6e63"/>
                <rect x="55" y="146" width="6" height="40" rx="2" fill="#795548"/>
                <rect x="259" y="146" width="6" height="40" rx="2" fill="#795548"/>
                <!-- Documents stack -->
                <rect x="60" y="95" width="55" height="45" rx="4" fill="#fff" stroke="#e91e63" stroke-width="1.5"/>
                <rect x="63" y="98" width="55" height="45" rx="4" fill="#fff" stroke="#e91e63" stroke-width="1" opacity="0.6"/>
                <text x="87" y="112" text-anchor="middle" fill="#e91e63" font-size="7" font-weight="600">APEDA</text>
                <line x1="70" y1="120" x2="105" y2="120" stroke="#eee" stroke-width="1.5"/>
                <line x1="70" y1="126" x2="98" y2="126" stroke="#eee" stroke-width="1.5"/>
                <line x1="70" y1="132" x2="102" y2="132" stroke="#eee" stroke-width="1.5"/>
                <!-- Stamp -->
                <circle cx="100" cy="128" r="10" fill="none" stroke="#e91e63" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.5"/>
                <text x="100" y="131" text-anchor="middle" fill="#e91e63" font-size="6" font-weight="700" opacity="0.5">OK</text>
                <!-- Certificate -->
                <rect x="140" y="85" width="65" height="55" rx="4" fill="#fff" stroke="#c8a951" stroke-width="1.5"/>
                <rect x="150" y="80" width="45" height="10" rx="3" fill="#c8a951"/>
                <text x="172" y="88" text-anchor="middle" fill="#fff" font-size="6" font-weight="600">CERTIFICATE</text>
                <line x1="150" y1="100" x2="195" y2="100" stroke="#eee" stroke-width="1"/>
                <line x1="150" y1="106" x2="190" y2="106" stroke="#eee" stroke-width="1"/>
                <line x1="150" y1="112" x2="185" y2="112" stroke="#eee" stroke-width="1"/>
                <!-- Seal ribbon -->
                <circle cx="175" cy="130" r="8" fill="#c8a951" opacity="0.2" stroke="#c8a951" stroke-width="1.5"/>
                <path d="M170 138 L175 145 L180 138" fill="#c8a951" opacity="0.4"/>
                <!-- Shield badge -->
                <path d="M240 80 L260 88 V108 Q250 120 240 108 V88 Z" fill="#e91e63" opacity="0.1" stroke="#e91e63" stroke-width="1.5"/>
                <path d="M245 96 L249 100 L256 92" stroke="#e91e63" stroke-width="2" fill="none" stroke-linecap="round"/>
                <!-- Compliance officer -->
                <circle cx="250" cy="55" r="10" fill="#ffcc80"/>
                <rect x="244" y="65" width="12" height="16" rx="3" fill="#e91e63" opacity="0.8"/>
                <!-- Glasses -->
                <circle cx="247" cy="54" r="3" stroke="#37474f" stroke-width="1" fill="none"/>
                <circle cx="253" cy="54" r="3" stroke="#37474f" stroke-width="1" fill="none"/>
                <line x1="250" y1="54" x2="250" y2="54" stroke="#37474f" stroke-width="1"/>
                <!-- Floating checkmarks -->
                <circle cx="50" cy="50" r="10" fill="#4caf50" opacity="0.1"/><path d="M46 50 L49 53 L55 47" stroke="#4caf50" stroke-width="1.5" fill="none"/>
                <circle cx="290" cy="40" r="10" fill="#4caf50" opacity="0.1"/><path d="M286 40 L289 43 L295 37" stroke="#4caf50" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
            <div class="process-card__content">
              <div class="process-card__badge process-card__badge--pink">Step 04</div>
              <h3>Compliance & Certification</h3>
              <p>Our compliance team prepares <strong>all export documentation</strong> — APEDA registration, phytosanitary certificates, certificate of origin, FSSAI compliance, fumigation records, and <strong>destination-specific certifications</strong> (FDA for USA, EU organic, GCC standards).</p>
              <div class="process-card__stats">
                <div class="process-card__stat"><strong>Zero</strong><span>Rejections</span></div>
                <div class="process-card__stat"><strong>FDA</strong><span>EU, GCC</span></div>
                <div class="process-card__stat"><strong>APEDA</strong><span>FSSAI</span></div>
              </div>
              <ul><li>Phytosanitary & fumigation certificates</li><li>Destination-specific compliance handling</li><li>Zero customs rejection track record</li></ul>
            </div>
          </div>

          <!-- Step 5: Logistics & Delivery -->
          <div class="process-card" appReveal="fadeUp" [revealDelay]="500">
            <div class="process-card__illust process-card__illust--purple">
              <svg viewBox="0 0 320 220" fill="none">
                <rect width="320" height="220" rx="12" fill="#ede7f6"/>
                <!-- Ocean -->
                <path d="M0 160 Q40 150 80 160 Q120 170 160 160 Q200 150 240 160 Q280 170 320 160 V220 H0 Z" fill="#90caf9" opacity="0.3"/>
                <path d="M0 175 Q40 165 80 175 Q120 185 160 175 Q200 165 240 175 Q280 185 320 175 V220 H0 Z" fill="#64b5f6" opacity="0.3"/>
                <!-- Ship -->
                <path d="M100 140 L110 170 H230 L240 140" fill="#7b1fa2" opacity="0.15" stroke="#7b1fa2" stroke-width="2"/>
                <rect x="130" y="115" width="80" height="25" rx="3" fill="#fff" stroke="#7b1fa2" stroke-width="1.5"/>
                <!-- Containers on ship -->
                <rect x="135" y="118" width="22" height="10" rx="2" fill="#ef5350" opacity="0.6"/>
                <rect x="160" y="118" width="22" height="10" rx="2" fill="#42a5f5" opacity="0.6"/>
                <rect x="185" y="118" width="22" height="10" rx="2" fill="#66bb6a" opacity="0.6"/>
                <rect x="135" y="130" width="22" height="10" rx="2" fill="#ffa726" opacity="0.6"/>
                <rect x="160" y="130" width="22" height="10" rx="2" fill="#7b1fa2" opacity="0.4"/>
                <rect x="185" y="130" width="22" height="10" rx="2" fill="#ec407a" opacity="0.5"/>
                <!-- Ship cabin -->
                <rect x="155" y="90" width="30" height="25" rx="3" fill="#fff" stroke="#7b1fa2" stroke-width="1.5"/>
                <rect x="160" y="95" width="8" height="8" rx="1" fill="#bbdefb"/>
                <rect x="172" y="95" width="8" height="8" rx="1" fill="#bbdefb"/>
                <!-- Ship chimney -->
                <rect x="165" y="78" width="10" height="12" rx="2" fill="#455a64"/>
                <path d="M168 75 Q172 68 176 75" stroke="#bdbdbd" stroke-width="1.5" fill="none" opacity="0.5"/>
                <!-- GPS/Tracking pin -->
                <circle cx="60" cy="60" r="18" fill="#fff" stroke="#7b1fa2" stroke-width="1.5"/>
                <path d="M60 48 Q68 48 68 56 Q68 62 60 70 Q52 62 52 56 Q52 48 60 48 Z" fill="#7b1fa2" opacity="0.15" stroke="#7b1fa2" stroke-width="1.5"/>
                <circle cx="60" cy="56" r="3" fill="#7b1fa2"/>
                <text x="60" y="82" text-anchor="middle" fill="#7b1fa2" font-size="6" font-weight="600">TRACKING</text>
                <!-- Airplane -->
                <path d="M250 40 L270 50 L250 60 L255 50 Z" fill="#7b1fa2" opacity="0.3"/>
                <line x1="255" y1="50" x2="240" y2="50" stroke="#7b1fa2" stroke-width="2" opacity="0.3"/>
                <path d="M242 46 L248 50 L242 54" fill="#7b1fa2" opacity="0.2"/>
                <!-- Dotted flight path -->
                <path d="M275 48 Q290 30 300 45" stroke="#7b1fa2" stroke-width="1" stroke-dasharray="3 3" fill="none" opacity="0.3"/>
                <!-- Globe destination markers -->
                <circle cx="280" cy="90" r="20" stroke="#7b1fa2" stroke-width="1" fill="none" opacity="0.2"/>
                <circle cx="275" cy="85" r="2" fill="#ef5350"/><circle cx="288" cy="92" r="2" fill="#42a5f5"/><circle cx="280" cy="100" r="2" fill="#66bb6a"/>
              </svg>
            </div>
            <div class="process-card__content">
              <div class="process-card__badge process-card__badge--purple">Step 05</div>
              <h3>Global Logistics & Delivery</h3>
              <p><strong>Sea freight (FCL/LCL)</strong> or <strong>air cargo</strong> for urgent orders. Temperature-controlled containers when needed. Real-time GPS tracking, marine insurance, and port-to-door delivery coordination. We handle <strong>CIF, FOB, or CFR</strong> Incoterms.</p>
              <div class="process-card__stats">
                <div class="process-card__stat"><strong>30+</strong><span>Countries</span></div>
                <div class="process-card__stat"><strong>GPS</strong><span>Tracked</span></div>
                <div class="process-card__stat"><strong>Insured</strong><span>Shipments</span></div>
              </div>
              <ul><li>Sea freight & air cargo options</li><li>Temperature-controlled containers available</li><li>CIF / FOB / CFR Incoterms flexibility</li></ul>
            </div>
          </div>
        </div>

        <!-- ===== PHASE 2: Export Documentation ===== -->
        <div class="phase-section phase-section--dark" appReveal="fadeUp" [revealDelay]="100">
          <div class="phase-section__header phase-section__header--light">
            <span class="phase-section__badge">Phase 2</span>
            <h3>Complete Export Documentation</h3>
            <p>We manage every document required for smooth international trade — from invoices to customs clearance.</p>
          </div>
        </div>

        <div class="phase2-grid">
          <!-- Left: Illustration -->
          <div class="phase2-illustration" appReveal="fadeUp" [revealDelay]="150">
            <svg viewBox="0 0 400 320" fill="none">
              <!-- Background -->
              <rect width="400" height="320" rx="16" fill="#1a1a2e"/>
              <!-- Decorative circles -->
              <circle cx="340" cy="60" r="60" fill="#16213e" opacity="0.5"/>
              <circle cx="60" cy="280" r="40" fill="#16213e" opacity="0.5"/>
              <!-- Desk -->
              <rect x="60" y="220" width="280" height="8" rx="4" fill="#c8a951" opacity="0.3"/>
              <rect x="80" y="228" width="10" height="50" rx="3" fill="#c8a951" opacity="0.2"/>
              <rect x="310" y="228" width="10" height="50" rx="3" fill="#c8a951" opacity="0.2"/>
              <!-- Monitor -->
              <rect x="130" y="130" width="140" height="90" rx="8" fill="#16213e" stroke="#c8a951" stroke-width="1.5" opacity="0.8"/>
              <rect x="185" y="220" width="30" height="12" rx="2" fill="#c8a951" opacity="0.3"/>
              <!-- Screen content - document -->
              <rect x="148" y="145" width="50" height="60" rx="4" fill="#fff" opacity="0.9"/>
              <line x1="155" y1="156" x2="190" y2="156" stroke="#e0e0e0" stroke-width="2"/>
              <line x1="155" y1="163" x2="185" y2="163" stroke="#e0e0e0" stroke-width="1.5"/>
              <line x1="155" y1="169" x2="188" y2="169" stroke="#e0e0e0" stroke-width="1.5"/>
              <line x1="155" y1="175" x2="182" y2="175" stroke="#e0e0e0" stroke-width="1.5"/>
              <path d="M160 185 L164 190 L174 182" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
              <!-- Screen - checkmark -->
              <circle cx="230" cy="165" r="18" fill="#4caf50" opacity="0.15"/>
              <path d="M222 165 L228 171 L240 159" stroke="#4caf50" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <!-- Person -->
              <circle cx="200" cy="110" r="14" fill="#ffcc80"/>
              <path d="M193 96 Q200 88 207 96" fill="#5d4037"/>
              <circle cx="196" cy="109" r="2" fill="#5d4037"/>
              <circle cx="204" cy="109" r="2" fill="#5d4037"/>
              <circle cx="195" cy="107" r="4" stroke="#37474f" stroke-width="1" fill="none"/>
              <circle cx="205" cy="107" r="4" stroke="#37474f" stroke-width="1" fill="none"/>
              <line x1="199" y1="107" x2="201" y2="107" stroke="#37474f" stroke-width="1"/>
              <path d="M196 115 Q200 117 204 115" stroke="#5d4037" stroke-width="1" fill="none"/>
              <rect x="192" y="124" width="16" height="22" rx="4" fill="#1a1a2e" stroke="#c8a951" stroke-width="1"/>
              <!-- Arms reaching out -->
              <path d="M192 130 L150 145" stroke="#ffcc80" stroke-width="4" stroke-linecap="round"/>
              <path d="M208 130 L250 145" stroke="#ffcc80" stroke-width="4" stroke-linecap="round"/>
              <!-- Left document floating -->
              <rect x="50" y="140" width="55" height="70" rx="5" fill="#fff" opacity="0.9" transform="rotate(-8 77 175)"/>
              <text x="68" y="157" fill="#e91e63" font-size="6" font-weight="700" transform="rotate(-8 77 175)">APEDA</text>
              <line x1="58" y1="165" x2="96" y2="165" stroke="#eee" stroke-width="1.5" transform="rotate(-8 77 175)"/>
              <line x1="58" y1="172" x2="90" y2="172" stroke="#eee" stroke-width="1.5" transform="rotate(-8 77 175)"/>
              <line x1="58" y1="179" x2="93" y2="179" stroke="#eee" stroke-width="1.5" transform="rotate(-8 77 175)"/>
              <circle cx="88" cy="195" r="8" fill="none" stroke="#c8a951" stroke-width="1.5" transform="rotate(-8 77 175)"/>
              <path d="M84 195 L87 198 L93 192" stroke="#c8a951" stroke-width="1.5" fill="none" stroke-linecap="round" transform="rotate(-8 77 175)"/>
              <!-- Right document floating -->
              <rect x="295" y="140" width="55" height="70" rx="5" fill="#fff" opacity="0.9" transform="rotate(8 322 175)"/>
              <text x="307" y="157" fill="#1976d2" font-size="6" font-weight="700" transform="rotate(8 322 175)">B/L</text>
              <line x1="302" y1="165" x2="342" y2="165" stroke="#eee" stroke-width="1.5" transform="rotate(8 322 175)"/>
              <line x1="302" y1="172" x2="338" y2="172" stroke="#eee" stroke-width="1.5" transform="rotate(8 322 175)"/>
              <line x1="302" y1="179" x2="335" y2="179" stroke="#eee" stroke-width="1.5" transform="rotate(8 322 175)"/>
              <path d="M330 190 L334 194 L340 188" stroke="#4caf50" stroke-width="1.5" fill="none" stroke-linecap="round" transform="rotate(8 322 175)"/>
              <!-- Stamp effect -->
              <circle cx="85" cy="100" r="16" fill="none" stroke="#c8a951" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.6"/>
              <text x="85" y="103" text-anchor="middle" fill="#c8a951" font-size="7" font-weight="700" opacity="0.6">OK</text>
              <!-- Stars/sparkles -->
              <circle cx="320" cy="100" r="3" fill="#c8a951" opacity="0.4"/>
              <circle cx="330" cy="120" r="2" fill="#c8a951" opacity="0.3"/>
              <circle cx="70" cy="80" r="2" fill="#c8a951" opacity="0.3"/>
              <circle cx="50" cy="100" r="3" fill="#c8a951" opacity="0.4"/>
            </svg>
          </div>

          <!-- Right: Document Cards -->
          <div class="phase2-content" appReveal="fadeUp" [revealDelay]="200">
            <div class="doc-card">
              <div class="doc-card__icon doc-card__icon--gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="12" y2="15"/></svg>
              </div>
              <div class="doc-card__text">
                <h4>Commercial Invoice</h4>
                <p>Detailed export invoice with HS codes, pricing, and terms per international trade standards.</p>
              </div>
            </div>
            <div class="doc-card">
              <div class="doc-card__icon doc-card__icon--blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
              </div>
              <div class="doc-card__text">
                <h4>Bill of Lading</h4>
                <p>Carrier-issued document covering shipment details, routing, and delivery terms (FCL/LCL).</p>
              </div>
            </div>
            <div class="doc-card">
              <div class="doc-card__icon doc-card__icon--green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2z"/></svg>
              </div>
              <div class="doc-card__text">
                <h4>Certificate of Origin</h4>
                <p>Official document certifying Indian origin — required for preferential tariff treatment.</p>
              </div>
            </div>
            <div class="doc-card">
              <div class="doc-card__icon doc-card__icon--pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div class="doc-card__text">
                <h4>Phytosanitary Certificate</h4>
                <p>Government-issued health compliance for plant products exportation, per IPPC standards.</p>
              </div>
            </div>
            <div class="doc-card">
              <div class="doc-card__icon doc-card__icon--orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M2 11h20"/></svg>
              </div>
              <div class="doc-card__text">
                <h4>Customs Declaration</h4>
                <p>Detailed declaration form covering product classification, duties, and regulatory compliance.</p>
              </div>
            </div>
            <div class="doc-card">
              <div class="doc-card__icon doc-card__icon--purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div class="doc-card__text">
                <h4>Insurance Certificate</h4>
                <p>Marine cargo insurance covering transit risk — CIF shipments fully protected.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CTA ========== -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner" appReveal="fadeUp">
          <h2>Ready to Build a Partnership?</h2>
          <p>Join hundreds of businesses who trust Vaarunya for their international trade needs. Let's grow together.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn-primary btn-glow">Get Started Today</a>
            <a routerLink="/products" class="btn-outline-light">Explore Products</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ============ HERO ============ */
    .hero {
      position: relative;
      min-height: 85vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background: url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80') center/cover;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(22,33,62,0.85) 50%, rgba(26,26,46,0.75) 100%);
    }

    .hero-pattern {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(200,169,81,0.06) 1px, transparent 1px);
      background-size: 30px 30px;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1280px;
      margin: 0 auto;
      padding: 6rem 2rem 4rem;
      width: 100%;
    }

    .hero-breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      font-size: 0.85rem;

      a {
        color: rgba(255,255,255,0.5);
        text-decoration: none;
        transition: color 0.3s;
        &:hover { color: #c8a951; }
      }
      svg { color: rgba(255,255,255,0.3); }
      span { color: rgba(255,255,255,0.7); }
    }

    .hero-content .tag {
      color: #c8a951;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 0.85rem;
      display: block;
      margin-bottom: 1rem;
    }

    .hero-content h1 {
      font-size: 3.2rem;
      color: #fff;
      font-weight: 800;
      margin-bottom: 1rem;
      max-width: 700px;
      line-height: 1.2;
    }

    .hero-content > p {
      color: rgba(255,255,255,0.75);
      font-size: 1.1rem;
      max-width: 620px;
      line-height: 1.8;
      margin-bottom: 2.5rem;
    }

    .hero-stats {
      display: flex;
      gap: 2.5rem;
      margin-bottom: 2.5rem;
      padding: 1.5rem 2rem;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      max-width: fit-content;
      backdrop-filter: blur(8px);
    }

    .hero-stat {
      text-align: center;
    }

    .hero-stat__num {
      display: block;
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 800;
      color: #c8a951;
      line-height: 1;
      margin-bottom: 0.25rem;
    }

    .hero-stat__label {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      align-items: center;
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

    .btn-glow { box-shadow: 0 4px 20px rgba(200,169,81,0.3); }

    /* ============ PILLARS ============ */
    .pillars-section {
      padding: 5rem 0;
      background: #fff;
      margin-top: -3rem;
      position: relative;
      z-index: 3;
    }

    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .pillar-card {
      background: #fff;
      border-radius: 20px;
      padding: 2.25rem;
      box-shadow: 0 8px 40px rgba(0,0,0,0.08);
      border: 1px solid #eee;
      transition: all 0.4s;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.12);
      }

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.3rem;
        color: #1a1a2e;
        margin-bottom: 0.75rem;
      }

      p {
        color: #666;
        font-size: 0.92rem;
        line-height: 1.75;
      }
    }

    .pillar-card__icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      svg { width: 36px; height: 36px; }
    }

    .pillar-card--mission .pillar-card__icon { background: rgba(76,175,80,0.08); color: #388e3c; }
    .pillar-card--vision .pillar-card__icon { background: rgba(25,118,210,0.08); color: #1565c0; }
    .pillar-card--what .pillar-card__icon { background: rgba(200,169,81,0.1); color: #a88b3a; }

    /* ============ STORY ============ */
    .story-section { padding: 6rem 0; background: #fafafa; }

    .story-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .section-tag {
      display: inline-block;
      color: #c8a951;
      font-weight: 600;
      font-size: 0.85rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
    }

    .story-content {
      h2 { font-size: 2rem; color: #1a1a2e; margin-bottom: 1.5rem; }
      p { color: #555; line-height: 1.85; margin-bottom: 1.25rem; }
    }

    .story-milestones {
      margin-top: 2rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 8px;
        bottom: 8px;
        width: 2px;
        background: linear-gradient(to bottom, #c8a951, rgba(200,169,81,0.15));
      }
    }

    .milestone {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
      position: relative;

      &:last-child { margin-bottom: 0; }
    }

    .milestone__dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #c8a951;
      border: 3px solid #fafafa;
      box-shadow: 0 0 0 2px #c8a951;
      flex-shrink: 0;
      margin-left: -1.5rem;
      margin-top: 3px;
    }

    .milestone__content {
      strong { display: block; color: #1a1a2e; font-size: 0.95rem; margin-bottom: 0.2rem; }
      span { color: #888; font-size: 0.85rem; line-height: 1.5; }
    }

    .story-sidebar__image {
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 1.5rem;
      box-shadow: 0 20px 50px rgba(0,0,0,0.1);

      img { width: 100%; display: block; }
    }

    .founder-quote {
      background: #fff;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border-left: 4px solid #c8a951;
      position: relative;

      .quote-icon {
        width: 32px;
        height: 32px;
        color: #c8a951;
        margin-bottom: 0.5rem;
      }

      p { font-style: italic; color: #444; line-height: 1.7; margin-bottom: 1rem; }

      cite {
        display: flex;
        flex-direction: column;
        font-style: normal;
        strong { color: #1a1a2e; }
        span { color: #888; font-size: 0.85rem; }
      }
    }

    /* ============ WHY VAARUNYA ============ */
    .why-section { padding: 6rem 0; background: #fff; }

    .why-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
    }

    .why-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid #eee;
      transition: all 0.4s;
      position: relative;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        border-color: rgba(200,169,81,0.2);
      }

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.05rem;
        color: #1a1a2e;
        margin-bottom: 0.6rem;
      }

      p { color: #666; font-size: 0.88rem; line-height: 1.7; }
    }

    .why-card__num {
      position: absolute;
      top: 1.25rem;
      right: 1.5rem;
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 800;
      color: #f0ece3;
      line-height: 1;
    }

    .why-card__icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      svg { width: 30px; height: 30px; }

      &--green { background: rgba(76,175,80,0.08); color: #388e3c; }
      &--blue { background: rgba(25,118,210,0.08); color: #1565c0; }
      &--gold { background: rgba(200,169,81,0.1); color: #a88b3a; }
      &--purple { background: rgba(123,31,162,0.08); color: #7b1fa2; }
      &--orange { background: rgba(255,152,0,0.08); color: #e65100; }
      &--teal { background: rgba(0,150,136,0.08); color: #00796b; }
    }

    /* ============ SECTION HEADER (shared) ============ */
    .section-header {
      text-align: center;
      margin-bottom: 3.5rem;

      h2 { font-size: 2.2rem; color: #1a1a2e; margin-bottom: 1rem; }
      p { color: #666; max-width: 620px; margin: 0 auto; line-height: 1.7; }
    }

    /* ============ TEAM ============ */
    .team-section { padding: 6rem 0; background: #fafafa; }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .team-card {
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      transition: all 0.4s;
      border: 1px solid #eee;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.12);

        .team-card__overlay { opacity: 1; }
        .team-card__photo img { transform: scale(1.05); }
      }
    }

    .team-card__photo {
      height: 400px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;
      }
    }

    .team-card__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(26,26,46,0.9), rgba(26,26,46,0.3));
      display: flex;
      align-items: flex-end;
      padding: 1.5rem;
      opacity: 0;
      transition: opacity 0.4s;

      blockquote {
        font-style: italic;
        color: rgba(255,255,255,0.9);
        font-size: 0.85rem;
        line-height: 1.6;
        border-left: 3px solid #c8a951;
        padding-left: 1rem;
      }
    }

    .team-card__info {
      padding: 1.75rem;

      h3 { font-size: 1.15rem; color: #1a1a2e; margin-bottom: 0.25rem; }

      p { color: #666; font-size: 0.88rem; line-height: 1.65; margin-bottom: 1rem; }
    }

    .team-card__role {
      color: #c8a951;
      font-weight: 600;
      font-size: 0.82rem;
      display: block;
      margin-bottom: 0.75rem;
      letter-spacing: 0.5px;
    }

    .team-card__skills { display: flex; flex-wrap: wrap; gap: 0.4rem; }

    .skill-tag {
      background: rgba(200,169,81,0.08);
      color: #a88b3a;
      padding: 0.3rem 0.75rem;
      border-radius: 50px;
      font-size: 0.72rem;
      font-weight: 600;
    }

    /* ============ VALUES ============ */
    .values-section { padding: 6rem 0; background: #fff; }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .value-card {
      background: #fff;
      border-radius: 20px;
      padding: 0 2rem 2rem;
      border: 1px solid #eee;
      overflow: hidden;
      transition: all 0.4s;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        .value-card__accent { height: 5px; }
      }

      h3 { font-size: 1.5rem; color: #1a1a2e; margin-bottom: 0.5rem; }

      h4 {
        color: #1a1a2e;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
    }

    .value-card__accent {
      height: 4px;
      margin: 0 -2rem 1.75rem;
      transition: height 0.3s;
    }

    .value-card__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .value-card__icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg { width: 32px; height: 32px; }
    }

    .value-card__badge {
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      padding: 0.3rem 0.85rem;
      border-radius: 50px;
      font-size: 0.72rem;
      font-weight: 600;
    }

    .value-card__tagline {
      color: #666;
      font-weight: 500;
      font-size: 0.95rem;
      margin-bottom: 0.75rem;
      line-height: 1.6;
    }

    .value-card__detail {
      color: #555;
      font-size: 0.88rem;
      line-height: 1.7;
      margin-bottom: 0;
    }

    .value-card__divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #e0ddd5, transparent);
      margin: 1.25rem 0;
    }

    .value-card__list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        position: relative;
        padding-left: 1.25rem;
        margin-bottom: 0.4rem;
        color: #555;
        font-size: 0.85rem;
        line-height: 1.6;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #c8a951;
          font-weight: 700;
        }
      }
    }

    /* ============ PARTNERSHIP PRINCIPLES ============ */
    .partnership-section { padding: 6rem 0; background: #fafafa; }

    .principles-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .principle-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid #eee;
      transition: all 0.4s;
      position: relative;
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 50px rgba(0,0,0,0.08);
        border-color: rgba(200,169,81,0.2);
      }

      h3 { font-size: 1.1rem; color: #1a1a2e; margin-bottom: 0.4rem; }
      p { color: #666; font-size: 0.88rem; line-height: 1.65; }
    }

    .principle-card__num {
      position: absolute;
      top: 1rem;
      right: 1.25rem;
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: #f0ece3;
    }

    .principle-card__icon {
      width: 56px;
      height: 56px;
      min-width: 56px;
      border-radius: 14px;
      background: rgba(200,169,81,0.08);
      color: #a88b3a;
      display: flex;
      align-items: center;
      justify-content: center;
      svg { width: 32px; height: 32px; }
    }

    .principle-card__tagline {
      color: #c8a951 !important;
      font-weight: 500;
      font-size: 0.85rem !important;
      margin-bottom: 0.5rem;
    }

    /* ============ CERTIFICATIONS ============ */
    .certifications-section { padding: 6rem 0; background: #fff; }

    .certs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
    }

    .cert-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      border: 1px solid #eee;
      text-align: center;
      transition: all 0.4s;

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        border-color: #c8a951;
      }

      h3 { font-size: 1.05rem; color: #1a1a2e; margin-bottom: 0.4rem; }
    }

    .cert-card__icon {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: rgba(200,169,81,0.08);
      color: #a88b3a;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
      svg { width: 32px; height: 32px; }
    }

    .cert-card__badge {
      display: inline-block;
      background: rgba(200,169,81,0.1);
      color: #a88b3a;
      padding: 0.35rem 0.85rem;
      border-radius: 50px;
      font-size: 0.72rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }

    .cert-card__authority {
      color: #999;
      font-size: 0.78rem;
      margin-bottom: 0.5rem;
    }

    .cert-card__desc {
      color: #666;
      font-size: 0.85rem;
      line-height: 1.6;
    }

    /* ============ GLOBAL REACH ============ */
    .global-reach-section { padding: 6rem 0; background: #f8f6f0; }

    .global-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .global-content {
      h2 { font-size: 2.2rem; color: #1a1a2e; margin-bottom: 1rem; line-height: 1.25; }
      p { color: #666; line-height: 1.8; margin-bottom: 1.5rem; }
    }

    .reach-highlights { display: flex; gap: 2rem; margin: 2rem 0; }
    .reach-item { text-align: center; }

    .reach-number {
      display: block;
      font-family: 'Playfair Display', serif;
      font-size: 2.2rem;
      font-weight: 800;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    .reach-label {
      font-size: 0.75rem;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .reach-desc { font-size: 0.95rem; }

    .reach-regions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .region-tag {
      display: inline-block;
      background: rgba(200,169,81,0.08);
      color: #a88b3a;
      padding: 0.35rem 0.85rem;
      border-radius: 50px;
      font-size: 0.78rem;
      font-weight: 600;
      border: 1px solid rgba(200,169,81,0.15);
    }

    .global-illustration {
      background: #fff;
      border-radius: 24px;
      padding: 2rem;
      box-shadow: 0 8px 40px rgba(0,0,0,0.06);
      border: 1px solid rgba(200,169,81,0.12);
    }

    /* ============ HOW WE WORK ============ */
    .how-we-work-section { padding: 6rem 0; background: #fff; }

    /* Phase Navigation Bar */
    .phase-nav {
      margin-bottom: 3rem;
    }

    .phase-nav__track {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      background: #faf9f6;
      border-radius: 16px;
      padding: 1.25rem 2.5rem;
      border: 1px solid rgba(200,169,81,0.12);
      max-width: 650px;
      margin: 0 auto;
    }

    .phase-nav__item {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.75rem 1.25rem;
      border-radius: 12px;
      transition: all 0.3s;
    }

    .phase-nav__item--active {
      background: rgba(200,169,81,0.08);
    }

    .phase-nav__icon {
      width: 40px;
      height: 40px;
      min-width: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      display: flex;
      align-items: center;
      justify-content: center;
      svg { width: 20px; height: 20px; stroke: #fff; }
    }

    .phase-nav__label {
      display: block;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #c8a951;
    }

    .phase-nav__title {
      display: block;
      font-family: 'Playfair Display', serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: #1a1a2e;
    }

    .phase-nav__connector {
      padding: 0 0.75rem;
      svg { width: 50px; height: 20px; display: block; }
    }

    /* Phase Section Headers */
    .phase-section {
      margin-bottom: 1rem;
    }

    .phase-section--dark {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
      border-radius: 24px;
      padding: 3rem 2.5rem 2rem;
      margin-bottom: 2.5rem;
    }

    .phase-section__header {
      text-align: center;
      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.6rem;
        color: #1a1a2e;
        margin-bottom: 0.5rem;
      }
      p {
        color: #666;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.7;
      }
    }

    .phase-section__header--light {
      h3 { color: #fff; }
      p { color: rgba(255,255,255,0.65); }
    }

    .phase-section__badge {
      display: inline-block;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      padding: 0.3rem 1rem;
      border-radius: 50px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
    }

    /* Phase 2 Grid — Illustration + Document Cards */
    .phase2-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
      margin-bottom: 3rem;
    }

    .phase2-illustration {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.1);
      svg { display: block; width: 100%; height: auto; }
    }

    .phase2-content {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .doc-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      background: #fff;
      border-radius: 14px;
      padding: 1.15rem 1.25rem;
      border: 1px solid #eee;
      transition: all 0.35s;

      &:hover {
        transform: translateX(6px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.06);
        border-color: rgba(200,169,81,0.25);
      }
    }

    .doc-card__icon {
      width: 42px;
      height: 42px;
      min-width: 42px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg { width: 22px; height: 22px; }

      &--gold { background: rgba(200,169,81,0.1); color: #a88b3a; svg { stroke: #a88b3a; } }
      &--blue { background: rgba(25,118,210,0.08); svg { stroke: #1976d2; } }
      &--green { background: rgba(76,175,80,0.08); svg { stroke: #388e3c; } }
      &--pink { background: rgba(233,30,99,0.08); svg { stroke: #c2185b; } }
      &--orange { background: rgba(255,152,0,0.08); svg { stroke: #e65100; } }
      &--purple { background: rgba(123,31,162,0.08); svg { stroke: #7b1fa2; } }
    }

    .doc-card__text {
      h4 {
        font-size: 0.95rem;
        color: #1a1a2e;
        margin-bottom: 0.25rem;
        font-weight: 600;
      }
      p {
        font-size: 0.8rem;
        color: #777;
        line-height: 1.55;
        margin: 0;
      }
    }

    /* Process Flow — alternating illustrated cards */
    .process-flow {
      position: relative;
      padding: 2rem 0;
      margin-bottom: 3rem;
    }

    .process-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, rgba(200,169,81,0.1), rgba(200,169,81,0.3), rgba(200,169,81,0.1));
      transform: translateX(-50%);
      z-index: 0;

      &::before, &::after {
        content: '';
        position: absolute;
        left: 50%;
        width: 12px;
        height: 12px;
        background: #c8a951;
        border-radius: 50%;
        transform: translateX(-50%);
      }
      &::before { top: -6px; }
      &::after { bottom: -6px; }
    }

    .process-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      margin-bottom: 3rem;
      position: relative;
      z-index: 1;

      /* Connector dot on the center line */
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 14px;
        height: 14px;
        border: 3px solid #c8a951;
        background: #fff;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
      }
    }

    .process-card--reverse {
      direction: rtl;
      > * { direction: ltr; }
    }

    .process-card__illust {
      border-radius: 20px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.05);
      transition: all 0.4s;

      svg {
        width: 100%;
        max-width: 320px;
        height: auto;
        display: block;
      }

      &:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); }

      &--green { background: #f1f8e9; border-color: rgba(76,175,80,0.12); }
      &--blue { background: #e3f2fd; border-color: rgba(25,118,210,0.12); }
      &--orange { background: #fff3e0; border-color: rgba(255,152,0,0.12); }
      &--pink { background: #fce4ec; border-color: rgba(233,30,99,0.12); }
      &--purple { background: #ede7f6; border-color: rgba(123,31,162,0.12); }
    }

    .process-card__content {
      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.45rem;
        color: #1a1a2e;
        margin-bottom: 0.75rem;
        line-height: 1.3;
      }

      p {
        color: #555;
        font-size: 0.92rem;
        line-height: 1.75;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          position: relative;
          padding-left: 1.4rem;
          font-size: 0.85rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 0.4rem;

          &::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #c8a951;
            font-weight: 700;
            font-size: 0.8rem;
          }
        }
      }
    }

    .process-card__badge {
      display: inline-block;
      padding: 0.3rem 0.9rem;
      border-radius: 50px;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 0.75rem;

      &--green { background: rgba(76,175,80,0.1); color: #388e3c; }
      &--blue { background: rgba(25,118,210,0.1); color: #1565c0; }
      &--orange { background: rgba(255,152,0,0.1); color: #e65100; }
      &--pink { background: rgba(233,30,99,0.1); color: #c2185b; }
      &--purple { background: rgba(123,31,162,0.1); color: #6a1b9a; }
    }

    .process-card__stats {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1rem;
      padding: 0.75rem 0;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
    }

    .process-card__stat {
      text-align: center;
      strong {
        display: block;
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem;
        color: #1a1a2e;
        line-height: 1.2;
      }
      span {
        font-size: 0.7rem;
        color: #999;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }

    /* ============ CTA ============ */
    .cta-section {
      padding: 5rem 0;
      background: linear-gradient(135deg, #1a1a2e, #16213e);
    }

    .cta-inner {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;

      h2 { color: #fff; font-size: 2.2rem; margin-bottom: 1rem; }
      p { color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 2rem; }
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    /* ============ SHARED ============ */
    .container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; }

    .btn-primary {
      display: inline-block;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      padding: 0.85rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s;
      &:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(200,169,81,0.4); }
    }

    .btn-outline-light {
      display: inline-block;
      border: 2px solid rgba(255,255,255,0.5);
      color: #fff;
      padding: 0.85rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s;
      &:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
    }

    /* ============ RESPONSIVE ============ */
    @media (max-width: 1024px) {
      .pillars-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
      .why-grid { grid-template-columns: repeat(2, 1fr); }
      .team-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
      .values-grid { grid-template-columns: 1fr; max-width: 550px; margin: 0 auto; }
      .principles-grid { grid-template-columns: 1fr; }
      .certs-grid { grid-template-columns: repeat(2, 1fr); }
      .global-grid { grid-template-columns: 1fr; gap: 2rem; }
      .process-card, .process-card--reverse { grid-template-columns: 1fr; gap: 1.5rem; direction: ltr; }
      .process-card--reverse > * { direction: ltr; }
      .process-line { display: none; }
      .process-card::before { display: none; }
      .process-card__illust svg { max-width: 280px; }
      .phase2-grid { grid-template-columns: 1fr; }
      .phase2-illustration { max-width: 450px; margin: 0 auto; }
    }

    @media (max-width: 768px) {
      .hero-content h1 { font-size: 2.2rem; }
      .hero-stats { flex-wrap: wrap; gap: 1.5rem; padding: 1rem 1.5rem; }
      .story-grid { grid-template-columns: 1fr; }
      .why-grid { grid-template-columns: 1fr; }
      .certs-grid { grid-template-columns: 1fr; }
      .hero-buttons { flex-direction: column; align-items: flex-start; }
      .cta-buttons { flex-direction: column; align-items: center; }
      .global-grid { grid-template-columns: 1fr; }
      .process-card__stats { gap: 1rem; }
      .process-card__content h3 { font-size: 1.25rem; }
      .reach-highlights { flex-wrap: wrap; }
      .phase-section--dark { padding: 2rem 1.5rem 1.5rem; }
      .phase-nav__track { flex-direction: column; gap: 0.75rem; padding: 1rem; }
      .phase-nav__connector { transform: rotate(90deg); padding: 0.25rem 0; }
      .principle-card { flex-direction: column; gap: 1rem; }
    }
  `]
})
export class AboutComponent implements OnInit {
  heroData = signal<any>(null);
  story = signal<any>(null);
  team = signal<any[]>([]);
  values = signal<any[]>([]);
  principles = signal<any[]>([]);
  certifications = signal<any[]>([]);

  valueColors = [
    { gradient: 'linear-gradient(90deg, #4caf50, #81c784)', bg: 'rgba(76,175,80,0.08)', color: '#388e3c' },
    { gradient: 'linear-gradient(90deg, #1976d2, #64b5f6)', bg: 'rgba(25,118,210,0.08)', color: '#1565c0' },
    { gradient: 'linear-gradient(90deg, #c8a951, #e0c878)', bg: 'rgba(200,169,81,0.1)', color: '#a88b3a' }
  ];

  constructor(private data: DataService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'About Us | Vaarunya Global Exim',
      description: 'Learn about Vaarunya Global Exim — India\'s trusted APEDA & FSSAI certified agricultural export partner. Our story, mission, values and leadership team behind 30+ country exports.',
      keywords: 'about Vaarunya Global Exim, Indian export company, APEDA certified exporter, agricultural exports India, export house leadership',
      canonicalPath: '/about'
    });
    this.seo.injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      'name': 'About Vaarunya Global Exim',
      'url': 'https://www.vaarunyaglobalexim.com/about',
      'description': 'India\'s trusted APEDA & FSSAI certified agricultural export partner. Learn about our story, mission, values and leadership team.',
      'publisher': {
        '@type': 'Organization',
        'name': 'Vaarunya Global Exim Pvt Ltd',
        'url': 'https://www.vaarunyaglobalexim.com'
      }
    });

    this.data.getAboutData().subscribe(d => {
      this.heroData.set(d.hero);
      this.story.set(d.story);
      this.team.set(d.team);
      this.values.set(d.values);
      this.principles.set(d.partnershipPrinciples);
      this.certifications.set(d.certifications);
    });
  }
}
