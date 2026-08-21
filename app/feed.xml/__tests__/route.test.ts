import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';

import { GET } from '../route';

describe('feed.xml route', () => {
  it('uses the canonical blog link and starts with no template posts', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`<link>${SITE_URL}/blog/</link>`);
    expect(xml).not.toContain('<item>');
  });

  it('keeps the feed self link file-like', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(`${SITE_URL}/feed.xml`);
    expect(xml).not.toContain(`${SITE_URL}/feed.xml/`);
  });

  it('uses the epoch until the first post is published', async () => {
    const response = await GET();
    const xml = await response.text();

    expect(xml).toContain(
      '<lastBuildDate>Thu, 01 Jan 1970 00:00:00 GMT</lastBuildDate>',
    );
  });
});
