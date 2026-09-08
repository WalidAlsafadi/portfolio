import { profile } from '@/data/profile';

export function absoluteUrl(path = '/') {
  return new URL(path, profile.siteUrl).toString();
}
