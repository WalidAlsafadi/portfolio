import Link from 'next/link';
import { Container } from './container';
import { SectionLink } from '@/components/ui/section-link';
import { homeNavigation } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="grid gap-10 py-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Link aria-label="Walid Alsafadi, home" className="font-serif text-2xl font-semibold tracking-tight focus-visible:outline-paper" href="/">
            WA<span className="text-paper/55">.</span>
          </Link>
          <p className="mt-3 text-sm text-paper/65">AI, Data Science &amp; Research</p>
        </div>
        <div className="md:col-span-8">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-7 gap-y-3 md:justify-end">
              {homeNavigation.map((item) => (
                <li key={item.sectionId}>
                  <SectionLink className="link-underline text-xs text-paper/70 hover:text-paper focus-visible:outline-paper" sectionId={item.sectionId}>
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 border-t border-paper/20 pt-5 text-xs text-paper/55 md:text-right">
            <p>© {new Date().getFullYear()} Walid Alsafadi</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
