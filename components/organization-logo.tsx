import Image from 'next/image';

export function OrganizationLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center">
      <Image className="object-contain object-center" src={src} alt={alt} fill sizes="40px" />
    </span>
  );
}
