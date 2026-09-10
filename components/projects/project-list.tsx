import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/types';

export function ProjectList({ items, headingLevel = 'h2', variant = 'archive' }: { items: Project[]; headingLevel?: 'h2' | 'h3'; variant?: 'featured' | 'archive' }) {
  const Heading = headingLevel;

  return (
    <div className="border-b border-line">
      {items.map((project, position) => {
        if (variant === 'featured' && project.visual) {
          return (
            <article className="group border-t border-line px-4 py-10 transition-colors hover:bg-wash/60 md:px-6 md:py-14" key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="grid items-start gap-7 md:grid-cols-12 md:gap-8">
                <span className="font-mono text-[11px] text-ash md:order-1 md:col-span-1">{project.index}</span>
                <div className={`md:col-span-6 ${position % 2 === 0 ? 'md:order-2' : 'md:order-3'}`}>
                  <Heading className={position === 0 ? 'font-serif text-3xl font-medium tracking-tight md:text-4xl' : 'font-serif text-2xl font-medium tracking-tight md:text-3xl'}>{project.title}</Heading>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-ash">{project.subtitle}</p>
                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-graphite">{project.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">{project.tags.slice(0, 3).map((tag) => <li className="border border-line px-2.5 py-1 text-[11px] text-graphite" key={tag}>{tag}</li>)}</ul>
                  <span className="arrow-link mt-7 text-sm font-medium">Case study <span aria-hidden="true">→</span></span>
                </div>
                <figure className={`overflow-hidden border border-line bg-wash ${position % 2 === 0 ? 'md:order-3' : 'md:order-2'} md:col-span-5`}>
                  <Image className="h-auto w-full object-contain" src={project.visual.src} alt={project.visual.alt} width={project.visual.width} height={project.visual.height} sizes="(min-width: 768px) 42vw, 100vw" />
                </figure>
              </Link>
            </article>
          );
        }

        const content = (
          <>
            <span className="font-mono text-[11px] text-ash md:col-span-1">{project.index}</span>
            <div className={variant === 'featured' ? 'md:col-span-7' : 'md:col-span-7'}>
              <Heading className={`font-serif font-medium tracking-tight ${variant === 'featured' && position === 0 ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>{project.title}</Heading>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-ash">{project.subtitle}</p>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-graphite">{variant === 'archive' ? project.archiveSummary ?? project.summary : project.summary}</p>
            </div>
            <div className="flex flex-col gap-5 md:col-span-4 md:items-end md:justify-between">
              <ul className="flex flex-wrap gap-2 md:justify-end">
                {project.tags.slice(0, 3).map((tag) => <li className="border border-line px-2.5 py-1 text-[11px] text-graphite" key={tag}>{tag}</li>)}
              </ul>
              {project.caseStudy && <span className="arrow-link text-sm font-medium">Case study <span aria-hidden="true">→</span></span>}
            </div>
          </>
        );

        return (
          <article className={`group border-t border-line px-4 transition-colors md:px-6 ${variant === 'featured' ? 'py-10 md:py-14' : 'py-8 md:py-10'} ${project.caseStudy ? 'hover:bg-wash/60' : ''}`} key={project.slug}>
            {project.caseStudy ? (
              <Link href={`/projects/${project.slug}`} className="grid gap-5 md:grid-cols-12 md:gap-8">{content}</Link>
            ) : (
              <div className="grid gap-5 md:grid-cols-12 md:gap-8">{content}</div>
            )}
          </article>
        );
      })}
    </div>
  );
}
