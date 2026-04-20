import BrushDivider from "./BrushDivider";

export default function Pivot() {
  return (
    <section className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[980px] px-6 text-center md:px-12">
        <div className="in-view mx-auto text-terra" aria-hidden>
          <BrushDivider className="mx-auto h-3 w-28 text-terra" />
        </div>

        <p className="in-view mt-10 font-display text-[clamp(1.75rem,4.5vw,3.25rem)] font-medium leading-[1.7] tracking-[-0.005em] text-ink">
          けれど、
          <br />
          <span className="text-terra">“良さがない人”</span>は、いません。
        </p>

        <div className="in-view mx-auto mt-10 max-w-[580px] space-y-5 text-[15px] leading-[2.1] text-ink-soft md:text-[17px]">
          <p>ただ、まだ光が当たっていないだけ。</p>
          <p>
            あなたの個性は、誰かに見つけてもらうものではなく、
            <br className="hidden md:block" />
            あなた自身が静かに気づいていくもの。
          </p>
          <p>この診断は、そのはじまりの一歩を、そっと差し出します。</p>
        </div>
      </div>
    </section>
  );
}
