import { Component, HostListener, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, NavigationStart, NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <!-- Preloader -->
    @if (loading()) {
      <div class="preloader">
        <div class="preloader-inner">
          <div class="logo-pulse">
            <span class="v-left">V</span><span class="v-right">V</span>
          </div>
          <div class="preloader-bar"><div class="preloader-progress"></div></div>
          <p>VAARUNYA GLOBAL EXIM</p>
        </div>
      </div>
    }

    <!-- Scroll Progress Bar -->
    <div class="scroll-progress" [style.transform]="'scaleX(' + scrollProgress() + ')'"></div>

    <app-header />
    <main [class.page-transition]="isNavigating()">
      <router-outlet />
    </main>
    <app-footer />

    <!-- Floating D&B Badge -->
    <a href="https://profiles.dunsregistered.com/TPIN-BAS-004.aspx"
       target="_blank"
       rel="noopener"
       class="fab-dnb"
       aria-label="D&B DUNS Registered - View Profile">
      <svg viewBox="0 0 100 100" class="dnb-seal-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer ring -->
        <circle cx="50" cy="50" r="48" fill="url(#dnbGrad)" />
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1" />
        <!-- Inner ring -->
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1" />
        <!-- Gradient def -->
        <defs>
          <radialGradient id="dnbGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#1a7a8a" />
            <stop offset="100%" stop-color="#004d5e" />
          </radialGradient>
        </defs>
        <!-- Top arc text: DUN & BRADSTREET -->
        <path id="topArc" d="M 15,50 A 35,35 0 0,1 85,50" fill="none" />
        <text font-size="9" font-family="Arial,sans-serif" font-weight="700" fill="white" letter-spacing="1.5">
          <textPath href="#topArc" startOffset="50%" text-anchor="middle">DUN &amp; BRADSTREET</textPath>
        </text>
        <!-- Center ampersand -->
        <text x="50" y="56" text-anchor="middle" font-size="26" font-family="Georgia,serif" font-weight="900" fill="white" opacity="0.95">&amp;</text>
        <!-- Bottom label -->
        <text x="50" y="72" text-anchor="middle" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="rgba(255,255,255,0.9)" letter-spacing="0.5">D-U-N-S&#174;</text>
        <text x="50" y="82" text-anchor="middle" font-size="6.5" font-family="Arial,sans-serif" font-weight="600" fill="rgba(255,255,255,0.8)" letter-spacing="1">REGISTERED</text>
        <!-- Verified checkmark stars -->
        <text x="22" y="56" text-anchor="middle" font-size="8" fill="rgba(255,255,255,0.6)">&#9733;</text>
        <text x="78" y="56" text-anchor="middle" font-size="8" fill="rgba(255,255,255,0.6)">&#9733;</text>
      </svg>
      <span class="fab-tooltip">D&amp;B DUNS&#174; Registered</span>
    </a>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/919100477554"
       target="_blank"
       rel="noopener"
       class="fab-whatsapp"
       aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span class="fab-tooltip">Chat with us!</span>
    </a>

    <!-- Back to Top -->
    @if (showBackToTop()) {
      <button class="fab-top" (click)="scrollToTop()" aria-label="Back to top">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
    }
  `,
  styles: [`
    /* Preloader */
    .preloader {
      position: fixed;
      inset: 0;
      background: #1a1a2e;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: preloaderOut 0.6s ease 2.2s forwards;
    }

    .preloader-inner {
      text-align: center;
    }

    .logo-pulse {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      font-family: 'Playfair Display', serif;
    }

    .v-left {
      color: #555;
      display: inline-block;
      animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
    }

    .v-right {
      color: #c8a951;
      display: inline-block;
      margin-left: -1.2rem;
      animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both;
    }

    .preloader-bar {
      width: 200px;
      height: 3px;
      background: rgba(255,255,255,0.1);
      border-radius: 10px;
      margin: 0 auto 1rem;
      overflow: hidden;
    }

    .preloader-progress {
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #c8a951, #e0c878);
      border-radius: 10px;
      animation: loadBar 1.8s ease 0.3s forwards;
      transform-origin: left;
      transform: scaleX(0);
    }

    .preloader p {
      color: rgba(255,255,255,0.4);
      letter-spacing: 4px;
      font-size: 0.7rem;
      font-weight: 600;
      animation: fadeIn 0.5s ease 0.8s both;
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px) rotate(-10deg); }
      to { opacity: 1; transform: translateX(0) rotate(0); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px) rotate(10deg); }
      to { opacity: 1; transform: translateX(0) rotate(0); }
    }

    @keyframes loadBar {
      to { transform: scaleX(1); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes preloaderOut {
      to { opacity: 0; visibility: hidden; pointer-events: none; }
    }

    /* Scroll progress */
    .scroll-progress {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #c8a951, #e0c878, #c8a951);
      transform-origin: left;
      z-index: 10000;
      transition: transform 0.1s linear;
    }

    /* Page transition */
    .page-transition {
      opacity: 0.6;
      transition: opacity 0.15s;
    }

    main {
      min-height: 100vh;
      opacity: 1;
      transition: opacity 0.15s;
    }

    /* Floating D&B Badge */
    .fab-dnb {
      position: fixed;
      bottom: 7.5rem;
      right: 2rem;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(0, 77, 94, 0.6), 0 0 0 3px rgba(255,255,255,0.15);
      z-index: 999;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      text-decoration: none;
      animation: dnbPulse 3s ease infinite;

      &:hover {
        transform: scale(1.12);
        box-shadow: 0 8px 32px rgba(0, 77, 94, 0.7), 0 0 0 4px rgba(255,255,255,0.25);

        .fab-tooltip {
          opacity: 1;
          transform: translateX(-10px);
          visibility: visible;
        }
      }
    }

    .dnb-seal-svg {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
    }

    @keyframes dnbPulse {
      0%, 100% { box-shadow: 0 4px 20px rgba(0, 77, 94, 0.6), 0 0 0 3px rgba(255,255,255,0.15); }
      50% { box-shadow: 0 4px 28px rgba(0, 77, 94, 0.8), 0 0 0 6px rgba(255,255,255,0.08); }
    }

    /* Floating WhatsApp */
    .fab-whatsapp {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #25d366;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      z-index: 999;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      animation: fabPulse 2s ease infinite;
      text-decoration: none;

      svg { width: 32px; height: 32px; }

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.5);

        .fab-tooltip {
          opacity: 1;
          transform: translateX(-10px);
          visibility: visible;
        }
      }
    }

    .fab-tooltip {
      position: absolute;
      right: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(0);
      background: #fff;
      color: #333;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      margin-right: 0.5rem;
    }

    @keyframes fabPulse {
      0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4); }
      50% { box-shadow: 0 4px 30px rgba(37, 211, 102, 0.6), 0 0 0 12px rgba(37, 211, 102, 0.1); }
    }

    /* Back to top */
    .fab-top {
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(26, 26, 46, 0.9);
      backdrop-filter: blur(10px);
      color: #c8a951;
      border: 1px solid rgba(200, 169, 81, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 999;
      animation: fadeInUp 0.4s ease;
      transition: all 0.3s;

      svg { width: 22px; height: 22px; }

      &:hover {
        background: #c8a951;
        color: #fff;
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(200, 169, 81, 0.3);
      }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .fab-dnb {
        width: 58px;
        height: 58px;
        bottom: 6.5rem;
        right: 1.25rem;
        .dnb-seal-svg { width: 58px; height: 58px; }
      }
      .fab-whatsapp {
        width: 52px;
        height: 52px;
        bottom: 1.25rem;
        right: 1.25rem;
        svg { width: 28px; height: 28px; }
      }
      .fab-top {
        width: 42px;
        height: 42px;
        bottom: 1.25rem;
        left: 1.25rem;
      }
    }
  `]
})
export class App implements OnInit {
  loading = signal(true);
  showBackToTop = signal(false);
  scrollProgress = signal(0);
  isNavigating = signal(false);

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.loading.set(false), 2800);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) this.isNavigating.set(true);
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.isNavigating.set(false), 50);
      }
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(docHeight > 0 ? scrollTop / docHeight : 0);
    this.showBackToTop.set(scrollTop > 500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
