import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { caseStudyProjects } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-07');
  const pages = ['', '/experience', '/projects'];

  return [
    ...pages.map((path) => ({
      url: `${profile.siteUrl}${path}`,
      lastModified,
      changeFrequency: path === '' ? 'monthly' as const : 'yearly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...caseStudyProjects.map((project) => ({
      url: `${profile.siteUrl}/projects/${project.slug}`,
      lastModified: new Date(project.lastModified),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
