"use client";

import {
  motion,
  MotionConfig,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, amount: 0.2 } as const;

/** Respeita `prefers-reduced-motion` em toda a página. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  x?: number;
  /** Anima ao montar (hero) em vez de esperar entrar na tela. */
  onMount?: boolean;
};

/** Fade + deslocamento suave. */
export function Reveal({
  delay = 0,
  y = 28,
  x = 0,
  onMount = false,
  children,
  ...rest
}: RevealProps) {
  const target = { opacity: 1, y: 0, x: 0 };
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      {...(onMount
        ? { animate: target }
        : { whileInView: target, viewport: VIEWPORT })}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Container que escalona a entrada dos <StaggerItem> filhos. */
export function Stagger({
  stagger = 0.08,
  delay = 0,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { stagger?: number; delay?: number }) {
  return (
    <motion.div
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  as = "div",
  children,
  ...rest
}: HTMLMotionProps<"div"> & { as?: "div" | "article" }) {
  const Tag = (
    as === "article" ? motion.article : motion.div
  ) as typeof motion.div;
  return (
    <Tag variants={item} {...rest}>
      {children}
    </Tag>
  );
}

export type Part = { text: string; className?: string };

/**
 * Texto que sobe palavra por palavra, com máscara.
 * Use "\n" dentro de `text` para quebrar linha.
 */
export function SplitWords({
  parts,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.06,
  onMount = false,
}: {
  parts: Part[];
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  onMount?: boolean;
}) {
  let i = 0;
  const nodes: ReactNode[] = [];

  parts.forEach((part, p) => {
    part.text.split(/(\n|\s+)/).forEach((token, t) => {
      if (token === "") return;
      if (token === "\n") {
        nodes.push(<br key={`${p}-${t}`} />);
        return;
      }
      if (/^\s+$/.test(token)) {
        nodes.push(" ");
        return;
      }
      const d = delay + i++ * stagger;
      nodes.push(
        // O gatilho fica no wrapper (visível); o filho translada por dentro da máscara.
        <motion.span
          key={`${p}-${t}`}
          className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-top"
          initial="hidden"
          {...(onMount
            ? { animate: "show" }
            : { whileInView: "show", viewport: VIEWPORT })}
        >
          <motion.span
            className={`inline-block ${part.className ?? ""}`}
            variants={{
              hidden: { y: "110%" },
              show: {
                y: 0,
                transition: { duration: 0.9, delay: d, ease: EASE },
              },
            }}
          >
            {token}
          </motion.span>
        </motion.span>,
      );
    });
  });

  return <Tag className={className}>{nodes}</Tag>;
}

/** Imagem de fundo com leve zoom-out na entrada. */
export function Backdrop({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <motion.img
      src={src}
      alt=""
      className={className}
      initial={{ scale: 1.08, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8, ease: EASE }}
    />
  );
}

/** Imagem que se revela com máscara (clip-path) ao entrar na tela. */
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  // O gatilho fica no wrapper: um elemento 100% recortado não é "visível" para o observer.
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      <motion.div
        className="size-full"
        variants={{
          hidden: { clipPath: "inset(0 0 0 100%)" },
          show: {
            clipPath: "inset(0 0 0 0%)",
            transition: { duration: 1.1, delay, ease: EASE },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
