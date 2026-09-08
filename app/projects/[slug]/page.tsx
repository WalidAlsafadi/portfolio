import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/container';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { ArrowLink } from '@/components/ui/arrow-link';
import { JsonLd } from '@/components/ui/json-ld';
import { caseStudyProjects, getProject } from '@/data/projects';
import { profile } from '@/data/profile';
import { createMetadata } from '@/lib/metadata';
import { absoluteUrl } from '@/lib/utils';
import { breadcrumbSchema } from '@/lib/structured-data';

export const dynamicParams = false;
export function generateStaticParams() { return caseStudyProjects.map((project) => ({ slug: project.slug })); }

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

  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: project.title, path: `/projects/${project.slug}` }];
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    alternateName: project.subtitle,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    creator: { '@id': `${profile.siteUrl}/#person` },
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
          </Container>
        </header>
        <Container className="py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <p className="eyebrow">Technical context</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-graphite">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              {project.links.length > 0 && <div className="mt-8 grid justify-start gap-3">{project.links.map((link) => <ArrowLink external href={link.href} key={link.label}>{link.label}</ArrowLink>)}</div>}
            </aside>
            <div className="prose-editorial lg:col-span-9">
              {project.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                </section>
              ))}
              <section>
                <h2>Related research</h2>
                <p>{project.relatedResearch.join(' · ')}</p>
                <div className="mt-6 flex flex-wrap gap-5"><ArrowLink href="/#research-publication">Research & Publication</ArrowLink><ArrowLink href="/projects">All projects</ArrowLink></div>
              </section>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
