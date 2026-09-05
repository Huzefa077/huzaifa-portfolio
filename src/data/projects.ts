export const projectCategories = [
  'Full Stack',
  'AI / Vision',
  'Frontend',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

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
  categories: ProjectCategory[];
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
    categories: ['Full Stack'],
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
    categories: ['Full Stack', 'AI / Vision'],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'face-api.js'],
  },
  {
    title: 'NutriWise',
    subtitle: 'Personalized diet and meal planning',
    liveUrl: 'https://diet-planner-ten-wheat.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/diet_planner',
    image: '/media/images/projects/nutriwise-image.webp',
    imageAlt: 'Website homepage photo',
    desc: 'A secure diet-planning platform that calculates calorie and macronutrient targets and recommends nutritionally similar meals using cosine similarity.',
    categories: ['Full Stack'],
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'JWT',
      'Tailwind CSS',
    ],
  },
  {
    title: 'GazeCal',
    subtitle: 'Webcam Gaze Calibration & Tracking',
    liveUrl: 'https://gazecal.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/gaze-calibrator',
    image: '/media/images/projects/Gaze-Cal-thumbnail.webp',
    imageAlt: 'GazeCal webcam gaze calibration interface',
    desc: 'A browser-based gaze tracker that learns from user-selected calibration targets, displays the estimated gaze position on screen, and supports optional accuracy refinement. Session heatmaps are currently in development.',
    categories: ['AI / Vision', 'Frontend'],
    tech: ['React', 'Vite', 'JavaScript', 'WebGazer.js', 'React Router'],
  },
];

export default data;
