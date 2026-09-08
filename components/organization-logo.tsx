import Image from 'next/image';

export function OrganizationLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center">
      <Image className="block h-full w-full object-contain object-center" src={src} alt={alt} width={40} height={40} sizes="40px" />
    </span>
  );
}
