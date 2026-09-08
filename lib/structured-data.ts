import { profile } from '@/data/profile';
import { sameAs } from '@/data/social';
import type { Publication } from '@/data/types';
import { absoluteUrl } from './utils';

const websiteId = `${profile.siteUrl}/#website`;
const profilePageId = `${profile.siteUrl}/#profile`;
const personId = `${profile.siteUrl}/#person`;

export const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: absoluteUrl('/'),
      name: profile.name,
      author: { '@id': personId },
      inLanguage: 'en',
    },
    {
      '@type': 'ProfilePage',
      '@id': profilePageId,
      url: absoluteUrl('/'),
      name: profile.name,
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: profile.name,
      url: absoluteUrl('/'),
      image: absoluteUrl(profile.image),
      description: profile.bio,
      knowsAbout: profile.knowsAbout,
      sameAs,
    },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function scholarlyArticleSchema(publication: Publication) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: publication.title,
    author: publication.authors.map((name) => ({
      '@type': 'Person',
      name,
      ...(name === profile.name ? { '@id': personId, url: absoluteUrl('/') } : {}),
    })),
    datePublished: publication.year.toString(),
    isPartOf: { '@type': 'PublicationVolume', name: publication.venue },
    publisher: { '@type': 'Organization', name: publication.publisher },
    pagination: publication.pages,
    sameAs: publication.paperUrl,
    url: publication.paperUrl,
    description: publication.summary,
  };
}
