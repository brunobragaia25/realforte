export const services: [string, string][] = [
  [
    "Diagnóstico Empresarial",
    "Raio-x completo da empresa para identificar gargalos e oportunidades.",
  ],
  [
    "Planejamento Estratégico",
    "Metas claras e um plano de ação para o crescimento sustentável.",
  ],
  [
    "Avaliação de Empresas (Valuation)",
    "Apuração do valor real do negócio para vendas, fusões e sucessões.",
  ],
  [
    "Planejamento Comercial",
    "Estruturação de metas, canais e processos para vender mais.",
  ],
  [
    "Formatação de Franquias",
    "Modelagem do negócio para expandir a marca com segurança.",
  ],
  [
    "Governança Corporativa em Empresas Familiares",
    "Regras claras entre família, sócios e gestão para garantir a continuidade.",
  ],
  [
    "Consultoria Financeira e Orçamentária",
    "Controle de caixa, custos e orçamento para decisões mais seguras.",
  ],
  [
    "Plano de Negócios (Business Plan)",
    "Viabilidade e projeções para captar recursos ou tirar ideias do papel.",
  ],
  [
    "Recursos Humanos",
    "Estrutura, cargos e desenvolvimento de pessoas alinhados à estratégia.",
  ],
  [
    "Cursos e Palestras",
    "Capacitação de líderes e equipes com conteúdo prático de gestão.",
  ],
];

/** Mesmos slugs do site atual, na mesma ordem de `services`. */
export const serviceSlugs = [
  "diagnostico-empresarial",
  "planejamento-estrategico",
  "avaliacao-de-empresas-valuation",
  "planejamento-comercial",
  "formatacao-de-franquias",
  "governanca-corporativa",
  "consultoria-financeira-e-orcamentaria",
  "plano-de-negocios-business-plan",
  "recursos-humanos",
  "cursos-e-palestras",
] as const;

export const servicePath = (i: number) => `/servicos/${serviceSlugs[i]}`;
