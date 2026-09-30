import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { OtherServices, ServiceBody, ServiceCta } from "@/components/service";
import { serviceContent } from "@/lib/services-content";
import { serviceSlugs, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

const indexOf = (slug: string) =>
  (serviceSlugs as readonly string[]).indexOf(slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = indexOf((await params).slug);
  if (i < 0) return {};
  return {
    title: `${services[i][0]} | Real Forte Consultoria`,
    description: serviceContent[i].lead,
  };
}

export default async function ServicePage({ params }: Props) {
  const i = indexOf((await params).slug);
  if (i < 0) notFound();

  const [title] = services[i];
  const words = title.split(" ");
  const last = words.pop() as string;

  return (
    <main>
      <PageHero
        active="Serviços"
        size="lg"
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: title },
        ]}
        eyebrow={`Serviço (${String(i + 1).padStart(2, "0")})`}
        title={[
          { text: `${words.join(" ")} ` },
          { text: last, className: "font-medium" },
        ]}
        lead={serviceContent[i].lead}
      />
      <ServiceBody index={i} />
      <ServiceCta title={title} />
      <OtherServices current={i} />
      <Footer />
    </main>
  );
}
