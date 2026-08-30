# Portfolio Website

My personal developer portfolio, featuring my projects, experience, skills, writing, resume, and contact details.

## Live Website

[Visit huzaifasheikh.dev](https://huzaifasheikh.dev)

## About the Portfolio

This website is the professional home of Huzaifa Sheikh, a fresh Computer Engineering graduate and full-stack JavaScript developer. It brings together the applications I have built, my practical experience, technical background, and writing. Visitors can also view or download my resume and contact me directly.

## Highlights

- Selected full-stack development projects
- Practical work shaped by real user requirements
- A dedicated space for technical blogs and learning notes
- Resume, skills, education, and professional experience
- Responsive interface with light and dark themes
- Direct email and professional profile links

## Screenshots

Screenshots can be added to `docs/screenshots/` using the filenames below.

### Home page

![Home page screenshot](docs/screenshots/home.png)

### Projects section

![Projects section screenshot](docs/screenshots/projects.png)

### Blog section

![Blog section screenshot](docs/screenshots/blog.png)

### Contact page

![Contact page screenshot](docs/screenshots/contact.png)

## Website Sections

- **Home** — A brief introduction and links to featured areas of the site.
- **About** — More about my background, interests, and approach to development.
- **Experience** — Practical work and project experience, presented within the resume.
- **Projects** — Selected applications with descriptions, technology stacks, source code, and live demos.
- **Blogs/Writings** — A space for practical notes on development, projects, and lessons learned.
- **Resume** — My experience, education, skills, courses, and downloadable resume.
- **Contact** — Direct email access and links to my professional profiles.

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript

### Styling

- Tailwind CSS 4
- Modular CSS and CSS custom properties
- Self-hosted variable fonts

### Content and integrations

- Markdown-based content support
- Optional Google Analytics integration

### Deployment

- Next.js static export
- GitHub Actions
- GitHub Pages

### Development tools

- npm
- Biome and Prettier

## Technical Highlights

- Reusable React components organized by site feature
- Strict TypeScript configuration
- Responsive layouts and print-specific resume styles
- Light and dark themes with saved user preference
- Accessible navigation, keyboard states, and reduced-motion handling
- Route-specific metadata, canonical URLs, Open Graph, and Twitter card data
- Structured data and sitemap generation
- Static export suitable for GitHub Pages hosting
- Automated production builds and export verification in CI
- Email-based contact without a server-side form or database

## Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Huzefa077/huzaifa-portfolio.git
cd huzaifa-portfolio
```

### 2. Use the supported Node.js version

The project pins its development version in `.nvmrc`.

```bash
nvm use
```

### 3. Install dependencies

```bash
npm ci
```

### 4. Configure optional analytics

No environment variables are required to run the website locally. To enable Google Analytics, copy `.env.example` to `.env.local` and set a valid `NEXT_PUBLIC_GA_TRACKING_ID`.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
app/                 Next.js routes, layouts, metadata, and global styles
content/             Local blog content
public/              Images, icons, resume, and other static files
src/
├── components/      Reusable interface components grouped by feature
├── data/            Projects, profile, contact, and resume content
├── hooks/           Shared React hooks
└── lib/             Metadata, content, schema, and utility helpers
docs/                Contributor and customization documentation
scripts/             Build-time generation and export verification tools
.github/workflows/   Continuous integration and deployment
next.config.mjs      Next.js static-export configuration
```

## Deployment

The portfolio is exported as a static website and deployed to GitHub Pages through GitHub Actions after the checks on `main` pass.

Production: [https://huzaifasheikh.dev](https://huzaifasheikh.dev)

## Status

This portfolio is actively maintained and will evolve as I add projects, publish writing, and gain professional experience.

## Author

**Huzaifa Sheikh**

- [Portfolio](https://huzaifasheikh.dev)
- [GitHub](https://github.com/Huzefa077)
- [LinkedIn](https://www.linkedin.com/in/huzaifasheikh077/)

This project is adapted from [mldangelo/personal-site](https://github.com/mldangelo/personal-site) and retains the original MIT license.
