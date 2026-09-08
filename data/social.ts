import type { ExternalLink } from './types';

export const socialLinks: ExternalLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/walidalsafadi/' },
  { label: 'GitHub', href: 'https://github.com/WalidAlsafadi' },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=FfJaqBgAAAAJ&hl=en',
  },
  { label: 'ORCID', href: 'https://orcid.org/0009-0006-9164-3395' },
];

export const sameAs = [
  ...socialLinks.map((link) => link.href),
  'https://www.researchgate.net/profile/Walid-Alsafadi',
  'https://aclanthology.org/people/walid-alsafadi/',
];
