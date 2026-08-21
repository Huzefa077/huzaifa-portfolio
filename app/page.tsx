import type { Metadata } from 'next';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <section className="home-writing" aria-labelledby="home-blog-title">
        <div className="home-writing-header">
          <div>
            <span className="home-section-kicker">Latest notes</span>
            <h2 id="home-blog-title">Recent blogs</h2>
          </div>
          <Link href="/blog/" className="home-writing-all">
            View All
          </Link>
        </div>

        <div className="home-writing-empty">
          <span className="home-writing-empty-label">Coming soon</span>
          <h3>No blog posts yet.</h3>
          <p>
            I&apos;m preparing practical notes about development, projects, and
            what I learn while building them.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
