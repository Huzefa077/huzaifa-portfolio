import externalBlogPosts from '@/data/blog';
import { getAllPosts } from '@/lib/posts';

export interface BlogItem {
  title: string;
  url: string;
  date: string;
  description: string;
  isExternal: boolean;
  source: string;
}

/** Stable newest-first order; undated guides sort by title at the end. */
export function compareBlogItems(a: BlogItem, b: BlogItem): number {
  if (!a.date && !b.date) {
    return a.title.localeCompare(b.title) || a.url.localeCompare(b.url);
  }
  if (!a.date) return 1;
  if (!b.date) return -1;

  return (
    b.date.localeCompare(a.date) ||
    a.title.localeCompare(b.title) ||
    a.url.localeCompare(b.url)
  );
}

function externalSource(url: string): string {
  const hostname = new URL(url).hostname.replace(/^www\./, '');

  if (hostname === 'linkedin.com') return 'LinkedIn';

  return hostname;
}

/** Published on-site posts and selected external articles, newest first. */
export function getBlogItems(): BlogItem[] {
  const internal: BlogItem[] = getAllPosts().map((post) => ({
    title: post.title,
    url: `/blog/${post.slug}/`,
    date: post.date,
    description: post.description,
    isExternal: false,
    source: 'On this site',
  }));
  const external: BlogItem[] = externalBlogPosts.map((item) => ({
    ...item,
    isExternal: true,
    source: externalSource(item.url),
  }));

  return [...internal, ...external].sort(compareBlogItems);
}
