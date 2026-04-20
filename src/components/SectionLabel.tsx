type Props = {
  number: string;
  title: string;
  className?: string;
};

/**
 * Editorial section label: italic numeral + fine rule + uppercase eyebrow.
 * Used above each main section to introduce it with a magazine-like cadence.
 */
export default function SectionLabel({ number, title, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-5 text-ink-soft ${className}`}>
      <span className="numeral text-2xl text-terra">{number}</span>
      <span className="h-px w-10 bg-ink-soft/40" aria-hidden />
      <span className="text-xs tracking-[0.32em] uppercase">{title}</span>
    </div>
  );
}
