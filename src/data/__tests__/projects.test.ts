import { describe, expect, it } from 'vitest';

import projects from '../projects';

describe('projects data', () => {
  it('exports at least one project', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('provides a title, description, and at least one destination', () => {
    for (const project of projects) {
      expect(project.title.trim().length).toBeGreaterThan(0);
      expect(project.desc.trim().length).toBeGreaterThan(0);
      expect(project.liveUrl || project.githubUrl).toBeTruthy();
    }
  });

  it('uses valid URLs', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const project of projects) {
      if (project.liveUrl) expect(project.liveUrl).toMatch(urlRegex);
      if (project.githubUrl) expect(project.githubUrl).toMatch(urlRegex);
    }
  });

  it('validates optional screenshot metadata', () => {
    for (const project of projects) {
      if (project.image) {
        expect(project.image.startsWith('/')).toBe(true);
        expect(project.imageAlt?.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('validates optional dates', () => {
    for (const project of projects) {
      if (project.date) {
        expect(new Date(project.date).toString()).not.toBe('Invalid Date');
      }
    }
  });

  it('uses non-empty technology arrays when supplied', () => {
    for (const project of projects) {
      if (project.tech) expect(project.tech.length).toBeGreaterThan(0);
    }
  });

  it('has unique project titles', () => {
    const titles = projects.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
