export interface Project {
  title: string;
  subtitle?: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  date?: string;
  desc: string;
  tech?: string[];
}

const data: Project[] = [
  {
    title: 'Tarbiyah Planner',
    subtitle: 'Personalized activity planning for families',
    liveUrl: 'https://tarbiyah-planner.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/tarbiyah-planner',
    desc: 'A full-stack application that helps parents create personalized, printable activity planners for children, with routine management and daily, weekly, and monthly PDF exports.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'TypeORM',
      'PostgreSQL',
      'JWT',
    ],
  },
  {
    title: 'Face Detection & Analysis',
    subtitle: 'AI-powered facial attribute analysis',
    liveUrl: 'https://ocula-frontend.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/ocula-frontend',
    desc: 'A deployed full-stack application that detects faces from image URLs and predicts age, gender, and facial expression, with clear loading and error states.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'face-api.js'],
  },
  {
    title: 'NutriWise',
    subtitle: 'Personalized diet and meal planning',
    liveUrl: 'https://diet-planner-ten-wheat.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/diet_planner',
    desc: 'A secure diet-planning platform that calculates calorie and macronutrient targets and recommends nutritionally similar meals using cosine similarity.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'JWT',
      'Tailwind CSS',
    ],
  },
];

export default data;
