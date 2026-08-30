import type { Metadata } from 'next';
import Image from 'next/image';
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
  image?: string;
  imageAlt?: string;
}

function getEntries(): WritingEntry[] {
  const internal: WritingEntry[] = getAllPosts().map((post) => ({
    title: post.title,
    date: post.date,
    description: post.description,
    href: `/blog/${post.slug}/`,
    external: false,
    image: post.image,
    imageAlt: post.imageAlt,
  }));

  const external: WritingEntry[] = externalPosts
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
          <h1 className="page-title">Blog</h1>
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
            {entries.map((entry) => {
              const shareUrl = entry.external
                ? entry.href
                : `${SITE_URL}${entry.href}`;
              const cardContent = (
                <>
                  {entry.image && (
                    <div className="writing-card-image">
                      <Image
                        src={entry.image}
                        alt={entry.imageAlt ?? ''}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="writing-card-body">
                    <span className="writing-meta">
                      <time className="writing-date" dateTime={entry.date}>
                        {formatDate(entry.date)}
                      </time>
                      {entry.external && (
                        <span className="writing-source">External</span>
                      )}
                    </span>
                    <h2 className="writing-title">
                      {entry.title}
                      {entry.external && (
                        <span className="writing-external" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </h2>
                    <p className="writing-description">{entry.description}</p>
                  </div>
                </>
              );

              return (
                <article key={entry.href} className="writing-item">
                  {entry.external ? (
                    <a
                      href={entry.href}
                      className="writing-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link href={entry.href} className="writing-item-link">
                      {cardContent}
                    </Link>
                  )}
                  <footer className="writing-card-footer">
                    <ShareButton
                      title={entry.title}
                      url={shareUrl}
                      className="writing-share"
                    />
                  </footer>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </PageWrapper>
  );
}
