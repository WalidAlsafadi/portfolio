import { Container } from './container';

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-3 font-mono text-[11px] tracking-wide text-ash sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Walid Alsafadi</p>
        <p>Research · Engineering · Data</p>
      </Container>
    </footer>
  );
}
