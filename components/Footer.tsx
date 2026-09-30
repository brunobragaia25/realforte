/* eslint-disable @next/next/no-img-element */
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "./motion";
import { CURRICULO_URL } from "@/lib/nav";
import { servicePath, services } from "@/lib/services";
import { Container, Eyebrow } from "./ui";

const nav = [
  ["Início", "/"],
  ["Empresa", "/empresa"],
  ["Serviços", "/servicos"],
  ["Equipe", "/#equipe"],
  ["Currículo", CURRICULO_URL],
];
const socials = [
  { name: "Instagram", Icon: InstagramLogo },
  { name: "LinkedIn", Icon: LinkedinLogo },
  { name: "Facebook", Icon: FacebookLogo },
];

const link = "text-[15px] text-white/75 transition-colors hover:text-coral";
const label = "text-[12px] tracking-[1.2px] text-white/50";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-navy px-6 pb-8 text-white">
      <Container>
        <Reveal className="flex items-center justify-between border-b border-white/15 py-[72px]">
          <div className="max-w-[640px]">
            <Eyebrow className="text-coral">(PRÓXIMO PASSO)</Eyebrow>
            <p className="w-[515px] pt-[14px] text-[44px] leading-[48.4px] font-light tracking-[-0.88px]">
              Pronto para gerar resultados na sua empresa?
            </p>
          </div>
          <div className="flex items-start gap-3 text-[14px]">
            <Link
              href="/#contato"
              className="rounded-full bg-coral px-[26px] py-4 font-medium transition-colors duration-200 hover:bg-white hover:text-navy"
            >
              Fale com um consultor ↗
            </Link>
            <a
              href="#"
              className="rounded-full border border-white/40 px-[26px] py-4 transition-colors duration-200 hover:border-white hover:bg-white hover:text-navy"
            >
              WhatsApp 99977-2126
            </a>
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-[361fr_258fr_258fr_258fr] gap-12 py-16">
          <div className="flex flex-col gap-6">
            <img
              src="/icons/Image2Vectorized1.svg"
              alt="Real Forte Consultoria"
              className="h-[63px] w-[234px]"
            />
            <p className="max-w-[340px] text-[15px] leading-[24px] text-white/75">
              Atuar como agente de desenvolvimento nas organizações,
              movimentando ideias, implantando mudanças e gerando resultados.
            </p>
            <div className="grid grid-cols-3 gap-x-3 gap-y-[10px]">
              {socials.map(({ name, Icon }) => (
                <a
                  key={name}
                  aria-label={name}
                  href="#"
                  className="flex h-11 items-center justify-center rounded-full border border-white/25 px-[18px] text-[13px] transition-colors duration-200 hover:border-coral hover:bg-coral"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={18} weight="light" />
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow className="text-coral">(NAVEGAÇÃO)</Eyebrow>
            <ul className="flex flex-col gap-3 pt-5">
              {nav.map(([n, href]) => (
                <li key={n}>
                  <a href={href} className={link}>
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="text-coral">(SERVIÇOS)</Eyebrow>
            <ul className="flex flex-col gap-3 pt-5">
              {services.map(([s], idx) => (
                <li
                  key={s}
                  className={s.startsWith("Governança") ? "max-w-[230px]" : ""}
                >
                  <Link href={servicePath(idx)} className={link}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="text-coral">(CONTATO)</Eyebrow>
            <div className="flex flex-col gap-5 pt-5">
              <div>
                <p className={label}>EMAIL</p>
                <p className="pt-[6px] text-[15px]">
                  contato@realforteconsultoria.com.br
                </p>
              </div>
              <div>
                <p className={label}>TELEFONES</p>
                <p className="pt-[6px] text-[15px] leading-[22px]">
                  (27) 3227-3711
                  <br />
                  99977-2126
                </p>
              </div>
              <div>
                <p className={label}>ENDEREÇO</p>
                <p className="pt-[6px] text-[15px] leading-[22px]">
                  Rua José Farias, 160, Sala 103
                  <br />
                  Santa Luíza · Vitória · ES
                  <br />
                  CEP 29.045-300
                </p>
              </div>
              <Link
                href="/#contato"
                className="text-[14px] text-coral transition-colors hover:text-white"
              >
                Ver no mapa ↗
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>

      <Reveal y={90} className="mx-auto max-w-[1280px]">
        <p
          aria-hidden
          className="mx-auto max-w-[1280px] h-[150px] text-[188px] leading-[170px] tracking-[-0.065em] whitespace-nowrap text-white/[0.07] select-none"
        >
          Real Forte Consultoria
        </p>
      </Reveal>

      <Container className="mt-8 flex items-center justify-between border-t border-white/15 pt-8 text-[13px] text-white/60">
        <p>
          © 2026 Real Forte Consultoria Empresarial. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-white">
            Política de privacidade
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Cookies
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Voltar ao topo ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
