import { Reveal, SplitWords } from "./motion";
import { Button, Container } from "./ui";

export function About() {
  return (
    <section id="empresa" className="px-6 pt-[140px] pb-[120px]">
      <Container>
        <SplitWords
          as="h2"
          stagger={0.035}
          className="block max-w-[1100px] text-[64px] leading-[70.4px] tracking-[-1.92px]"
          parts={[
            {
              text: "Há 40 anos ajudamos empresas a diagnosticar, planejar e crescer, ",
            },
            {
              text: "movimentando ideias, implantando mudanças e gerando resultados.",
              className: "text-mist",
            },
          ]}
        />
        <Reveal className="grid grid-cols-2 gap-16 pt-24">
          <div className="flex items-center gap-[10px] self-start">
            <span className="size-[6px] bg-teal" />
            <p className="text-[14px] text-slate">
              Ser reconhecida como uma empresa que gera resultados.
            </p>
          </div>
          <div>
            <p className="text-[20px] leading-[30px] font-medium">
              Valorizamos o conhecimento como fator determinante para o alcance
              dos resultados, e acreditamos que o sucesso está diretamente
              ligado ao desenvolvimento e satisfação das pessoas.
            </p>
            <div className="flex gap-3 pt-8">
              <Button variant="navy" href="/empresa">
                Conheça a empresa
              </Button>
              <Button variant="outline-dark" href="#equipe">
                Nossa equipe
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
