import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m a {profile.role} focused on building practical applications that solve real
            problems and make everyday life easier. I work across Node.js, Express, PostgreSQL, and
            MongoDB on the backend, with React and Next.js on the frontend. I use AI tools as part
            of my workflow, but I make sure I can explain and rebuild every line myself.
          </p>
          <div className="hero-cta">
            <Link href="/projects" className="button">
              View Projects
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
