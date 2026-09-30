import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/service";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Serviços | Real Forte Consultoria",
  description:
    "Diagnóstico, planejamento estratégico, valuation, franquias, governança, finanças, RH e mais: conheça os 10 serviços da Real Forte Consultoria.",
};

export default function ServicosPage() {
  return (
    <main>
      <PageHero
        active="Serviços"
        crumbs={[{ label: "Início", href: "/" }, { label: "Serviços" }]}
        eyebrow="O que fazemos"
        title={[
          { text: "Nossos " },
          { text: "serviços.", className: "font-medium" },
        ]}
        lead="Dez frentes de consultoria para diagnosticar, planejar e fazer a sua empresa crescer."
      />
      <section className="px-6 py-[100px]">
        <Container>
          <ServicesGrid />
        </Container>
      </section>
      <Footer />
    </main>
  );
}
