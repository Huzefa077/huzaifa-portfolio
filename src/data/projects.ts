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
    image: '/media/images/projects/tarbiyah-planner.webp',
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
    title: 'Ocula',
    subtitle: 'Face Detection & Privacy Blur',
    liveUrl: 'https://ocula-frontend.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/ocula-frontend',
    image: '/media/images/projects/ocula-image.webp',
    imageAlt: 'Ocula face analysis results displayed beside an uploaded image',
    desc: 'A full-stack browser vision app for facial attribute analysis and selective identity blurring. It supports guest and authenticated workflows with saved scan history.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'face-api.js'],
  },
  {
    title: 'NutriWise \n(Under Maintainence)',
    subtitle: 'Personalized diet and meal planning',
    liveUrl: 'https://diet-planner-ten-wheat.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/diet_planner',
    image: '/media/images/projects/nutriwise-image.webp',
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
