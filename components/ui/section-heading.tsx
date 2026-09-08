export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 md:mb-14 md:gap-5">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center bg-ink font-mono text-[10px] tracking-wide text-paper">{number}</span>
      <h2 className="font-serif text-section font-medium tracking-tight">{title}</h2>
    </div>
  );
}
