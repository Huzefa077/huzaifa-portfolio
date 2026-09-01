'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import { type MouseEvent, useState } from 'react';

import type { Project } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

interface CellProps {
  data: Project;
}

interface ProjectActionsProps {
  githubUrl?: string;
  interactive: boolean;
  liveUrl?: string;
}

function ProjectActions({
  githubUrl,
  interactive,
  liveUrl,
}: ProjectActionsProps) {
  return (
    <div className="project-card-actions">
      {liveUrl && (
        <a
          href={liveUrl}
          className="project-card-action project-card-action--primary"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={interactive ? 0 : -1}
        >
          Visit site <span aria-hidden="true">↗</span>
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          className="project-card-action project-card-action--secondary"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={interactive ? 0 : -1}
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function TechTags({ tech }: { tech?: string[] }) {
  if (!tech?.length) return null;

  return (
    <div className="project-card-tech" aria-label="Technologies used">
      <span className="project-card-tech-label">Tech stack</span>
      <div className="project-card-tech-list">
        {tech.map((technology) => (
          <span key={technology} className="tech-tag">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Cell({ data }: CellProps) {
  const [flipped, setFlipped] = useState(false);
  const {
    title,
    subtitle,
    liveUrl,
    githubUrl,
    image,
    imageAlt,
    date,
    desc,
    tech,
  } = data;

  const year = date ? dayjs(date).format('YYYY') : null;

  const openSiteFromCard = (event: MouseEvent<HTMLElement>) => {
    if (
      !liveUrl ||
      !(event.target instanceof Element) ||
      event.target.closest('a, button')
    ) {
      return;
    }

    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="project-card">
      <div
        className={`project-card-flipper ${flipped ? 'project-card-flipper--flipped' : ''}`}
      >
        <section
          className={`project-card-side project-card-front ${liveUrl ? 'project-card-side--linked' : ''}`}
          aria-hidden={flipped}
          onClick={openSiteFromCard}
        >
          {image && (
            <div className="project-card-image">
              <Image
                src={image}
                alt={imageAlt ?? `${title} project screenshot`}
                width={PROJECT_IMAGE.width}
                height={PROJECT_IMAGE.height}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="project-card-content">
            <header className="project-card-header">
              <h3 className="project-card-title">
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    className="project-card-site-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={flipped ? -1 : 0}
                    aria-label={`Visit ${title} site`}
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
              {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
            </header>
            <footer className="project-card-footer">
              <ProjectActions
                liveUrl={liveUrl}
                githubUrl={githubUrl}
                interactive={!flipped}
              />
              {year && <span className="project-card-date">{year}</span>}
            </footer>
            <button
              type="button"
              className="project-card-flip"
              onClick={() => setFlipped(true)}
              tabIndex={flipped ? -1 : 0}
              aria-label={`View details for ${title}`}
            >
              View details <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        <section
          className={`project-card-side project-card-back ${liveUrl ? 'project-card-side--linked' : ''}`}
          aria-hidden={!flipped}
          onClick={openSiteFromCard}
        >
          <div className="project-card-content">
            <header className="project-card-header">
              <h3 className="project-card-title">
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    className="project-card-site-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={flipped ? 0 : -1}
                    aria-label={`Visit ${title} site`}
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
              {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
            </header>
            <p className="project-card-desc">{desc}</p>
            <TechTags tech={tech} />
            <footer className="project-card-footer">
              <ProjectActions
                liveUrl={liveUrl}
                githubUrl={githubUrl}
                interactive={flipped}
              />
              {year && <span className="project-card-date">{year}</span>}
            </footer>
            <button
              type="button"
              className="project-card-flip"
              onClick={() => setFlipped(false)}
              tabIndex={flipped ? 0 : -1}
              aria-label={`Return to ${title} overview`}
            >
              <span aria-hidden="true">←</span> Back to overview
            </button>
          </div>
        </section>
      </div>
    </article>
  );
}
