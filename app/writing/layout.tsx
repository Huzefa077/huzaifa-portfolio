import type { Metadata } from 'next';

import { newsreaderItalic } from '../fonts';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={newsreaderItalic.variable}>{children}</div>;
}
