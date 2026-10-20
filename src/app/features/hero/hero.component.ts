import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  template: `
    <section id="hero" class="relative pt-16 sm:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 overflow-hidden">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Bio & Intro -->
          <div class="lg:col-span-7 space-y-6">
            <div>
              <div class="flex items-center gap-3 flex-wrap">
                <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                  {{ hero().name }}
                </h1>
                <span class="inline-flex items-center text-[#0077b5] shrink-0" title="LinkedIn Verified Professional">
                  <app-icon name="verified" cssClass="w-8 h-8 sm:w-10 sm:h-10 fill-currentColor"></app-icon>
                </span>
              </div>

              <!-- Professional Roles & Core Stack Chips -->
              <div class="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <!-- Role: Full Stack Software Engineer -->
                <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-bold shadow-xs hover:border-sky-400 transition">
                  <span class="w-2.5 h-2.5 rounded-full bg-sky-600 shrink-0 ring-4 ring-sky-100"></span>
                  <span>{{ hero().title }}</span>
                </div>

                <!-- ASP.NET Core -->
                <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-mono-code font-bold shadow-xs hover:border-purple-400 transition">
                  <app-icon name="dotnet" cssClass="w-4 h-4 shrink-0"></app-icon>
                  <span>ASP.NET Core</span>
                </div>

                <!-- ABP Framework -->
                <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-mono-code font-bold shadow-xs hover:border-[#B84297] transition">
                  <app-icon name="abp" cssClass="w-4 h-4 shrink-0"></app-icon>
                  <span>ABP Framework</span>
                </div>

                <!-- Angular -->
                <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-mono-code font-bold shadow-xs hover:border-red-400 transition">
                  <app-icon name="angular" cssClass="w-4 h-4 shrink-0"></app-icon>
                  <span>Angular</span>
                </div>

                <!-- Database -->
                <div class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-mono-code font-bold shadow-xs hover:border-[#0284c7] transition">
                  <app-icon name="database" cssClass="w-4 h-4 shrink-0 text-[#0284c7]"></app-icon>
                  <span>Database</span>
                </div>
              </div>
            </div>

            <!-- Bio -->
            <p class="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {{ hero().bio }}
            </p>

            <!-- Actions: Direct Download CV + Quick Contact & Code Icons -->
            <div class="flex flex-wrap items-center gap-3 pt-2">
              <a
                [href]="hero().cvFileName"
                target="_blank"
                [download]="hero().cvFileName"
                class="btn-primary">
                <app-icon name="download" cssClass="w-4 h-4"></app-icon>
                <span>Download CV (PDF)</span>
              </a>

              <div class="flex items-center gap-2 pl-1">
                @for (social of socials(); track social.platform) {
                  <a
                    [href]="social.url"
                    target="_blank"
                    class="btn-icon"
                    [title]="social.title">
                    <app-icon [name]="social.icon" cssClass="w-4 h-4"></app-icon>
                  </a>
                }
              </div>
            </div>
          </div>

          <!-- Right Column: Profile Card (Prominent Centered Photo) -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="w-full max-w-sm floating-card">
              <div class="rounded-3xl p-1 bg-gradient-to-b from-sky-200 via-slate-200 to-slate-300 shadow-xl">
                <div class="spotlight-card rounded-[22px] bg-white p-6 sm:p-7 border border-slate-200 relative flex flex-col items-center text-center justify-between space-y-5">
                  
                  <!-- Top: Large Centered Photo + Current Role -->
                  <div class="flex flex-col items-center space-y-3">
                    <div class="relative group cursor-pointer">
                      <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 ring-sky-500/20 shadow-md">
                        <img
                          [src]="hero().avatarUrl"
                          [alt]="hero().name"
                          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105">
                      </div>
                      <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white" title="Verified Available">
                        <app-icon name="verified" cssClass="w-3.5 h-3.5 fill-currentColor"></app-icon>
                      </div>
                    </div>

                    <div class="space-y-1">
                      <div class="text-base sm:text-lg font-bold text-slate-900 leading-snug">{{ hero().name }}</div>
                      <div class="text-xs font-mono-code text-slate-500 font-medium">B.Sc. in Computer Engineering</div>
                      <div class="text-xs text-sky-700 font-semibold font-mono-code">Software Engineer @ QOAD</div>
                    </div>
                  </div>

                  <!-- Middle: Status Badge -->
                  <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-bold font-mono">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 pulse-dot"></span>
                    <span>{{ hero().statusText }}</span>
                  </div>

                  <!-- Bottom: Metadata Rows -->
                  <div class="w-full pt-4 border-t border-slate-100 space-y-2.5 text-xs text-left">
                    <div class="flex items-center justify-between text-slate-600">
                      <span class="font-mono-code text-slate-400">Location</span>
                      <span class="font-semibold text-slate-800 flex items-center gap-1">
                        <app-icon name="location" cssClass="w-3.5 h-3.5 text-sky-600"></app-icon>
                        {{ hero().location }}
                      </span>
                    </div>

                    <div class="flex items-center justify-between text-slate-600">
                      <span class="font-mono-code text-slate-400">Experience</span>
                      <span class="font-semibold text-slate-800 font-mono-code">{{ hero().experienceDuration }}</span>
                    </div>

                    <div class="flex items-center justify-between text-slate-600">
                      <span class="font-mono-code text-slate-400">Focus</span>
                      <span class="font-semibold text-slate-800 font-mono-code">Full Stack &amp; Micro-FE</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  private portfolioService = inject(PortfolioService);
  readonly hero = this.portfolioService.hero;
  readonly socials = this.portfolioService.socials;
}
