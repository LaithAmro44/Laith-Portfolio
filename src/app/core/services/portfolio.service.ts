import { Injectable, signal } from '@angular/core';
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
  readonly workExperience = signal(WORK_EXPERIENCE);
  readonly experiences = this.workExperience;
  readonly projects = signal(PROJECTS);
  readonly academicDegree = signal(ACADEMIC_DEGREE);
  readonly degree = this.academicDegree;
  readonly certifications = signal(CERTIFICATIONS);
  readonly honorsContests = signal(HONORS_CONTESTS);
  readonly honors = this.honorsContests;
}
