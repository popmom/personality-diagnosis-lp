import SectionLabel from "./SectionLabel";

const steps = [
  {
    num: "01",
    title: "ボタンを押して、フォームを開く",
    body: "このページの「無料で診断を受ける」ボタンから、質問ページへ移動します。",
  },
  {
    num: "02",
    title: "6つの問いに、直感で答える",
    body: "正解はありません。ふと浮かんだほうを、そのまま選んでみてください。",
  },
  {
    num: "03",
    title: "あなたの個性が、その場で届く",
    body: "隠れた強み・活かし方・自分を認める一言を、すぐにお読みいただけます。",
  },
];

export default function Steps() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="in-view max-w-2xl">
          <SectionLabel number="04" title="How it works" />
          <h2 className="mt-8 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.45] tracking-[-0.01em] text-ink">
            3つのステップで、
            <br />
            静かに完了します。
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px bg-line md:mt-24 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="in-view relative flex flex-col bg-paper p-8 md:p-10 lg:p-12"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="numeral text-[44px] leading-none text-terra md:text-[56px]">
                {s.num}
              </span>
              <h3 className="mt-6 font-display text-[20px] font-medium leading-[1.5] text-ink md:text-[22px]">
                {s.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[2] text-ink-soft md:text-[15px]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
