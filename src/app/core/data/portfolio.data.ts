import {
  AcademicDegree,
  Certification,
  HeroData,
  HonorContest,
  NavSection,
  OutcomeCard,
  Project,
  SdlcStep,
  SkillCategory,
  SocialLink,
  WorkExperience
} from '../models/portfolio.models';

export const HERO_DATA: HeroData = {
  name: 'Laith Qasem Amro',
  title: 'Full Stack Software Engineer',
  subtitle: 'Computer Engineer',
  activeStatus: 'ACTIVE',
  currentRoleText: 'Software Engineer at ITG',
  avatarUrl: 'https://avatars.githubusercontent.com/u/147944575',
  linkedInUrl: 'https://www.linkedin.com/in/laith-amro/',
  linkedInDisplayName: 'Laith Q. Amro',
  cvFileName: 'Laith_Amro_CV.pdf',
  coreStack: [
    { name: 'ASP.NET Core', icon: 'dotnet' },
    { name: 'ABP Framework', icon: 'abp' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Database', icon: 'database' }
  ]
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/LaithAmro44',
    icon: 'github',
    title: 'View GitHub Repositories'
  },
  {
    platform: 'Email',
    url: 'mailto:laithamroq@gmail.com',
    icon: 'email',
    title: 'Direct Email'
  },
  {
    platform: 'Phone',
    url: 'tel:+962777492113',
    icon: 'phone',
    title: 'Direct Phone (+962 777 492 113)'
  }
];

export const NAV_LINKS: readonly NavSection[] = [
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'experience', label: 'Experience', icon: 'briefcase' },
  { id: 'projects', label: 'Projects', icon: 'folder' },
  { id: 'academics', label: 'Education & Awards', icon: 'academic-cap' }
];

export const SDLC_STEPS: readonly SdlcStep[] = [
  {
    stepNumber: '01',
    title: 'Requirements',
    subtitle: 'Product & Client Scope',
    icon: 'requirements'
  },
  {
    stepNumber: '02',
    title: 'Architecture',
    subtitle: 'System Design & DDD',
    icon: 'architecture'
  },
  {
    stepNumber: '03',
    title: 'Development',
    subtitle: 'Full-Stack Implementation',
    icon: 'development',
    isActive: true
  },
  {
    stepNumber: '04',
    title: 'Testing & QA',
    subtitle: 'Verification & Triage',
    icon: 'testing'
  },
  {
    stepNumber: '05',
    title: 'Deployment',
    subtitle: 'CI/CD & Cloud Ops',
    icon: 'deployment'
  }
];

export const OUTCOME_CARDS: readonly OutcomeCard[] = [
  {
    title: 'Multi-Tenant SaaS Platforms',
    techSubtitle: 'ASP.NET Core, ABP Framework & DDD',
    descriptionHtml:
      'Built and delivered multi-tenant SaaS platforms using <strong>ABP Framework &amp; EF Core</strong>. Handled tenant data separation, domain logic, and role permissions designed for scalable everyday use.',
    accentClass: 'text-blue-700',
    borderHoverClass: 'hover:border-blue-500'
  },
  {
    title: 'Clean Code & Rapid Delivery',
    techSubtitle: 'Turning Business Needs into Scalable Software',
    descriptionHtml:
      'Working closely with product teams and stakeholders to understand real business needs. Quick at diagnosing and resolving complex issues while writing clean, maintainable code built to scale.',
    accentClass: 'text-emerald-600',
    borderHoverClass: 'hover:border-emerald-500'
  },
  {
    title: '20s → 1s Load Time (~95% Faster)',
    techSubtitle: 'Modernizing Large Systems with Angular Micro-Frontends',
    descriptionHtml:
      'Split 40+ pages from an old monolithic system into fast, modular Angular Micro-Frontends. Reduced module load time from <strong>20 seconds down to 1 second</strong>, making the app much faster for users.',
    accentClass: 'text-purple-600',
    borderHoverClass: 'hover:border-purple-500'
  }
];

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    subtitle: 'Core Frameworks & Languages',
    icon: 'development',
    skills: [
      { name: 'ASP.NET Core (API/MVC)', icon: 'dotnet' },
      { name: 'ABP Framework', icon: 'abp' },
      { name: 'C# (.NET)', icon: 'csharp' },
      { name: 'Angular (SPA / SSR)', icon: 'angular' },
      { name: 'HTML, SCSS, JS/TS', icon: 'html-css' },
      { name: 'Entity Framework Core', icon: 'ef-core' },
      { name: 'LINQ Queries', icon: 'linq' },
      { name: 'RxJS Observables', icon: 'rxjs' }
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture & Engineering',
    subtitle: 'System Design & Principles',
    icon: 'architecture',
    skills: [
      { name: 'Clean Architecture', icon: 'clean-arch' },
      { name: 'SOLID Principles', icon: 'solid' },
      { name: 'Domain-Driven Design (DDD)', icon: 'ddd' },
      { name: 'Microservices', icon: 'microservices' },
      { name: 'SaaS Architecture', icon: 'saas' },
      { name: 'Multi-Tenancy', icon: 'multitenancy' },
      { name: 'Micro Frontend', icon: 'micro-frontend' },
      { name: 'API Gateway & REST', icon: 'api-gateway' }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations & Databases',
    subtitle: 'Persistence & Message Brokers',
    icon: 'database',
    skills: [
      { name: 'SQL Server (T-SQL)', icon: 'sql-server' },
      { name: 'Oracle Database', icon: 'oracle' },
      { name: 'Redis In-Memory Caching', icon: 'redis' },
      { name: 'RabbitMQ Queues', icon: 'rabbitmq' },
      { name: 'Third-Party APIs', icon: 'third-party' },
      { name: 'Background Jobs', icon: 'background-jobs' },
      { name: 'Structured Logging', icon: 'logging' },
      { name: 'Distributed Events', icon: 'distributed-events' }
    ]
  },
  {
    id: 'testing',
    title: 'Testing & Automation',
    subtitle: 'Quality Assurance & Diagnostics',
    icon: 'testing',
    skills: [
      { name: 'Unit & Functional Testing', icon: 'unit-test' },
      { name: 'Postman API Testing', icon: 'postman' },
      { name: 'Selenium Automation', icon: 'selenium' },
      { name: 'Debugging & Diagnostics', icon: 'debugging' },
      { name: 'Root Cause Analysis', icon: 'root-cause' },
      { name: 'Automated Regression', icon: 'regression' }
    ]
  },
  {
    id: 'devops',
    title: 'Tools & Process',
    subtitle: 'DevOps & Agile Collaboration',
    icon: 'git',
    skills: [
      { name: 'Git / GitHub / GitLab', icon: 'git' },
      { name: 'Azure DevOps CI/CD', icon: 'azure-devops' },
      { name: 'Agile & Scrum Sprints', icon: 'agile' },
      { name: 'Pull Requests & CI', icon: 'pull-requests' }
    ]
  },
  {
    id: 'ai',
    title: 'AI-Assisted Development',
    subtitle: 'Velocity & Agentic Systems',
    icon: 'ai-agent',
    skills: [
      { name: 'Agentic Workflows', icon: 'ai-agent' },
      { name: 'Prompt & Context Eng.', icon: 'prompt-eng' },
      { name: 'Automated Code Review', icon: 'code-review' },
      { name: 'Development Automation', icon: 'dev-automation' }
    ]
  }
];

export const WORK_EXPERIENCE: readonly WorkExperience[] = [
  {
    roleTitle: 'Software Engineer',
    company: 'QOAD',
    location: 'Amman, Jordan',
    period: '09/2025 – Present',
    durationText: '1 yr 2 mos',
    isCurrent: true,
    bulletPoints: [
      'Enterprise SaaS & Fleet Systems: Engineering multi-tenant SaaS platforms and live GPS telemetry features using ASP.NET Core, ABP Framework, and SQL Server following Domain-Driven Design (DDD).',
      'Micro-Frontend Migration (+40 Pages): Rebuilt legacy tracking monolith into Angular Micro-Frontends, slashing module load time by ~95% (20s down to 1s).'
    ],
    techStack: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'Angular', icon: 'angular' },
      { name: 'ABP Framework', icon: 'abp' },
      { name: 'Micro-Frontends', icon: 'micro-frontend' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
      { name: 'DDD', icon: 'ddd' }
    ]
  },
  {
    roleTitle: 'Full Stack .NET Developer Intern',
    company: 'QOAD',
    location: 'Amman, Jordan',
    period: '05/2025 – 08/2025',
    durationText: '4 mos',
    isCurrent: false,
    bulletPoints: [
      'Student Examination Management System: Developed full-stack examination portal using ASP.NET Web API, EF Core, SQL Server, and Angular with anti-duplicate submission validation.',
      'Third-Party REST API Integration: Integrated external hotel booking REST APIs handling access token authentication, headers, and response payload mapping.'
    ],
    techStack: [
      { name: 'C# (.NET)', icon: 'csharp' },
      { name: 'ASP.NET Web API', icon: 'dotnet' },
      { name: 'EF Core', icon: 'ef-core' },
      { name: 'Angular', icon: 'angular' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'RESTful APIs', icon: 'third-party' }
    ]
  }
];

export const PROJECTS: readonly Project[] = [
  {
    title: 'Vehicle Tracking & Fleet Monitoring System',
    categoryBadge: 'Enterprise Production',
    categoryBadgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    org: 'QOAD',
    description:
      'Real-time fleet tracking and IoT telemetry platform handling live vehicle positions, historical trip playback, and remote device commands. Modernized as an Angular Micro-Frontend (+40 pages), cutting module latency from 20s to 1s (~95% reduction).',
    tags: [
      { name: 'Angular', icon: 'angular' },
      { name: 'Micro-Frontends', icon: 'micro-frontend' },
      { name: 'RxJS', icon: 'rxjs' },
      { name: 'TypeScript', icon: 'html-css' },
      { name: 'ASP.NET Core', icon: 'dotnet' }
    ]
  },
  {
    title: 'Fleet & Rental Management Platform',
    categoryBadge: 'Enterprise Production',
    categoryBadgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    org: 'QOAD',
    description:
      'Enterprise multi-tenant vehicle leasing and operations system built with ABP Framework. Features automated contract generation, maintenance scheduling, and payment processing.',
    tags: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'ABP Framework', icon: 'abp' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'Domain-Driven Design (DDD)', icon: 'ddd' }
    ]
  },
  {
    title: 'Multi-Tenant E-Restaurant Web API',
    categoryBadge: 'Full-Stack Web API',
    categoryBadgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    org: 'GitHub',
    description:
      'Modular RESTful API engineered from the ground up for multi-tenant dining brands. Provides complete tenant-data isolation, automated discount pipelines, menu customization, and order lifecycles.',
    tags: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'C#', icon: 'csharp' },
      { name: 'EF Core', icon: 'ef-core' },
      { name: 'Clean Architecture', icon: 'clean-arch' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/E-Restaurant-Web-API'
  },
  {
    title: 'Academic Resources & Study-Plan Portal',
    categoryBadge: 'Academic / Open-Source',
    categoryBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    org: 'BAU - FET',
    description:
      'Centralized educational platform built for BAU Computer Engineering students. Aggregates curated coursework, interactive prerequisite trees, study plans, and past exams.',
    tags: [
      { name: 'Angular', icon: 'angular' },
      { name: 'TypeScript', icon: 'html-css' },
      { name: 'Responsive UI', icon: 'html-css' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Comp.Eng',
    liveUrl: 'https://laithamro44.github.io/Comp.Eng/'
  },
  {
    title: 'Student Examination Management System',
    categoryBadge: 'University Production',
    categoryBadgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    org: 'Epya Solutions',
    description:
      'High-integrity online examination platform supporting timed assessments, randomized question banks, real-time autosave, and strict anti-duplicate submission safeguards.',
    tags: [
      { name: 'ASP.NET Web API', icon: 'dotnet' },
      { name: 'Angular', icon: 'angular' },
      { name: 'EF Core', icon: 'ef-core' },
      { name: 'SQL Server', icon: 'sql-server' }
    ]
  },
  {
    title: 'Hotel Booking & Third-Party REST Engine',
    categoryBadge: 'Integration & Microservice',
    categoryBadgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    org: 'Epya Solutions',
    description:
      'Reservation microservice integrating external hotel partner REST APIs. Implements resilient bearer token authentication, request payload transformations, and caching.',
    tags: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'REST APIs', icon: 'third-party' },
      { name: 'JSON Serialization', icon: 'third-party' }
    ]
  },
  {
    title: 'Genetic Algorithm Timetabling AI',
    categoryBadge: 'AI & Optimization',
    categoryBadgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    org: 'GitHub',
    description:
      'Evolutionary optimization engine solving complex multi-variable collegiate course scheduling. Generates clash-free timetables satisfying room capacities, professor availability, and student streams.',
    tags: [
      { name: 'Python', icon: 'html-css' },
      { name: 'Genetic Algorithms', icon: 'ai-agent' },
      { name: 'Constraint Optimization', icon: 'solid' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/TimetablingAI'
  },
  {
    title: 'MarksReveal Automation Tool',
    categoryBadge: 'Automation Tool',
    categoryBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    org: 'GitHub',
    description:
      'Automated data retrieval and parsing utility built to streamline academic grade verification across university portals, featuring reliable session-state handling and rapid bulk extraction.',
    tags: [
      { name: 'Python', icon: 'html-css' },
      { name: 'Web Scraping', icon: 'debugging' },
      { name: 'Data Parsing', icon: 'dev-automation' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/MarksReveal'
  },
  {
    title: 'Vendor Portal UI Modernization',
    categoryBadge: 'Frontend Modernization',
    categoryBadgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    org: 'QOAD',
    description:
      'Redesigned legacy enterprise supplier portals into modern, responsive SPAs. Implemented real-time dashboard analytics, exportable financial logs, and strict role-based access.',
    tags: [
      { name: 'Angular', icon: 'angular' },
      { name: 'Tailwind CSS', icon: 'html-css' },
      { name: 'TypeScript', icon: 'html-css' },
      { name: 'RxJS', icon: 'rxjs' }
    ]
  },
  {
    title: 'Course Registration Automation System',
    categoryBadge: 'Automation Script',
    categoryBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    org: 'BAU - FET',
    description:
      'High-speed automated enrollment bot built to eliminate student schedule drops during peak university registration rushes. Executes sub-second retry logic and instant section confirmation.',
    tags: [
      { name: 'Python', icon: 'html-css' },
      { name: 'Requests', icon: 'third-party' },
      { name: 'Session Handling', icon: 'debugging' },
      { name: 'Multithreading', icon: 'distributed-events' }
    ]
  },
  {
    title: 'Student Grade Management & Analytics',
    categoryBadge: 'Analytics Tool',
    categoryBadgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    org: 'BAU - FET',
    description:
      'Collegiate grade analytics suite computing cumulative GPA forecasts, degree audit progress, grade distribution curves, and academic standing alerts.',
    tags: [
      { name: 'Java', icon: 'html-css' },
      { name: 'Data Analytics', icon: 'ai-agent' },
      { name: 'OOP', icon: 'solid' },
      { name: 'GUI Design', icon: 'html-css' }
    ]
  },
  {
    title: 'Embedded Water Level Monitoring System',
    categoryBadge: 'IoT & Embedded',
    categoryBadgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    org: 'BAU - FET',
    description:
      'Real-time IoT telemetry system using ultrasonic depth sensors, microcontroller firmware, and wireless alert relays to prevent industrial reservoir overflow and pump dry-run damage.',
    tags: [
      { name: 'C/C++', icon: 'html-css' },
      { name: 'Arduino / ESP32', icon: 'dev-automation' },
      { name: 'IoT Telemetry', icon: 'background-jobs' },
      { name: 'Hardware Sensors', icon: 'microservices' }
    ]
  }
];

export const ACADEMIC_DEGREE: AcademicDegree = {
  title: 'B.Sc. in Computer Engineering',
  rank: 'Ranked 1st',
  gpa: 'GPA: 3.84',
  university: 'Al-Balqa Applied University',
  faculty: 'Faculty of Engineering & Technology (FET)',
  honors: "Dean's Honor",
  period: '2021 – 2025',
  icon: 'academic-cap'
};

export const CERTIFICATIONS: readonly Certification[] = [
  {
    title: 'Claude Academy: Claude 101',
    issuer: 'Anthropic',
    details: 'Agentic Workflows & LLM Architecture',
    date: 'Oct 2026',
    icon: 'sparkles',
    iconBgClass: 'bg-amber-50',
    iconTextClass: 'text-amber-700',
    iconBorderClass: 'border-amber-200/80'
  },
  {
    title: 'Mastering ASP.NET Core: Production APIs',
    issuer: 'Metigator',
    details: 'Eng. Issam Abdelnabi',
    date: 'May 2026',
    icon: 'lightning',
    iconBgClass: 'bg-emerald-50',
    iconTextClass: 'text-emerald-700',
    iconBorderClass: 'border-emerald-200/80'
  }
];

export const HONORS_CONTESTS: readonly HonorContest[] = [
  {
    title: 'Shadow Code • 1st Place (National Champion & Top Solver)',
    details: 'IEEE BAU CS • Competing against 30+ university teams across Jordan',
    date: 'May 2025',
    icon: 'trophy',
    iconBgClass: 'bg-amber-50',
    iconTextClass: 'text-amber-700',
    iconBorderClass: 'border-amber-200/80'
  },
  {
    title: 'Code Conundrum Challenge • 3rd Place',
    details: 'ZerOne • Collegiate Programming Competition',
    date: 'Mar 2024',
    icon: 'shield-check',
    iconBgClass: 'bg-slate-100',
    iconTextClass: 'text-slate-600',
    iconBorderClass: 'border-slate-200/80'
  }
];
