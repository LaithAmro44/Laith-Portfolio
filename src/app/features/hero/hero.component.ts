import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  private portfolioService = inject(PortfolioService);
  readonly hero = this.portfolioService.hero;
  readonly socialLinks = this.portfolioService.socialLinks;
}
