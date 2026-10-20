// ========================================================
// PORTFOLIO STRONGLY-TYPED INTERFACES
// ========================================================

export type IconName =
  | 'dotnet'
  | 'abp'
  | 'angular'
  | 'csharp'
  | 'database'
  | 'sql-server'
  | 'oracle'
  | 'redis'
  | 'rabbitmq'
  | 'microservices'
  | 'clean-arch'
  | 'solid'
  | 'ddd'
  | 'saas'
  | 'multitenancy'
  | 'micro-frontend'
  | 'api-gateway'
  | 'third-party'
  | 'background-jobs'
  | 'logging'
  | 'distributed-events'
  | 'unit-test'
  | 'postman'
  | 'selenium'
  | 'debugging'
  | 'root-cause'
  | 'regression'
  | 'git'
  | 'azure-devops'
  | 'agile'
  | 'pull-requests'
  | 'ai-agent'
  | 'prompt-eng'
  | 'code-review'
  | 'dev-automation'
  | 'html-css'
  | 'ef-core'
  | 'linq'
  | 'rxjs'
  | 'github'
  | 'email'
  | 'phone'
  | 'location'
  | 'degree'
  | 'verified'
  | 'download'
  | 'external-link'
  | 'chevron-right'
  | 'requirements'
  | 'architecture'
  | 'development'
  | 'testing'
  | 'deployment'
  | 'trophy'
  | 'shield-check'
  | 'sparkles'
  | 'academic-cap'
  | 'lightning';

export interface SkillItem {
  readonly name: string;
  readonly icon: IconName;
  readonly badge?: string;
}

export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly icon: IconName;
  readonly skills: readonly SkillItem[];
}

export interface SdlcStep {
  readonly stepNumber: string;
  readonly title: string;
  readonly subtitle: string;
  readonly icon: IconName;
  readonly isActive?: boolean;
}

export interface OutcomeCard {
  readonly title: string;
  readonly techSubtitle: string;
  readonly description: string;
  readonly accentClass: string;
  readonly borderHoverClass: string;
}

export interface WorkExperience {
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly duration: string;
  readonly isCurrent: boolean;
  readonly achievements: readonly string[];
}

export interface ProjectTag {
  readonly name: string;
  readonly icon: IconName;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly badge: string;
  readonly badgeColor: string;
  readonly context: string;
  readonly description: string;
  readonly tags: readonly ProjectTag[];
  readonly githubUrl?: string;
  readonly liveDemoUrl?: string;
}

export interface AcademicDegree {
  readonly title: string;
  readonly major: string;
  readonly rank: string;
  readonly gpa: string;
  readonly university: string;
  readonly faculty: string;
  readonly honors: string;
  readonly period: string;
  readonly icon: IconName;
}

export interface Certification {
  readonly title: string;
  readonly issuer: string;
  readonly details: string;
  readonly date: string;
  readonly icon: IconName;
}

export interface HonorContest {
  readonly title: string;
  readonly details: string;
  readonly date: string;
  readonly icon: IconName;
}

export interface SocialLink {
  readonly platform: string;
  readonly url: string;
  readonly icon: IconName;
  readonly title: string;
}

export interface NavSection {
  readonly id: string;
  readonly label: string;
  readonly icon: IconName;
}
