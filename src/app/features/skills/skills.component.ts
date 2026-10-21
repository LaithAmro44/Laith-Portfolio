import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { AppIconComponent } from '../../shared/components/app-icon/app-icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, AppIconComponent],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  readonly categories = this.portfolioService.skillCategories;
}
