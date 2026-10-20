# Laith Amro — Senior Full-Stack & System Design Engineer Portfolio

A modern, high-performance, responsive portfolio built with **Angular 20 SSR/SSG**, **Tailwind CSS**, and optimized for **100/100 SEO & Core Web Vitals**. Configured for continuous deployment via **Cloudflare Pages**.

[![Angular](https://img.shields.io/badge/Angular-20.3-dd0031.svg?style=flat-square&logo=angular)](https://angular.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deployment-f38020.svg?style=flat-square&logo=cloudflare)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## 🚀 Key Highlights & Architecture

- **Static Site Generation (SSG) & SSR Ready:** Pre-rendered HTML at build time for sub-second First Contentful Paint (FCP) and optimal search engine crawlability.
- **System Architecture Rules:**
  - **Shared Component Pattern:** Dynamic section headers (`SectionTitleComponent`) and centralized icon renderer (`AppIconComponent`).
  - **Zero Internal Component CSS:** Components rely on unified Tailwind utility classes and centralized theme styling in `src/styles.css`.
  - **Centralized Data & Type System:** Fully typed via `PortfolioData`, `SkillCategory`, `Experience`, `Project`, and `AcademicCertification` in `src/app/core/models/portfolio.models.ts`. All content editable in `src/app/core/data/portfolio.data.ts`.
  - **Centralized SVG Registry:** All SVGs stored centrally in `src/app/core/data/svg-icons.data.ts` to prevent duplication and ensure SSR hydration safety.
- **SEO & Social Share Ready:**
  - Rich JSON-LD `Person` / `SoftwareEngineer` structured data.
  - OpenGraph & Twitter Card tags with preview images.
  - Auto-discovered `sitemap.xml` and `robots.txt`.
- **Integrated AI Agent System:**
  - Custom Antigravity skill: `portfolio-manager` (`skills/portfolio-manager/SKILL.md`).
  - Root `AGENTS.md` outlining project rules, file structure, and modification standards.

---

## 🛠️ Project Structure

```text
laith-portfolio/
├── .github/workflows/deploy.yml     # Cloudflare Pages GitHub Action
├── skills/portfolio-manager/        # Antigravity AI Agent Skill
├── public/
│   ├── Laith_Amro_CV.pdf           # Downloadable Resume
│   ├── robots.txt                  # Search Engine Directives
│   └── sitemap.xml                 # Search Engine Sitemap
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── data/
│   │   │   │   ├── portfolio.data.ts   # Centralized portfolio content
│   │   │   │   └── svg-icons.data.ts   # Centralized SVG registry
│   │   │   ├── models/
│   │   │   │   └── portfolio.models.ts # TypeScript interfaces
│   │   │   └── services/
│   │   │       └── portfolio.service.ts # Angular Signals data service
│   │   ├── features/
│   │   │   ├── about/              # Professional summary & engineering highlights
│   │   │   ├── academics/          # Education & certifications
│   │   │   ├── experience/         # Career timeline & achievements
│   │   │   ├── hero/               # Hero landing section & status indicator
│   │   │   ├── projects/           # Featured engineering projects
│   │   │   └── skills/             # Categorized skills matrix & software lifecycle
│   │   └── shared/
│   │       ├── components/
│   │       │   ├── footer/         # Footer with quick navigation
│   │       │   ├── header/         # Responsive navigation bar & CTA
│   │       │   ├── icon/           # SSR-safe centralized SVG renderer
│   │       │   └── section-title/  # Reusable section title component
│   │       └── directives/
│   ├── index.html                  # SEO, JSON-LD Schema & Meta tags
│   ├── styles.css                  # Global design system & theme tokens
│   └── main.ts                     # Application bootstrap
├── AGENTS.md                       # AI Agents guidelines & rules
└── angular.json                    # Angular CLI build & prerender configuration
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/`.

### 3. Build & Prerender for Production
```bash
npm run build
```
Build outputs are generated in `dist/laith-portfolio/browser` with fully pre-rendered static HTML.

---

## 🌐 Cloudflare Pages Deployment & Custom Domain

### Option 1: Cloudflare Dashboard Git Integration (Recommended)
1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Compute (Workers & Pages)** → **Create application** → **Pages** → **Connect to Git**.
2. Select repository: `LaithAmro44/Laith-Portfolio`.
3. Set the build configuration:
   - **Framework preset:** `Angular` (or `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/laith-portfolio/browser`
   - **Node.js version:** Set environment variable `NODE_VERSION` = `20`
4. Click **Save and Deploy**.
5. Under **Custom domains**, click **Set up a custom domain** and enter your domain (e.g. `laithamro.com`). Cloudflare manages SSL certificates automatically.

### Option 2: Automated CI/CD via GitHub Actions
Add the following secrets to your GitHub repository under **Settings → Secrets and variables → Actions**:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Every push to the `main` branch will automatically build and deploy the site.

---

## 🤖 AI Agent Workflow

To manage, audit, or update the portfolio using the Antigravity agent:
- Call the `portfolio-manager` skill to audit SEO, verify builds, update CV data, or check deployment health.
- All modifications strictly preserve centralized data structures, zero internal component styles, and the centralized SVG registry.
