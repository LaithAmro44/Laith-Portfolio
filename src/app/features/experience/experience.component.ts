import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  private portfolioService = inject(PortfolioService);
  readonly experiences = this.portfolioService.workExperience;
}
