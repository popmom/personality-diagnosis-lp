import SectionLabel from "./SectionLabel";

const benefits = [
  {
    num: "01",
    title: "あなたの隠れた強み",
    body: "自分にとっては当たり前すぎて気づけない、あなたの「持ち味」を3つ、やさしく言語化してお届けします。",
  },
  {
    num: "02",
    title: "個性の活かし方",
    body: "仕事や家族、友人との関わりの中で、今日から少しだけ試せる具体的な一歩を添えて。",
  },
  {
    num: "03",
    title: "自分を認める視点",
    body: "「自分、悪くないかもしれない」。そう静かに思えるような、短いメッセージをお渡しします。",
  },
];

export default function Benefits() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="in-view">
              <SectionLabel number="02" title="What you'll find" />
              <h2 className="mt-8 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.45] tracking-[-0.01em] text-ink">
                この診断で、
                <br />
                見えてくる
                <span className="text-terra">3つのこと</span>。
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-[2] text-ink-soft">
                派手な肩書きや、誰かと比べた"勝ち"のことではありません。
                あなたの毎日の中に、すでにある光の話です。
              </p>
            </div>
          </div>

          <ul className="col-span-12 md:col-span-7">
            {benefits.map((b, i) => (
              <li
                key={b.num}
                className="in-view border-t border-line py-10 first:border-t-0 md:py-12"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="grid grid-cols-12 items-start gap-4 md:gap-8">
                  <div className="col-span-2 md:col-span-2">
                    <span className="numeral text-xl text-terra md:text-2xl">
                      {b.num}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-10">
                    <h3 className="font-display text-[22px] font-medium leading-[1.5] text-ink md:text-[28px]">
                      {b.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[2] text-ink-soft md:text-[16px]">
                      {b.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
