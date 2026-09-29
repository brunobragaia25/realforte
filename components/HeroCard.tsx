"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { services } from "@/lib/services";

const STEPS = 4;
const TICK_MS = 1250;

export function HeroCard() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setStep((s) => {
        if (s + 1 < STEPS) return s + 1;
        setIndex((i) => (i + 1) % services.length);
        return 0;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="grid min-h-[166px] w-[440px] grid-cols-[238px_150px] gap-4 bg-white p-[18px] text-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex min-w-0 flex-col justify-between">
        <div>
          <p className="font-mono text-[11px] font-medium text-teal">
            {String(index + 1).padStart(2, "0")} / {services.length}
          </p>
          {/* Todos os slides ocupam a mesma célula: a altura do card fica fixa na do maior título */}
          <div className="grid pt-2">
            {services.map(([t, d], i) => (
              <div
                key={t}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 flex flex-col gap-3 ${
                  i === index ? "animate-[fade-in_400ms_ease]" : "invisible"
                }`}
              >
                <p className="text-[19px] leading-[22.8px] font-medium">{t}</p>
                <p className="w-[208px] text-[12px] leading-[16px]">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-[6px] pt-[18px]">
          {Array.from({ length: STEPS }, (_, i) => (
            <span
              key={i}
              className={`h-[3px] w-6 transition-colors duration-300 ${i <= step ? "bg-coral" : "bg-line"}`}
            />
          ))}
        </div>
      </div>
      <div className="relative h-[130px] w-[150px] overflow-hidden bg-white">
        <img
          src="/images/HomemEMulher2026042716311.png"
          alt=""
          className="absolute top-[calc(50%+24.5px)] left-1/2 h-[219px] w-[290px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
    </div>
  );
}
