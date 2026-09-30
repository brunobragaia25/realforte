import Link from "next/link";
import type { NavLabel } from "@/lib/nav";
import { Backdrop, type Part, Reveal, SplitWords } from "./motion";
import { SiteHeader } from "./SiteHeader";
import { Container } from "./ui";

export type Crumb = { label: string; href?: string };

const sizes = {
  xl: "text-[104px] leading-[101.92px] tracking-[-3.64px]",
  lg: "text-[72px] leading-[76px] tracking-[-2.16px]",
};

export function PageHero({
  active,
  crumbs,
  eyebrow,
  title,
  size = "xl",
  lead,
}: {
  active: NavLabel;
  crumbs: Crumb[];
  eyebrow: string;
  title: Part[];
  size?: keyof typeof sizes;
  lead: string;
}) {
  return (
    <section className="relative bg-navy text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Backdrop
          src="/images/hero.png"
          className="absolute inset-0 size-full object-cover object-[100%_12%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy from-[40%] via-navy/80 via-[60%] to-navy/30" />
      </div>
      <SiteHeader active={active} />

      <Container className="relative px-0 pt-[72px] pb-[112px]">
        <Reveal
          onMount
          delay={0.2}
          y={16}
          className="flex items-center gap-2 text-[13px] text-white/70"
        >
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {c.href ? (
                <Link
                  href={c.href}
                  className="transition-colors hover:text-white"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-white">{c.label}</span>
              )}
            </span>
          ))}
        </Reveal>

        <Reveal
          onMount
          delay={0.3}
          y={16}
          className="flex items-center gap-[10px] pt-14"
        >
          <span className="size-[6px] bg-coral" />
          <p className="text-[13px] tracking-[1.56px] text-coral uppercase">
            {eyebrow}
          </p>
        </Reveal>

        <SplitWords
          as="h1"
          onMount
          delay={0.45}
          stagger={0.1}
          className={`block max-w-[1000px] pt-6 font-light ${sizes[size]}`}
          parts={title}
        />

        <Reveal
          onMount
          delay={0.9}
          className="max-w-[720px] pt-10 text-[20px] leading-[30px] text-white/80"
        >
          <p>{lead}</p>
        </Reveal>
      </Container>
    </section>
  );
}
