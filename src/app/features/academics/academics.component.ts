import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './academics.component.html'
})
export class AcademicsComponent {
  private portfolioService = inject(PortfolioService);
  readonly degree = this.portfolioService.academicDegree;
  readonly certifications = this.portfolioService.certifications;
  readonly honors = this.portfolioService.honorsContests;
}
