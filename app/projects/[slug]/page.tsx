import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ArrowLink } from '@/components/ui/arrow-link';
import { JsonLd } from '@/components/ui/json-ld';
import { caseStudyProjects, getProject } from '@/data/projects';
import { profile } from '@/data/profile';
import type { ProjectVisual } from '@/data/types';
import { createMetadata } from '@/lib/metadata';
import { absoluteUrl } from '@/lib/utils';
import { breadcrumbSchema } from '@/lib/structured-data';

export const dynamicParams = false;
export function generateStaticParams() { return caseStudyProjects.map((project) => ({ slug: project.slug })); }

function CaseStudyVisual({
  visual,
  opening = false,
}: {
  visual: ProjectVisual;
  opening?: boolean;
}) {
  return (
    <figure className={`overflow-hidden rounded-[4px] border border-line bg-wash ${opening ? 'mt-12' : 'mt-9'}`}>
      <Image
        alt={visual.alt}
        className="h-auto w-full"
        height={visual.height}
        loading="lazy"
        sizes={opening
          ? '(min-width: 1280px) 1152px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)'
          : '(min-width: 1280px) 852px, (min-width: 1024px) calc(75vw - 108px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)'}
        src={visual.src}
        width={visual.width}
      />
      {visual.caption ? (
        <figcaption className="border-t border-line px-4 py-3 font-mono text-[10px] leading-5 tracking-[0.08em] text-ash">
          {visual.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({ title: `${project.title} | Walid Alsafadi`, description: project.summary, path: `/projects/${project.slug}` });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const openingVisual = project.visuals?.find((visual) => !visual.section);

  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: project.title, path: `/projects/${project.slug}` }];
  const authorship = project.projectMode === 'team'
    ? { contributor: { '@id': `${profile.siteUrl}/#person` } }
    : { creator: { '@id': `${profile.siteUrl}/#person` } };
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    alternateName: project.subtitle,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    ...authorship,
    keywords: project.tags.join(', '),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), projectSchema]} />
      <article>
        <header className="border-b border-line py-14 md:py-20">
          <Container>
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: project.title }]} />
            <p className="eyebrow mt-12">Case study · {project.index}</p>
            <h1 className="mt-5 font-serif text-display font-medium tracking-tight">{project.title}</h1>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-ash">{project.subtitle}</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-graphite">{project.description}</p>
            <ul className="mt-8 flex flex-wrap gap-2">{project.tags.slice(0, 3).map((tag) => <li className="border border-line px-3 py-1.5 text-xs text-graphite" key={tag}>{tag}</li>)}</ul>
            {(project.demoUrl || project.sourceUrl || project.secondaryLinks?.length) ? (
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {project.demoUrl ? (
                  <a className="link-underline inline-flex items-baseline gap-1.5 text-sm font-medium text-ink" href={project.demoUrl} rel="noopener noreferrer" target="_blank">
                    Demo <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.sourceUrl ? (
                  <a className="link-underline inline-flex items-baseline gap-1.5 text-sm font-medium text-ink" href={project.sourceUrl} rel="noopener noreferrer" target="_blank">
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                {project.secondaryLinks?.map((link) => (
                  <a className="link-underline inline-flex items-baseline gap-1.5 text-sm font-medium text-ink" href={link.href} key={link.label} rel="noopener noreferrer" target="_blank">
                    {link.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            ) : null}
            {openingVisual ? <CaseStudyVisual opening visual={openingVisual} /> : null}
          </Container>
        </header>
        <Container className="py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <p className="eyebrow">Project context</p>
              <div className="mt-5 divide-y divide-line border-y border-line">
                <div className="py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ash">Contribution</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-ink">{project.contribution}</p>
                </div>
                {project.stack.map((item) => <p className="py-3 text-sm leading-6 text-graphite" key={item}>{item}</p>)}
              </div>
            </aside>
            <div className="prose-editorial lg:col-span-9 [&>section:first-child>h2]:mt-0 [&>section:first-child>h2]:border-t-0 [&>section:first-child>h2]:pt-0">
              {project.sections.map((section) => {
                const sectionVisuals = project.visuals?.filter((visual) => visual.section === section.title) ?? [];

                return (
                  <section key={section.title}>
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                    {sectionVisuals.map((visual) => <CaseStudyVisual key={visual.src} visual={visual} />)}
                  </section>
                );
              })}
              <section>
                <h2>Related areas</h2>
                <p>{project.relatedResearch.join(' · ')}</p>
                <div className="mt-6"><ArrowLink href="/projects">All projects</ArrowLink></div>
              </section>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
