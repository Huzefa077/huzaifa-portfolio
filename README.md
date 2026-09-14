# Huzaifa Sheikh — Developer Portfolio

[huzaifasheikh.dev](https://huzaifasheikh.dev) is my personal portfolio and publishing space. It presents the full-stack applications I have built, my experience and technical skills, and articles in which I explain what I learn.

The site is built as a statically exported Next.js application and deployed to GitHub Pages. It requires no application server or content database.

## Featured Projects

- **[GrowHabits](https://tarbiyah-planner.vercel.app/)** — A family routine planner that helps children build habits through shared routines, visible progress, and parent-defined rewards.
- **[Ocula](https://ocula-frontend.vercel.app/)** — A browser vision application for facial attribute analysis and selective identity blurring.
- **[NutriWise](https://diet-planner-ten-wheat.vercel.app/)** — A diet-planning platform that calculates nutritional targets and recommends similar meals.
- **[GazeCal](https://gazecal.vercel.app/)** — A browser-based webcam gaze calibration and tracking experiment.

Each project card links to the deployed application and its source repository, with a concise overview of the problem, implementation, and technology stack.

## What the Site Includes

- Responsive home, about, projects, resume, blog, contact, archive, and site-statistics pages
- Filterable project collection with live-site and source-code links
- Markdown-authored blog posts with local media, share controls, and reading progress
- Printable and downloadable resume
- Light and dark themes with persistent user preference
- Responsive navigation and reduced-motion support
- Route-specific metadata, canonical URLs, social share cards, structured data, and a generated sitemap
- Automated static-export verification before deployment

## Blog Publishing

The blog intentionally uses a Git-based static workflow rather than a CMS or database:

1. Articles are written as Markdown files in `content/blog/`.
2. Frontmatter stores the title, publication date, description, and image metadata.
3. Blog media is stored under `public/media/images/blogs/`.
4. Next.js generates every published post as static HTML during the production build.
5. Pushing an update to `main` triggers the GitHub Actions deployment workflow.

This keeps the content version-controlled, portable, and available without a runtime API.

## Technology

- **Framework:** Next.js 16 App Router, React 19, TypeScript
- **Styling:** Tailwind CSS 4, modular CSS, CSS custom properties
- **Content:** Markdown, `gray-matter`, `markdown-to-jsx`
- **Quality:** Biome, Prettier, TypeScript strict checking, custom export verification
- **Hosting:** GitHub Actions and GitHub Pages
- **Typography:** Self-hosted variable fonts

## Architecture

```text
app/                  Routes, layouts, metadata, and global styles
app/styles/           Design tokens and component, layout, and page styles
content/blog/         Local Markdown blog posts
public/media/         Project images, blog media, portraits, icons, and video
src/components/       Reusable components grouped by feature
src/data/             Projects, profile, contact, and resume content
src/hooks/            Shared React hooks
src/lib/              Content, metadata, schema, and utility helpers
scripts/              Generation and static-export verification scripts
.github/workflows/    Build and GitHub Pages deployment workflow
```

Content is separated from presentation so most portfolio updates—such as adding a project, changing resume information, or publishing a post—do not require rewriting page components.

## Running Locally

### Requirements

- Node.js 26, matching `.nvmrc`
- npm

### Setup

```bash
git clone https://github.com/Huzefa077/huzaifa-portfolio.git
cd huzaifa-portfolio
```

```bash
nvm use
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

No environment variables are required for local development. Google Analytics is optional and can be enabled by copying `.env.example` to `.env.local` and setting `NEXT_PUBLIC_GA_TRACKING_ID`.

## Quality Checks

```bash
npm run format
npm run lint
npm run type-check
npm run build
npm run verify-export
```

`npm run dev` and `npm run build` intentionally use webpack because Turbopack has produced repeatable failures in this project.

The production gate is:

```bash
npm run build && npm run verify-export
```

The verifier checks generated pages for draft leakage, metadata completeness, canonical URLs, heading fragments, local images, internal links, and sitemap consistency.

## Deployment

The repository uses one long-lived branch: `main`. A push to `main` runs the GitHub Actions workflow, builds the static export, verifies it, and publishes it to GitHub Pages.

Production: **[huzaifasheikh.dev](https://huzaifasheikh.dev)**

## Author

**Huzaifa Sheikh** — JavaScript Full-Stack Developer

- [Portfolio](https://huzaifasheikh.dev)
- [GitHub](https://github.com/Huzefa077)
- [LinkedIn](https://www.linkedin.com/in/huzaifasheikh077/)
