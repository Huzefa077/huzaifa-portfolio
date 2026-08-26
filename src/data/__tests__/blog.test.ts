import { describe, expect, it } from 'vitest';

import blog from '../blog';

describe('blog data', () => {
  it('starts empty until external articles are published', () => {
    expect(Array.isArray(blog)).toBe(true);
    expect(blog).toEqual([]);
  });

  it('each item has required properties', () => {
    for (const item of blog) {
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('url');
      expect(item).toHaveProperty('date');
      expect(item).toHaveProperty('description');

      expect(typeof item.title).toBe('string');
      expect(typeof item.url).toBe('string');
      expect(typeof item.date).toBe('string');
      expect(typeof item.description).toBe('string');
    }
  });

  it('titles are non-empty', () => {
    for (const item of blog) {
      expect(item.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('descriptions are non-empty', () => {
    for (const item of blog) {
      expect(item.description.trim().length).toBeGreaterThan(0);
    }
  });

  it('urls are valid', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const item of blog) {
      expect(item.url).toMatch(urlRegex);
    }
  });

  it('dates are valid when non-empty', () => {
    for (const item of blog) {
      if (item.date && item.date.trim().length > 0) {
        const date = new Date(item.date);
        expect(date.toString()).not.toBe('Invalid Date');
      }
    }
  });

  it('has unique titles', () => {
    const titles = blog.map((item) => item.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('has unique urls', () => {
    const urls = blog.map((item) => item.url);
    const uniqueUrls = new Set(urls);

    expect(uniqueUrls.size).toBe(urls.length);
  });

  it('items with dates are sorted by date (most recent first)', () => {
    const itemsWithDates = blog.filter(
      (item) => item.date && item.date.trim().length > 0,
    );

    for (let i = 0; i < itemsWithDates.length - 1; i++) {
      const current = new Date(itemsWithDates[i].date);
      const next = new Date(itemsWithDates[i + 1].date);
      expect(current.getTime()).toBeGreaterThanOrEqual(next.getTime());
    }
  });
});
