import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { SeoService } from '../../services/seo.service';
import { RevealDirective } from '../../directives/reveal.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RevealDirective, CountUpDirective],
  template: `
    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-shapes">
          <div class="hero-shape hero-shape--1"></div>
          <div class="hero-shape hero-shape--2"></div>
          <div class="hero-shape hero-shape--3"></div>
        </div>
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-breadcrumb">
          <a routerLink="/">Home</a>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          <span>Contact</span>
        </div>
        <h1>Let's <span class="hero-highlight">Connect</span> & Grow Together</h1>
        <p>Whether you're a buyer seeking premium Indian products, a farmer looking to export, or a partner exploring opportunities — we're here for you.</p>

        <!-- Quick Contact Floating Cards -->
        <div class="hero-quick">
          <a href="tel:+919100477554" class="hero-quick__card">
            <div class="hero-quick__icon hero-quick__icon--phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div>
              <strong>Call Now</strong>
              <span>+91 910 047 7554</span>
            </div>
          </a>
          <a href="https://wa.me/919100477554" target="_blank" rel="noopener" class="hero-quick__card">
            <div class="hero-quick__icon hero-quick__icon--wa">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <span>Chat Instantly</span>
            </div>
          </a>
          <a href="mailto:info&#64;vaarunyaglobalexim.com" class="hero-quick__card">
            <div class="hero-quick__icon hero-quick__icon--email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <strong>Email Us</strong>
              <span>Quick Response</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ========== TRUST STATS ========== -->
    <section class="trust-strip">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-item" appReveal="fadeUp">
            <span class="trust-num" [appCountUp]="'30'" countSuffix="+">0+</span>
            <span class="trust-label">Countries Served</span>
          </div>
          <div class="trust-item" appReveal="fadeUp" [revealDelay]="100">
            <span class="trust-num" [appCountUp]="'500'" countSuffix="+">0+</span>
            <span class="trust-label">Happy Clients</span>
          </div>
          <div class="trust-item" appReveal="fadeUp" [revealDelay]="200">
            <span class="trust-num" [appCountUp]="'24'" countSuffix="/7">0</span>
            <span class="trust-label">Available Support</span>
          </div>
          <div class="trust-item" appReveal="fadeUp" [revealDelay]="300">
            <span class="trust-num">&lt;2h</span>
            <span class="trust-label">Avg Response Time</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== URGENCY LEVELS ========== -->
    <section class="urgency-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Response Times</span>
          <h2>Urgency Level Guidelines</h2>
          <p>We prioritize your inquiries based on urgency to ensure timely resolution.</p>
        </div>

        <div class="urgency-grid">
          @for (level of urgencyLevels(); track level.level; let i = $index) {
            <div class="urgency-card" appReveal="fadeUp" [revealDelay]="i * 150">
              <div class="urgency-card__indicator" [class]="'urgency-card__indicator--' + (i === 0 ? 'normal' : i === 1 ? 'high' : 'urgent')"></div>
              <div class="urgency-card__content">
                <div class="urgency-card__header">
                  <h3>{{ level.level }}</h3>
                  <span class="urgency-card__time" [class]="'urgency-card__time--' + (i === 0 ? 'normal' : i === 1 ? 'high' : 'urgent')">{{ level.time }}</span>
                </div>
                <p>{{ level.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== BEST TIME TO REACH ========== -->
    <section class="timezone-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Global Availability</span>
          <h2>Best Time to Reach Us</h2>
          <p>We operate across multiple time zones. Find the best window to connect.</p>
        </div>

        <div class="tz-grid">
          <div class="tz-card" appReveal="fadeUp">
            <div class="tz-card__flag">🇮🇳</div>
            <h3>India</h3>
            <div class="tz-card__time">{{ indiaTime() }}</div>
            <span class="tz-card__hours">9 AM - 6 PM IST</span>
            <div class="tz-card__status" [class.active]="isOfficeOpen('IST')">{{ isOfficeOpen('IST') ? 'Open Now' : 'Closed' }}</div>
          </div>
          <div class="tz-card" appReveal="fadeUp" [revealDelay]="100">
            <div class="tz-card__flag">🇺🇸</div>
            <h3>USA</h3>
            <div class="tz-card__time">{{ usaTime() }}</div>
            <span class="tz-card__hours">9 AM - 5 PM EST</span>
            <div class="tz-card__status" [class.active]="isOfficeOpen('EST')">{{ isOfficeOpen('EST') ? 'Open Now' : 'Closed' }}</div>
          </div>
          <div class="tz-card" appReveal="fadeUp" [revealDelay]="200">
            <div class="tz-card__flag">🇦🇪</div>
            <h3>UAE</h3>
            <div class="tz-card__time">{{ uaeTime() }}</div>
            <span class="tz-card__hours">9 AM - 6 PM GST</span>
            <div class="tz-card__status" [class.active]="isOfficeOpen('GST')">{{ isOfficeOpen('GST') ? 'Open Now' : 'Closed' }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== WHO ARE YOU? (Audience Selector) ========== -->
    <section class="audience-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">How Can We Help?</span>
          <h2>I Am a...</h2>
          <p>Select your role so we can direct you to the right solutions faster.</p>
        </div>

        <div class="audience-grid">
          <div class="audience-card" [class.active]="activeAudience() === 'buyer'" (click)="activeAudience.set('buyer')" appReveal="fadeUp">
            <div class="audience-card__icon audience-card__icon--blue">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#e3f2fd"/>
                <rect x="14" y="20" width="20" height="14" rx="3" stroke="#1976d2" stroke-width="2" fill="none"/>
                <path d="M14 24h20" stroke="#1976d2" stroke-width="2"/>
                <circle cx="24" cy="14" r="5" stroke="#1976d2" stroke-width="2" fill="none"/>
                <rect x="18" y="28" width="5" height="3" rx="1" fill="#42a5f5"/>
              </svg>
            </div>
            <h3>International Buyer</h3>
            <p>Looking for premium Indian spices, grains, pulses, or tea for your business</p>
            <div class="audience-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>

          <div class="audience-card" [class.active]="activeAudience() === 'farmer'" (click)="activeAudience.set('farmer')" appReveal="fadeUp" [revealDelay]="150">
            <div class="audience-card__icon audience-card__icon--green">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#e8f5e9"/>
                <circle cx="24" cy="16" r="5" fill="#ffcc80"/>
                <path d="M17 28c0-4 3-7 7-7s7 3 7 7" stroke="#4caf50" stroke-width="2" fill="none"/>
                <path d="M12 36 Q18 28 24 36 Q30 28 36 36" stroke="#8bc34a" stroke-width="2" fill="none"/>
                <circle cx="24" cy="10" r="6" fill="#8d6e63" opacity="0.3"/>
              </svg>
            </div>
            <h3>Farmer / Producer</h3>
            <p>Want to sell your products directly to international markets through us</p>
            <div class="audience-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>

          <div class="audience-card" [class.active]="activeAudience() === 'partner'" (click)="activeAudience.set('partner')" appReveal="fadeUp" [revealDelay]="300">
            <div class="audience-card__icon audience-card__icon--gold">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" fill="#fff8e1"/>
                <path d="M14 28 L24 18 L34 28" stroke="#c8a951" stroke-width="2" fill="none"/>
                <path d="M18 28 L24 22 L30 28" stroke="#a88b3a" stroke-width="2" fill="none"/>
                <rect x="16" y="28" width="16" height="6" rx="2" stroke="#c8a951" stroke-width="2" fill="none"/>
                <circle cx="24" cy="14" r="3" fill="#c8a951" opacity="0.3"/>
              </svg>
            </div>
            <h3>Business Partner</h3>
            <p>Interested in distribution, logistics, or strategic trade partnerships</p>
            <div class="audience-card__arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          </div>
        </div>

        <!-- Audience-Specific Info Panel -->
        @if (activeAudience()) {
          <div class="audience-panel" appReveal="fadeUp">
            @switch (activeAudience()) {
              @case ('buyer') {
                <div class="audience-panel__inner">
                  <div class="audience-panel__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1976d2" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div>
                    <h4>For International Buyers</h4>
                    <p>Request a free quote, get product samples, review our MOQ (Minimum Order Quantity), or discuss custom packaging. We handle <strong>CIF/FOB shipments to 30+ countries</strong>.</p>
                    <div class="audience-panel__actions">
                      <a href="#contact-form" class="btn-primary btn-sm">Request Quote</a>
                      <a routerLink="/products" class="btn-outline btn-sm">Browse Products</a>
                    </div>
                  </div>
                </div>
              }
              @case ('farmer') {
                <div class="audience-panel__inner">
                  <div class="audience-panel__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4>For Farmers & Producers</h4>
                    <p>Join our <strong>500+ farming partner network</strong>. Get fair trade pricing, direct export access, no middlemen. We provide APEDA registration support and quality testing.</p>
                    <div class="audience-panel__actions">
                      <a href="#contact-form" class="btn-primary btn-sm">Register as Partner</a>
                      <a routerLink="/about" class="btn-outline btn-sm">Our Process</a>
                    </div>
                  </div>
                </div>
              }
              @case ('partner') {
                <div class="audience-panel__inner">
                  <div class="audience-panel__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c8a951" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  </div>
                  <div>
                    <h4>For Business Partners</h4>
                    <p>Explore <strong>distribution partnerships, logistics collaboration, or white-label solutions</strong>. We're actively expanding our global network across Middle East, Africa, and Europe.</p>
                    <div class="audience-panel__actions">
                      <a href="#contact-form" class="btn-primary btn-sm">Discuss Partnership</a>
                      <a routerLink="/about" class="btn-outline btn-sm">About Vaarunya</a>
                    </div>
                  </div>
                </div>
              }
            }
          </div>
        }
      </div>
    </section>

    <!-- ========== CONTACT METHODS ========== -->
    <section class="contact-methods">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Reach Out</span>
          <h2>Multiple Ways to Connect</h2>
          <p>Choose your preferred communication channel. We respond promptly across all.</p>
        </div>

        <div class="methods-grid">
          <!-- Phone -->
          <div class="method-card" appReveal="fadeUp">
            <div class="method-card__glow method-card__glow--blue"></div>
            <div class="method-icon phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <h3>Call Us Directly</h3>
            <p class="sub">Speak with our trade specialists</p>
            @if (site(); as s) {
              @for (phone of s.company.contact.phones; track phone.label) {
                <div class="contact-detail">
                  <strong>{{ phone.label }}</strong>
                  <a [href]="'tel:' + phone.number" class="contact-link">{{ phone.number }}</a>
                  <small>{{ phone.hours }}</small>
                </div>
              }
            }
          </div>

          <!-- WhatsApp -->
          <div class="method-card method-card--featured" appReveal="fadeUp" [revealDelay]="150">
            <div class="method-card__glow method-card__glow--green"></div>
            <div class="method-card__badge">Most Popular</div>
            <div class="method-icon whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <h3>WhatsApp Business</h3>
            <p class="sub">Instant chat — fastest way to reach us</p>
            @if (site(); as s) {
              <div class="contact-detail">
                <strong>Global</strong>
                <span>{{ s.company.contact.whatsapp.number }}</span>
                <small>{{ s.company.contact.whatsapp.availability }}</small>
              </div>
            }
            <div style="flex:1"></div>
            <a href="https://wa.me/919100477554" target="_blank" rel="noopener" class="whatsapp-btn">
              <svg viewBox="0 0 24 24" fill="currentColor" style="width:16px;height:16px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              Chat on WhatsApp Now
            </a>
          </div>

          <!-- Email -->
          <div class="method-card" appReveal="fadeUp" [revealDelay]="300">
            <div class="method-card__glow method-card__glow--gold"></div>
            <div class="method-icon email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h3>Email Support</h3>
            <p class="sub">Detailed inquiries and documentation</p>
            @if (site(); as s) {
              @for (em of s.company.contact.emails; track em.label) {
                <div class="contact-detail">
                  <strong>{{ em.label }}</strong>
                  <a [href]="'mailto:' + em.email" class="contact-link email-text">{{ em.email }}</a>
                  <small>{{ em.responseTime }}</small>
                </div>
              }
            }
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CONTACT FORM ========== -->
    <section class="form-section" id="contact-form">
      <div class="container">
        <div class="form-layout">
          <!-- Left: Illustration + Info -->
          <div class="form-info" appReveal="fadeRight">
            <!-- Contact Illustration -->
            <div class="form-illustration">
              <svg viewBox="0 0 380 300" fill="none">
                <!-- Background -->
                <rect width="380" height="300" rx="20" fill="#f8f6f0"/>
                <!-- Decorative blobs -->
                <circle cx="60" cy="60" r="40" fill="#c8a951" opacity="0.06"/>
                <circle cx="320" cy="240" r="50" fill="#1976d2" opacity="0.05"/>
                <!-- Desk -->
                <rect x="80" y="200" width="220" height="8" rx="4" fill="#e0d5b7"/>
                <rect x="100" y="208" width="8" height="50" rx="3" fill="#c8a951" opacity="0.3"/>
                <rect x="272" y="208" width="8" height="50" rx="3" fill="#c8a951" opacity="0.3"/>
                <!-- Laptop -->
                <rect x="130" y="155" width="120" height="45" rx="6" fill="#1a1a2e"/>
                <rect x="136" y="160" width="108" height="35" rx="3" fill="#e3f2fd"/>
                <!-- Screen content -->
                <rect x="142" y="166" width="40" height="4" rx="2" fill="#1976d2" opacity="0.4"/>
                <rect x="142" y="174" width="30" height="3" rx="1.5" fill="#ccc"/>
                <rect x="142" y="180" width="35" height="3" rx="1.5" fill="#ccc"/>
                <rect x="200" y="166" width="38" height="22" rx="4" fill="#4caf50" opacity="0.15" stroke="#4caf50" stroke-width="1"/>
                <path d="M212 174 L216 178 L224 170" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/>
                <!-- Laptop base -->
                <path d="M120 200 L130 197 H250 L260 200" stroke="#1a1a2e" stroke-width="3" fill="none"/>
                <!-- Person -->
                <circle cx="190" cy="110" r="18" fill="#ffcc80"/>
                <rect x="178" y="128" width="24" height="30" rx="6" fill="#c8a951"/>
                <path d="M178 132 L160 155" stroke="#ffcc80" stroke-width="5" stroke-linecap="round"/>
                <path d="M202 132 L220 155" stroke="#ffcc80" stroke-width="5" stroke-linecap="round"/>
                <!-- Hair -->
                <path d="M172 104 Q190 85 208 104" fill="#5d4037"/>
                <!-- Smile -->
                <path d="M184 116 Q190 121 196 116" stroke="#5d4037" stroke-width="1.5" fill="none"/>
                <!-- Eyes -->
                <circle cx="184" cy="108" r="2" fill="#5d4037"/>
                <circle cx="196" cy="108" r="2" fill="#5d4037"/>
                <!-- Flying envelopes -->
                <g transform="translate(60, 100) rotate(-15)">
                  <rect width="35" height="22" rx="3" fill="#fff" stroke="#c8a951" stroke-width="1.5"/>
                  <polyline points="0,0 17.5,12 35,0" stroke="#c8a951" stroke-width="1.5" fill="none"/>
                </g>
                <g transform="translate(280, 80) rotate(10)">
                  <rect width="30" height="18" rx="3" fill="#fff" stroke="#1976d2" stroke-width="1.5"/>
                  <polyline points="0,0 15,10 30,0" stroke="#1976d2" stroke-width="1.5" fill="none"/>
                </g>
                <!-- Chat bubbles -->
                <rect x="290" y="130" width="50" height="28" rx="10" fill="#25d366" opacity="0.15"/>
                <circle cx="305" cy="144" r="2" fill="#25d366" opacity="0.5"/>
                <circle cx="315" cy="144" r="2" fill="#25d366" opacity="0.5"/>
                <circle cx="325" cy="144" r="2" fill="#25d366" opacity="0.5"/>
                <!-- Phone ringing -->
                <rect x="50" y="160" width="22" height="36" rx="4" fill="#fff" stroke="#3b82f6" stroke-width="1.5"/>
                <circle cx="61" cy="168" r="3" fill="#3b82f6" opacity="0.2"/>
                <path d="M44 152 Q42 148 46 148" stroke="#3b82f6" stroke-width="1.5" fill="none" opacity="0.5"/>
                <path d="M40 156 Q36 150 42 148" stroke="#3b82f6" stroke-width="1.5" fill="none" opacity="0.3"/>
                <!-- Globe -->
                <circle cx="320" cy="60" r="20" stroke="#c8a951" stroke-width="1.5" fill="none" opacity="0.3"/>
                <path d="M300 60 h40" stroke="#c8a951" stroke-width="1" opacity="0.2"/>
                <path d="M320 40 Q328 50 328 60 Q328 70 320 80 Q312 70 312 60 Q312 50 320 40" stroke="#c8a951" stroke-width="1" fill="none" opacity="0.3"/>
              </svg>
            </div>

            <h2>Start Your Global Trade Journey</h2>
            <p>Fill the form and our team will get back to you within <strong>2 hours</strong> during business hours.</p>

            <!-- Service Standards -->
            <div class="standards">
              @for (standard of serviceStandards(); track standard.title; let i = $index) {
                <div class="standard-item" appReveal="fadeUp" [revealDelay]="i * 100">
                  <div class="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4>{{ standard.title }}</h4>
                    <p>{{ standard.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Form Card -->
          <div class="form-card" appReveal="fadeLeft" [revealDelay]="200" id="form-card">
            <!-- Form Progress -->
            <div class="form-progress">
              <div class="form-progress__bar" [style.width]="formProgress() + '%'"></div>
            </div>

            @if (!formSubmitted()) {
              <div class="form-card__header">
                <h3>Send Us a Message</h3>
                <p>All fields marked * are required</p>
              </div>

              @if (formError(); as err) {
                <div class="form-error-alert" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); color: #fca5a5; padding: 0.75rem 1rem; border-radius: 10px; font-size: 0.875rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; animation: fadeIn 0.3s ease-out;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; min-width: 16px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <span>{{ err }}</span>
                </div>
              }

              <form (ngSubmit)="onSubmit()">
                <!-- Inquiry Type with Icons -->
                <div class="form-group">
                  <label>Type of Inquiry *</label>
                  <div class="inquiry-chips">
                    @for (type of inquiryTypes(); track type) {
                      <button type="button" class="inquiry-chip" [class.active]="formData.inquiryType === type" (click)="formData.inquiryType = type" [disabled]="formLoading()">
                        @switch (type) {
                          @case ('New Business Inquiry') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4M2 11h20"/></svg>
                          }
                          @case ('Existing Client Support') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                          }
                          @case ('Partnership Opportunities') {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          }
                          @default {
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                          }
                        }
                        {{ type }}
                      </button>
                    }
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>First Name *</label>
                    <input type="text" [(ngModel)]="formData.firstName" name="firstName" required placeholder="John" [disabled]="formLoading()" />
                  </div>
                  <div class="form-group">
                    <label>Last Name *</label>
                    <input type="text" [(ngModel)]="formData.lastName" name="lastName" required placeholder="Doe" [disabled]="formLoading()" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Email Address *</label>
                    <input type="email" [(ngModel)]="formData.email" name="email" required placeholder="john&#64;company.com" [disabled]="formLoading()" />
                  </div>
                  <div class="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" [(ngModel)]="formData.phone" name="phone" required placeholder="+1 (555) 000-0000" [disabled]="formLoading()" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Company Name *</label>
                    <input type="text" [(ngModel)]="formData.company" name="company" required placeholder="Your company" [disabled]="formLoading()" />
                  </div>
                  <div class="form-group">
                    <label>Country *</label>
                    <input type="text" [(ngModel)]="formData.country" name="country" required placeholder="Your country" [disabled]="formLoading()" />
                  </div>
                </div>

                <div class="form-group">
                  <label>Message *</label>
                  <textarea [(ngModel)]="formData.message" name="message" required rows="4" placeholder="Tell us about your requirements, products of interest, order volume..." [disabled]="formLoading()"></textarea>
                </div>

                <button type="submit" class="btn-submit" [disabled]="formLoading() || !isFormValid()">
                  <span>{{ formLoading() ? 'Sending...' : 'Send Inquiry' }}</span>
                  @if (formLoading()) {
                    <svg class="spin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:16px;height:16px;margin-left:8px;animation:spin-animation 1s linear infinite;display:inline-block;vertical-align:middle;">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" style="opacity:0.25" fill="none"></circle>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  } @else {
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  }
                </button>

                <p class="form-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Your information is secure and will never be shared with third parties.
                </p>
              </form>
            } @else {
              <div class="success-message">
                <div class="success-confetti">
                  <div class="confetti-piece"></div>
                  <div class="confetti-piece"></div>
                  <div class="confetti-piece"></div>
                  <div class="confetti-piece"></div>
                  <div class="confetti-piece"></div>
                  <div class="confetti-piece"></div>
                </div>
                <div class="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>Thank You! 🎉</h3>
                <p>Your inquiry has been received successfully. Our team will respond within <strong>2 hours</strong>.</p>
                <div class="success-actions">
                  <button (click)="resetForm()" class="btn-primary">Send Another Inquiry</button>
                  <a href="https://wa.me/919100477554" target="_blank" rel="noopener" class="btn-outline">Chat on WhatsApp</a>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- ========== FAQ ========== -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header" appReveal="fadeUp">
          <span class="section-tag">Help Center</span>
          <h2>Frequently Asked Questions</h2>
          <p>Get instant answers to common questions about our services.</p>
        </div>

        <div class="faq-container">
          @for (category of faq(); track category.category) {
            <div class="faq-category" appReveal="fadeUp">
              <div class="faq-category__header">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  @switch (category.category) {
                    @case ('Getting Started') { <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/> }
                    @case ('Payment & Pricing') { <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/> }
                    @case ('Shipping & Logistics') { <path d="M1 6h15v12H1z"/><path d="M16 8h4l3 4v6h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/> }
                    @default { <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> }
                  }
                </svg>
                <h3>{{ category.category }}</h3>
              </div>
              @for (item of category.questions; track item.question) {
                <div class="faq-item" [class.open]="openFaq() === item.question">
                  <button class="faq-question" (click)="toggleFaq(item.question)">
                    <span>{{ item.question }}</span>
                    <div class="faq-toggle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </div>
                  </button>
                  @if (openFaq() === item.question) {
                    <div class="faq-answer">
                      @if (hasSteps(item.answer)) {
                        <p class="faq-answer__intro">{{ getAnswerIntro(item.answer) }}</p>
                        <ol class="faq-steps">
                          @for (step of getAnswerSteps(item.answer); track step) {
                            <li>{{ step }}</li>
                          }
                        </ol>
                        @if (getAnswerOutro(item.answer)) {
                          <p class="faq-answer__outro">{{ getAnswerOutro(item.answer) }}</p>
                        }
                      } @else {
                        <p>{{ item.answer }}</p>
                      }
                    </div>
                  }
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>

    <!-- ========== SOCIAL / FOLLOW ========== -->
    <section class="social-section">
      <div class="container">
        <div class="social-inner" appReveal="fadeUp">
          <div class="social-text">
            <span class="section-tag">Stay Connected</span>
            <h2>Follow Our Journey</h2>
            <p>Stay updated with our latest trade activities, market insights, and success stories.</p>
          </div>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/vaarunyaglobalexim" target="_blank" rel="noopener" class="social-link social-link--linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/vaarunyaglobal" target="_blank" rel="noopener" class="social-link social-link--x" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.facebook.com/vaarunyaglobalexim" target="_blank" rel="noopener" class="social-link social-link--facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/vaarunyaglobalexim" target="_blank" rel="noopener" class="social-link social-link--instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CTA ========== -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" fill="rgba(200,169,81,0.15)"/>
              <path d="M24 12 L30 20 H38 L32 28 L34 36 L24 31 L14 36 L16 28 L10 20 H18 Z" fill="#c8a951" opacity="0.3"/>
              <path d="M24 16 L28 22 H34 L29 27 L31 34 L24 30 L17 34 L19 27 L14 22 H20 Z" stroke="#c8a951" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
          <h2>Still Have Questions?</h2>
          <p>Our trade experts are available 24/7 to provide personalized assistance for buyers, farmers, and partners worldwide.</p>
          <div class="cta-buttons">
            <a href="tel:+919100477554" class="btn-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call Expert Now
            </a>
            <a href="https://wa.me/919100477554" target="_blank" rel="noopener" class="btn-outline-light">
              WhatsApp Chat
            </a>
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
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%);
    }

    .hero-shapes {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    .hero-shape {
      position: absolute;
      border-radius: 50%;
      opacity: 0.06;
      animation: float 20s ease-in-out infinite;
    }

    .hero-shape--1 {
      width: 400px; height: 400px;
      background: #c8a951;
      top: -100px; right: -50px;
      animation-delay: 0s;
    }

    .hero-shape--2 {
      width: 250px; height: 250px;
      background: #fff;
      bottom: -60px; left: 10%;
      animation-delay: -5s;
    }

    .hero-shape--3 {
      width: 180px; height: 180px;
      background: #c8a951;
      top: 40%; left: 30%;
      animation-delay: -10s;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(20px, -30px) scale(1.05); }
      50% { transform: translate(-15px, 15px) scale(0.95); }
      75% { transform: translate(10px, 20px) scale(1.02); }
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 30% 50%, transparent 0%, rgba(26,26,46,0.4) 70%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1280px;
      margin: 0 auto;
      padding: 6rem 2rem 3rem;
      width: 100%;
    }

    .hero-breadcrumb {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
      a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.85rem; transition: color 0.3s; &:hover { color: #c8a951; } }
      svg { width: 14px; height: 14px; color: rgba(255,255,255,0.3); }
      span { color: #c8a951; font-size: 0.85rem; font-weight: 600; }
    }

    .hero-content h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.2rem;
      color: #fff;
      font-weight: 800;
      margin-bottom: 1.25rem;
      line-height: 1.15;
      max-width: 650px;
    }

    .hero-highlight {
      background: linear-gradient(135deg, #c8a951, #e0c878);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-content > p {
      color: rgba(255,255,255,0.7);
      font-size: 1.1rem;
      max-width: 580px;
      margin-bottom: 2.5rem;
      line-height: 1.75;
    }

    /* Hero Quick Contact Cards */
    .hero-quick {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-quick__card {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 14px;
      padding: 0.85rem 1.25rem;
      text-decoration: none;
      color: #fff;
      transition: all 0.35s;

      &:hover {
        background: rgba(255,255,255,0.14);
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        border-color: rgba(200,169,81,0.3);
      }

      strong { display: block; font-size: 0.85rem; font-weight: 700; }
      span { display: block; font-size: 0.78rem; color: rgba(255,255,255,0.6); }
    }

    .hero-quick__icon {
      width: 44px;
      height: 44px;
      min-width: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg { width: 22px; height: 22px; }

      &--phone { background: rgba(59,130,246,0.2); svg { color: #60a5fa; } }
      &--wa { background: rgba(37,211,102,0.2); svg { color: #25d366; } }
      &--email { background: rgba(200,169,81,0.2); svg { color: #c8a951; } }
    }

    /* ============ TRUST STRIP ============ */
    .trust-strip {
      background: #fff;
      padding: 0;
      position: relative;
      z-index: 3;
      margin-top: -3rem;
    }

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 10px 50px rgba(0,0,0,0.08);
      border: 1px solid rgba(200,169,81,0.1);
      overflow: hidden;
    }

    .trust-item {
      text-align: center;
      padding: 2rem 1rem;
      border-right: 1px solid #f0f0f0;
      transition: all 0.3s;

      &:last-child { border-right: none; }
      &:hover { background: rgba(200,169,81,0.03); }
    }

    .trust-num {
      display: block;
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 800;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1.1;
      margin-bottom: 0.25rem;
    }

    .trust-label {
      font-size: 0.78rem;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
    }

    /* ============ AUDIENCE SECTION ============ */
    .audience-section {
      padding: 6rem 0 4rem;
      background: #fafafa;
    }

    .audience-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .audience-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 2px solid #eee;
      cursor: pointer;
      transition: all 0.4s;
      position: relative;
      overflow: hidden;

      &:hover, &.active {
        border-color: #c8a951;
        transform: translateY(-4px);
        box-shadow: 0 15px 40px rgba(200,169,81,0.12);
      }

      &.active::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #c8a951, #e0c878);
      }

      h3 { font-size: 1.15rem; color: #1a1a2e; margin-bottom: 0.4rem; }
      p { font-size: 0.85rem; color: #777; line-height: 1.55; margin: 0; }
    }

    .audience-card__icon {
      width: 56px;
      height: 56px;
      margin-bottom: 1rem;
      svg { width: 56px; height: 56px; }
    }

    .audience-card__arrow {
      position: absolute;
      top: 50%;
      right: 1.25rem;
      transform: translateY(-50%);
      opacity: 0;
      transition: all 0.3s;
      svg { width: 20px; height: 20px; color: #c8a951; }
      .audience-card:hover &, .audience-card.active & { opacity: 1; transform: translateY(-50%) translateX(3px); }
    }

    /* Audience Panel */
    .audience-panel {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 20px;
      padding: 2rem 2.5rem;
      margin-bottom: 1rem;
      animation: panelSlideIn 0.4s ease;
    }

    @keyframes panelSlideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .audience-panel__inner {
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
    }

    .audience-panel__icon {
      width: 48px;
      height: 48px;
      min-width: 48px;
      background: rgba(255,255,255,0.08);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg { width: 24px; height: 24px; }
    }

    .audience-panel__inner {
      h4 { color: #fff; font-size: 1.1rem; margin-bottom: 0.5rem; }
      p { color: rgba(255,255,255,0.7); font-size: 0.9rem; line-height: 1.65; margin-bottom: 1rem; }
    }

    .audience-panel__actions {
      display: flex; gap: 0.75rem; flex-wrap: wrap;
    }

    .btn-sm { padding: 0.55rem 1.25rem !important; font-size: 0.85rem !important; }

    /* ============ CONTACT METHODS ============ */
    .contact-methods {
      padding: 6rem 0;
      background: #fff;
    }

    .section-header {
      text-align: center;
      margin-bottom: 3rem;
      h2 { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: #1a1a2e; margin-bottom: 0.75rem; }
      p { color: #666; max-width: 550px; margin: 0 auto; line-height: 1.7; }
    }

    .section-tag {
      display: inline-block;
      color: #c8a951;
      font-weight: 600;
      font-size: 0.8rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
    }

    .methods-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      align-items: stretch;
    }

    .method-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid #eee;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 24px 56px rgba(0,0,0,0.1);
        border-color: rgba(200,169,81,0.3);
      }

      &:hover .method-icon { transform: scale(1.08); }

      &--featured {
        border-color: rgba(37,211,102,0.25);
        background: linear-gradient(180deg, rgba(37,211,102,0.02) 0%, #fff 40%);
        &:hover { border-color: rgba(37,211,102,0.5); box-shadow: 0 24px 56px rgba(37,211,102,0.1); }
      }

      h3 { font-size: 1.15rem; color: #1a1a2e; margin-bottom: 0.25rem; }
      .sub { color: #888; font-size: 0.85rem; margin-bottom: 1.25rem; }
    }

    .method-card__glow {
      position: absolute;
      top: -80px;
      right: -80px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      filter: blur(60px);
      opacity: 0;
      transition: opacity 0.4s;
      .method-card:hover & { opacity: 1; }

      &--blue { background: rgba(59,130,246,0.15); }
      &--green { background: rgba(37,211,102,0.15); }
      &--gold { background: rgba(200,169,81,0.15); }
    }

    .method-card__badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: linear-gradient(135deg, #25d366, #1da851);
      color: #fff;
      padding: 0.3rem 0.85rem;
      border-radius: 50px;
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      animation: badgePulse 2s ease-in-out infinite;
    }

    @keyframes badgePulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.4); }
      50% { box-shadow: 0 0 0 6px rgba(37,211,102,0); }
    }

    .method-icon {
      width: 56px;
      height: 56px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      svg { width: 28px; height: 28px; }
      &.phone { background: rgba(59,130,246,0.1); svg { color: #3b82f6; } }
      &.whatsapp { background: rgba(37,211,102,0.1); svg { color: #25d366; } }
      &.email { background: rgba(200,169,81,0.1); svg { color: #c8a951; } }
    }

    .contact-detail {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      padding: 0.7rem 0.85rem;
      border-bottom: 1px solid #f5f5f5;
      border-left: 3px solid transparent;
      border-radius: 0 8px 8px 0;
      margin-left: -0.85rem;
      margin-right: -0.85rem;
      transition: all 0.25s;
      cursor: default;

      &:last-of-type { border-bottom: none; }

      &:hover {
        background: #f9f9fb;
        border-left-color: #c8a951;
      }

      strong { font-size: 0.72rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.15rem; }
      span, .contact-link {
        color: #1a1a2e;
        font-weight: 600;
        font-size: 0.95rem;
        text-decoration: none;
        transition: all 0.2s;
        position: relative;
        display: inline-block;
      }
      .contact-link {
        cursor: pointer;
        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #c8a951;
          transition: width 0.3s ease;
        }
        &:hover { color: #c8a951; }
        &:hover::after { width: 100%; }
      }
      .email-text { font-size: 0.85rem; word-break: break-all; }
      small { color: #999; font-size: 0.75rem; margin-top: 0.1rem; }
    }

    .whatsapp-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      margin-top: auto;
      padding-top: 1.25rem;
      background: #25d366;
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: all 0.3s;
      width: 100%;
      box-sizing: border-box;
      &:hover { background: #1da851; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.35); }
    }

    /* ============ FORM SECTION ============ */
    .form-section {
      padding: 6rem 0;
      background: #f8f6f0;
    }

    .form-layout {
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      gap: 4rem;
      align-items: start;
    }

    .form-info {
      h2 { font-family: 'Playfair Display', serif; font-size: 2rem; color: #1a1a2e; margin-bottom: 0.75rem; }
      > p { color: #666; line-height: 1.7; margin-bottom: 2rem; }
    }

    .form-illustration {
      margin-bottom: 2rem;
      border-radius: 20px;
      overflow: hidden;
      svg { display: block; width: 100%; height: auto; }
    }

    .standards {
      margin-bottom: 2rem;
    }

    .standard-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      .check-icon {
        width: 32px; height: 32px; min-width: 32px;
        border-radius: 50%;
        background: rgba(200,169,81,0.1);
        display: flex; align-items: center; justify-content: center;
        svg { width: 16px; height: 16px; color: #c8a951; }
      }
      h4 { font-size: 0.9rem; color: #1a1a2e; margin-bottom: 0.15rem; }
      p { font-size: 0.8rem; color: #888; line-height: 1.5; }
    }

    /* Form Card */
    .form-card {
      background: #fff;
      border-radius: 24px;
      padding: 0;
      box-shadow: 0 12px 50px rgba(0,0,0,0.08);
      border: 1px solid rgba(200,169,81,0.1);
      overflow: hidden;
      position: relative;
    }

    .form-progress {
      height: 4px;
      background: #f0f0f0;
    }

    .form-progress__bar {
      height: 100%;
      background: linear-gradient(90deg, #c8a951, #e0c878);
      border-radius: 0 4px 4px 0;
      transition: width 0.5s ease;
    }

    .form-card__header {
      padding: 2rem 2.5rem 0;
      h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: #1a1a2e; margin-bottom: 0.25rem; }
      p { color: #999; font-size: 0.82rem; margin-bottom: 1.5rem; }
    }

    .form-card form {
      padding: 0 2.5rem 2.5rem;
    }

    /* Inquiry Type Chips */
    .inquiry-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .inquiry-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 1rem;
      border: 2px solid #eee;
      border-radius: 50px;
      background: #fff;
      font-size: 0.8rem;
      font-weight: 500;
      color: #666;
      cursor: pointer;
      transition: all 0.3s;

      svg { width: 16px; height: 16px; flex-shrink: 0; }

      &:hover { border-color: #c8a951; color: #1a1a2e; }

      &.active {
        background: linear-gradient(135deg, #c8a951, #a88b3a);
        border-color: #c8a951;
        color: #fff;
        svg { stroke: #fff; }
      }
    }

    .form-group {
      margin-bottom: 1.25rem;
      label { display: block; font-size: 0.82rem; font-weight: 600; color: #1a1a2e; margin-bottom: 0.4rem; }
      input, select, textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 2px solid #eee;
        border-radius: 12px;
        font-size: 0.9rem;
        color: #333;
        background: #fafafa;
        transition: all 0.3s;
        box-sizing: border-box;
        &:focus { outline: none; border-color: #c8a951; background: #fff; box-shadow: 0 0 0 4px rgba(200,169,81,0.08); }
        &::placeholder { color: #bbb; }
      }
      textarea { resize: vertical; min-height: 100px; }
      select { cursor: pointer; }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .btn-submit {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      padding: 1rem;
      border: none;
      border-radius: 14px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.35s;
      svg { width: 18px; height: 18px; }
      &:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(200,169,81,0.4); }
      &:disabled { opacity: 0.5; cursor: not-allowed; }
    }

    .form-note {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.75rem;
      color: #999;
    }

    /* Success Message */
    .success-message {
      text-align: center;
      padding: 4rem 2.5rem;
      position: relative;
      overflow: hidden;
    }

    .success-confetti {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .confetti-piece {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 2px;
      animation: confettiFall 2s ease-out forwards;

      &:nth-child(1) { background: #c8a951; left: 15%; animation-delay: 0s; }
      &:nth-child(2) { background: #4caf50; left: 30%; animation-delay: 0.2s; }
      &:nth-child(3) { background: #1976d2; left: 50%; animation-delay: 0.1s; }
      &:nth-child(4) { background: #e91e63; left: 65%; animation-delay: 0.3s; }
      &:nth-child(5) { background: #ff9800; left: 80%; animation-delay: 0.15s; }
      &:nth-child(6) { background: #9c27b0; left: 40%; animation-delay: 0.25s; }
    }

    @keyframes confettiFall {
      0% { top: -10px; opacity: 1; transform: rotate(0deg) scale(1); }
      100% { top: 80%; opacity: 0; transform: rotate(720deg) scale(0.3); }
    }

    .success-icon {
      width: 80px; height: 80px;
      border-radius: 50%;
      background: rgba(34,197,94,0.1);
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 1.5rem;
      animation: successPulse 0.6s ease;
      svg { width: 40px; height: 40px; color: #22c55e; }
    }

    @keyframes successPulse {
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.15); }
      100% { transform: scale(1); opacity: 1; }
    }

    .success-message h3 { font-family: 'Playfair Display', serif; color: #1a1a2e; font-size: 1.6rem; margin-bottom: 0.5rem; }
    .success-message p { color: #666; margin-bottom: 1.5rem; line-height: 1.6; }
    .success-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    /* ============ FAQ ============ */
    .faq-section {
      padding: 6rem 0;
      background: #fff;
    }

    .faq-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-category {
      margin-bottom: 2.5rem;
    }

    .faq-category__header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid #f0f0f0;

      svg { width: 22px; height: 22px; color: #c8a951; flex-shrink: 0; }
      h3 { font-size: 1.1rem; color: #1a1a2e; margin: 0; }
    }

    .faq-item {
      background: #fafafa;
      border-radius: 14px;
      margin-bottom: 0.6rem;
      overflow: hidden;
      border: 1px solid transparent;
      transition: all 0.3s;
      &.open { border-color: rgba(200,169,81,0.3); background: #fff; box-shadow: 0 4px 20px rgba(200,169,81,0.08); }
    }

    .faq-question {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.15rem 1.5rem;
      border: none;
      background: transparent;
      cursor: pointer;
      text-align: left;
      span { font-size: 0.92rem; font-weight: 600; color: #1a1a2e; padding-right: 1rem; }
    }

    .faq-toggle {
      width: 28px; height: 28px; min-width: 28px;
      border-radius: 50%;
      background: rgba(200,169,81,0.08);
      display: flex; align-items: center; justify-content: center;
      transition: all 0.3s;
      svg { width: 14px; height: 14px; color: #c8a951; transition: transform 0.3s; }
      .open & { background: #c8a951; svg { color: #fff; transform: rotate(45deg); } }
    }

    .faq-answer {
      padding: 0 1.5rem 1.25rem;
      animation: slideDown 0.3s ease;
      p { color: #666; line-height: 1.7; font-size: 0.9rem; }
    }

    .faq-answer__intro {
      color: #666;
      line-height: 1.7;
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }

    .faq-steps {
      list-style: none;
      counter-reset: faq-step;
      padding: 0;
      margin: 0 0 0.75rem;

      li {
        counter-increment: faq-step;
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.6rem 0;
        border-bottom: 1px solid #f5f5f5;
        color: #444;
        font-size: 0.88rem;
        line-height: 1.55;

        &:last-child { border-bottom: none; }

        &::before {
          content: counter(faq-step);
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 26px;
          height: 26px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c8a951, #a88b3a);
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
      }
    }

    .faq-answer__outro {
      color: #888;
      font-size: 0.85rem;
      font-style: italic;
      line-height: 1.6;
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ============ URGENCY LEVELS ============ */
    .urgency-section {
      padding: 6rem 0;
      background: #fff;
    }

    .urgency-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .urgency-card {
      background: #fff;
      border-radius: 16px;
      border: 1px solid #eee;
      overflow: hidden;
      display: flex;
      transition: all 0.35s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.07);
      }
    }

    .urgency-card__indicator {
      width: 5px;
      flex-shrink: 0;

      &--normal { background: linear-gradient(180deg, #4caf50, #66bb6a); }
      &--high { background: linear-gradient(180deg, #ff9800, #ffa726); }
      &--urgent { background: linear-gradient(180deg, #f44336, #ef5350); }
    }

    .urgency-card__content {
      padding: 1.5rem;
      flex: 1;

      p { color: #777; font-size: 0.85rem; line-height: 1.55; margin: 0; }
    }

    .urgency-card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
      gap: 0.75rem;

      h3 { font-size: 1rem; color: #1a1a2e; margin: 0; white-space: nowrap; }
    }

    .urgency-card__time {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.3rem 0.85rem;
      border-radius: 50px;
      white-space: nowrap;

      &--normal { background: rgba(76,175,80,0.1); color: #2e7d32; }
      &--high { background: rgba(255,152,0,0.1); color: #e65100; }
      &--urgent { background: rgba(244,67,54,0.1); color: #c62828; }
    }

    /* ============ TIMEZONE CLOCKS ============ */
    .timezone-section {
      padding: 6rem 0;
      background: #fafafa;
    }

    .tz-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .tz-card {
      background: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid #eee;
      text-align: center;
      transition: all 0.35s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.07);
        border-color: rgba(200,169,81,0.2);
      }

      h3 {
        font-size: 1.1rem;
        color: #1a1a2e;
        margin-bottom: 0.75rem;
      }
    }

    .tz-card__flag {
      font-size: 2.5rem;
      margin-bottom: 0.6rem;
      line-height: 1;
    }

    .tz-card__time {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 800;
      color: #1a1a2e;
      margin-bottom: 0.35rem;
      font-variant-numeric: tabular-nums;
      letter-spacing: -0.5px;
    }

    .tz-card__hours {
      display: block;
      font-size: 0.82rem;
      color: #888;
      margin-bottom: 1rem;
    }

    .tz-card__status {
      display: inline-block;
      padding: 0.3rem 1rem;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background: rgba(244,67,54,0.08);
      color: #c62828;

      &.active {
        background: rgba(76,175,80,0.1);
        color: #2e7d32;
        animation: statusPulse 2s ease-in-out infinite;
      }
    }

    @keyframes statusPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(76,175,80,0.3); }
      50% { box-shadow: 0 0 0 6px rgba(76,175,80,0); }
    }

    /* ============ SOCIAL MEDIA ============ */
    .social-section {
      padding: 5rem 0;
      background: #fff;
    }

    .social-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3rem;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 24px;
      padding: 3rem 3.5rem;
    }

    .social-text {
      .section-tag { color: #c8a951; }
      h2 { color: #fff; font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 0.5rem; }
      p { color: rgba(255,255,255,0.65); line-height: 1.7; max-width: 450px; }
    }

    .social-links {
      display: flex;
      gap: 1rem;
      flex-shrink: 0;
    }

    .social-link {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.35s;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.06);

      svg { width: 22px; height: 22px; color: #fff; transition: transform 0.3s; }

      &:hover svg { transform: scale(1.1); }

      &--linkedin:hover { background: #0077b5; border-color: #0077b5; }
      &--x:hover { background: #1d9bf0; border-color: #1d9bf0; }
      &--facebook:hover { background: #1877f2; border-color: #1877f2; }
      &--instagram:hover { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); border-color: transparent; }
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
    }

    .cta-icon {
      margin-bottom: 1.5rem;
      svg { width: 64px; height: 64px; margin: 0 auto; display: block; }
    }

    .cta-inner h2 { color: #fff; font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 1rem; }
    .cta-inner p { color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 2rem; }

    .cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    /* ============ SHARED ============ */
    .container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #c8a951, #a88b3a);
      color: #fff;
      padding: 0.85rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      border: none;
      cursor: pointer;
      font-size: 0.9rem;
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

    .btn-outline {
      display: inline-block;
      border: 2px solid #c8a951;
      color: #c8a951;
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      background: transparent;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s;
      &:hover { background: #c8a951; color: #fff; }
    }

    /* ============ RESPONSIVE ============ */
    @media (max-width: 1024px) {
      .methods-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
      .form-layout { grid-template-columns: 1fr; }
      .audience-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
      .trust-grid { grid-template-columns: repeat(2, 1fr); }
      .hero-content h1 { font-size: 2.5rem; }
      .urgency-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
      .tz-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
      .social-inner { flex-direction: column; text-align: center; padding: 2.5rem 2rem; }
      .social-text p { margin: 0 auto; }
      .social-links { justify-content: center; }
    }

    @media (max-width: 768px) {
      .hero-content h1 { font-size: 2rem; }
      .hero-quick { flex-direction: column; }
      .hero-quick__card { width: fit-content; }
      .form-row { grid-template-columns: 1fr; }
      .cta-buttons { flex-direction: column; align-items: center; }
      .trust-grid { grid-template-columns: 1fr 1fr; }
      .trust-item { padding: 1.25rem 0.75rem; }
      .inquiry-chips { flex-direction: column; }
      .inquiry-chip { width: 100%; justify-content: center; }
      .form-card form { padding: 0 1.5rem 1.5rem; }
      .form-card__header { padding: 1.5rem 1.5rem 0; }
      .audience-panel { padding: 1.5rem; }
      .audience-panel__inner { flex-direction: column; }
      .social-inner { padding: 2rem 1.5rem; }
      .social-link { width: 48px; height: 48px; }
    }

    .btn-submit:disabled, .inquiry-chip:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
      background: #4a4a4a !important;
      border-color: #4a4a4a !important;
    }

    @keyframes spin-animation {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class ContactComponent implements OnInit, OnDestroy {
  site = signal<any>(null);
  serviceStandards = signal<any[]>([]);
  urgencyLevels = signal<any[]>([]);
  faq = signal<any[]>([]);
  inquiryTypes = signal<string[]>([]);
  openFaq = signal<string | null>(null);
  formSubmitted = signal(false);
  formLoading = signal(false);
  formError = signal<string | null>(null);
  activeAudience = signal<string | null>(null);

  // Live clocks
  indiaTime = signal('');
  usaTime = signal('');
  uaeTime = signal('');
  private clockInterval: any;

  formData = {
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    message: ''
  };

  formProgress() {
    const fields = [
      this.formData.inquiryType,
      this.formData.firstName,
      this.formData.lastName,
      this.formData.email,
      this.formData.phone,
      this.formData.company,
      this.formData.country,
      this.formData.message
    ];
    const filled = fields.filter(f => f && f.trim().length > 0).length;
    return Math.round((filled / fields.length) * 100);
  }

  isFormValid() {
    return !!(
      this.formData.inquiryType &&
      this.formData.firstName.trim() &&
      this.formData.lastName.trim() &&
      this.formData.email.trim() &&
      this.formData.phone.trim() &&
      this.formData.company.trim() &&
      this.formData.country.trim() &&
      this.formData.message.trim()
    );
  }

  constructor(private data: DataService, private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Contact Us | Get a Free Export Quote | Vaarunya Global Exim',
      description: 'Get in touch with Vaarunya Global Exim for export inquiries, pricing, samples or partnerships. We export premium Indian agricultural products to 30+ countries. Fast response guaranteed.',
      keywords: 'contact Vaarunya Global Exim, export inquiry India, get export quote, Indian agricultural export partner, rice spices export inquiry',
      canonicalPath: '/contact'
    });
    this.seo.injectJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Vaarunya Global Exim',
      'url': 'https://www.vaarunyaglobalexim.com/contact',
      'description': 'Get in touch with Vaarunya Global Exim for export inquiries, pricing and partnerships.',
      'publisher': {
        '@type': 'Organization',
        'name': 'Vaarunya Global Exim Pvt Ltd',
        'url': 'https://www.vaarunyaglobalexim.com'
      }
    });

    this.data.getSiteData().subscribe(d => this.site.set(d));
    this.data.getContactData().subscribe(d => {
      this.serviceStandards.set(d.serviceStandards);
      this.urgencyLevels.set(d.urgencyLevels);
      this.faq.set(d.faq);
      this.inquiryTypes.set(d.inquiryTypes);
    });
    this.updateClocks();
    this.clockInterval = setInterval(() => this.updateClocks(), 1000);
  }

  ngOnDestroy() {
    if (this.clockInterval) clearInterval(this.clockInterval);
  }

  private updateClocks() {
    const now = new Date();
    this.indiaTime.set(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    this.usaTime.set(now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    this.uaeTime.set(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
  }

  isOfficeOpen(tz: string): boolean {
    const now = new Date();
    let hour: number;
    if (tz === 'IST') hour = parseInt(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false }));
    else if (tz === 'EST') hour = parseInt(now.toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', hour12: false }));
    else hour = parseInt(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai', hour: 'numeric', hour12: false }));
    return tz === 'EST' ? (hour >= 9 && hour < 17) : (hour >= 9 && hour < 18);
  }

  toggleFaq(question: string) {
    this.openFaq.set(this.openFaq() === question ? null : question);
  }

  onSubmit() {
    if (!this.isFormValid()) return;
    this.formLoading.set(true);
    this.formError.set(null);

    const payload = {
      inquiry_type: this.formData.inquiryType,
      first_name: this.formData.firstName,
      last_name: this.formData.lastName,
      email: this.formData.email,
      phone: this.formData.phone,
      company: this.formData.company,
      country: this.formData.country,
      message: this.formData.message
    };

    this.data.submitInquiry(payload).subscribe({
      next: (res) => {
        this.formSubmitted.set(true);
        this.formLoading.set(false);
      },
      error: (err) => {
        console.error('Inquiry submission error:', err);
        this.formError.set('Failed to submit inquiry. Please check your network and try again or reach out on WhatsApp.');
        this.formLoading.set(false);
      }
    });
  }

  // FAQ step parsing
  hasSteps(answer: string): boolean {
    return /\n\d+\.\s/.test(answer);
  }

  getAnswerIntro(answer: string): string {
    const idx = answer.indexOf('\n1.');
    return idx > 0 ? answer.substring(0, idx) : '';
  }

  getAnswerSteps(answer: string): string[] {
    const matches = answer.match(/\d+\.\s[^\n]+/g);
    return matches ? matches.map(s => s.replace(/^\d+\.\s/, '')) : [];
  }

  getAnswerOutro(answer: string): string {
    const lines = answer.split('\n');
    const last = lines[lines.length - 1];
    return last && !/^\d+\./.test(last) ? last : '';
  }

  resetForm() {
    this.formData = {
      inquiryType: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      message: ''
    };
    this.formSubmitted.set(false);
    this.formLoading.set(false);
    this.formError.set(null);
  }
}
