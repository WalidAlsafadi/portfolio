'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type MouseEvent } from 'react';
import { Container } from './container';
import { SectionLink } from '@/components/ui/section-link';

const navigation = [
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Research', sectionId: 'research-publication' },
  { label: 'Work', sectionId: 'selected-work' },
  { label: 'Education', sectionId: 'education' },
  { label: 'Contact', sectionId: 'contact' },
];

function NavigationLinks({
  activeSection,
  mobile = false,
}: {
  activeSection: string | null;
  mobile?: boolean;
}) {
  const closeMobileMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest('details')?.removeAttribute('open');
  };

  return (
    <ul className={mobile ? 'grid gap-4 py-6' : 'flex items-center gap-7'}>
      {navigation.map((item) => (
        <li key={item.sectionId}>
          <SectionLink
            aria-current={activeSection === item.sectionId ? 'location' : undefined}
            className="nav-link link-underline"
            onClick={closeMobileMenu}
            sectionId={item.sectionId}
          >
            {item.label}
          </SectionLink>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== '/') {
      return;
    }

    const sectionIds = navigation.map((item) => item.sectionId);
    let frame = 0;

    const updateActiveSection = () => {
      const marker = Math.min(window.innerHeight * 0.3, 220);
      let nextSection: string | null = null;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const bounds = section.getBoundingClientRect();
        if (bounds.top <= marker) nextSection = sectionId;
        if (bounds.top <= marker && bounds.bottom > marker) break;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        nextSection = 'contact';
      }

      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    const queueUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    const syncInitialFragment = () => {
      const fragment = decodeURIComponent(window.location.hash.slice(1));
      if (sectionIds.includes(fragment)) {
        document.getElementById(fragment)?.scrollIntoView({ block: 'start' });
        window.history.replaceState(
          window.history.state,
          '',
          `${window.location.pathname}${window.location.search}`,
        );
      }
      updateActiveSection();
    };

    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(syncInitialFragment);
    });
    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', queueUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', queueUpdate);
      window.removeEventListener('resize', queueUpdate);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <Container>
        <nav aria-label="Primary navigation" className="flex min-h-16 items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold tracking-tight" aria-label="Walid Alsafadi, home">
            WA<span className="text-ash">.</span>
          </Link>
          <div className="hidden md:block">
            <NavigationLinks activeSection={pathname === '/' ? activeSection : null} />
          </div>
          <details className="mobile-menu relative md:hidden">
            <summary className="cursor-pointer list-none py-3 text-xs font-medium uppercase tracking-[0.16em]">Menu</summary>
            <div className="absolute right-0 top-full mt-3 w-56 border border-line bg-paper px-6 shadow-sm">
              <NavigationLinks activeSection={pathname === '/' ? activeSection : null} mobile />
            </div>
          </details>
        </nav>
      </Container>
    </header>
  );
}
