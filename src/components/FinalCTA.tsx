import CTAButton from "./CTAButton";
import BrushDivider from "./BrushDivider";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto max-w-[1000px] px-6 text-center md:px-12">
        <div className="in-view mx-auto text-terra" aria-hidden>
          <BrushDivider className="mx-auto h-3 w-20 text-terra" />
        </div>

        <h2 className="in-view mt-10 font-display text-[clamp(2rem,5.5vw,4rem)] font-medium leading-[1.4] tracking-[-0.005em] text-ink">
          自分の良さに気づく、
          <br />
          <span className="text-terra">小さなはじまり</span>
          を。
        </h2>

        <p className="in-view mx-auto mt-10 max-w-xl text-[15px] leading-[2.1] text-ink-soft md:text-[16px]">
          何かを増やすのでも、変えるのでもなく。
          <br />
          すでにあるものに、そっと光を当ててみる時間です。
        </p>

        <div className="in-view mt-14 flex flex-col items-center gap-5">
          <CTAButton location="final">無料で診断を受ける</CTAButton>
          <p className="text-xs tracking-[0.24em] text-ink-muted">
            所要時間 約15分　·　全19問　·　完全無料
          </p>
        </div>
      </div>
    </section>
  );
}
