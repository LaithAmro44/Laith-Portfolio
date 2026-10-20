import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconName } from '../../../core/models/portfolio.models';
import { SVG_ICONS } from '../../../core/data/svg-icons.data';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (fullSvgHtml(); as svg) {
      <span
        class="inline-flex items-center justify-center shrink-0"
        [class]="cssClass"
        [innerHTML]="svg">
      </span>
    }
  `
})
export class AppIconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() cssClass: string = 'w-4 h-4';

  constructor(private sanitizer: DomSanitizer) {}

  readonly fullSvgHtml = computed<SafeHtml>(() => {
    const def = SVG_ICONS[this.name];
    if (!def) return '';
    const rawSvg = `<svg viewBox="${def.viewBox}" class="w-full h-full" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">${def.path}</svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  });
}
