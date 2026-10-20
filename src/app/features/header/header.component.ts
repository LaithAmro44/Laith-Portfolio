import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <header class="sticky top-0 z-40 w-full border-b border-slate-300/80 glass-nav px-4 sm:px-6 py-3 sm:py-3.5 shadow-xs transition-all duration-300 relative">
      
      <!-- Global Scroll Reading Progress Bar -->
      <div class="absolute top-0 left-0 right-0 w-full h-[2.5px] bg-slate-200/60 overflow-hidden pointer-events-none z-50">
        <div
          class="h-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 shadow-[0_0_8px_rgba(2,132,199,0.5)] transition-[width] duration-75 ease-out"
          [style.width.%]="scrollProgress()">
        </div>
      </div>

      <div class="max-w-6xl mx-auto flex items-center justify-between">
        
        <!-- Brand / Identity -->
        <a href="#top" (click)="scrollToTop($event)" class="flex items-center group cursor-pointer" aria-label="Go to top of page">
          <div class="flex items-center shrink-0 mr-3">
            <img [src]="hero().avatarUrl" [alt]="hero().name" class="w-9 h-9 rounded-xl object-cover ring-2 ring-sky-500/70 shadow-xs">
          </div>
          <div>
            <span class="font-bold text-base tracking-tight text-slate-900 group-hover:text-sky-600 transition">{{ hero().name }}</span>
            <span class="hidden sm:inline-block text-xs text-slate-500 font-mono-code ml-2">Computer Engineer</span>
          </div>
        </a>

        <!-- Main Desktop Nav Links -->
        <nav class="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-semibold text-slate-600">
          @for (link of navLinks(); track link.id) {
            <a [href]="'#' + link.id" class="nav-item group relative py-1 px-1 flex items-center gap-1.5 transition-colors hover:text-sky-600">
              <app-icon [name]="link.icon" cssClass="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors"></app-icon>
              <span>{{ link.label }}</span>
              <span class="nav-underline"></span>
            </a>
          }
        </nav>

        <!-- Right Quick Actions (Hamburger Menu on Mobile) -->
        <div class="flex items-center gap-2.5 sm:gap-3">
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden p-1.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition"
            aria-label="Toggle Menu">
            @if (!mobileMenuOpen()) {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            } @else {
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            }
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation Drawer -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden pt-3 pb-2 border-t border-slate-200/80 mt-3 space-y-1">
          @for (link of navLinks(); track link.id) {
            <a
              [href]="'#' + link.id"
              (click)="closeMobileMenu()"
              class="mobile-nav-item flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition">
              <app-icon [name]="link.icon" cssClass="w-4 h-4 text-slate-400 shrink-0"></app-icon>
              <span>{{ link.label }}</span>
            </a>
          }
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  private portfolioService = inject(PortfolioService);
  readonly hero = this.portfolioService.hero;
  readonly navLinks = this.portfolioService.navLinks;

  readonly mobileMenuOpen = signal<boolean>(false);
  readonly scrollProgress = signal<number>(0);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window === 'undefined') return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      this.scrollProgress.set(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    }
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
