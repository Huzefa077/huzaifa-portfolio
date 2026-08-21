import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Education from '../../Resume/Education';
import Degree from '../../Resume/Education/Degree';

const mockDegrees = [
  {
    school: 'Stanford University',
    degree: 'M.S. Computer Science',
    year: 2020,
  },
  {
    school: 'MIT',
    degree: 'B.S. Computer Science',
    link: 'https://www.mit.edu/',
    year: 2016,
  },
];

describe('Education', () => {
  it('renders the education section with title', () => {
    render(<Education data={mockDegrees} />);

    expect(
      screen.getByRole('heading', { name: /education/i }),
    ).toBeInTheDocument();
  });

  it('renders all degrees', () => {
    render(<Education data={mockDegrees} />);

    expect(screen.getByText('M.S. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('B.S. Computer Science')).toBeInTheDocument();
  });

  it('links only schools that provide a URL', () => {
    render(<Education data={mockDegrees} />);

    expect(screen.getByText('Stanford University')).toBeInTheDocument();
    expect(screen.getByText('Stanford University').closest('a')).toBeNull();
    expect(screen.getByRole('link', { name: 'MIT' })).toHaveAttribute(
      'href',
      'https://www.mit.edu/',
    );
  });
});

describe('Degree', () => {
  const mockDegree = {
    school: 'Stanford University',
    degree: 'M.S. Computer Science',
    year: 2020,
  };

  it('renders degree title', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'M.S. Computer Science',
    );
  });

  it('renders the school name without a link', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByText('Stanford University')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders the school name as a link when one is provided', () => {
    render(<Degree data={{ ...mockDegree, link: 'https://example.edu/' }} />);

    expect(
      screen.getByRole('link', { name: 'Stanford University' }),
    ).toHaveAttribute('href', 'https://example.edu/');
  });

  it('displays year', () => {
    render(<Degree data={mockDegree} />);

    expect(screen.getByText(/2020/)).toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Degree data={mockDegree} />);

    const article = document.querySelector('article.degree-container');
    expect(article).toBeInTheDocument();
  });
});
