import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="centered ? 'text-center max-w-2xl mx-auto space-y-2 mb-10' : 'space-y-2 mb-10'">
      <div class="text-xs font-mono-code uppercase tracking-widest text-sky-700 font-bold">
        {{ badge }}
      </div>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        {{ title }}
      </h2>
      @if (subtitle) {
        <p class="text-xs sm:text-sm text-slate-600 mt-1">
          {{ subtitle }}
        </p>
      }
    </div>
  `
})
export class SectionTitleComponent {
  @Input({ required: true }) badge!: string;
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input() centered: boolean = true;
}
