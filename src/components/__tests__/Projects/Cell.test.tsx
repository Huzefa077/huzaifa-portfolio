import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Cell from '../../Projects/Cell';

describe('Cell', () => {
  const mockProject = {
    title: 'Test Project',
    subtitle: 'A test subtitle',
    image: '/images/test.jpg',
    imageAlt: 'Test Project dashboard',
    date: '2023-01-01',
    desc: 'This is a test project description',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    tech: ['React', 'TypeScript'],
  };

  it('renders separate live demo and GitHub actions', () => {
    render(<Cell data={mockProject} />);

    expect(screen.getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      mockProject.liveUrl,
    );
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      mockProject.githubUrl,
    );
  });

  it('renders the project description and technology tags', () => {
    render(<Cell data={mockProject} />);

    expect(screen.getByText(mockProject.desc)).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders an optional project date in year format', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  it('uses the supplied screenshot alt text', () => {
    render(<Cell data={mockProject} />);
    expect(
      screen.getByRole('img', { name: mockProject.imageAlt }),
    ).toHaveAttribute('src', expect.stringContaining('test.jpg'));
  });

  it('supports a text-first card without an image or date', () => {
    const textProject = {
      ...mockProject,
      image: undefined,
      imageAlt: undefined,
      date: undefined,
    };

    render(<Cell data={textProject} />);

    expect(
      screen.getByRole('heading', { name: mockProject.title }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByText('2023')).not.toBeInTheDocument();
  });
});
