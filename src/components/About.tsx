const specs = [
  { label: "所要時間", value: "約15分", unit: "" },
  { label: "質問数", value: "19", unit: "問" },
  { label: "費用", value: "完全無料", unit: "" },
  { label: "形式", value: "直感で選ぶだけ", unit: "" },
];

export default function About() {
  return (
    <section className="relative bg-ink py-24 text-paper md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="in-view flex items-center gap-5 text-paper/60">
          <span className="numeral text-2xl text-terra-soft">03</span>
          <span className="h-px w-10 bg-paper/30" aria-hidden />
          <span className="text-xs tracking-[0.32em] uppercase">
            About the test
          </span>
        </div>

        <h2 className="in-view mt-8 max-w-4xl font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.4] tracking-[-0.01em] text-paper">
          気負わず、肩の力を抜いたまま。
          <br />
          15分で、静かに終わります。
        </h2>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-4 md:gap-x-10">
          {specs.map((s, i) => (
            <div
              key={s.label}
              className="in-view border-t border-paper/20 pt-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <dt className="text-[11px] tracking-[0.32em] uppercase text-paper/60">
                {s.label}
              </dt>
              <dd className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15] text-paper">
                {s.value}
                {s.unit && (
                  <span className="ml-1 text-base font-normal text-paper/60">
                    {s.unit}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
