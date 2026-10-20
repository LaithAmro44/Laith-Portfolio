import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section id="experience" class="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-300/80 bg-white/70 relative">
      <div class="max-w-4xl mx-auto">
        
        <!-- Header -->
        <app-section-title
          badge="Work History"
          title="Professional Experience">
        </app-section-title>

        <!-- Timeline: Clear Vertical Spine connecting Role nodes -->
        <div class="relative pl-7 sm:pl-10 space-y-8 before:absolute before:top-7 before:bottom-7 before:left-[9px] sm:before:left-[12px] before:w-[2px] before:bg-gradient-to-b before:from-sky-500 before:via-sky-200 before:to-slate-300">
          
          @for (exp of experiences(); track exp.company) {
            <div class="relative">
              <!-- Horizontally Centered Node Aligned with Title -->
              <div class="absolute -left-[27px] sm:-left-[33px] top-6 w-3.5 h-3.5 rounded-full bg-sky-600 ring-4 ring-[#ebf1f7]" [ngClass]="{'pulse-dot': exp.isCurrent}"></div>
              
              <div class="spotlight-card p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 space-y-4 shadow-xs hover:border-sky-400 transition duration-200">
                
                <!-- Role Header: Title, Status, Dates & Duration -->
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200 relative z-10">
                  <div>
                    <div class="flex items-center gap-2">
                      <h3 class="text-lg font-bold text-slate-900">{{ exp.role }}</h3>
                      @if (exp.isCurrent) {
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Current
                        </span>
                      }
                    </div>
                    <div class="text-xs text-sky-700 font-bold mt-0.5">{{ exp.company }} &bull; {{ exp.location }}</div>
                  </div>
                  <div class="flex items-center gap-2 self-start sm:self-auto">
                    <span class="text-xs font-mono-code text-slate-500 font-medium">{{ exp.period }}</span>
                    <span class="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 border border-sky-200 text-xs font-mono font-bold shadow-2xs">
                      {{ exp.duration }}
                    </span>
                  </div>
                </div>

                <!-- High-Impact Engineering Bullets -->
                <div class="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed relative z-10">
                  @for (bullet of exp.achievements; track bullet) {
                    <p class="flex items-start gap-2">
                      <span class="text-sky-600 font-bold">&bull;</span>
                      <span>{{ bullet }}</span>
                    </p>
                  }
                </div>

              </div>
            </div>
          }

        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  private portfolioService = inject(PortfolioService);
  readonly experiences = this.portfolioService.experiences;
}
