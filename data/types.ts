export type ExternalLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectVisual = ProjectImage & {
  section?: string;
  caption?: string;
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  archiveSummary?: string;
  description: string;
  tags: string[];
  stack: string[];
  featured: boolean;
  caseStudy: boolean;
  cardImage?: ProjectImage;
  demoUrl?: string;
  sourceUrl?: string;
  secondaryLinks?: ExternalLink[];
  visuals?: ProjectVisual[];
  sections: ProjectSection[];
  relatedResearch: string[];
  lastModified: string;
};

export type Publication = {
  slug: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  summary: string;
  pages: string;
  publisher: string;
  doi: string;
  paperUrl: string;
  profileUrl: string;
};
