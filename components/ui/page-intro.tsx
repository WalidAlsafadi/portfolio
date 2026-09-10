import { Container } from '@/components/layout/container';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/ui/breadcrumbs';

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  return (
    <header className="border-b border-line py-16 md:py-24">
      <Container>
        {breadcrumbs ? (
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        ) : null}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-display font-medium tracking-tight text-balance">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-graphite md:text-lg">{description}</p>
      </Container>
    </header>
  );
}
