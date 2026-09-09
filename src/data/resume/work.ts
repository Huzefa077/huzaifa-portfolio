/**
 * Conforms to https://jsonresume.org/schema/.
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Private Client',
    position: 'Freelance Full-Stack Developer',
    url: 'https://tarbiyah-planner.vercel.app/',
    startDate: '2026-07-28',
    summary:
      'Designed and built GrowHabits, a custom family routine-planning application for two families in my network, turning their requirements and feedback into a practical digital product.',
    highlights: [
      'Developed the full-stack application using Next.js, TypeScript, TypeORM, PostgreSQL, and Tailwind CSS.',
      'Built reusable typed components for personalized routines and daily, weekly, and monthly planner views.',
      'Implemented planner creation, saved-plan viewing and editing, and print-ready PDF export.',
      'Deployed the application and refined the user experience through direct feedback from the families using it.',
    ],
  },
];

export default work;
