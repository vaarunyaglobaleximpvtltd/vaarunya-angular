import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer>
      <div class="footer-top">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="logo-area">
                <img src="assets/images/logo.svg" alt="Vaarunya" class="footer-logo" />
                <div>
                  <h3>Vaarunya Global Exim Pvt Ltd</h3>
                  <p class="tagline">A Promise of Trust and Quality</p>
                </div>
              </div>
              <p class="desc">Building enduring partnerships through transparent global trade solutions. We connect verified suppliers with serious buyers worldwide.</p>
              <div class="trust-badges">
                <a href="https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1" target="_blank" rel="noopener" class="dnb-badge" aria-label="D&B DUNS Registered">
                  <div class="dnb-badge-inner">
                    <div class="dnb-logo">D&amp;B</div>
                    <div class="dnb-text">
                      <span class="dnb-title">DUNS Registered</span>
                      <span class="dnb-sub">Click to Verify</span>
                    </div>
                    <svg class="dnb-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </a>
              </div>

              <div class="social-links">
                <a href="https://www.linkedin.com/company/vaarunyaglobalexim" target="_blank" rel="noopener" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/vaarunyaglobal" target="_blank" rel="noopener" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://www.facebook.com/vaarunyaglobalexim" target="_blank" rel="noopener" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/vaarunyaglobalexim" target="_blank" rel="noopener" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
                </a>
              </div>
            </div>

            <div class="footer-links">
              <h4>Quick Links</h4>
              <ul>
                @for (item of navItems(); track item.route) {
                  <li><a [routerLink]="item.route">{{ item.label }}</a></li>
                }
              </ul>
            </div>

            <div class="footer-contact">
              <h4>Contact Info</h4>
              @if (site(); as s) {
                <div class="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <p>{{ s.company.address.line1 }}<br/>{{ s.company.address.line2 }}<br/>{{ s.company.address.city }} - {{ s.company.address.pincode }}, {{ s.company.address.state }}, {{ s.company.address.country }}</p>
                </div>
                <div class="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <p>{{ s.company.contact.mainPhone }}</p>
                </div>
                <div class="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <p>{{ s.company.contact.mainEmail }}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2025 Vaarunya Global Exim Pvt Ltd. All rights reserved.</p>
          <div class="legal-links">
            <a routerLink="/contact" fragment="contact-form">Privacy Policy</a>
            <a routerLink="/contact" fragment="contact-form">Terms of Service</a>
            <a routerLink="/contact" fragment="contact-form">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: #1a1a2e;
      color: #ccc;
    }

    .footer-top {
      padding: 4rem 0 3rem;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.5fr;
      gap: 3rem;
    }

    .footer-brand {
      .logo-area {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .footer-logo {
        height: 48px;
      }

      h3 {
        color: #fff;
        font-size: 1.1rem;
        margin: 0;
      }

      .tagline {
        color: #c8a951;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin: 0;
      }

      .desc {
        line-height: 1.7;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;

      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ccc;
        transition: all 0.3s;

        svg { width: 18px; height: 18px; }

        &:hover {
          background: #c8a951;
          color: #fff;
          transform: translateY(-3px);
        }
      }
    }

    .footer-links {
      h4 {
        color: #fff;
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #c8a951;
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      li { margin-bottom: 0.75rem; }

      a {
        color: #aaa;
        text-decoration: none;
        transition: all 0.3s;
        font-size: 0.9rem;

        &:hover {
          color: #c8a951;
          padding-left: 5px;
        }
      }
    }

    .footer-contact {
      h4 {
        color: #fff;
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #c8a951;
        }
      }
    }

    .contact-item {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1rem;
      align-items: flex-start;

      svg {
        width: 20px;
        height: 20px;
        color: #c8a951;
        flex-shrink: 0;
        margin-top: 2px;
      }

      p {
        margin: 0;
        font-size: 0.85rem;
        line-height: 1.6;
      }
    }

    .trust-badges {
      margin-bottom: 1.5rem;
    }

    .dnb-badge {
      display: inline-block;
      text-decoration: none;

      &:hover .dnb-badge-inner {
        border-color: #c8a951;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }
    }

    .dnb-badge-inner {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px;
      padding: 0.6rem 1rem;
      transition: all 0.3s;
    }

    .dnb-logo {
      font-size: 1.2rem;
      font-weight: 800;
      color: #fff;
      background: #e31837;
      border-radius: 6px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      letter-spacing: -1px;
    }

    .dnb-text {
      display: flex;
      flex-direction: column;
    }

    .dnb-title {
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .dnb-sub {
      color: #c8a951;
      font-size: 0.7rem;
      line-height: 1.2;
    }

    .dnb-check {
      width: 18px;
      height: 18px;
      color: #25d366;
      flex-shrink: 0;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1.5rem 0;

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      p {
        margin: 0;
        font-size: 0.85rem;
        color: #888;
      }
    }

    .legal-links {
      display: flex;
      gap: 2rem;

      a {
        color: #888;
        text-decoration: none;
        font-size: 0.85rem;
        transition: color 0.3s;

        &:hover { color: #c8a951; }
      }
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-bottom .container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .legal-links {
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
      }
    }
  `]
})
export class FooterComponent implements OnInit {
  navItems = signal<any[]>([]);
  site = signal<any>(null);

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getSiteData().subscribe(d => {
      this.navItems.set(d.navigation);
      this.site.set(d);
    });
  }
}
