export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  company: string;
  client?: string;
  role: string;
  status?: string; // e.g. 'Private', 'Mobile app in progress'
  url?: string;
  imageUrl?: string; // optional screenshot in /public/projects
  summary: string;
  metrics: string[]; // 2-3 short, factual highlights shown on the card
  built: string[];
  tech: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
}





export interface ProjectHighlight {
  project: string;
  url?: string;
  text: string;
}

export interface Experience {
  role: string;
  company: string;
  product?: { name: string; url: string };
  start: string; // e.g. 'Dec 2025'
  end?: string; // omit for current role
  highlights: Array<string | ProjectHighlight>;
  tech: string[];
}
