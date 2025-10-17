import { Project } from '../types';

/**
 * Projects Data
 *
 * Add your projects here by creating new objects following the Project interface.
 * Each project should have:
 * - id: unique identifier
 * - title: project name
 * - description: short description (1-2 lines)
 * - longDescription: detailed description (optional)
 * - technologies: array of tech stack used
 * - imageUrl: project screenshot/image URL (optional)
 * - demoUrl: live demo link (optional)
 * - githubUrl: GitHub repository link (optional)
 * - featured: set to true to highlight the project (optional)
 */

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management and payment integration.',
    longDescription: 'Built a comprehensive e-commerce solution with features like user authentication, product catalog, shopping cart, order management, and payment processing. Implemented real-time inventory updates and admin dashboard for business analytics.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'Developed a modern task management platform that enables teams to organize, track, and collaborate on projects efficiently. Features include drag-and-drop boards, real-time notifications, and advanced filtering.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: '3',
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for managing multiple social media accounts with insights and scheduling.',
    longDescription: 'Created a unified dashboard for social media management with analytics, post scheduling, and engagement tracking across multiple platforms. Integrated various social media APIs for seamless data synchronization.',
    technologies: ['TypeScript', 'React', 'Next.js', 'NestJS', 'Redis', 'Chart.js', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: '4',
    title: 'Video Streaming Platform',
    description: 'A Netflix-like video streaming service with user subscriptions and content management.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Node.js', 'AWS S3', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: '5',
    title: 'Real-Time Chat Application',
    description: 'A modern chat application with end-to-end encryption and multimedia support.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: '6',
    title: 'AI-Powered Content Generator',
    description: 'An AI-driven platform for generating and optimizing content for marketing and SEO.',
    technologies: ['TypeScript', 'React', 'Next.js', 'NestJS', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS'],
  },
];




