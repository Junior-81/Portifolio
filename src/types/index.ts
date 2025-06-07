export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'Database' | 'Outras';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  resumeUrl?: string;
}
