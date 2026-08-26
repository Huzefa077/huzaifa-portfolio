import { render, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HomePage from '../page';

describe('blog information architecture', () => {
  it('shows an empty recent blogs section on the homepage', () => {
    const { container } = render(<HomePage />);
    const section = container.querySelector('.home-writing');

    expect(section).toBeInTheDocument();
    expect(
      within(section as HTMLElement).getByRole('heading', {
        level: 2,
        name: 'Recent blogs',
      }),
    ).toBeInTheDocument();
    expect(
      within(section as HTMLElement).getByText('No blog posts yet.'),
    ).toBeInTheDocument();
    expect(
      within(section as HTMLElement).getByRole('link', { name: 'View All' }),
    ).toHaveAttribute('href', '/blog');
  });
});
