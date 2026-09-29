/* eslint-disable @next/next/no-img-element */
import { HeroCard } from "./HeroCard";
import { Backdrop, Reveal, SplitWords } from "./motion";
import { Button, Container } from "./ui";

const nav = [
  ["Início", "#inicio"],
  ["Empresa", "#empresa"],
  ["Serviços", "#servicos"],
  ["Equipe", "#equipe"],
  ["Clientes", "#clientes"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-svh min-h-[780px] flex-col overflow-hidden bg-navy text-white"
    >
      <Backdrop
        src="/images/hero.png"
        className="absolute inset-0 size-full object-contain object-right-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy from-[35.79%] via-navy/55 via-[52.312%] to-navy/20 to-[65.831%]" />

      <header className="relative border-b border-white/15">
        <Reveal onMount y={-24} delay={0.1}>
          <Container className="flex items-center justify-between py-7">
            <img
              src="/icons/Image2Vectorized.svg"
              alt="Real Forte Consultoria"
              className="h-[54px] w-[200px]"
            />
            <nav className="flex gap-7 px-6 text-[14px]">
              {nav.map(([label, href], i) => (
                <a
                  key={label}
                  href={href}
                  className={`transition-colors hover:text-coral ${i === 0 ? "text-white" : "text-white/85"}`}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 text-[14px]">
              <a
                href="#"
                className="rounded-full bg-white px-5 py-3 text-ink transition-colors duration-200 hover:bg-coral hover:text-white"
              >
                Currículo
              </a>
              <a
                href="#contato"
                className="rounded-full bg-coral px-[22px] py-3 font-medium transition-colors duration-200 hover:bg-white hover:text-ink"
              >
                Agendar conversa
              </a>
            </div>
          </Container>
        </Reveal>
      </header>

      <Container className="relative pt-[99px]">
        <Reveal
          onMount
          delay={0.25}
          y={16}
          className="flex items-center gap-[10px]"
        >
          <span className="size-[6px] bg-coral" />
          <p className="text-[13px] tracking-[1.56px] text-coral uppercase">
            Consultoria empresarial · Vitória, ES · 40 anos
          </p>
        </Reveal>
        <SplitWords
          as="h1"
          onMount
          delay={0.4}
          stagger={0.12}
          className="block max-w-[900px] pt-6 text-[104px] leading-[101.92px] font-light tracking-[-3.64px]"
          parts={[
            { text: "Somos " },
            { text: "médicos", className: "font-medium" },
            { text: "\n" },
            { text: "de empresas.", className: "font-medium" },
          ]}
        />
      </Container>

      <div className="relative mt-auto border-t border-white/15">
        <Reveal
          onMount
          delay={0.9}
          y={48}
          className="mx-auto grid h-[240px] max-w-[1344px] grid-cols-[160px_680px_440px] px-8"
        >
          <div className="pt-9 pb-12">
            <p className="text-[12px] tracking-[1.2px] text-white/70">
              ROLAR ↓
            </p>
          </div>
          <div className="border-l border-white/15 px-12 pt-9 pb-12">
            <p className="w-[441px] text-[17px] leading-[26.35px] text-white/80">
              Atuamos como agente de desenvolvimento nas organizações,
              movimentando ideias, implantando mudanças e gerando resultados.
            </p>
            <div className="flex gap-3 pt-7">
              <Button variant="coral" href="#contato">
                Fale com um consultor
              </Button>
              <Button variant="outline-light" href="#servicos">
                Nossos serviços
              </Button>
            </div>
          </div>
          <div className="flex items-end pb-12">
            <HeroCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
