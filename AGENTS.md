# AGENTS & WORKFLOW GUIDELINES: LAITH AMRO PORTFOLIO

This project is built with **Angular 20 Standalone SSR/SSG**, **Tailwind CSS**, and **Cloudflare Pages Edge Hosting**.

---

## 🏛️ Core System Architecture & Non-Negotiable Rules

1. **Zero Internal Component CSS**:
   - Components MUST NOT have internal styles or `styleUrl`.
   - All styling is centralized in `src/styles.css` using Tailwind CSS utility & reusable classes (`.btn-primary`, `.btn-icon`, `.spotlight-card`, `.glass-nav`).

2. **Centralized Strongly-Typed Data & Models**:
   - All portfolio content lives strictly inside `src/app/core/data/portfolio.data.ts`.
   - All data is 100% typed with TypeScript interfaces from `src/app/core/models/portfolio.models.ts`.
   - To add or modify a project, certificate, skill, or experience, update `portfolio.data.ts`. NEVER hardcode text inside component templates!

3. **Centralized SVG Icon Registry (Zero Duplication)**:
   - All SVG path definitions live in `src/app/core/data/svg-icons.data.ts`.
   - Every icon is rendered exclusively via `<app-icon [name]="'icon-name'" [cssClass]="'w-4 h-4'"></app-icon>`.
   - Direct inline `<svg>` blocks in feature templates are strictly forbidden to prevent duplication.

4. **Reusable Shared Components**:
   - All section titles MUST use `<app-section-title [badge]="'...' " [title]="'...'"></app-section-title>`.

5. **SEO & Prerendering**:
   - Every route is pre-rendered at build time via `@angular/ssr`.
   - Schema.org JSON-LD structured data and OpenGraph tags are maintained in `src/index.html` and `src/app/core/services/seo.service.ts`.

---

## 🤖 Agent Roles & Personas

- **Portfolio Architect Agent**:
  - Focus: Angular Signals, component separation, clean code, responsive design.
- **SEO & Performance Specialist Agent**:
  - Focus: Lighthouse 100/100, OpenGraph preview cards, Schema.org Person metadata.
- **DevOps & Cloudflare Agent**:
  - Focus: GitHub Actions CI/CD workflow, Cloudflare Pages build artifacts (`dist/laith-portfolio/browser`), DNS records, custom domain.

---

## 🛠️ Specialized Skill: `portfolio-manager`

Use the `portfolio-manager` skill to:
1. `audit`: Perform pre-flight health checks and verify pre-rendered build outputs.
2. `sync`: Safely update CV, projects, or credentials.
3. `deploy`: Verify CI/CD pipeline and DNS domain mapping.
