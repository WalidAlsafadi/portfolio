import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { ProjectList } from '@/components/projects/project-list';
import { ArrowLink } from '@/components/ui/arrow-link';
import { PageIntro } from '@/components/ui/page-intro';
import { projects } from '@/data/projects';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({ title: 'Projects | Walid Alsafadi', description: 'A curated selection of AI engineering, machine learning, Arabic NLP, and data systems projects by Walid Alsafadi.', path: '/projects' });

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}
        eyebrow="Work"
        title="Selected AI systems and applied research projects"
        description="A focused archive spanning multi-agent evaluation, Arabic news verification, learning analytics, multimodal retrieval, and data systems."
      />
      <Container className="py-16 md:py-24">
        <ProjectList items={projects} />
        <div className="mt-10 flex justify-end"><ArrowLink external href="https://github.com/WalidAlsafadi">Explore more on GitHub</ArrowLink></div>
      </Container>
    </>
  );
}
