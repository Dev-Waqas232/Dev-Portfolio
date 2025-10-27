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
    title: 'CodeBin',
    description: 'A modern platform to save, store, and share code snippets with semantic highlighting and instant shareable links.',
    longDescription: 'CodeBin is a full-stack code sharing platform developed as my Final Year Project (FYP). Users can save their code snippets with proper syntax highlighting based on programming language, generate instant shareable links, and collaborate with a creative coding community. Built with Next.js 13 App Router, featuring a sleek UI with Tailwind CSS and TypeScript for type-safe, scalable code.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Dev-Waqas232/Codebin-NextJS',
    demoUrl: 'https://codebin-next-js.vercel.app/',
    featured: true,
  },
];




