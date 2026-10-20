import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="border-t border-slate-300/80 py-3.5 sm:py-4 px-4 sm:px-6 relative z-10 bg-white/50">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        
        <!-- Left: Name -->
        <div class="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
          {{ hero().name }}
        </div>

        <!-- Right: Roles -->
        <div class="text-xs text-slate-500 font-mono-code font-semibold sm:text-right">
          Computer Engineer &bull; Full Stack Software Engineer
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  private portfolioService = inject(PortfolioService);
  readonly hero = this.portfolioService.hero;
}
