import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Top meta bar */}
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 pt-8 md:px-12 md:pt-10">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] text-ink-soft uppercase">
          <span className="numeral text-base text-terra">No. 01</span>
          <span className="h-px w-8 bg-ink-soft/40" aria-hidden />
          <span>個性レベルアップ診断</span>
        </div>
        <div className="hidden items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-ink-muted md:flex">
          <span>free · 15min · 19q</span>
        </div>
      </div>

      {/* Hero body */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-6 pb-28 pt-20 md:gap-10 md:px-12 md:pb-40 md:pt-32">
        {/* Left: headline */}
        <div className="col-span-12 md:col-span-9">
          <h1
            className="reveal font-display text-ink"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-[clamp(2.75rem,8.5vw,7.25rem)] font-medium leading-[1.08] tracking-[-0.01em]">
              自分の
            </span>
            <span
              className="reveal block text-[clamp(2.75rem,8.5vw,7.25rem)] font-medium leading-[1.08] tracking-[-0.01em]"
              style={{ animationDelay: "0.25s" }}
            >
              良さが、
            </span>
            <span
              className="reveal block text-[clamp(2.75rem,8.5vw,7.25rem)] font-medium leading-[1.08] tracking-[-0.01em]"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-terra">まだ見えない</span>
            </span>
            <span
              className="reveal block text-[clamp(2.75rem,8.5vw,7.25rem)] font-medium leading-[1.08] tracking-[-0.01em]"
              style={{ animationDelay: "0.55s" }}
            >
              だけ。
            </span>
          </h1>

          {/* Thin rule */}
          <div
            className="widen mt-12 h-px w-24 bg-ink/70"
            style={{ animationDelay: "0.8s" }}
            aria-hidden
          />

          {/* Sub copy */}
          <p
            className="reveal-slow mt-8 max-w-xl text-base leading-[2] text-ink-soft md:text-[17px]"
            style={{ animationDelay: "1s" }}
          >
            「長所は？」と聞かれると、口ごもってしまう。
            <br />
            誰かを褒めるのは得意なのに、自分のことになると途端にわからなくなる。
            <br />
            ——そんなあなたへ、19の静かな問いを。
          </p>

          {/* CTA */}
          <div
            className="reveal-slow mt-12 flex flex-col items-start gap-5"
            style={{ animationDelay: "1.15s" }}
          >
            <CTAButton location="hero">無料で診断を受ける</CTAButton>
            <p className="text-xs tracking-[0.24em] text-ink-muted">
              所要時間 約15分　·　全19問　·　完全無料
            </p>
          </div>
        </div>

        {/* Right: vertical accent (desktop only) */}
        <aside
          className="reveal-slow col-span-3 hidden md:flex md:items-end md:justify-end"
          style={{ animationDelay: "1.3s" }}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6 pb-4">
            <span className="vertical-ja font-display text-sm text-ink-soft">
              個性の芽を、そっと
            </span>
            <span className="block h-24 w-px bg-ink-soft/40" />
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-terra font-display text-lg text-terra">
              診
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
