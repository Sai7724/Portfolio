export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tag: {
    label: string;
    icon: "cpu" | "shield-alert" | "bot" | "eye";
    color: string;
  };
  details: string[];
  tech: string[];
  period: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Certification {
  name: string;
  issuer?: string;
  link?: string;
}
