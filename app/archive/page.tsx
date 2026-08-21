import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Archive',
  description: 'Archived work and older material from Huzaifa Sheikh.',
  path: '/archive/',
});

export default function ArchivePage() {
  return (
    <PageWrapper>
      <section className="empty-page">
        <header>
          <h1 className="page-title">Archive</h1>
          <p className="page-subtitle">Older work will be collected here.</p>
        </header>

        <div className="empty-state">
          <span className="empty-state-label">Empty archive</span>
          <h2>Nothing to archive here—yet.</h2>
          <p>This page will be updated as the portfolio grows.</p>
        </div>
      </section>
    </PageWrapper>
  );
}
