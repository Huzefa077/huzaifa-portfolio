import Image from 'next/image';

import { AUTHOR_NAME } from '@/lib/utils';

interface ThemePortraitProps {
  width: number;
  height: number;
  priority?: boolean;
}

export default function ThemePortrait({
  width,
  height,
  priority = false,
}: ThemePortraitProps) {
  return (
    <span className="theme-portrait">
      <Image
        src="/images/me2-1.png"
        alt={`${AUTHOR_NAME} portrait`}
        width={width}
        height={height}
        priority={priority}
        sizes={width >= 300 ? '(max-width: 760px) 180px, 320px' : '80px'}
      />
    </span>
  );
}
