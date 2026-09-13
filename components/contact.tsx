import { Container } from '@/components/layout/container';
import { profile } from '@/data/profile';
import { contactSocialLinks } from '@/data/social';
import { SocialLinks } from './social-links';

export function Contact() {
  return (
    <section className="border-t border-line py-20 md:py-24" id="contact">
      <Container>
        <div className="max-w-4xl lg:ml-[8.333%]">
          <p className="eyebrow">Connect</p>
          <h2 className="mt-6 max-w-3xl font-serif text-display font-medium leading-tight text-balance">Research, engineering, or collaboration.</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-graphite">For professional, academic, and research conversations, email is the most direct way to get in touch.</p>
          <a className="link-underline mt-8 text-sm font-medium text-ink" href={`mailto:${profile.email}`}>Email Walid <span aria-hidden="true">→</span></a>
          <div className="mt-12"><SocialLinks links={contactSocialLinks} /></div>
        </div>
      </Container>
    </section>
  );
}
