import { Directive, ElementRef, OnInit, OnDestroy, Input, signal } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
  host: { '[textContent]': 'displayValue' }
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('appCountUp') target: string = '0';
  @Input() countDuration: number = 2000;
  @Input() countPrefix: string = '';
  @Input() countSuffix: string = '';

  displayValue: string = '';
  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.displayValue = this.countPrefix + '0' + this.countSuffix;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animate();
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animate() {
    const numericValue = parseInt(this.target.replace(/[^0-9]/g, ''), 10);
    const suffix = this.target.replace(/[0-9]/g, '');
    const duration = this.countDuration;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = numericValue / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      this.displayValue = this.countPrefix + Math.floor(current) + suffix + this.countSuffix;
    }, stepDuration);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
