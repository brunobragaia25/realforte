import { people, timeline } from "@/lib/history";
import { Reveal, SplitWords, Stagger, StaggerItem } from "./motion";
import { PageHero } from "./PageHero";
import { Button, Container, Eyebrow } from "./ui";

const initials = (name: string) =>
  name
    .replace(/^Dra?\.\s*/, "")
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export function EmpresaHero() {
  return (
    <PageHero
      active="Empresa"
      crumbs={[{ label: "Início", href: "/" }, { label: "Empresa" }]}
      eyebrow="História · Desde 1982"
      title={[
        { text: "Nossa " },
        { text: "história.", className: "font-medium" },
      ]}
      lead="Da assessoria em negócios imobiliários à consultoria empresarial: quatro décadas ajudando empresas a diagnosticar, planejar e crescer."
    />
  );
}

export function EmpresaIntro() {
  return (
    <section className="px-6 py-[140px]">
      <Container className="grid grid-cols-[280px_1fr] gap-12">
        <Reveal>
          <Eyebrow>(QUEM SOMOS)</Eyebrow>
        </Reveal>
        <div>
          <SplitWords
            as="h2"
            stagger={0.04}
            className="block max-w-[900px] text-[52px] leading-[58px] font-light tracking-[-1.56px]"
            parts={[
              {
                text: "A Real Forte resultou dos sonhos, capacidades e realizações de ",
              },
              { text: "muitos jovens acadêmicos.", className: "text-mist" },
            ]}
          />
          <Reveal className="grid max-w-[900px] grid-cols-2 gap-12 pt-14 text-[17px] leading-[27px] text-slate">
            <p>
              Maria do Carmo Gomes e Tayo — primeiro Mestre (stricto sensu) em
              Ciências Contábeis e Finanças do Espírito Santo — constituíram a
              sociedade em 1º de maio de 1982.
            </p>
            <p>
              Iniciaram com assessoria em negócios imobiliários e, ao longo do
              tempo, construíram uma consultoria pautada pela busca da realidade
              fática, firmeza e embasamento estruturado de opiniões e decisões.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function EmpresaNome() {
  const card =
    "flex min-h-[210px] flex-col justify-between border border-line bg-white p-8";
  return (
    <section className="bg-blush px-6 py-[120px]">
      <Container>
        <Reveal>
          <Eyebrow>(O NOME)</Eyebrow>
          <h2 className="max-w-[760px] pt-4 text-[52px] leading-[54.6px] tracking-[-1.56px]">
            De onde vem o nome{" "}
            <span className="font-medium text-coral">Real Forte.</span>
          </h2>
        </Reveal>

        <Stagger
          stagger={0.15}
          className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6 pt-16"
        >
          <StaggerItem className={card}>
            <p className="font-mono text-[12px] tracking-[0.96px] text-teal">
              (INGLÊS)
            </p>
            <div>
              <p className="text-[40px] leading-[44px] font-light tracking-[-1.2px]">
                Real State
              </p>
              <p className="pt-3 text-[14px] leading-[21px] text-slate">
                Imobiliária, bens imóveis.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="text-[40px] font-light text-coral">
            +
          </StaggerItem>
          <StaggerItem className={card}>
            <p className="font-mono text-[12px] tracking-[0.96px] text-teal">
              (ALEMÃO)
            </p>
            <div>
              <p className="text-[40px] leading-[44px] font-light tracking-[-1.2px]">
                FrancFort
              </p>
              <p className="pt-3 text-[14px] leading-[21px] text-slate">
                Nome original da cidade alemã de Frankfurt, que reforçava o
                sentimento de raiz e fortaleza.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem className="text-[40px] font-light text-coral">
            =
          </StaggerItem>
          <StaggerItem className="flex min-h-[210px] flex-col justify-between bg-navy p-8 text-white">
            <p className="font-mono text-[12px] tracking-[0.96px] text-coral">
              (NOSSO NOME)
            </p>
            <div>
              <p className="text-[40px] leading-[44px] font-medium tracking-[-1.2px]">
                Real Forte
              </p>
              <p className="pt-3 text-[14px] leading-[21px] text-white/75">
                Um nome que traduz a natureza dos negócios: firmeza e força de
                conceitos.
              </p>
            </div>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}

export function EmpresaTimeline() {
  return (
    <section className="px-6 py-[140px]">
      <Container>
        <Reveal>
          <Eyebrow>(LINHA DO TEMPO)</Eyebrow>
          <h2 className="pt-4 text-[52px] leading-[54.6px] tracking-[-1.56px]">
            Uma trajetória em quatro momentos.
          </h2>
        </Reveal>

        <div className="pt-16">
          {timeline.map((t) => (
            <Reveal
              key={t.year}
              className="grid grid-cols-[280px_1fr] gap-12 border-t border-line py-12"
            >
              <p className="font-mono text-[44px] leading-[48px] font-medium tracking-[-1.2px] text-coral">
                {t.year}
              </p>
              <div className="max-w-[760px]">
                <h3 className="text-[28px] leading-[34px] font-medium tracking-[-0.56px]">
                  {t.title}
                </h3>
                <div className="flex flex-col gap-4 pt-5 text-[17px] leading-[27px] text-slate">
                  {t.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EmpresaPessoas() {
  return (
    <section className="px-6 py-[140px]">
      <Container>
        <Reveal className="flex items-end justify-between">
          <div>
            <Eyebrow>(QUEM CONSTRUIU)</Eyebrow>
            <h2 className="max-w-[720px] pt-4 text-[52px] leading-[54.6px] tracking-[-1.56px]">
              Sócios e consultores que fazem parte da história.
            </h2>
          </div>
          <Button variant="outline-dark" href="/#equipe">
            Conheça a equipe
          </Button>
        </Reveal>

        <Stagger
          stagger={0.08}
          className="mt-16 grid grid-cols-5 border-t border-l border-line"
        >
          {people.map((p) => (
            <StaggerItem
              key={p.name}
              className="group flex min-h-[300px] flex-col justify-between border-r border-b border-line bg-white p-6 transition-colors duration-200 hover:bg-blush"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-14 place-items-center rounded-full border border-line text-[16px] font-medium text-teal transition-colors group-hover:border-coral group-hover:text-coral">
                  {initials(p.name)}
                </div>
                <span className="font-mono text-[12px] font-medium text-coral">
                  {p.since}
                </span>
              </div>
              <div>
                <h3 className="text-[19px] leading-[22.8px] font-medium">
                  {p.name}
                </h3>
                <p className="pt-3 text-[14px] leading-[21px] opacity-70">
                  {p.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
