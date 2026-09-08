import { Container } from '@/components/layout/container';
import { profile } from '@/data/profile';
import { SocialLinks } from './social-links';

export function Contact() {
  return (
    <section className="border-t border-line py-20 md:py-28" id="contact">
      <Container>
        <p className="eyebrow">Connect</p>
        <h2 className="mt-5 max-w-3xl font-serif text-display font-medium leading-tight text-balance">Research, engineering, or collaboration.</h2>
        <p className="mt-6 max-w-xl text-base leading-7 text-graphite">For professional, academic, and research conversations, email is the most direct way to get in touch.</p>
        <a className="arrow-link mt-8 inline-flex text-sm font-medium" href={`mailto:${profile.email}`}>Email Walid <span aria-hidden="true">→</span></a>
        <div className="mt-10 border-t border-line pt-6"><SocialLinks /></div>
      </Container>
    </section>
  );
}
