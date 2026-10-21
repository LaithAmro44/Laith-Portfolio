import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  private portfolioService = inject(PortfolioService);
  readonly sdlcSteps = this.portfolioService.sdlcSteps;
  readonly outcomeCards = this.portfolioService.outcomeCards;
}
