export interface Blog {
  id?: string;
  title: string;
  slug: string;
  image?: string | null;
  content: string;
  tags: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Project {
  id?: string;
  title: string;
  description?: string | null; // Allow undefined
  cover?: string | null;
  link: string;
  createdAt?: Date;
  updatedAt?: Date;
  technologies: string[];
  githubLink?: string | null;
}
