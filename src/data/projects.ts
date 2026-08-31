export interface Project {
  title: string;
  subtitle?: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  imageAlt?: string;
  imageNote?: string;
  date?: string;
  status?: string;
  desc: string;
  features?: string[];
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
    title: 'Ocula',
    subtitle: 'Face Detection, Privacy Blur & Gaze Tracking',
    liveUrl: 'https://ocula-frontend.vercel.app/',
    githubUrl: 'https://github.com/Huzefa077/ocula-frontend',
    image: '/images/projects/ocula-image.png',
    imageAlt: 'Ocula face analysis results displayed beside an uploaded image',
    imageNote:
      'Predictions are model estimates. Accuracy depends on image quality, lighting, face angle, and browser camera conditions.',
    status: 'Active Development',
    desc: 'A full-stack browser vision app that detects faces in uploaded images, estimates age, gender, and expression, lets users selectively blur identities, and includes an experimental webcam-based gaze tracker with calibration.',
    features: [
      'Multi-face detection with age, gender, and expression estimates',
      'Selective privacy blur with anonymized image export',
      'Webcam gaze calibration with randomized training points',
      'Guest mode, Google sign-in, email verification, and scan history',
    ],
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'face-api.js',
      'WebGazer.js',
    ],
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
