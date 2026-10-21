import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private portfolioService = inject(PortfolioService);
  readonly hero = this.portfolioService.hero;
  readonly navLinks = this.portfolioService.navLinks;

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly scrollProgress = signal<number>(0);
  readonly activeSection = signal<string>('hero');

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window === 'undefined') return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      this.scrollProgress.set(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    }

    const sections = ['about', 'skills', 'experience', 'projects', 'academics'];
    const scrollPos = scrollTop + 140;
    let current = 'hero';
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollPos) {
        current = sections[i];
        break;
      }
    }
    this.activeSection.set(current);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.closeMobileMenu();
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState(null, '', window.location.pathname);
    }
  }
}
