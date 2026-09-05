'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function MobileBlogBackDock() {
  const dockRef = useRef<HTMLDivElement>(null);
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsDocked(entry.isIntersecting),
      { rootMargin: '0px 0px 16px', threshold: 0 },
    );

    observer.observe(dock);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={dockRef}
      className={`mobile-post-back-dock${isDocked ? ' mobile-post-back-dock--docked' : ''}`}
    >
      <Link href="/blog/" className="blog-back-control mobile-post-back-link">
        <span aria-hidden="true">←</span> Back
      </Link>
    </div>
  );
}
