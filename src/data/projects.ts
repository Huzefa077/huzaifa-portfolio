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
    subtitle: 'Help your child build good habits',
    liveUrl: 'https://tarbiyah-planner.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/tarbiyah-planner',
    image: '/images/projects/tarbiyah-planner.png',
    imageAlt: 'Child using a printed Tarbiyah Planner activity chart',
    desc: 'Help children build good habits through shared routines, visible progress, and meaningful rewards agreed on with their parents.',
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
    title: 'Face Detection & Analysis\n (Under Maintainence)',
    subtitle: 'AI-powered facial attribute analysis',
    liveUrl: 'https://ocula-frontend.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/ocula-frontend',
    image: '/images/projects/ocula-image.png',
    imageAlt: 'Human Face with analysis report',
    desc: 'A deployed full-stack application that detects faces from image URLs and predicts age, gender, and facial expression, with clear loading and error states.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'face-api.js'],
  },
  {
    title: 'NutriWise \n(Under Maintainence)',
    subtitle: 'Personalized diet and meal planning',
    liveUrl: 'https://diet-planner-ten-wheat.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/diet_planner',
    image: '/images/projects/nutriwise-image.png',
    imageAlt: 'Website homepage photo',
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
