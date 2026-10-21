import { Component, OnInit, OnDestroy, inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppIconComponent } from '../app-icon/app-icon.component';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './scroll-top.component.html'
})
export class ScrollTopComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private ngZone = inject(NgZone);

  readonly circumference = 125.66;
  isVisible = false;
  dashOffset = 125.66;

  private scrollListener: (() => void) | null = null;
  private rafId: number | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.ngZone.runOutsideAngular(() => {
      const updateScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
        const newOffset = this.circumference - (scrollProgress * this.circumference);
        const shouldBeVisible = scrollTop > 180;

        if (this.isVisible !== shouldBeVisible || Math.abs(this.dashOffset - newOffset) > 0.4) {
          this.ngZone.run(() => {
            this.isVisible = shouldBeVisible;
            this.dashOffset = newOffset;
          });
        }
      };

      this.scrollListener = () => {
        if (this.rafId !== null) cancelAnimationFrame(this.rafId);
        this.rafId = requestAnimationFrame(updateScroll);
      };

      window.addEventListener('scroll', this.scrollListener, { passive: true });
      this.scrollListener();
    });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.scrollListener) {
        window.removeEventListener('scroll', this.scrollListener);
      }
      if (this.rafId !== null) {
        cancelAnimationFrame(this.rafId);
      }
    }
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
