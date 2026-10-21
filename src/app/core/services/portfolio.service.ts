import { Injectable, signal, computed } from '@angular/core';
import {
  HERO_DATA,
  SOCIAL_LINKS,
  NAV_LINKS,
  SDLC_STEPS,
  OUTCOME_CARDS,
  SKILL_CATEGORIES,
  WORK_EXPERIENCE,
  PROJECTS,
  ACADEMIC_DEGREE,
  CERTIFICATIONS,
  HONORS_CONTESTS
} from '../data/portfolio.data';
import { WorkExperience } from '../models/portfolio.models';

/**
 * Dynamically computes elapsed professional experience duration from a start date
 * up to today (or optional end date) in human-readable years and months format (e.g. "1 yr 1 mo", "2 yrs").
 */
export function calculateExperienceDuration(startDateStr: string, endDateStr?: string): string {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months--;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  let durationStr = '';
  if (years > 0) {
    durationStr += `${years} ${years === 1 ? 'yr' : 'yrs'}`;
  }
  if (months > 0) {
    if (durationStr) durationStr += ' ';
    durationStr += `${months} ${months === 1 ? 'mo' : 'mos'}`;
  }
  if (!durationStr) {
    durationStr = '1 mo';
  }
  return durationStr;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly hero = signal(HERO_DATA);
  readonly socialLinks = signal(SOCIAL_LINKS);
  readonly socials = this.socialLinks;
  readonly navLinks = signal(NAV_LINKS);
  readonly sdlcSteps = signal(SDLC_STEPS);
  readonly outcomeCards = signal(OUTCOME_CARDS);
  readonly skillCategories = signal(SKILL_CATEGORIES);

  private readonly _rawWorkExperience = signal(WORK_EXPERIENCE);

  /**
   * Work experience list with dynamic duration calculation for active/current roles.
   * Updates automatically according to the user's current calendar date.
   */
  readonly workExperience = computed<readonly WorkExperience[]>(() => {
    return this._rawWorkExperience().map(job => {
      if (job.isCurrent && job.startDate) {
        return {
          ...job,
          durationText: calculateExperienceDuration(job.startDate)
        };
      }
      return job;
    });
  });
  readonly experiences = this.workExperience;

  readonly projects = signal(PROJECTS);
  readonly academicDegree = signal(ACADEMIC_DEGREE);
  readonly degree = this.academicDegree;
  readonly certifications = signal(CERTIFICATIONS);
  readonly honorsContests = signal(HONORS_CONTESTS);
  readonly honors = this.honorsContests;
}
