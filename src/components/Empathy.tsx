import SectionLabel from "./SectionLabel";

const items = [
  "「長所を教えてください」と聞かれると、うまく答えられない。",
  "誰かを褒めるのは得意なのに、自分のことになると言葉に詰まる。",
  "鏡の前で、ふと「自分には何もない」と思う瞬間がある。",
  "他人と比べて、いつも『足りていない』気がしてしまう。",
];

export default function Empathy() {
  return (
    <section className="relative bg-paper-warm py-24 md:py-36">
      <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-6 md:gap-10 md:px-12">
        <div className="col-span-12 md:col-span-4">
          <div className="in-view md:sticky md:top-24">
            <SectionLabel number="01" title="Who this is for" />
            <h2 className="mt-8 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.5] tracking-[-0.01em] text-ink">
              こんなふうに、
              <br />
              感じていませんか。
            </h2>
          </div>
        </div>

        <ul className="col-span-12 flex flex-col md:col-span-8">
          {items.map((text, i) => (
            <li
              key={i}
              className="in-view group flex items-start gap-6 border-t border-line py-8 first:border-t-0 md:gap-10 md:py-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="numeral mt-1 shrink-0 text-base text-terra md:text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-[17px] leading-[2] text-ink md:text-[22px]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
