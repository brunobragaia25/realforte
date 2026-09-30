import type { Metadata } from "next";
import { Drivers } from "@/components/Drivers";
import { Footer } from "@/components/Footer";
import {
  EmpresaHero,
  EmpresaIntro,
  EmpresaNome,
  EmpresaPessoas,
  EmpresaTimeline,
} from "@/components/empresa";

export const metadata: Metadata = {
  title: "Nossa história | Real Forte Consultoria",
  description:
    "Conheça a história da Real Forte Consultoria, fundada em 1982 em Vitória, ES: origem do nome, marcos e os sócios que a construíram.",
};

export default function EmpresaPage() {
  return (
    <main>
      <EmpresaHero />
      <EmpresaIntro />
      <EmpresaNome />
      <EmpresaTimeline />
      <Drivers />
      <EmpresaPessoas />
      <Footer />
    </main>
  );
}
