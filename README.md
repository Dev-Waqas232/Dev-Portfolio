# Waqas Munir | Portfolio

Personal portfolio of Waqas Munir, a full-stack software engineer (NestJS, Next.js, PostgreSQL, AI/RAG) based in Lahore, Pakistan.

## Sections

Hero → About → Experience → Selected Work (case studies) → Tech Stack → Contact

## Tech

React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Icons.

## Editing content

All content lives in `src/data/`, so components rarely need changes:

| File | What it holds |
|------|---------------|
| `src/data/experience.ts` | Work history (newest first) |
| `src/data/projects.ts` | Case studies, in display order |
| `src/data/skills.ts` | Tech stack groups |
| `src/data/contact.ts` | Email, GitHub, LinkedIn, WhatsApp |

Theme colors are CSS variables in `src/index.css` (see `src/styles/theme.md`).

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint
```
