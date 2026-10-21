import {
  Component,
  inject,
  signal,
  AfterViewInit,
  OnDestroy,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private portfolioService = inject(PortfolioService);
  private platformId = inject(PLATFORM_ID);

  readonly hero = this.portfolioService.hero;
  readonly navLinks = this.portfolioService.navLinks;
  readonly mobileMenuOpen = signal<boolean>(false);
  readonly activeSection = signal<string>('hero');

  private isNavigating = false;
  private navLockTimeout: any;

  private scrollHandler?: () => void;
  private resizeHandler?: () => void;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Strip any lingering hash from URL on page load
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
      this.initScrollSpyAndProgress();
    }
  }

  ngOnDestroy(): void {
    if (this.navLockTimeout) {
      clearTimeout(this.navLockTimeout);
    }
    if (isPlatformBrowser(this.platformId)) {
      if (this.scrollHandler) window.removeEventListener('scroll', this.scrollHandler);
      if (this.resizeHandler) window.removeEventListener('resize', this.resizeHandler);
    }
  }

  /**
   * ScrollSpy & Synchronized Header Progress Bar
   * Exact algorithm from portfolio_mockup.html:
   * Dynamically tracks sections, computes progress bar width synced to nav item coordinates,
   * and toggles .nav-active and .mobile-nav-active with zero hash in the URL.
   */
  private initScrollSpyAndProgress(): void {
    const mainBar = document.getElementById('scrollProgressBar');
    const headerEl = document.querySelector('header');
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'academics'];

    let isScrollTicking = false;

    const handleScrollAndProgress = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const winWidth = window.innerWidth;
      const maxScroll = docHeight - winHeight;

      if (maxScroll <= 0) return;

      const headerOffset = headerEl ? Math.round(headerEl.getBoundingClientRect().height) : 64;
      const trackSections = sectionIds
        .map(id => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (trackSections.length === 0) return;

      // 1. Calculate actual scroll boundaries for each section
      const scrollThresholds = trackSections.map((sec, idx) => {
        if (idx === 0) return 0;
        return Math.max(0, sec.offsetTop - headerOffset - 25);
      });

      // 2. Identify the active section index based on scroll position
      let activeIndex = 0;
      for (let j = trackSections.length - 1; j >= 0; j--) {
        if (scrollY >= scrollThresholds[j]) {
          activeIndex = j;
          break;
        }
      }

      const currentSectionId = trackSections[activeIndex] ? trackSections[activeIndex].id : 'hero';
      // Suppress intermediate flickering while smooth scroll navigation is running
      if (!this.isNavigating) {
        if (this.activeSection() !== currentSectionId) {
          this.activeSection.set(currentSectionId);
        }
      }

      // 3. Compute Synchronized Progress Bar Width (aligned with Header Nav Links)
      if (mainBar) {
        const isNearBottom = scrollY + winHeight >= docHeight - 15;
        const headerLeft = headerEl ? headerEl.getBoundingClientRect().left : 0;
        const headerWidth = headerEl ? headerEl.getBoundingClientRect().width : winWidth;

        const aboutLink = document.querySelector<HTMLElement>('.nav-item[data-section="about"]');
        const skillsLink = document.querySelector<HTMLElement>('.nav-item[data-section="skills"]');
        const expLink = document.querySelector<HTMLElement>('.nav-item[data-section="experience"]');
        const projLink = document.querySelector<HTMLElement>('.nav-item[data-section="projects"]');
        const acadLink = document.querySelector<HTMLElement>('.nav-item[data-section="academics"]');

        const isDesktop = winWidth >= 768 && aboutLink && aboutLink.offsetParent !== null;

        if (isDesktop && aboutLink && skillsLink && expLink && projLink && acadLink) {
          const xTargets = [
            0,
            aboutLink.getBoundingClientRect().left - headerLeft,
            skillsLink.getBoundingClientRect().left - headerLeft,
            expLink.getBoundingClientRect().left - headerLeft,
            projLink.getBoundingClientRect().left - headerLeft,
            acadLink.getBoundingClientRect().left - headerLeft,
            headerWidth
          ];

          const startScroll = scrollThresholds[activeIndex];
          const endScroll =
            activeIndex === trackSections.length - 1
              ? maxScroll
              : scrollThresholds[activeIndex + 1];
          const range = Math.max(endScroll - startScroll, 1);

          let frac = 0;
          if (isNearBottom) {
            frac = 1;
          } else {
            frac = Math.min(Math.max((scrollY - startScroll) / range, 0), 1);
          }

          const startX = xTargets[activeIndex];
          const endX = xTargets[activeIndex + 1];
          const targetWidth = startX + frac * (endX - startX);

          mainBar.style.width = Math.min(Math.max(targetWidth, 0), headerWidth) + 'px';
        } else {
          const pct = isNearBottom
            ? 100
            : Math.min(Math.max((scrollY / maxScroll) * 100, 0), 100);
          mainBar.style.width = pct + '%';
        }
      }

      // 4. Update Desktop Nav Items (Selected State & Underline Indicator)
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(item => {
        const section = item.getAttribute('data-section');
        if (section === currentSectionId) {
          item.classList.add('nav-active');
        } else {
          item.classList.remove('nav-active');
        }
      });

      // 5. Update Mobile Drawer Nav Items
      const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
      mobileNavItems.forEach(item => {
        const section = item.getAttribute('data-section');
        if (section === currentSectionId) {
          item.classList.add('mobile-nav-active');
        } else {
          item.classList.remove('mobile-nav-active');
        }
      });
    };

    this.scrollHandler = () => {
      if (!isScrollTicking) {
        window.requestAnimationFrame(() => {
          handleScrollAndProgress();
          isScrollTicking = false;
        });
        isScrollTicking = true;
      }
    };

    this.resizeHandler = () => handleScrollAndProgress();

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    window.addEventListener('resize', this.resizeHandler, { passive: true });

    // Initial run immediately and after DOM stabilizes
    handleScrollAndProgress();
    setTimeout(handleScrollAndProgress, 100);
    setTimeout(handleScrollAndProgress, 300);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  /**
   * Smoothly navigates to section without placing any hash in the URL.
   * Locks active tab to destination during smooth scrolling so intermediate tabs don't flicker.
   */
  scrollToSection(id: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();

    // Lock active tab to target section so smooth scroll does not flash intermediate sections
    this.isNavigating = true;
    this.activeSection.set(id);
    if (this.navLockTimeout) clearTimeout(this.navLockTimeout);

    if (typeof window !== 'undefined') {
      const el = document.getElementById(id);
      if (el) {
        // Measure header height using top bar for exact consistency across open/closed mobile drawer
        const headerEl = document.querySelector('header');
        const topBar = headerEl ? (headerEl.querySelector('.max-w-6xl') as HTMLElement) : null;
        const headerHeight = topBar
          ? Math.round(topBar.getBoundingClientRect().height)
          : (window.innerWidth >= 640 ? 65 : 61);

        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = Math.round(elementPosition + window.scrollY - headerHeight + 1);

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }

      // Ensure no #hash ever appears in address bar
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
    }

    // Release lock once smooth scrolling finishes
    this.navLockTimeout = setTimeout(() => {
      this.isNavigating = false;
      this.activeSection.set(id);
    }, 850);
  }

  /**
   * Smoothly scrolls back to top without modifying the URL.
   */
  scrollToTop(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.closeMobileMenu();

    this.isNavigating = true;
    this.activeSection.set('hero');
    if (this.navLockTimeout) clearTimeout(this.navLockTimeout);

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Clean address bar
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname);
      }
    }

    this.navLockTimeout = setTimeout(() => {
      this.isNavigating = false;
      this.activeSection.set('hero');
    }, 850);
  }
}
