"use client";

import { useState } from "react";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "本当に無料ですか？",
    a: "はい、完全無料です。料金は一切かかりません。診断後に有料サービスの押し売りもございません。",
  },
  {
    q: "結果はどこで見られますか？",
    a: "フォームを最後まで回答いただくと、結果ページがその場で表示されます。メールでの後日送付も選択いただけます。",
  },
  {
    q: "途中でやめても大丈夫ですか？",
    a: "はい、いつでも中断していただけます。同じ端末・ブラウザであれば、再度開いた際に続きから回答できます。",
  },
  {
    q: "スマホからでも受けられますか？",
    a: "はい、スマートフォン・タブレット・PCのいずれからでも受けていただけます。縦画面でも快適に操作できます。",
  },
  {
    q: "個人情報は必要ですか？",
    a: "必須項目はありません。ご希望の方のみ、結果を受け取るためのメールアドレスを任意でご入力ください。",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="in-view border-t border-line last:border-b"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-7 text-left md:py-8"
      >
        <span className="flex items-start gap-5 md:gap-6">
          <span className="numeral mt-1 text-base text-terra md:text-lg">
            Q
          </span>
          <span className="font-display text-[17px] font-medium leading-[1.6] text-ink md:text-[20px]">
            {q}
          </span>
        </span>
        <span
          aria-hidden
          className={`mt-2 inline-block h-px w-6 origin-center bg-ink transition-transform duration-500 ${
            open ? "rotate-0" : "rotate-90"
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex items-start gap-5 pb-8 md:gap-6 md:pb-10">
            <span className="numeral text-base text-ink-muted md:text-lg">
              A
            </span>
            <p className="max-w-2xl text-[14.5px] leading-[2] text-ink-soft md:text-[15.5px]">
              {a}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function FAQ() {
  return (
    <section className="relative bg-paper-warm py-24 md:py-36">
      <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-6 md:gap-10 md:px-12">
        <div className="col-span-12 md:col-span-4">
          <div className="in-view md:sticky md:top-24">
            <SectionLabel number="05" title="FAQ" />
            <h2 className="mt-8 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.45] tracking-[-0.01em] text-ink">
              よくある
              <br />
              ご質問。
            </h2>
          </div>
        </div>

        <ul className="col-span-12 md:col-span-8">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
