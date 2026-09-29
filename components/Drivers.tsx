/* eslint-disable @next/next/no-img-element */
import { ClipReveal, Reveal, SplitWords } from "./motion";
import { Eyebrow } from "./ui";

const tabs = ["Negócio", "Missão", "Visão", "Valores"];

export function Drivers() {
  return (
    <section className="grid h-[680px] grid-cols-2 overflow-hidden bg-navy text-white">
      <div className="flex flex-col justify-between py-24 pr-16 pl-[max(24px,calc((100vw-1280px)/2))]">
        <Reveal>
          <Eyebrow className="text-coral">
            (DIRECIONADORES ESTRATÉGICOS)
          </Eyebrow>
          <div className="flex gap-2 pt-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`rounded-full px-[18px] py-[10px] text-[14px] transition-colors duration-200 ${
                  tab === "Missão"
                    ? "bg-coral hover:bg-[#d93321]"
                    : "border border-white/30 hover:border-white hover:bg-white hover:text-navy"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>
        <SplitWords
          as="p"
          delay={0.2}
          stagger={0.05}
          className="block text-[44px] leading-[50.6px] font-light tracking-[-0.88px]"
          parts={[
            {
              text: "Atuar como agente de desenvolvimento nas organizações, movimentando ideias, implantando mudanças e gerando resultados.",
            },
          ]}
        />
      </div>
      <ClipReveal className="relative h-[680px] bg-[#202020]">
        <img
          src="/images/Image3.png"
          alt=""
          className="absolute top-[0.09%] left-0 h-[99.83%] w-full max-w-none object-cover"
        />
      </ClipReveal>
    </section>
  );
}
