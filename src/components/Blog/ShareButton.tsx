'use client';

import { useState } from 'react';

interface ShareButtonProps {
  title: string;
  url: string;
  className?: string;
}

export default function ShareButton({
  title,
  url,
  className = '',
}: ShareButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied'>('idle');

  const share = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text: title, url });
        return;
      }

      await navigator.clipboard.writeText(url);
      setStatus('copied');
      window.setTimeout(() => setStatus('idle'), 2000);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }

      await navigator.clipboard.writeText(url);
      setStatus('copied');
      window.setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <button
      type="button"
      className={`share-button ${className}`.trim()}
      onClick={share}
      aria-label={`Share ${title}`}
    >
      <span aria-hidden="true">↗</span>
      {status === 'copied' ? 'Copied' : 'Share'}
    </button>
  );
}
