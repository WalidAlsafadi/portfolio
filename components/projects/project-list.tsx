import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/types';

function ProjectCard({
  project,
  headingLevel,
}: {
  project: Project;
  headingLevel: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  const description = project.archiveSummary ?? project.summary;
  const media = project.cardImage ? (
    <div className="aspect-[16/10] overflow-hidden border-b border-line bg-wash">
      <Image
        alt={project.cardImage.alt}
        className="h-full w-full object-cover object-top"
        height={project.cardImage.height}
        loading="lazy"
        sizes="(min-width: 1024px) 31vw, (min-width: 768px) 47vw, 100vw"
        src={project.cardImage.src}
        width={project.cardImage.width}
      />
    </div>
  ) : (
    <div className="flex aspect-[16/10] items-end border-b border-line bg-wash p-5">
      <p className="max-w-[22ch] font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-ash">
        {project.subtitle}
      </p>
    </div>
  );

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[4px] border border-line bg-paper transition-colors hover:bg-wash/40">
      {project.caseStudy ? (
        <Link aria-label={`Read the ${project.title} case study`} href={`/projects/${project.slug}`}>
          {media}
        </Link>
      ) : media}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="font-mono text-[10px] tracking-[0.14em] text-ash">{project.index}</p>
        <Heading className="mt-4 font-serif text-2xl font-medium tracking-tight">
          {project.caseStudy ? (
            <Link className="transition-colors hover:text-graphite" href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          ) : project.title}
        </Heading>
        <p className="mt-1 min-h-10 text-[11px] font-medium uppercase leading-5 tracking-[0.1em] text-ash">
          {project.subtitle}
        </p>
        <p className="mt-4 text-sm leading-6 text-graphite">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <li className="border border-line px-2.5 py-1 text-[10px] text-graphite" key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
          {project.caseStudy ? (
            <Link className="arrow-link text-sm font-medium" href={`/projects/${project.slug}`}>
              Case study <span aria-hidden="true">→</span>
            </Link>
          ) : null}
          {project.demoUrl ? (
            <a className="link-underline inline-flex items-baseline gap-1.5 text-sm font-medium" href={project.demoUrl} rel="noopener noreferrer" target="_blank">
              Demo <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {!project.caseStudy && project.sourceUrl ? (
            <a className="link-underline inline-flex items-baseline gap-1.5 text-sm font-medium" href={project.sourceUrl} rel="noopener noreferrer" target="_blank">
              Source <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectList({
  items,
  headingLevel = 'h2',
}: {
  items: Project[];
  headingLevel?: 'h2' | 'h3';
}) {
  return (
    <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => (
        <ProjectCard headingLevel={headingLevel} key={project.slug} project={project} />
      ))}
    </div>
  );
}
