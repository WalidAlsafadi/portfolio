import Link from 'next/link';
import type { ReactNode } from 'react';

export function ArrowLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const className = 'arrow-link text-sm font-medium text-ink';

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}<span aria-hidden="true">↗</span>
      </a>
    );
  }

  return <Link className={className} href={href}>{children}<span aria-hidden="true">→</span></Link>;
}
