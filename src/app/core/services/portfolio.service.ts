import { Injectable, signal } from '@angular/core';
import {
  HERO_DATA,
  SOCIAL_LINKS,
  NAV_LINKS,
  SDLC_STEPS,
  OUTCOME_CARDS,
  SKILL_CATEGORIES,
  WORK_EXPERIENCES,
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
  readonly socials = signal(SOCIAL_LINKS);
  readonly navLinks = signal(NAV_LINKS);
  readonly sdlcSteps = signal(SDLC_STEPS);
  readonly outcomeCards = signal(OUTCOME_CARDS);
  readonly skillCategories = signal(SKILL_CATEGORIES);
  readonly experiences = signal(WORK_EXPERIENCES);
  readonly projects = signal(PROJECTS);
  readonly degree = signal(ACADEMIC_DEGREE);
  readonly certifications = signal(CERTIFICATIONS);
  readonly honors = signal(HONORS_CONTESTS);
}
