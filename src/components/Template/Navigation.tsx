'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type FocusEvent, type MouseEvent, useRef } from 'react';

import routes from '@/data/routes';
import { isActiveRoute } from '@/lib/routes';
import { AUTHOR_NAME } from '@/lib/utils';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const moveIndicator = (
    event: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
  ) => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    indicator.style.width = `${event.currentTarget.offsetWidth}px`;
    indicator.style.transform = `translateX(${event.currentTarget.offsetLeft}px)`;
    indicator.style.opacity = '1';
  };

  const hideIndicator = () => {
    if (indicatorRef.current) indicatorRef.current.style.opacity = '0';
  };

  return (
    <>
      <header className="site-header">
        <Link
          href="/"
          className="site-logo"
          aria-label={`${AUTHOR_NAME} — home`}
        >
          <span className="logo-text" aria-hidden="true">
            <span className="logo-letter logo-letter--h">H</span>
            <span className="logo-letter logo-letter--s">S</span>
          </span>
        </Link>

        <nav
          className="nav-links"
          aria-label="Primary"
          onMouseLeave={hideIndicator}
        >
          {routes
            .filter((l) => l.primary !== false)
            .map((l) => {
              const active = isActiveRoute(pathname, l.path);

              return (
                <Link
                  key={l.label}
                  href={l.path}
                  className={`nav-link ${active ? 'active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                  onMouseEnter={moveIndicator}
                  onFocus={moveIndicator}
                  onBlur={hideIndicator}
                >
                  {l.label}
                </Link>
              );
            })}
          <span
            ref={indicatorRef}
            className="nav-hover-indicator"
            aria-hidden="true"
          />
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </header>
      <div className="mobile-menu-trigger">
        <Hamburger />
      </div>
    </>
  );
}
