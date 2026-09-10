import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Contact } from '@/components/contact';
import { ProjectList } from '@/components/projects/project-list';
import { OrganizationLogo } from '@/components/organization-logo';
import { PublicationEntry } from '@/components/publications/publication-entry';
import { SocialLinks } from '@/components/social-links';
import { ArrowLink } from '@/components/ui/arrow-link';
import { JsonLd } from '@/components/ui/json-ld';
import { SectionLink } from '@/components/ui/section-link';
import { SectionHeading } from '@/components/ui/section-heading';
import { credentials } from '@/data/credentials';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { publications } from '@/data/publications';
import { areasOfWork } from '@/data/research';
import { homepageSchema } from '@/lib/structured-data';

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <section className="grain py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 lg:pt-4">
              <p className="eyebrow">{profile.heroDescriptor}</p>
              <h1 className="mt-8 font-serif text-hero font-normal">{profile.firstName}<br />{profile.lastName}</h1>
              <p className="mt-8 max-w-xl text-[17px] leading-8 text-graphite md:text-lg">{profile.shortBio}</p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <SectionLink sectionId="selected-work" className="inline-flex bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-graphite">View projects</SectionLink>
                <SectionLink sectionId="contact" className="link-underline text-sm font-medium text-ink">Contact</SectionLink>
              </div>
              <div className="mt-12 border-t border-line pt-6"><SocialLinks /></div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:ml-auto lg:mr-0">
              <span className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-line" aria-hidden="true" />
              <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-line" aria-hidden="true" />
              <Image className="aspect-[4/5] w-full object-cover grayscale contrast-[1.04]" src={profile.image} alt="Walid Alsafadi" width={768} height={960} priority sizes="(min-width: 1024px) 384px, 100vw" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 md:py-20" id="about">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3"><p className="eyebrow">About</p></div>
            <div className="lg:col-span-9">
              <h2 className="max-w-4xl font-serif text-3xl font-medium leading-tight md:text-4xl">Research rigor, engineering practice, and technical education.</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-graphite">{profile.bio}</p>
              <div className="mt-10 border-t border-line pt-7">
                <p className="eyebrow">Areas of focus</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {areasOfWork.map((area) => (
                    <li className="bg-wash px-4 py-3 text-sm font-medium text-graphite" key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-20 border-t border-line py-20 md:py-28" id="experience">
        <Container>
          <SectionHeading number="01" title="Experience" />
          <div className="border-b border-line">
            {experience.filter((item) => item.showOnHomepage).map((item) => (
              <article className="grid gap-4 border-t border-line px-4 py-7 transition-colors hover:bg-wash/60 md:grid-cols-12 md:gap-8 md:px-6" key={`${item.role}-${item.organization}`}>
                <p className="font-mono text-xs text-ash md:col-span-3">{item.period}</p>
                <div className="flex items-start gap-5 md:col-span-9">
                  <OrganizationLogo src={item.logo} alt={item.logoAlt} />
                  <div>
                    <h3 className="font-serif text-xl font-medium">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-graphite">{item.organization}</p>
                    {item.location ? (
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                        {[item.location, item.workMode].filter(Boolean).join(' · ')}
                      </p>
                    ) : null}
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-graphite">{item.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-9 flex justify-end"><ArrowLink href="/experience">Full experience</ArrowLink></div>
        </Container>
      </section>

      <section className="scroll-mt-20 border-t border-line py-20 md:py-28" id="research-publication">
        <Container>
          <SectionHeading number="02" title="Research & Publication" />
          <div className="border-b border-line"><PublicationEntry publication={publications[0]} headingLevel="h3" /></div>
        </Container>
      </section>

      <section className="scroll-mt-20 border-t border-line py-20 md:py-28" id="selected-work">
        <Container>
          <SectionHeading number="03" title="Projects" />
          <ProjectList items={projects.filter((project) => project.featured)} headingLevel="h3" variant="featured" />
          <div className="mt-9 flex justify-end"><ArrowLink href="/projects">View all projects</ArrowLink></div>
        </Container>
      </section>

      <section className="scroll-mt-20 border-t border-line py-20 md:py-28" id="education">
        <Container>
          <SectionHeading number="04" title="Education" />
          <div className="border-b border-line">
            {education.filter((item) => item.showOnHomepage).map((item) => (
              <article className="grid gap-4 border-t border-line px-4 py-7 transition-colors hover:bg-wash/60 md:grid-cols-12 md:gap-8 md:px-6" key={item.degree}>
                <p className="font-mono text-xs text-ash md:col-span-3">{item.period}</p>
                <div className="flex items-start gap-5 md:col-span-9">
                  {item.logo && item.logoAlt && <OrganizationLogo src={item.logo} alt={item.logoAlt} />}
                  <div>
                    <h3 className="font-serif text-xl font-medium">{item.degree}</h3>
                    <p className="mt-2 text-sm text-graphite">{item.institution}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                      {[item.location, item.attendance].filter(Boolean).join(' · ')}
                    </p>
                    {item.detail && <p className="mt-3 font-mono text-xs text-ash">{item.detail}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <Container>
          <SectionHeading number="05" title="Selected Training & Certifications" />
          <div className="border-b border-line">
            {credentials.map((credential) => (
              <article className="grid gap-3 border-t border-line py-6 md:grid-cols-12 md:items-baseline md:gap-8" key={credential.name}>
                <h3 className="font-serif text-lg font-medium md:col-span-6">
                  <a className="link-underline inline-flex items-baseline gap-2" href={credential.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <span>{credential.name}</span><span className="font-sans text-sm" aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="text-sm text-graphite md:col-span-3">{credential.provider}</p>
                <p className="font-mono text-xs text-ash md:col-span-3 md:text-right">{credential.completed}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Contact />
    </>
  );
}
