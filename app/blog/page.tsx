import type { Metadata } from 'next';

import BlogCard, { type BlogCardEntry } from '@/components/Blog/BlogCard';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import externalPosts from '@/data/blog';
import { createPageMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/posts';
import {
  BLOG_DESCRIPTION,
  blogNode,
  breadcrumbNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';

const BLOG_URL = `${SITE_URL}/blog/`;

export const metadata: Metadata = createPageMetadata({
  title: 'Blog',
  description: BLOG_DESCRIPTION,
  path: '/blog/',
});

function getEntries(): BlogCardEntry[] {
  const internal: BlogCardEntry[] = getAllPosts().map((post) => ({
    title: post.title,
    date: post.date,
    description: post.description,
    href: `/blog/${post.slug}/`,
    external: false,
    image: post.image,
    imageAlt: post.imageAlt,
  }));

  const external: BlogCardEntry[] = externalPosts
    .filter((item) => item.date)
    .map((item) => ({
      title: item.title,
      date: item.date,
      description: item.description,
      href: item.url,
      external: true,
      image: item.image,
      imageAlt: item.imageAlt,
    }));

  return [...internal, ...external].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export default function BlogPage() {
  const entries = getEntries();

  return (
    <PageWrapper mainClassName="page-main--blog">
      <SchemaGraph
        nodes={[
          blogNode(),
          breadcrumbNode(BLOG_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Blog', url: BLOG_URL },
          ]),
        ]}
      />
      <section className="writing-page">
        <header className="writing-header">
          <h1 className="page-title">Blogs</h1>
          <p className="page-subtitle">
            Practical notes on development, projects, and what I learn along the
            way.
          </p>
        </header>

        {entries.length === 0 ? (
          <div className="empty-state">
            <span className="empty-state-label">Coming soon</span>
            <h2>I&apos;m preparing my first post.</h2>
            <p>New articles will appear here as they are published.</p>
          </div>
        ) : (
          <div className="writing-list">
            {entries.map((entry) => (
              <BlogCard key={entry.href} entry={entry} />
            ))}
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
