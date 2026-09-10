'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps, MouseEvent } from 'react';

type SectionLinkProps = Omit<ComponentProps<typeof Link>, 'href'> & {
  sectionId: string;
};

export function SectionLink({ sectionId, onClick, ...props }: SectionLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      pathname !== '/'
    ) {
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(
      window.history.state,
      '',
      `${window.location.pathname}${window.location.search}`,
    );
  };

  return <Link {...props} href={`/#${sectionId}`} onClick={handleClick} />;
}
