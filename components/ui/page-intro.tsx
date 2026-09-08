import { Container } from '@/components/layout/container';

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="border-b border-line py-16 md:py-24">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-display font-medium tracking-tight text-balance">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-graphite md:text-lg">{description}</p>
      </Container>
    </header>
  );
}
