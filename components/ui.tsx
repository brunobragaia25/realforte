import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] ${className}`}>
      {children}
    </div>
  );
}

/** Small mono section label, e.g. "(CLIENTES)" */
export function Eyebrow({
  children,
  className = "text-teal",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[12px] font-medium tracking-[0.96px] whitespace-nowrap ${className}`}
    >
      {children}
    </p>
  );
}

const base =
  "inline-flex h-[49px] items-center justify-center rounded-full px-6 text-[14px] whitespace-nowrap transition-colors duration-200";

export function Button({
  children,
  variant,
  href = "#",
}: {
  children: ReactNode;
  variant: "coral" | "outline-light" | "navy" | "outline-dark";
  href?: string;
}) {
  const styles = {
    coral: "bg-coral font-medium text-white hover:bg-[#d93321]",
    "outline-light":
      "border border-white/40 text-white hover:border-white hover:bg-white hover:text-navy",
    navy: "bg-navy font-medium text-white hover:bg-coral",
    "outline-dark":
      "border border-mist text-ink hover:border-navy hover:bg-navy hover:text-white",
  }[variant];
  const className = `${base} ${styles}`;
  return href.startsWith("/") ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
