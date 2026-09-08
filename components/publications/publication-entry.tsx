import type { Publication } from '@/data/types';
import { profile } from '@/data/profile';
import { ArrowLink } from '@/components/ui/arrow-link';

export function PublicationEntry({ publication, detailed = false, headingLevel = 'h2' }: { publication: Publication; detailed?: boolean; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel;

  return (
    <article className="border-t border-line py-8 md:py-10">
      <div className="grid gap-5 md:grid-cols-12 md:gap-8">
        <span className="font-mono text-xs text-ash md:col-span-1">{publication.year}</span>
        <div className="md:col-span-8">
          <Heading className="font-serif text-xl font-medium leading-snug text-balance md:text-2xl">{publication.title}</Heading>
          <p className="mt-3 text-sm leading-6 text-graphite">
            {publication.authors.map((author, index) => (
              <span key={author}>
                {index > 0 && ', '}
                {author === profile.name ? <strong className="font-semibold text-ink">{author}</strong> : author}
              </span>
            ))}
          </p>
          <p className="mt-2 text-xs font-medium uppercase leading-5 tracking-[0.08em] text-ash">{publication.venue}</p>
          {detailed && <p className="mt-5 max-w-2xl text-[15px] leading-7 text-graphite">{publication.summary}</p>}
          {detailed && <p className="mt-3 font-mono text-[11px] text-ash">Pages {publication.pages} · DOI {publication.doi}</p>}
        </div>
        <div className="flex items-start md:col-span-3 md:justify-end">
          <ArrowLink href={publication.paperUrl} external>ACL Anthology</ArrowLink>
        </div>
      </div>
    </article>
  );
}
