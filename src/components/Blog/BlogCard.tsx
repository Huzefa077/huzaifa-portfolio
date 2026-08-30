import Image from 'next/image';
import Link from 'next/link';
import { formatDate, SITE_URL } from '@/lib/utils';

import ShareButton from './ShareButton';

export interface BlogCardEntry {
  title: string;
  date: string;
  description: string;
  href: string;
  external: boolean;
  image?: string;
  imageAlt?: string;
}

interface BlogCardProps {
  entry: BlogCardEntry;
}

export default function BlogCard({ entry }: BlogCardProps) {
  const shareUrl = entry.external ? entry.href : `${SITE_URL}${entry.href}`;
  const content = (
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
          {entry.external && <span className="writing-source">External</span>}
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
    <article className="writing-item">
      {entry.external ? (
        <a
          href={entry.href}
          className="writing-item-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <Link href={entry.href} className="writing-item-link">
          {content}
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
}
