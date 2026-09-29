"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./motion";
import { testimonials } from "@/lib/testimonials";
import { Container, Eyebrow } from "./ui";

const initials = (name: string) =>
  name
    .replace(/\[.*?\]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="depoimentos" className="bg-blush px-6 py-[120px]">
      <Container className="grid h-[498.54px] grid-cols-[280px_1fr] gap-12">
        <Reveal className="flex flex-col justify-between">
          <div>
            <Eyebrow>(DEPOIMENTOS)</Eyebrow>
            <p className="pt-4 text-[88px] leading-[88px] font-light text-coral">
              “
            </p>
          </div>
          <div>
            <p className="font-mono text-[13px] font-medium text-teal">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <div className="flex gap-[10px] pt-4">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => go(-1)}
                className="grid size-[52px] place-items-center rounded-full border border-mist text-[16px] transition-colors duration-200 hover:border-coral hover:bg-coral hover:text-white"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => go(1)}
                className="grid size-[52px] place-items-center rounded-full bg-coral text-[16px] text-white transition-colors duration-200 hover:bg-navy"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            aria-live="polite"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="min-h-[390px] text-[32px] leading-[43.2px] tracking-[-0.48px]">
              {current.text}
            </p>
            <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <div className="grid size-[52px] shrink-0 place-items-center overflow-hidden rounded-full bg-white text-[16px] font-medium text-teal">
                {current.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={current.photo}
                    alt={current.name}
                    className="size-full object-cover"
                  />
                ) : (
                  initials(current.name)
                )}
              </div>
              <div>
                <p className="text-[16px] font-semibold">{current.name}</p>
                <p className="pt-[2px] text-[14px] text-slate">
                  {current.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
