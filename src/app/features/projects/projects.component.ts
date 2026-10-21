import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  private portfolioService = inject(PortfolioService);
  readonly projects = this.portfolioService.projects;
}
