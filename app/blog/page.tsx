import type { Metadata } from 'next';
import Link from 'next/link';

import ShareButton from '@/components/Blog/ShareButton';
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
import { formatDate } from '@/lib/utils';

const BLOG_URL = `${SITE_URL}/blog/`;

export const metadata: Metadata = createPageMetadata({
  title: 'Blog',
  description: BLOG_DESCRIPTION,
  path: '/blog/',
});

interface WritingEntry {
  title: string;
  date: string;
  description: string;
  href: string;
  external: boolean;
}

function getEntries(): WritingEntry[] {
  const internal: WritingEntry[] = getAllPosts().map((post) => ({
    title: post.title,
    date: post.date,
    description: post.description,
    href: `/blog/${post.slug}/`,
    external: false,
  }));

  const external: WritingEntry[] = externalPosts
    .filter((item) => item.date)
    .map((item) => ({
      title: item.title,
      date: item.date,
      description: item.description,
      href: item.url,
      external: true,
    }));

  return [...internal, ...external].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export default function BlogPage() {
  const entries = getEntries();

  return (
    <PageWrapper>
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
          <div className="writing-header-row">
            <h1 className="page-title">Blog</h1>
            <a className="writing-rss-link" href="/feed.xml">
              RSS
            </a>
          </div>
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
            {entries.map((entry, index) => {
              const itemClassName = `writing-item${
                index === 0 ? ' writing-item--featured' : ''
              }`;
              const shareUrl = entry.external
                ? entry.href
                : `${SITE_URL}${entry.href}`;

              if (!entry.external) {
                return (
                  <article key={entry.href} className={itemClassName}>
                    <Link href={entry.href} className="writing-item-link">
                      <span className="writing-meta">
                        <time className="writing-date" dateTime={entry.date}>
                          {formatDate(entry.date)}
                        </time>
                      </span>
                      <h2 className="writing-title">{entry.title}</h2>
                      <p className="writing-description">{entry.description}</p>
                    </Link>
                    <ShareButton
                      title={entry.title}
                      url={shareUrl}
                      className="writing-share"
                    />
                  </article>
                );
              }

              return (
                <article key={entry.href} className={itemClassName}>
                  <a
                    href={entry.href}
                    className="writing-item-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="writing-meta">
                      <time className="writing-date" dateTime={entry.date}>
                        {formatDate(entry.date)}
                      </time>
                      <span className="writing-source">External</span>
                    </span>
                    <h2 className="writing-title">
                      {entry.title}
                      <span className="writing-external" aria-hidden="true">
                        ↗
                      </span>
                    </h2>
                    <p className="writing-description">{entry.description}</p>
                  </a>
                  <ShareButton
                    title={entry.title}
                    url={shareUrl}
                    className="writing-share"
                  />
                </article>
              );
            })}
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
