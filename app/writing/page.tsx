import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Writing has moved',
    description: 'Huzaifa Sheikh’s articles now live on the Blog page.',
    path: '/writing/',
  }),
  robots: { index: false, follow: true },
};

export default function WritingPage() {
  return (
    <PageWrapper>
      <section className="empty-page">
        <header>
          <h1 className="page-title">Writing has moved</h1>
          <p className="page-subtitle">
            Articles and practical notes now live under Blog.
          </p>
        </header>

        <div className="empty-state">
          <span className="empty-state-label">New location</span>
          <h2>Visit the Blog.</h2>
          <p>
            <Link href="/blog/">Continue to Blog</Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
