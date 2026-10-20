import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, AppIconComponent],
  template: `
    <section id="projects" class="py-16 sm:py-20 px-4 sm:px-6 border-t border-slate-300/80 relative">
      <div class="max-w-6xl mx-auto">
        
        <!-- Header -->
        <app-section-title
          badge="Portfolio &amp; Code"
          title="Projects &amp; Repositories">
        </app-section-title>

        <!-- 12 Real Projects in Symmetrical 2-Column Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          @for (proj of projects(); track proj.id) {
            <div class="spotlight-card p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 space-y-4 flex flex-col justify-between shadow-xs hover:border-sky-400 hover:shadow-md transition duration-200">
              <div class="space-y-3 relative z-10">
                <div class="flex items-center justify-between text-xs font-mono-code">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border font-bold" [ngClass]="proj.badgeColor">
                    <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {{ proj.badge }}
                  </span>
                  <span class="text-xs font-bold text-slate-500 font-mono-code">{{ proj.context }}</span>
                </div>

                <h3 class="text-lg font-bold text-slate-900 leading-snug">
                  {{ proj.title }}
                </h3>

                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {{ proj.description }}
                </p>

                <!-- Tags using centralized SVG app-icon -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  @for (tag of proj.tags; track tag.name) {
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-800 font-mono-code text-xs font-medium">
                      <app-icon [name]="tag.icon" cssClass="w-3.5 h-3.5"></app-icon>
                      <span>{{ tag.name }}</span>
                    </span>
                  }
                </div>
              </div>

              <!-- Links -->
              @if (proj.githubUrl || proj.liveDemoUrl) {
                <div class="pt-3 border-t border-slate-100 flex items-center gap-3 relative z-10">
                  @if (proj.githubUrl) {
                    <a
                      [href]="proj.githubUrl"
                      target="_blank"
                      class="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-slate-700 hover:text-sky-600 transition">
                      <app-icon name="github" cssClass="w-3.5 h-3.5"></app-icon>
                      <span>Source Code</span>
                    </a>
                  }
                  @if (proj.liveDemoUrl) {
                    <a
                      [href]="proj.liveDemoUrl"
                      target="_blank"
                      class="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold text-sky-600 hover:text-sky-700 transition">
                      <app-icon name="external-link" cssClass="w-3.5 h-3.5"></app-icon>
                      <span>Live Demo</span>
                    </a>
                  }
                </div>
              }
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  readonly projects = this.portfolioService.projects;
}
