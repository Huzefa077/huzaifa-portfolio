import { describe, expect, it } from 'vitest';

import { type BlogItem, compareBlogItems, getBlogItems } from '../blog';

describe('getBlogItems', () => {
  it('returns published blog posts', () => {
    const items = getBlogItems();

    expect(items.length).toBeGreaterThan(0);
    expect(items[0]).toMatchObject({
      title: 'How Video Streaming Actually Works: Protocols, Codecs, and the Basics',
      url: '/blog/how-video-streaming-works/',
      date: '2026-08-27',
      isExternal: false,
      source: 'On this site',
    });
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