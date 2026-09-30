"use client";

/* eslint-disable @next/next/no-img-element */
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CURRICULO_URL, NAV, type NavLabel } from "@/lib/nav";
import { servicePath, services } from "@/lib/services";
import { Reveal } from "./motion";
import { serviceIcons } from "./serviceIcons";
import { Container, Eyebrow } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteHeader({ active }: { active: NavLabel }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="relative z-50 border-b border-white/15 text-white"
      onMouseLeave={() => setOpen(false)}
    >
      <Reveal onMount y={-24} delay={0.1}>
        <Container className="flex items-center justify-between py-7">
          <Link href="/" aria-label="Real Forte Consultoria — início">
            <img
              src="/icons/Image2Vectorized.svg"
              alt="Real Forte Consultoria"
              className="h-[54px] w-[200px]"
            />
          </Link>

          <nav className="flex gap-7 px-6 text-[14px]">
            {NAV.map(([label, href]) =>
              label === "Serviços" ? (
                <button
                  key={label}
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  aria-controls="mega-servicos"
                  onMouseEnter={() => setOpen(true)}
                  onFocus={() => setOpen(true)}
                  onClick={() => setOpen((o) => !o)}
                  className={`flex items-center gap-1 transition-colors hover:text-coral ${
                    open || label === active ? "text-white" : "text-white/85"
                  }`}
                >
                  {label}
                  <CaretDown
                    size={12}
                    weight="bold"
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  onMouseEnter={() => setOpen(false)}
                  className={`transition-colors hover:text-coral ${
                    label === active ? "text-white" : "text-white/85"
                  }`}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 text-[14px]">
            <a
              href={CURRICULO_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-3 text-ink transition-colors duration-200 hover:bg-coral hover:text-white"
            >
              Currículo
            </a>
            <Link
              href="/#contato"
              className="rounded-full bg-coral px-[22px] py-3 font-medium transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              Agendar conversa
            </Link>
          </div>
        </Container>
      </Reveal>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mega-servicos"
            className="absolute inset-x-0 top-full bg-white text-ink shadow-[0_30px_60px_-20px_rgba(12,55,75,0.35)]"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <Container className="grid grid-cols-[340px_1fr] gap-16 py-12">
              <div className="flex flex-col justify-between">
                <div>
                  <Eyebrow>(O QUE FAZEMOS)</Eyebrow>
                  <p className="pt-4 text-[44px] leading-[46px] font-light tracking-[-1.32px]">
                    Serviços
                  </p>
                  <p className="pt-4 text-[15px] leading-[23px] text-slate">
                    Dez frentes de consultoria para diagnosticar, planejar e
                    fazer a sua empresa crescer.
                  </p>
                </div>
                <Link
                  href="/servicos"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex h-[49px] w-fit items-center rounded-full bg-coral px-6 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-navy"
                >
                  Ver todos os serviços ↗
                </Link>
              </div>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                {services.map(([title, text], i) => {
                  const Icon = serviceIcons[i];
                  return (
                    <motion.li
                      key={title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 + i * 0.03,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={servicePath(i)}
                        onClick={() => setOpen(false)}
                        className="group flex items-start gap-4 p-3 transition-colors duration-200 hover:bg-blush"
                      >
                        <span className="grid size-12 shrink-0 place-items-center border border-line bg-white">
                          <Icon
                            size={24}
                            weight="light"
                            className="transition-colors duration-200 group-hover:text-coral"
                          />
                        </span>
                        <span>
                          <span className="flex items-baseline gap-2">
                            <span className="font-mono text-[11px] font-medium text-coral">
                              ({String(i + 1).padStart(2, "0")})
                            </span>
                            <span className="text-[16px] leading-[20px] font-medium">
                              {title}
                            </span>
                          </span>
                          <span className="block pt-1 text-[13px] leading-[19px] opacity-70">
                            {text}
                          </span>
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
