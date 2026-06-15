import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled()" [class.menu-open]="menuOpen()">
      <div class="container">
        <a routerLink="/" class="logo">
          <!-- <img src="assets/images/logo.svg" alt="Vaarunya Global Exim" class="logo-img" /> -->
          <div class="logo-text">
            <span class="brand">VAARUNYA</span>
            <span class="sub">GLOBAL EXIM</span>
          </div>
        </a>

        <nav [class.active]="menuOpen()">
          @for (item of navItems(); track item.route) {
            <a [routerLink]="item.route"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: item.route === '/'}"
               (click)="menuOpen.set(false)">
              {{ item.label }}
            </a>
          }
          <a routerLink="/contact" fragment="contact-form" class="nav-cta" (click)="menuOpen.set(false)">Get Quote</a>
        </nav>

        <button class="hamburger" (click)="menuOpen.set(!menuOpen())" [attr.aria-label]="'Toggle menu'">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 0;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background: transparent;

      &.scrolled {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 1px 30px rgba(0, 0, 0, 0.08);
        padding: 0.4rem 0;

        .logo .brand, nav a { color: #1a1a2e; }
        .hamburger span { background: #1a1a2e; }
        .sub { color: #c8a951; }
      }

      &.menu-open {
        background: rgba(255, 255, 255, 0.98);
        .logo .brand, nav a { color: #1a1a2e; }
        .hamburger span { background: #1a1a2e; }
      }
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      z-index: 10;
    }

    .logo-img {
      height: 44px;
      width: auto;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }

    .brand {
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
      letter-spacing: 2px;
      transition: color 0.3s;
    }

    .sub {
      font-size: 0.65rem;
      color: #c8a951;
      letter-spacing: 3px;
      font-weight: 600;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 2rem;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        transition: color 0.3s;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c8a951;
          transition: width 0.3s;
        }

        &:hover::after, &.active::after {
          width: 100%;
        }

        &.active { color: #c8a951; }
      }
    }

    .nav-cta {
      background: linear-gradient(135deg, #c8a951, #a88b3a) !important;
      color: #fff !important;
      padding: 0.6rem 1.5rem;
      border-radius: 50px;
      font-weight: 600 !important;
      transition: transform 0.3s, box-shadow 0.3s !important;

      &::after { display: none !important; }
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(200, 169, 81, 0.4);
      }
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      z-index: 10;

      span {
        width: 28px;
        height: 2.5px;
        background: #fff;
        border-radius: 2px;
        transition: all 0.3s;
      }
    }

    @media (max-width: 768px) {
      .hamburger { display: flex; }

      nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 75%;
        max-width: 320px;
        height: 100vh;
        background: #fff;
        flex-direction: column;
        padding: 6rem 2rem 2rem;
        gap: 1.5rem;
        box-shadow: -5px 0 30px rgba(0,0,0,0.1);
        transition: right 0.3s ease;

        &.active { right: 0; }

        a {
          color: #1a1a2e !important;
          font-size: 1.1rem;
        }
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = signal(false);
  menuOpen = signal(false);
  navItems = signal<any[]>([]);

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getSiteData().subscribe(d => this.navItems.set(d.navigation));
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
