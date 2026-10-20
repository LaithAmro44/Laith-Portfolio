import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, AppIconComponent],
  template: `
    <section id="about" class="py-14 sm:py-20 px-4 sm:px-6 border-t border-slate-300/80 bg-white/70 relative">
      <div class="max-w-6xl mx-auto space-y-10">
        
        <!-- Header -->
        <app-section-title
          badge="Engineering Workflow &amp; Impact"
          title="End-to-End Synergy, Core Engineering Focus">
        </app-section-title>

        <!-- 1. STANDALONE SDLC STEPPER -->
        
        <!-- Desktop / Tablet Horizontal Stepper (>= 768px) -->
        <div class="hidden md:block pb-2 pt-2 overflow-x-auto scrollbar-none">
          <div class="min-w-[700px] max-w-4xl mx-auto relative px-2">
            
            <!-- Background Connector Track -->
            <div class="absolute h-0.5 bg-sky-200" style="left: 10%; right: 10%; top: 20px;"></div>

            <!-- 5 Centered Step Columns -->
            <div class="flex items-start justify-between w-full relative z-10">
              @for (step of sdlcSteps(); track step.stepNumber) {
                <div class="flex-1 min-w-0 flex flex-col items-center text-center px-1">
                  @if (step.isActive) {
                    <div class="relative shrink-0">
                      <div class="absolute -inset-1 rounded-full bg-sky-400 opacity-40 blur-sm animate-pulse"></div>
                      <div class="relative w-11 h-11 -mt-0.5 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md ring-4 ring-sky-100" [title]="step.title">
                        <app-icon [name]="step.icon" cssClass="w-5 h-5"></app-icon>
                      </div>
                    </div>
                    <div class="mt-2.5 w-full">
                      <div class="text-xs font-black text-sky-950 truncate">{{ step.title }}</div>
                      <div class="text-[11px] text-sky-700 font-semibold mt-0.5 leading-tight">{{ step.subtitle }}</div>
                    </div>
                  } @else {
                    <div class="w-10 h-10 rounded-full bg-white border-2 border-sky-400 text-sky-600 flex items-center justify-center shadow-xs shrink-0" [title]="step.title">
                      <app-icon [name]="step.icon" cssClass="w-4 h-4"></app-icon>
                    </div>
                    <div class="mt-3 w-full">
                      <div class="text-xs font-bold text-slate-900 truncate">{{ step.title }}</div>
                      <div class="text-[11px] text-slate-500 mt-0.5 leading-tight">{{ step.subtitle }}</div>
                    </div>
                  }
                </div>
              }
            </div>

          </div>
        </div>

        <!-- Mobile Connected Vertical Pipeline (< 768px, Pure Flexbox, Zero Overlap) -->
        <div class="md:hidden space-y-2">
          <div class="flex items-center gap-2 px-1">
            <span class="w-2 h-2 rounded-full bg-sky-500"></span>
            <span class="text-[11px] font-mono-code font-bold text-sky-700 uppercase tracking-widest">
              End-to-End SDLC Pipeline
            </span>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-slate-300 shadow-xs">
            @for (step of sdlcSteps(); track step.stepNumber; let isLast = $last) {
              <div class="flex gap-3.5">
                <div class="flex flex-col items-center">
                  @if (step.isActive) {
                    <div class="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md ring-4 ring-sky-100 shrink-0">
                      <app-icon [name]="step.icon" cssClass="w-4 h-4"></app-icon>
                    </div>
                  } @else {
                    <div class="w-8 h-8 rounded-full bg-white border-2 border-sky-400 text-sky-600 flex items-center justify-center shadow-xs shrink-0">
                      <app-icon [name]="step.icon" cssClass="w-4 h-4"></app-icon>
                    </div>
                  }
                  @if (!isLast) {
                    <div class="w-0.5 flex-1 min-h-[22px] bg-sky-200 my-1"></div>
                  }
                </div>
                <div [class]="!isLast ? 'pt-1 pb-4 min-w-0 flex-1' : 'pt-1 min-w-0 flex-1'">
                  <div [class]="step.isActive ? 'text-xs font-black text-sky-950 leading-snug' : 'text-xs font-bold text-slate-900 leading-snug'">
                    {{ step.title }}
                  </div>
                  <div [class]="step.isActive ? 'text-[11px] text-sky-700 font-semibold mt-0.5 leading-relaxed' : 'text-[11px] text-slate-500 mt-0.5 leading-relaxed'">
                    {{ step.subtitle }}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- 2. STANDALONE KEY IMPACT & OUTCOMES GRID (3 Focused Achievement Cards) -->
        <div class="space-y-3.5">
          <div class="flex items-center gap-2 px-1">
            <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            <h3 class="text-xs font-mono-code font-bold text-sky-700 uppercase tracking-widest">Key Production Achievements</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            @for (card of outcomeCards(); track card.title) {
              <div class="spotlight-card p-5 rounded-2xl bg-white border border-slate-300 shadow-xs space-y-2 hover:shadow-md transition duration-200" [ngClass]="card.borderHoverClass">
                <div class="text-base sm:text-lg font-black font-mono-code tracking-tight" [ngClass]="card.accentClass">
                  {{ card.title }}
                </div>
                <div class="text-xs font-bold text-slate-900 mt-1">
                  {{ card.techSubtitle }}
                </div>
                <p class="text-[11px] sm:text-xs text-slate-600 mt-2 leading-relaxed">
                  {{ card.description }}
                </p>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  private portfolioService = inject(PortfolioService);
  readonly sdlcSteps = this.portfolioService.sdlcSteps;
  readonly outcomeCards = this.portfolioService.outcomeCards;
}
