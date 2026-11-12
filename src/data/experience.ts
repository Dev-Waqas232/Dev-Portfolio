import { Experience } from '../types';

/**
 * Work experience, newest first. Omit `end` for the current role.
 * A highlight can be plain text, or tied to a project (rendered as a linked label).
 */
export const experience: Experience[] = [
  {
    role: 'Associate Software Engineer',
    company: 'OptimaGeeks',
    start: 'Dec 2025',
    highlights: [
      'Delivered client projects end to end as the sole engineer. While running 3 projects in parallel, led 2 developers, reviewing their PRs and testing their work, and reported on all 3 to the tech lead.',
      {
        project: 'Time-Keeper',
        url: 'https://time-keeper.net/',
        text: 'Rebuilt a legacy PHP workforce management system as a multi-tenant SaaS with per-tenant custom domains, including an ETL pipeline that migrated ~2M records from MySQL to PostgreSQL. React Native mobile app in progress.',
      },
      {
        project: 'AI Support Platform (My Pretty Strap)',
        text: 'Built the core RAG pipeline that learns from customer and agent replies to draft responses, Gmail and Zendesk ingestion with rule-based agent assignment, and returns and tracking flows.',
      },
      {
        project: 'Tyre Depot',
        url: 'https://shop.tyredepot.com.au/',
        text: 'Built a B2B Shopify store integrated with the Marlin ERP, covering product catalog sync, automated order submission, Algolia search, a custom theme and a checkout extension.',
      },
      {
        project: 'Derma Direct',
        url: 'https://compare.dermadirect.co.uk/',
        text: 'Built a competitor price-intelligence platform that scrapes 10+ live sites daily with LLM-based data extraction, flags the cheapest price per product and emails a daily Excel report.',
      },
      {
        project: 'Landsharks Running Club',
        url: 'https://landsharksrunningclub.net/',
        text: 'Built the web platform for runners, coaches, races and QR check-ins, and maintained the Flutter mobile app, fixing bugs and updating its API layer.',
      },
      {
        project: 'Reno Lift',
        url: 'https://renolift.com.au',
        text: 'Designed and built the marketing site in Next.js and owned its technical SEO, helping it rank at the top of Google search.',
      },
      'Set up CI/CD pipelines and managed Linux servers (Nginx, CyberPanel, LiteSpeed) for deployments across projects.',
    ],
    tech: ['NestJS', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'BullMQ', 'Puppeteer', 'RAG', 'Shopify', 'Flutter', 'React Native', 'CI/CD', 'Linux'],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Verdant Soft',
    start: 'Apr 2025',
    end: 'Dec 2025',
    highlights: [
      'Built full-stack systems with Next.js and NestJS, including admin dashboards for inventory, users and roles, and product management; worked on data integration and pre-launch QA.',
      {
        project: 'Medicspot',
        url: 'https://www.medicspot.co.uk/',
        text: 'UK online healthcare. Developed core patient-facing modules end to end, including a BMI calculator with metric/imperial units, a UK address finder (Ideal Postcodes) and a Veriff identity verification flow.',
      },
      'Built a CI/CD pipeline that auto-syncs Medicspot\'s Postmark email templates from the repo, making the codebase the single source of truth.',
      {
        project: 'Retro Shift',
        text: 'AI-powered VS Code extension that turns code flows into reusable graphs. Built the Jira integration workflow that fetches tickets and hands them to the AI agent.',
      },
      "Built Retro Shift's agent file-system tools (create, update, rename, delete) and a real-time diff viewer to review, accept or reject AI-generated changes.",
    ],
    tech: ['Next.js', 'NestJS', 'TypeScript', 'React', 'Python', 'FastAPI', 'LangChain', 'LangGraph', 'Postmark', 'CI/CD'],
  },
  {
    role: 'Junior React.js Developer',
    company: 'Inspire Uplift IT Solutions',
    product: { name: 'HaloInbox', url: 'https://www.haloinbox.com/' },
    start: 'Feb 2025',
    end: 'Apr 2025',
    highlights: [
      'Led a frontend team of 2 interns building HaloInbox, an email marketing and CRM SaaS for eCommerce brands, reviewing their pull requests.',
      'Cut initial load time from 4–5s to ~300ms (measured with Lighthouse and network profiling) using lazy loading, dynamic imports and code splitting.',
      'Owned the type-safe API integration layer, built on typed Axios wrappers and custom data-fetching hooks.',
      'Built a custom design system and reusable component library from Figma, replacing shadcn/ui for finer control over UX.',
      'Developed automated email flows and customer segmentation with conditional logic.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Axios', 'Figma'],
  },
  {
    role: 'MERN Stack Intern',
    company: 'NetixSol',
    start: 'Nov 2024',
    end: 'Jan 2025',
    highlights: [
      'Strengthened MERN stack fundamentals through hands-on development.',
      'Learned Next.js and NestJS by building a full-stack blog application.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js', 'NestJS'],
  },
];
