export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  { title: 'JavaScript (ES6+)', competency: 5, category: ['Languages'] },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Languages', 'Frontend'],
  },
  { title: 'SQL', competency: 4, category: ['Databases', 'Languages'] },

  // Frontend
  { title: 'React.js', competency: 4, category: ['Frontend'] },
  { title: 'Next.js', competency: 3, category: ['Frontend'] },
  { title: 'HTML5', competency: 5, category: ['Frontend'] },
  { title: 'CSS3', competency: 4, category: ['Frontend'] },
  { title: 'Tailwind CSS', competency: 4, category: ['Frontend'] },
  { title: 'State Management', competency: 3, category: ['Frontend'] },

  // Backend
  { title: 'Node.js', competency: 4, category: ['Backend'] },
  { title: 'Express.js', competency: 4, category: ['Backend'] },
  { title: 'REST APIs', competency: 4, category: ['Backend'] },
  { title: 'JWT Authentication', competency: 3, category: ['Backend'] },
  { title: 'bcrypt', competency: 3, category: ['Backend'] },
  { title: 'TypeORM', competency: 3, category: ['Backend', 'Databases'] },

  // Databases
  { title: 'PostgreSQL', competency: 4, category: ['Databases'] },
  { title: 'MongoDB', competency: 4, category: ['Databases'] },
  { title: 'Mongoose', competency: 4, category: ['Databases'] },
  { title: 'MySQL', competency: 3, category: ['Databases'] },
  { title: 'Database Modeling', competency: 4, category: ['Databases'] },

  // Tools and platforms
  { title: 'Git', competency: 4, category: ['Tools & Platforms'] },
  { title: 'GitHub', competency: 4, category: ['Tools & Platforms'] },
  { title: 'Postman', competency: 4, category: ['Tools & Platforms'] },
  { title: 'Vercel', competency: 4, category: ['Tools & Platforms'] },
  { title: 'Render', competency: 3, category: ['Tools & Platforms'] },
  { title: 'MongoDB Atlas', competency: 4, category: ['Tools & Platforms'] },
  { title: 'Neon', competency: 3, category: ['Tools & Platforms'] },

  // Architecture and concepts
  { title: 'MVC Architecture', competency: 4, category: ['Concepts'] },
  { title: 'RESTful API Design', competency: 4, category: ['Concepts'] },
  { title: 'RBAC', competency: 3, category: ['Concepts'] },
  {
    title: 'Client-Server Architecture',
    competency: 4,
    category: ['Concepts'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/** Build filter categories from the skills themselves. */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
