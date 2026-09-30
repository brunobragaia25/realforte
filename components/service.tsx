import Link from "next/link";
import { type Block, serviceContent } from "@/lib/services-content";
import { servicePath, services } from "@/lib/services";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { serviceIcons } from "./serviceIcons";
import { Button, Container, Eyebrow } from "./ui";

const num = (n: number) => String(n).padStart(2, "0");

function Items({ items, numbered }: { items: string[]; numbered?: boolean }) {
  return (
    <ul
      className={`grid gap-x-10 ${items.length > 6 ? "grid-cols-2" : "grid-cols-1"}`}
    >
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-baseline gap-4 border-b border-line py-4 text-[17px] leading-[25px]"
        >
          {numbered ? (
            <span className="w-7 shrink-0 font-mono text-[12px] font-medium text-coral">
              {num(i + 1)}
            </span>
          ) : (
            <span className="size-[6px] shrink-0 translate-y-[-3px] bg-coral" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function BlockView({ block, index }: { block: Block; index: number }) {
  return (
    <Reveal className="grid grid-cols-[280px_1fr] gap-12 border-t border-line py-14 first:border-t-0">
      <div>
        <p className="font-mono text-[12px] font-medium text-coral">
          ({num(index + 1)})
        </p>
        <h2 className="pt-3 text-[32px] leading-[38px] font-medium tracking-[-0.64px]">
          {block.title}
        </h2>
      </div>
      <div className="max-w-[820px]">
        {block.text && (
          <div className="flex flex-col gap-5 text-[17px] leading-[27px] text-slate">
            {block.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
        {block.items && (
          <div className={block.text ? "pt-8" : ""}>
            <Items items={block.items} numbered={block.numbered} />
          </div>
        )}
        {block.groups && (
          <div className="flex flex-col">
            {block.groups.map((g) => (
              <div
                key={g.title}
                className="border-b border-line py-7 first:pt-0 last:border-b-0"
              >
                <h3 className="text-[22px] leading-[28px] font-medium tracking-[-0.44px]">
                  {g.title}
                </h3>
                {g.text && (
                  <div className="flex flex-col gap-4 pt-4 text-[16px] leading-[25px] text-slate">
                    {g.text.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                )}
                {g.items && (
                  <div className="pt-4">
                    <Items items={g.items} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export function ServiceBody({ index }: { index: number }) {
  const { intro, blocks } = serviceContent[index];
  const all: Block[] = intro
    ? [{ title: "Objetivo", text: intro }, ...blocks]
    : blocks;
  return (
    <section className="px-6 pt-[100px] pb-[100px]">
      <Container>
        {all.map((b, i) => (
          <BlockView key={b.title} block={b} index={i} />
        ))}
      </Container>
    </section>
  );
}

export function ServiceCta({ title }: { title: string }) {
  return (
    <section className="bg-blush px-6 py-[100px]">
      <Container className="flex items-center justify-between gap-12">
        <Reveal className="max-w-[720px]">
          <Eyebrow>(PRÓXIMO PASSO)</Eyebrow>
          <p className="pt-4 text-[44px] leading-[48px] font-light tracking-[-0.88px]">
            Quer saber como {title.replace(/ \(.*\)$/, "")} pode ajudar a sua
            empresa?
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex gap-3">
          <Button variant="coral" href="/#contato">
            Fale com um consultor
          </Button>
          <Button variant="outline-dark" href="/servicos">
            Todos os serviços
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

export function OtherServices({ current }: { current?: number }) {
  return (
    <section className="px-6 py-[100px]">
      <Container>
        <Reveal className="flex items-end justify-between">
          <div>
            <Eyebrow>(OUTROS SERVIÇOS)</Eyebrow>
            <h2 className="pt-4 text-[44px] leading-[48px] tracking-[-1.32px]">
              Conheça também
            </h2>
          </div>
          <Button variant="outline-dark" href="/servicos">
            Ver todos os serviços ↗
          </Button>
        </Reveal>
        <ServicesGrid exclude={current} className="mt-12" />
      </Container>
    </section>
  );
}

export function ServicesGrid({
  exclude,
  className = "",
}: {
  exclude?: number;
  className?: string;
}) {
  const list = services
    .map(([title, text], i) => ({ title, text, i }))
    .filter((s) => s.i !== exclude);
  return (
    <Stagger
      stagger={0.05}
      className={`grid grid-cols-5 border-t border-l border-line ${className}`}
    >
      {list.map(({ title, text, i }) => {
        const Icon = serviceIcons[i];
        return (
          <StaggerItem
            key={title}
            as="article"
            className="group relative flex min-h-[300px] flex-col justify-between border-r border-b border-line bg-white p-6 transition-colors duration-200 hover:bg-blush"
          >
            <Link
              href={servicePath(i)}
              aria-label={title}
              className="absolute inset-0 z-10"
            />
            <div className="flex items-start justify-between">
              <div className="grid size-12 place-items-center border border-line">
                <Icon
                  size={24}
                  weight="light"
                  className="text-ink transition-colors duration-200 group-hover:text-coral"
                />
              </div>
              <span className="font-mono text-[12px] font-medium text-coral">
                ({num(i + 1)})
              </span>
            </div>
            <div>
              <h3 className="max-w-[208px] text-[19px] leading-[22.8px] font-medium">
                {title}
              </h3>
              <p className="w-[208px] pt-3 text-[14px] leading-[21px] opacity-70">
                {text}
              </p>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
