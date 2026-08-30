import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
  footerOnly?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: AUTHOR_NAME,
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Blogs',
    path: '/blog',
  },
  {
    label: 'Archive',
    path: '/archive',
    primary: false,
    footerOnly: true,
  },
  {
    label: 'Stats',
    path: '/stats',
    primary: false,
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
