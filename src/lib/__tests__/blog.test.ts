import { describe, expect, it } from 'vitest';

import { type BlogItem, compareBlogItems, getBlogItems } from '../blog';

describe('getBlogItems', () => {
  it('returns no items before the first blog post is published', () => {
    expect(getBlogItems()).toEqual([]);
  });

  it('orders equal and undated entries deterministically', () => {
    const item = (
      title: string,
      date: string,
      url = `https://example.com/${title.toLowerCase()}`,
    ): BlogItem => ({
      title,
      date,
      url,
      description: '',
      isExternal: true,
      source: 'Example',
    });

    expect(
      [item('Zulu', ''), item('Alpha', '')].sort(compareBlogItems),
    ).toEqual([item('Alpha', ''), item('Zulu', '')]);
    expect(
      [item('Zulu', '2026-01-01'), item('Alpha', '2026-01-01')].sort(
        compareBlogItems,
      ),
    ).toEqual([item('Alpha', '2026-01-01'), item('Zulu', '2026-01-01')]);
  });
});
