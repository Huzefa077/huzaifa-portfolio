import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';

import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses the canonical blog link and includes published posts', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`<link>${SITE_URL}/blog/</link>`);
    expect(xml).toContain('<item>');
    expect(xml).toContain('How Video Streaming Actually Works');
    expect(xml).toContain('/blog/how-video-streaming-works/');
  });

  it('keeps the feed self link file-like', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });

  it('uses the latest post date for lastBuildDate', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(
      '<lastBuildDate>Thu, 27 Aug 2026 12:00:00 GMT</lastBuildDate>',
    );
  });
});