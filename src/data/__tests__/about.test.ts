import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports substantial Markdown content', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(1000);
  });

  it('contains the personalized sections', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('# My Journey');
    expect(aboutMarkdown).toContain('# Beyond Programming');
    expect(aboutMarkdown).toContain('# What I Value');
  });

  it('describes the development focus and origin story', () => {
    expect(aboutMarkdown).toContain('JavaScript full-stack developer');
    expect(aboutMarkdown).toContain('first programming language was C');
    expect(aboutMarkdown).toContain('data analyst');
  });

  it('contains properly formatted Markdown headings', () => {
    const headings = aboutMarkdown.match(/^#+ .+$/gm);
    expect(headings).toHaveLength(4);
  });
});
