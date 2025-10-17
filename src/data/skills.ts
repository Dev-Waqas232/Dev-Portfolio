import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'TypeScript', level: 'expert' },
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'HTML5 & CSS3', level: 'expert' },
      { name: 'Redux', level: 'advanced' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'expert' },
      { name: 'NestJS', level: 'expert' },
      { name: 'Express.js', level: 'advanced' },
      { name: 'RESTful APIs', level: 'expert' },
      { name: 'GraphQL', level: 'advanced' },
      { name: 'WebSockets', level: 'advanced' },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'advanced' },
      { name: 'MongoDB', level: 'advanced' },
      { name: 'Redis', level: 'intermediate' },
      { name: 'Prisma ORM', level: 'advanced' },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 'expert' },
      { name: 'Docker', level: 'advanced' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'CI/CD', level: 'advanced' },
      { name: 'Jest & Testing', level: 'advanced' },
      { name: 'Agile/Scrum', level: 'advanced' },
    ],
  },
];




