import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import { absoluteUrl } from './utils';

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
};

export function createMetadata({ title, description, path, type = 'website' }: PageMetadata): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    authors: [{ name: profile.name, url: profile.siteUrl }],
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      siteName: profile.name,
      images: [{ url: absoluteUrl('/opengraph-image'), width: 1200, height: 630, alt: `${profile.name}, ${profile.heroDescriptor}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl('/opengraph-image')],
    },
  };
}
