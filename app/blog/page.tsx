import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Blog',
  description:
    'Articles and practical notes from Huzaifa Sheikh on web development, projects, and technology.',
  path: '/blog/',
});

export default function BlogPage() {
  return (
    <PageWrapper>
      <section className="empty-page">
        <header>
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">
            Practical notes on development, projects, and what I learn along the
            way.
          </p>
        </header>

        <div className="empty-state">
          <span className="empty-state-label">Coming soon</span>
          <h2>I&apos;m preparing my first post.</h2>
          <p>New articles will appear here as they are published.</p>
        </div>
      </section>
    </PageWrapper>
  );
}
