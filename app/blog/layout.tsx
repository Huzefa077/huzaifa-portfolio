import { newsreaderItalic } from '../fonts';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={newsreaderItalic.variable}>{children}</div>;
}
