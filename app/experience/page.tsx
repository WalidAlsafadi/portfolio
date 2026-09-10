import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { OrganizationLogo } from '@/components/organization-logo';
import { PageIntro } from '@/components/ui/page-intro';
import { experience } from '@/data/experience';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({ title: 'Experience | Walid Alsafadi', description: 'Teaching, research partnerships, data analysis, and applied research experience for Walid Alsafadi.', path: '/experience' });

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Experience' }]}
        eyebrow="Experience"
        title="Teaching, research, and data practice"
        description="Selected roles that connect technical education, research data workflows, and international academic cooperation."
      />
      <Container className="py-16 md:py-24">
        <div className="border-b border-line">
          {experience.map((item) => (
            <article className="grid gap-5 border-t border-line px-4 py-8 transition-colors hover:bg-wash/60 md:grid-cols-12 md:gap-10 md:px-6 md:py-10" key={item.role}>
              <p className="font-mono text-xs text-ash md:col-span-3">{item.period}</p>
              <div className="md:col-span-9">
                <div className="flex items-start gap-5">
                  <OrganizationLogo src={item.logo} alt={item.logoAlt} />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-serif text-2xl font-medium">{item.role}</h2>
                    <p className="mt-1 text-sm font-medium text-graphite">{item.organization}</p>
                    {item.location ? (
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                        {[item.location, item.workMode].filter(Boolean).join(' · ')}
                      </p>
                    ) : null}
                    <ul className="mt-6 grid max-w-2xl gap-3 text-[15px] leading-7 text-graphite">
                      {item.bullets.map((bullet) => <li className="relative pl-5 before:absolute before:left-0 before:text-ash before:content-['·']" key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
