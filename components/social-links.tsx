import { socialLinks } from '@/data/social';
import type { ExternalLink } from '@/data/types';

export function SocialLinks({ links = socialLinks }: { links?: readonly ExternalLink[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-ash">
      {links.map((link) => (
        <li key={link.label}>
          <a className="link-underline hover:text-ink" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
