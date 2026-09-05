'use client';

import { useState } from 'react';

import type { Project, ProjectCategory } from '@/data/projects';
import { projectCategories } from '@/data/projects';

import Cell from './Cell';

interface ProjectCollectionProps {
  projects: Project[];
}

type ProjectFilter = 'All' | ProjectCategory;

const DESKTOP_BATCH_SIZE = 6;
const MOBILE_INITIAL_SIZE = 3;

export default function ProjectCollection({
  projects,
}: ProjectCollectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [visibleCount, setVisibleCount] = useState(DESKTOP_BATCH_SIZE);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const filters: ProjectFilter[] = ['All', ...projectCategories];
  const mobileVisibleCount = hasLoadedMore ? visibleCount : MOBILE_INITIAL_SIZE;

  const selectFilter = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    setVisibleCount(DESKTOP_BATCH_SIZE);
    setHasLoadedMore(false);
  };

  const loadMore = () => {
    if (hasLoadedMore) {
      setVisibleCount((current) => current + DESKTOP_BATCH_SIZE);
      return;
    }

    setHasLoadedMore(true);
  };

  return (
    <div
      className={`projects-collection${hasLoadedMore ? ' projects-collection--loaded' : ''}`}
    >
      <div className="projects-filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            className="projects-filter"
            aria-pressed={activeFilter === filter}
            onClick={() => selectFilter(filter)}
            key={filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="projects-result-count" aria-live="polite">
        {filteredProjects.length}{' '}
        {filteredProjects.length === 1 ? 'project' : 'projects'}
      </p>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <div className="projects-grid-item" key={project.title}>
            <Cell data={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length > visibleCount ? (
        <button
          type="button"
          className="button projects-load-more projects-load-more--desktop"
          onClick={loadMore}
        >
          Load more
        </button>
      ) : null}

      {filteredProjects.length > mobileVisibleCount ? (
        <button
          type="button"
          className="button projects-load-more projects-load-more--mobile"
          onClick={loadMore}
        >
          Load more
        </button>
      ) : null}
    </div>
  );
}
