import { Component, input, computed, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconName } from '../../../core/models/portfolio.models';
import { SVG_ICONS } from '../../../core/data/svg-icons.data';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './app-icon.component.html'
})
export class AppIconComponent {
  private sanitizer = inject(DomSanitizer);

  readonly name = input.required<IconName>();
  readonly cssClass = input<string>('w-4 h-4');

  readonly wrapperClasses = computed(() => {
    return `inline-flex items-center justify-center shrink-0 ${this.cssClass()}`;
  });

  readonly svg = computed<SafeHtml>(() => {
    const raw = SVG_ICONS[this.name()];
    if (!raw) return '';
    return this.sanitizer.bypassSecurityTrustHtml(raw);
  });
}
