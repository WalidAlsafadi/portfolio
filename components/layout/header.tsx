import Link from 'next/link';
import { Container } from './container';

const navigation = [
  { label: 'Work', href: '/#selected-work' },
  { label: 'Research', href: '/#research-publication' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <ul className={mobile ? 'grid gap-4 py-6' : 'flex items-center gap-7'}>
      {navigation.map((item) => (
        <li key={item.href}>
          <Link className="nav-link" href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <Container>
        <nav aria-label="Primary navigation" className="flex min-h-16 items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold tracking-tight" aria-label="Walid Alsafadi, home">
            WA<span className="text-ash">.</span>
          </Link>
          <div className="hidden md:block">
            <NavigationLinks />
          </div>
          <details className="mobile-menu relative md:hidden">
            <summary className="cursor-pointer list-none py-3 text-xs font-medium uppercase tracking-[0.16em]">Menu</summary>
            <div className="absolute right-0 top-full mt-3 w-56 border border-line bg-paper px-6 shadow-sm">
              <NavigationLinks mobile />
            </div>
          </details>
        </nav>
      </Container>
    </header>
  );
}
