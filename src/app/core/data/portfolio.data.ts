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
  currentRoleText: 'Software Engineer at QOAD',
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
      { name: 'EF Core', icon: 'ef-core' },
      { name: 'SQL Server', icon: 'sql-server' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
      { name: 'DDD', icon: 'ddd' }
    ]
  },
  {
    roleTitle: 'Full Stack .NET Developer Intern',
    company: 'Epya Solutions',
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
    "title": "Vehicle Tracking & Fleet Monitoring System",
    "categoryBadge": "Enterprise Production",
    "categoryBadgeColor": "bg-sky-50 text-sky-700 border border-sky-200",
    "org": "QOAD",
    "description": "Real-time fleet tracking and IoT telemetry platform handling live vehicle positions, historical trip playback, and remote device commands. Modernized as an Angular Micro-Frontend (+40 pages), cutting module latency from 20s to 1s (~95% reduction).",
    "tags": [
      {
        "name": "Angular",
        "icon": "angular"
      },
      {
        "name": "Micro-Frontends",
        "icon": "micro-frontend"
      },
      {
        "name": "RxJS",
        "icon": "rxjs"
      },
      {
        "name": "TypeScript",
        "icon": "html-css"
      },
      {
        "name": "ASP.NET Core",
        "icon": "dotnet"
      }
    ]
  },
  {
    "title": "Fleet & Rental Management Platform",
    "categoryBadge": "Enterprise SaaS",
    "categoryBadgeColor": "bg-sky-50 text-sky-700 border border-sky-200",
    "org": "QOAD",
    "description": "Multi-tenant car rental and fleet SaaS platform architected with Domain-Driven Design (DDD). Engineered domain aggregates, automated role-based permissions, background notifications, and RabbitMQ event streaming.",
    "tags": [
      {
        "name": "ASP.NET Core",
        "icon": "dotnet"
      },
      {
        "name": "ABP Framework",
        "icon": "abp"
      },
      {
        "name": "RabbitMQ",
        "icon": "saas"
      },
      {
        "name": "SQL Server",
        "icon": "sql-server"
      },
      {
        "name": "DDD",
        "icon": "clean-arch"
      }
    ]
  },
  {
    "title": "Multi-Tenant E-Restaurant Web API",
    "categoryBadge": "Open Source Architecture",
    "categoryBadgeColor": "bg-blue-50 text-blue-700 border border-blue-200",
    "org": "GitHub",
    "description": "Architectural multi-tenant restaurant backend API built with ASP.NET Core and Entity Framework Core following Clean Architecture. Features strict tenant data isolation, English/Arabic localization, auditing, and automated unit tests.",
    "tags": [
      {
        "name": "ASP.NET Core",
        "icon": "dotnet"
      },
      {
        "name": "C# (.NET)",
        "icon": "csharp"
      },
      {
        "name": "EF Core",
        "icon": "ef-core"
      },
      {
        "name": "Clean Architecture",
        "icon": "clean-arch"
      }
    ],
    "githubUrl": "https://github.com/LaithAmro44/E-Restaurant-Web-API"
  },
  {
    "title": "Academic Resources & Study-Plan Portal",
    "categoryBadge": "Live Platform",
    "categoryBadgeColor": "bg-emerald-50 text-emerald-700 border border-emerald-200",
    "org": "BAU - FET",
    "description": "Production deployed portal serving university engineering students with an interactive prerequisite study-plan tree, allowing students to navigate course pathways and access curated academic materials.",
    "tags": [
      {
        "name": "Angular",
        "icon": "angular"
      },
      {
        "name": "TypeScript",
        "icon": "html-css"
      },
      {
        "name": "SPA Architecture",
        "icon": "code"
      }
    ],
    "githubUrl": "https://github.com/LaithAmro44/Comp.Eng",
    "liveUrl": "https://laithamro44.github.io/Comp.Eng/"
  },
  {
    "title": "Student Examination Management System",
    "categoryBadge": "Full Stack Platform",
    "categoryBadgeColor": "bg-sky-50 text-sky-700 border border-sky-200",
    "org": "Epya Solutions",
    "description": "Full-stack academic assessment system built during internship at Epya Solutions. Implemented course and instructor management, dynamic question banks, timed test sessions, and anti-duplicate submission validation rules.",
    "tags": [
      {
        "name": "ASP.NET Web API",
        "icon": "dotnet"
      },
      {
        "name": "Entity Framework",
        "icon": "code"
      },
      {
        "name": "Angular",
        "icon": "angular"
      },
      {
        "name": "SQL Server",
        "icon": "sql-server"
      }
    ]
  },
  {
    "title": "Hotel Booking & Third-Party REST Engine",
    "categoryBadge": "API Integration",
    "categoryBadgeColor": "bg-blue-50 text-blue-700 border border-blue-200",
    "org": "Epya Solutions",
    "description": "Integration module bridging enterprise reservation software with external hotel booking REST APIs. Managed bearer token lifecycles, API key security, rate limiting, and structured response transformations.",
    "tags": [
      {
        "name": "ASP.NET Core",
        "icon": "dotnet"
      },
      {
        "name": "RESTful APIs",
        "icon": "shield-check"
      },
      {
        "name": "OAuth & Tokens",
        "icon": "shield-check"
      }
    ]
  },
  {
    "title": "Genetic Algorithm Timetabling AI",
    "categoryBadge": "AI & Optimization",
    "categoryBadgeColor": "bg-cyan-50 text-cyan-700 border border-cyan-200",
    "org": "GitHub",
    "description": "Intelligent scheduling optimization system solving university course timetabling constraints using Genetic Algorithms (GA). Formulated custom penalty functions and evolutionary crossover operators for zero conflict schedules.",
    "tags": [
      {
        "name": "Python",
        "icon": "code"
      },
      {
        "name": "Genetic Algorithms",
        "icon": "sparkles"
      },
      {
        "name": "Optimization",
        "icon": "code"
      }
    ],
    "githubUrl": "https://github.com/LaithAmro44/TimetablingAI"
  },
  {
    "title": "MarksReveal Automation Tool",
    "categoryBadge": "Automation Tool",
    "categoryBadgeColor": "bg-emerald-50 text-emerald-700 border border-emerald-200",
    "org": "GitHub",
    "description": "Python and Selenium automation tool built to securely authenticate, query, and extract student grades and academic transcripts directly from university portals, reducing manual retrieval effort.",
    "tags": [
      {
        "name": "Python",
        "icon": "code"
      },
      {
        "name": "Selenium",
        "icon": "lightning"
      },
      {
        "name": "Automation",
        "icon": "lightning"
      }
    ],
    "githubUrl": "https://github.com/LaithAmro44/MarksReveal"
  },
  {
    "title": "Vendor Portal UI Modernization",
    "categoryBadge": "Enterprise System",
    "categoryBadgeColor": "bg-sky-50 text-sky-700 border border-sky-200",
    "org": "QOAD",
    "description": "Modernized vendor and supplier management screens into responsive, modular Angular components. Improved onboarding forms, purchase order tracking, and day-to-day workflow usability.",
    "tags": [
      {
        "name": "Angular",
        "icon": "angular"
      },
      {
        "name": "TypeScript",
        "icon": "html-css"
      },
      {
        "name": "RxJS",
        "icon": "rxjs"
      },
      {
        "name": "Modular UI",
        "icon": "code"
      }
    ]
  },
  {
    "title": "Course Registration Automation System",
    "categoryBadge": "Automation Bot",
    "categoryBadgeColor": "bg-emerald-50 text-emerald-700 border border-emerald-200",
    "org": "BAU - FET",
    "description": "Desktop automation tool created in Python with Selenium and Tkinter. Automatically checks lecture seat openings during enrollment rush hours and sends instant email status updates.",
    "tags": [
      {
        "name": "Python",
        "icon": "code"
      },
      {
        "name": "Selenium",
        "icon": "lightning"
      },
      {
        "name": "Tkinter GUI",
        "icon": "code"
      },
      {
        "name": "Web Automation",
        "icon": "lightning"
      }
    ]
  },
  {
    "title": "Student Grade Management & Analytics",
    "categoryBadge": "Desktop Application",
    "categoryBadgeColor": "bg-indigo-50 text-indigo-700 border border-indigo-200",
    "org": "BAU - FET",
    "description": "Desktop grading software built using Java (Swing) to record course grades, validate entry ranges, and compute key class statistics like class averages, highest scores, and GPA distributions.",
    "tags": [
      {
        "name": "Java",
        "icon": "code"
      },
      {
        "name": "Java Swing",
        "icon": "code"
      },
      {
        "name": "Statistics",
        "icon": "sparkles"
      },
      {
        "name": "Data Validation",
        "icon": "code"
      }
    ]
  },
  {
    "title": "Embedded Water Level Monitoring System",
    "categoryBadge": "IoT & Embedded",
    "categoryBadgeColor": "bg-teal-50 text-teal-700 border border-teal-200",
    "org": "BAU - FET",
    "description": "Microcontroller-based tank level monitor using an ultrasonic distance sensor. Calculates water capacity percentages, displays live levels on an LCD screen, and simulates circuits in Proteus.",
    "tags": [
      {
        "name": "Embedded C",
        "icon": "api-gateway"
      },
      {
        "name": "Microcontrollers",
        "icon": "code"
      },
      {
        "name": "Proteus Simulation",
        "icon": "code"
      },
      {
        "name": "Ultrasonic Sensors",
        "icon": "api-gateway"
      }
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
