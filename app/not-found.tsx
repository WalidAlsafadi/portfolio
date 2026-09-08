import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';

export const metadata: Metadata = {
  title: 'Page not found | Walid Alsafadi',
  description: 'The requested page could not be found.',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[65vh] flex-col justify-center py-20">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-6 max-w-3xl font-serif text-display font-medium">This page does not exist.</h1>
      <p className="mt-5 max-w-lg leading-7 text-graphite">The address may have changed, or the page may not have been published.</p>
      <Link className="arrow-link mt-8 text-sm font-medium" href="/">Return home <span aria-hidden="true">→</span></Link>
    </Container>
  );
}
