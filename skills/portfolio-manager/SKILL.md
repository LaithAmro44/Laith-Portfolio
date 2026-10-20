---
name: portfolio-manager
description: Manage, audit, update, and deploy Laith Amro's production Angular SSR portfolio. Use to check build health, synchronize CV and project data, run SEO audits, and verify Cloudflare Pages CI/CD deployment.
---

# Portfolio Manager Skill

Use this skill to autonomously manage, audit, and deploy Laith Qasem Amro's personal portfolio website (`laith-portfolio`).

## Project Root Path
`C:\Users\l.amro\Downloads\laith-portfolio`

---

## 🚀 Key Procedures & Capabilities

### 1. Health Check & Build Verification (`audit`)
Run an end-to-end check of the Angular project:
```powershell
Set-Location "C:\Users\l.amro\Downloads\laith-portfolio"; npm run build
```
Verify:
- `dist/laith-portfolio/browser/index.html` exists and contains pre-rendered text.
- No TypeScript compilation errors or missing SVG icon references.
- File bundle transfer size is under 100 kB.

### 2. Updating Content & Synchronizing Data (`sync`)
All data is centralized in:
- `src/app/core/models/portfolio.models.ts` (Interfaces)
- `src/app/core/data/portfolio.data.ts` (Data)
- `src/app/core/data/svg-icons.data.ts` (Icons)

**Rules for adding new content:**
1. If a new SVG is needed, register it in `svg-icons.data.ts` and add its name to `IconName` union in `portfolio.models.ts`.
2. Add the project or certificate into `portfolio.data.ts`.
3. Never edit component HTML to add individual projects or skills.

### 3. Custom Domain & Cloudflare Pages Deployment (`deploy`)
1. **GitHub Setup**:
   - Push to `https://github.com/LaithAmro44/laith-portfolio`.
   - CI/CD workflow is located at `.github/workflows/deploy.yml`.
2. **Cloudflare Pages Configuration**:
   - Project Name: `laith-portfolio`
   - Framework preset: `None` or `Angular`
   - Build command: `npm run build`
   - Build output directory: `dist/laith-portfolio/browser`
3. **Custom Domain Binding**:
   - In Cloudflare Dashboard -> Workers & Pages -> `laith-portfolio` -> Custom Domains.
   - Enter your domain (e.g. `laithamro.com`).
   - Cloudflare activates SSL and DNS records automatically with zero configuration.

### 4. SEO & Lighthouse 100 Audit
- Verify OpenGraph tags in `src/index.html`.
- Verify Schema.org JSON-LD structured data for `Person` and `SoftwareEngineer`.
- Verify `public/robots.txt` and `public/sitemap.xml`.
