import dayjs from 'dayjs';
import Image from 'next/image';

import type { Project } from '@/data/projects';
import { PROJECT_IMAGE } from '@/lib/utils';

interface CellProps {
  data: Project;
}

export default function Cell({ data }: CellProps) {
  const {
    title,
    subtitle,
    liveUrl,
    githubUrl,
    image,
    imageAlt,
    imageNote,
    date,
    status,
    desc,
    features,
    tech,
  } = data;

  return (
    <article
      className={`project-card ${image ? 'project-card--with-image' : ''}`}
    >
      {image && (
        <>
          <div className="project-card-image">
            <Image
              src={image}
              alt={imageAlt ?? `${title} project screenshot`}
              width={PROJECT_IMAGE.width}
              height={PROJECT_IMAGE.height}
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>
          {imageNote && <p className="project-card-image-note">{imageNote}</p>}
        </>
      )}

      <div className="project-card-content">
        <header className="project-card-header">
          {status && <span className="project-card-status">{status}</span>}
          <h3 className="project-card-title">{title}</h3>
          {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
        </header>

        <p className="project-card-desc">{desc}</p>

        {features && features.length > 0 && (
          <ul className="project-card-features">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        {tech && tech.length > 0 && (
          <div className="project-card-tech" aria-label="Technologies used">
            {tech.map((technology) => (
              <span key={technology} className="tech-tag">
                {technology}
              </span>
            ))}
          </div>
        )}

        <footer className="project-card-footer">
          <div className="project-card-actions">
            {liveUrl && (
              <a
                href={liveUrl}
                className="project-card-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} className="project-card-action">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          {date && (
            <time className="project-card-date" dateTime={date}>
              {dayjs(date).format('YYYY')}
            </time>
          )}
        </footer>
      </div>
    </article>
  );
}
