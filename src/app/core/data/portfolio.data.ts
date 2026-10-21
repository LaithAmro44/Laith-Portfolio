import {
  AcademicDegree,
  Certification,
  HonorContest,
  NavSection,
  OutcomeCard,
  Project,
  SdlcStep,
  SkillCategory,
  SocialLink,
  WorkExperience
} from '../models/portfolio.models';

export const HERO_DATA = {
  name: 'Laith Qasem Amro',
  title: 'Full Stack Software Engineer',
  subtitle: 'ASP.NET Core | ABP Framework | Angular Micro-Frontends',
  statusText: 'Available for Hire',
  avatarUrl: 'https://avatars.githubusercontent.com/u/147944575',
  cvFileName: 'Laith_Amro_CV.pdf',
  location: 'Amman, Jordan',
  educationSummary: 'Al-Balqa Applied University (FET) • B.Sc. in Computer Engineering (Ranked 1st)',
  experienceDuration: '1 yr 2 mos+',
  bio: `Results-driven Software Engineer with proven production experience architecting robust web APIs, scalable multi-tenant architectures, and high-performance micro-frontends at QOAD. Deeply committed to Domain-Driven Design (DDD), Clean Architecture, and AI-accelerated delivery.`,
  coreStack: [
    { name: 'Full Stack Software Engineer', icon: 'sparkles' },
    { name: 'ASP.NET Core', icon: 'dotnet' },
    { name: 'ABP Framework', icon: 'abp' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Database', icon: 'database' }
  ] as const
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
    title: 'Direct Email (laithamroq@gmail.com)'
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
    description: 'Built and delivered multi-tenant SaaS platforms using ABP Framework & EF Core. Handled tenant data separation, domain logic, and role permissions designed for scalable everyday use.',
    accentClass: 'text-blue-700',
    borderHoverClass: 'hover:border-blue-500'
  },
  {
    title: 'Clean Code & Rapid Delivery',
    techSubtitle: 'SOLID, Clean Architecture & AI Sprints',
    description: 'Delivered maintainable enterprise code following SOLID principles, Clean Architecture, and AI-assisted workflows. Accelerated sprint delivery while maintaining strict code quality.',
    accentClass: 'text-emerald-700',
    borderHoverClass: 'hover:border-emerald-500'
  },
  {
    title: 'High-Performance Micro-Frontends',
    techSubtitle: 'Angular +40 Pages & Telemetry',
    description: 'Re-engineered legacy monolithic interfaces into modular Angular Micro-Frontends. Slashing module load times by ~95% (20s down to 1s) for real-time fleet telemetry.',
    accentClass: 'text-purple-700',
    borderHoverClass: 'hover:border-purple-500'
  }
];

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'full-stack',
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
    title: 'Software Architecture & Design',
    subtitle: 'Scalable Systems & Patterns',
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
    id: 'data-infra',
    title: 'Databases & Infrastructure',
    subtitle: 'Data Persistence & Distributed Messaging',
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
    id: 'qa',
    title: 'Quality Assurance & Testing',
    subtitle: 'Verification, Diagnosis & Automation',
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
    title: 'DevOps & Collaboration',
    subtitle: 'Version Control, CI/CD & Agile',
    icon: 'deployment',
    skills: [
      { name: 'Git / GitHub / GitLab', icon: 'git' },
      { name: 'Azure DevOps CI/CD', icon: 'azure-devops' },
      { name: 'Agile & Scrum Sprints', icon: 'agile' },
      { name: 'Pull Requests & CI', icon: 'pull-requests' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Developer Productivity',
    subtitle: 'Agentic Workflows & Tool Augmentation',
    icon: 'ai-agent',
    skills: [
      { name: 'Agentic Workflows', icon: 'ai-agent' },
      { name: 'Prompt & Context Eng.', icon: 'prompt-eng' },
      { name: 'Automated Code Review', icon: 'code-review' },
      { name: 'Development Automation', icon: 'dev-automation' }
    ]
  }
];

export const WORK_EXPERIENCES: readonly WorkExperience[] = [
  {
    role: 'Software Engineer',
    company: 'QOAD',
    location: 'Amman, Jordan',
    period: '09/2025 – Present',
    duration: '1 yr 2 mos',
    isCurrent: true,
    achievements: [
      'Enterprise SaaS & Fleet Systems: Engineering multi-tenant SaaS platforms and live GPS telemetry features using ASP.NET Core, ABP Framework, and SQL Server following Domain-Driven Design (DDD).',
      'Micro-Frontend Migration (+40 Pages): Rebuilt legacy tracking monolith into Angular Micro-Frontends, slashing module load time by ~95% (20s down to 1s).',
      'Custom GPS Tracking System: Architected end-to-end vehicle tracking system supporting real-time tracking, live command sending, and historical route playback.',
      'Hardware-Software Integration: Engineered multi-device IoT telemetry ingestion pipelines with Redis caching, RabbitMQ message queues, and background services.'
    ]
  },
  {
    role: 'Computer Engineering Department Assistant',
    company: 'Al-Balqa Applied University (FET)',
    location: 'Amman, Jordan',
    period: '09/2024 – 02/2025',
    duration: '6 mos',
    isCurrent: false,
    achievements: [
      'Academic Leadership: Nominated by department leadership based on 1st-in-class standing (GPA: 3.84/4.00) to support collegiate software labs and technical coursework.',
      'Lab Instruction: Mentored students in Object-Oriented Programming (OOP), Data Structures, Algorithms, and Software Engineering best practices.'
    ]
  }
];

export const PROJECTS: readonly Project[] = [
  {
    id: 'vehicle-tracking',
    title: 'Vehicle Tracking & Fleet Monitoring System',
    badge: 'Enterprise Production',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    context: 'QOAD',
    description: 'Real-time fleet tracking and IoT telemetry platform handling live vehicle positions, historical trip playback, and remote device commands. Modernized as an Angular Micro-Frontend (+40 pages), cutting module latency from 20s to 1s (~95% reduction).',
    tags: [
      { name: 'Angular', icon: 'angular' },
      { name: 'Micro-Frontends', icon: 'micro-frontend' },
      { name: 'RxJS', icon: 'rxjs' },
      { name: 'TypeScript', icon: 'html-css' }
    ]
  },
  {
    id: 'fleet-rental',
    title: 'Fleet & Rental Management System',
    badge: 'Enterprise Production',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    context: 'QOAD',
    description: 'Enterprise fleet management system for tracking vehicle lifecycle, maintenance schedules, driver allocations, and rental contracts with multi-tenant data isolation.',
    tags: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'ABP Framework', icon: 'abp' },
      { name: 'Angular', icon: 'angular' },
      { name: 'SQL Server', icon: 'sql-server' }
    ]
  },
  {
    id: 'multi-tenant-api',
    title: 'Multi-Tenant E-Restaurant Web API',
    badge: 'Production Backend',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    context: 'GitHub Repo',
    description: 'Production-ready ASP.NET Core Web API with multi-tenancy, clean architecture, EF Core, JWT auth, and repository pattern.',
    tags: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'Clean Architecture', icon: 'clean-arch' },
      { name: 'EF Core', icon: 'ef-core' },
      { name: 'JWT Auth', icon: 'verified' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Multi-Tenant-Restaurant-API'
  },
  {
    id: 'academic-portal',
    title: 'Academic Resources Portal',
    badge: 'Full Stack System',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    context: 'Live Platform',
    description: 'Educational resource platform for computer engineering students featuring material sharing, search, and role-based access.',
    tags: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'Angular', icon: 'angular' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'Bootstrap', icon: 'html-css' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Academic-Portal'
  },
  {
    id: 'examination-system',
    title: 'Student Examination Management System',
    badge: 'Enterprise Backend',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    context: 'Collegiate System',
    description: 'Secure examination system handling question banks, automated grading, randomized exam generation, and student performance analytics.',
    tags: [
      { name: 'C# (.NET)', icon: 'csharp' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'Entity Framework', icon: 'ef-core' },
      { name: 'LINQ', icon: 'linq' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Examination-Management-System'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking & REST Integration System',
    badge: 'REST API System',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    context: 'Full Stack API',
    description: 'Full-featured booking management system with room availability tracking, reservation lifecycles, payment integration, and customer notifications.',
    tags: [
      { name: 'ASP.NET Core', icon: 'dotnet' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'Swagger UI', icon: 'postman' },
      { name: 'Clean Code', icon: 'clean-arch' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Hotel-Booking-API'
  },
  {
    id: 'genetic-timetabling',
    title: 'Genetic Timetabling AI Engine',
    badge: 'AI & Heuristics',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    context: 'GitHub Repo',
    description: 'AI-driven university timetable scheduler solving multi-constraint NP-hard conflict problems using custom Genetic Algorithms with automated room and instructor conflict resolution.',
    tags: [
      { name: 'C# (.NET)', icon: 'csharp' },
      { name: 'Genetic Algorithms', icon: 'ai-agent' },
      { name: 'Optimization', icon: 'lightning' },
      { name: 'Heuristics', icon: 'sparkles' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Genetic-Timetable-AI'
  },
  {
    id: 'marks-reveal',
    title: 'MarksReveal University Automation',
    badge: 'Automation Script',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    context: 'Open Source',
    description: 'Automated scraping and notification system for university academic portals, providing instant grade notifications via Telegram webhooks upon publication.',
    tags: [
      { name: 'Python', icon: 'dev-automation' },
      { name: 'Web Scraping', icon: 'postman' },
      { name: 'Webhooks', icon: 'distributed-events' },
      { name: 'Automation', icon: 'lightning' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/MarksReveal'
  },
  {
    id: 'vendor-portal',
    title: 'Vendor Portal UI Modernization',
    badge: 'Micro-Frontend',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    context: 'QOAD',
    description: 'Enterprise procurement vendor portal rebuilt with modern Angular, state management with RxJS, and clean component architecture.',
    tags: [
      { name: 'Angular', icon: 'angular' },
      { name: 'RxJS', icon: 'rxjs' },
      { name: 'SCSS', icon: 'html-css' },
      { name: 'REST', icon: 'api-gateway' }
    ]
  },
  {
    id: 'registration-automation',
    title: 'University Course Registration Automation',
    badge: 'Automation & CLI',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    context: 'Tooling',
    description: 'High-speed automated registration utility handling concurrent requests during high-traffic collegiate enrollment rush hours.',
    tags: [
      { name: 'C# (.NET)', icon: 'csharp' },
      { name: 'HTTP Client', icon: 'api-gateway' },
      { name: 'Concurrency', icon: 'background-jobs' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Course-Registration-Auto'
  },
  {
    id: 'grade-analytics',
    title: 'Student Grade Analytics & Reporting',
    badge: 'Data Processing',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    context: 'Desktop App',
    description: 'Academic analytics desktop software for statistical analysis, grade distribution curves, and PDF report generation for faculty boards.',
    tags: [
      { name: 'C# (.NET)', icon: 'csharp' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'PDF Engine', icon: 'logging' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Grade-Analytics'
  },
  {
    id: 'iot-water-monitoring',
    title: 'Embedded Water Level Telemetry System',
    badge: 'IoT & Firmware',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    context: 'Embedded C++',
    description: 'Microcontroller telemetry firmware reading ultrasonic sensors, driving live OLED displays, and transmitting telemetry via GSM/GPRS modules.',
    tags: [
      { name: 'C / C++', icon: 'csharp' },
      { name: 'IoT Telemetry', icon: 'distributed-events' },
      { name: 'Embedded', icon: 'dev-automation' }
    ],
    githubUrl: 'https://github.com/LaithAmro44/Water-Level-Telemetry'
  }
];

export const ACADEMIC_DEGREE: AcademicDegree = {
  title: 'B.Sc. in Computer Engineering',
  major: 'Computer Systems, Software Engineering & Network Architecture',
  rank: 'Ranked 1st',
  gpa: '3.84 / 4.00',
  university: 'Al-Balqa Applied University',
  faculty: 'Faculty of Engineering & Technology (FET)',
  honors: "Dean's Honor Recognition",
  period: '2021 – 2025',
  icon: 'academic-cap'
};

export const CERTIFICATIONS: readonly Certification[] = [
  {
    title: 'Claude Academy: Claude 101',
    issuer: 'Anthropic',
    details: 'Agentic Workflows & LLM Architecture',
    date: 'Oct 2026',
    icon: 'sparkles'
  },
  {
    title: 'Mastering ASP.NET Core: Production APIs',
    issuer: 'Metigator',
    details: 'Eng. Issam Abdelnabi',
    date: 'May 2026',
    icon: 'lightning'
  }
];

export const HONORS_CONTESTS: readonly HonorContest[] = [
  {
    title: 'Shadow Code • 1st Place (National Champion & Top Solver)',
    details: 'IEEE BAU CS • Competing against 30+ university teams across Jordan',
    date: 'May 2025',
    icon: 'trophy'
  },
  {
    title: 'Code Conundrum Challenge • 3rd Place',
    details: 'ZerOne • Collegiate Programming Competition',
    date: 'Mar 2024',
    icon: 'shield-check'
  }
];
