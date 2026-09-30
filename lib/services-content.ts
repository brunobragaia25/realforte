// Conteúdo extraído de https://realforteconsultoria.com.br/servicos/* (textos revisados só na ortografia).

export type Group = { title: string; text?: string[]; items?: string[] };

export type Block = {
  title: string;
  text?: string[];
  items?: string[];
  numbered?: boolean;
  groups?: Group[];
};

export type ServiceContent = {
  lead: string;
  intro?: string[];
  blocks: Block[];
};

/** Mesma ordem de `services` / `serviceSlugs`. */
export const serviceContent: ServiceContent[] = [
  // 1 · Diagnóstico Empresarial
  {
    lead: "Ferramenta de análise integral da organização com o objetivo de identificar as causas dos possíveis problemas e orientar empresários e executivos nas mudanças necessárias, oferecendo uma visão holística.",
    blocks: [
      {
        title: "Áreas estudadas",
        numbered: true,
        items: [
          "Mudanças no cenário de negócios: modelos, formatos e tendências",
          "Modelo de negócio",
          "Posicionamento de mercado",
          "Modelo de gestão",
          "Análise institucional",
          "Análise documental",
          "Análise mercadológica",
          "Recursos humanos",
          "Sistema de informação",
          "Vendas",
          "Marketing",
          "Logística",
          "Processos",
          "Econômico, financeiro e patrimonial",
          "Governança corporativa, riscos e compliance",
        ],
      },
      {
        title: "Metodologia",
        items: [
          "Entrevistas com os empresários, executivos e demais cargos estratégicos",
          "Coleta de dados quantitativos e qualitativos",
          "Pesquisas primárias e secundárias do mesmo ramo de atividade",
          "Observações",
        ],
      },
    ],
  },

  // 2 · Planejamento Estratégico
  {
    lead: "A partir do nosso know-how em Gestão Estratégica e do entendimento das necessidades dos clientes, desenvolvemos uma abordagem de planejamento estratégico que promove uma forte integração entre a formulação, a execução e a gestão da estratégia.",
    blocks: [
      {
        title: "Etapas",
        numbered: true,
        items: [
          "Direcionadores estratégicos",
          "Fatores críticos de sucesso",
          "Análise / matriz SWOT",
          "Posicionamento de mercado",
          "Tipos de estratégias",
          "Diretrizes estratégicas",
          "Objetivos e metas",
          "Plano de ação",
          "Plano orçamentário",
          "Indicadores de desempenho",
          "Mapa estratégico",
        ],
      },
      {
        title: "Metodologia",
        text: [
          "A construção do planejamento estratégico se dá através de reuniões com os líderes estratégicos, com o objetivo de alinhar as etapas, tendo como foco principal a geração de resultados econômicos e financeiros dentro da normalidade de cada segmento.",
        ],
      },
    ],
  },

  // 3 · Avaliação de Empresas (Valuation)
  {
    lead: "Processo de avaliar uma empresa de forma sistematizada, usando modelo quantitativo e metodologia consagrada de mercado. O valor da empresa é igual ao valor presente dos benefícios futuros esperados por ela, já descontando o risco e considerando todo o ecossistema que envolve o negócio.",
    blocks: [
      {
        title: "O que avaliamos",
        text: [
          "Apuramos o valor de uma organização comercial, industrial ou de serviços, isoladamente ou em grupo econômico, por meio da análise de dados quantitativos e qualitativos, compilados em modelos atuais e consolidados.",
          "Consideramos ainda os valores subjetivos que revestem o negócio e os interesses de sócios e investidores em realizar operações de aporte, fusão, incorporação, cisão, aquisição, venda parcial ou total.",
        ],
      },
      {
        title: "Principais métodos de avaliação",
        groups: [
          {
            title: "Fluxo de caixa descontado",
            text: [
              "O valor é mensurado com base nos benefícios futuros que a empresa poderá gerar. É bem mais completo que os demais métodos, pois retrata melhor o valor justo do negócio. Contempla a previsão do ambiente externo (consumidores, concorrência, conjuntura econômica, globalização etc.), que impacta a estimativa futura de crescimento das receitas, dos custos e das despesas em um prazo predeterminado. Considera também o risco do segmento em que a empresa está inserida e o custo do capital no tempo para os acionistas e para terceiros.",
              "Leva em conta ainda o histórico da organização e os valores subjetivos (marca, clientes, know-how, parcerias, contratos etc.). É o método mais utilizado pelos avaliadores de mercado.",
            ],
          },
          {
            title: "Contábil",
            text: [
              "Com base no valor do patrimônio líquido no Balanço Patrimonial. Método pouco utilizado.",
            ],
          },
          {
            title: "Liquidação",
            text: [
              "Calculam-se os bens mais os direitos e subtraem-se os deveres. Não considera a marca, os clientes, o know-how, as parcerias e outros bens intangíveis.",
            ],
          },
          {
            title: "Mercado",
            text: [
              "Valor da empresa de capital aberto com base no valor das ações no mercado: preço das ações × número de ações.",
            ],
          },
          {
            title: "Múltiplos",
            text: [
              "Valor com base em empresas semelhantes e transações já realizadas: um número X de faturamento ou de EBITDA.",
            ],
          },
        ],
      },
      {
        title: "Como a Real Forte atua",
        text: [
          "O Valuation é uma ferramenta que permite à gestão guiar seus esforços no sentido de gerar maior valor para seus acionistas e sócios.",
          "Por meio de sua equipe multidisciplinar, a Real Forte Consultoria realiza um laudo inicial de valor da empresa e sugere mudanças nas estruturas organizacional e de capital, no mix de produtos, nos investimentos e giro, na formação do preço de venda etc., capazes de aumentar o resultado econômico do negócio. Em seguida, calcula novamente o valor da empresa, para que se tenha uma medida quantitativa objetiva do impacto das melhorias aplicadas.",
          "Prestamos também assessoria na busca de potenciais investidores, na convergência de interesses entre as partes envolvidas, na avaliação de sinergias atuais e futuras, diante das alternativas disponíveis no mercado, dos cenários macroeconômicos considerados e da disposição para a operação.",
        ],
      },
    ],
  },

  // 4 · Planejamento Comercial
  {
    lead: "Ferramenta gerencial capaz de alinhar a estratégia empresarial à área de Vendas. Por meio do entendimento das necessidades do cliente, nossa metodologia permite adaptar soluções a cada tipo de situação.",
    intro: [
      "O objetivo do Planejamento Comercial é proporcionar condições de melhoria e eficiência na área comercial, alinhada aos objetivos da empresa.",
    ],
    blocks: [
      {
        title: "Etapas",
        groups: [
          { title: "1. Alinhamento estratégico" },
          {
            title: "2. Diagnóstico comercial",
            items: [
              "Posicionamento de mercado",
              "Análise de mercado",
              "Análise de concorrência",
              "Análise da economia — micro e macro",
              "Análise SWOT",
              "Carteira de clientes",
              "Volume de vendas",
              "Receita operacional bruta",
              "Curva ABC por produto/serviço, linha, margem e região",
              "Estudos de margem de contribuição por produto/serviço, linhas e total",
              "Capacidade instalada",
              "Ponto de equilíbrio operacional e financeiro",
            ],
          },
          {
            title: "3. Objetivos e metas",
            items: [
              "Projeção de cenários",
              "Definição de objetivos e metas: coerentes, viáveis, mensuráveis e desafiadores",
            ],
          },
          {
            title: "4. Estratégias",
            items: [
              "Capacitação e treinamento da equipe de vendas",
              "Elaboração de campanhas comerciais",
              "Política de remuneração",
              "Idealização das campanhas de marketing",
              "Canais de comunicação",
              "Convenção de vendas",
              "Materiais de apoio (impressos e digitais)",
            ],
          },
          {
            title: "5. Plano de ação",
            items: [
              "Definição das ações, responsáveis, prazos, custos e status",
            ],
          },
          {
            title: "6. Indicadores",
            items: ["Definição dos indicadores de desempenho"],
          },
          { title: "7. Monitoramento" },
        ],
      },
    ],
  },

  // 5 · Formatação de Franquias
  {
    lead: "A Real Forte Consultoria presta serviços de consultoria para a formatação de redes de franquias, oferecendo todo o suporte necessário aos empresários e investidores que desejam ter uma rede sustentável e de sucesso.",
    blocks: [
      {
        title: "Como trabalhamos",
        text: [
          "O processo de criação de uma rede de franquias, conhecido como formatação, baseia-se na preparação do negócio para que ele possa ser replicado por outros empreendedores dentro da legislação que rege o sistema: a Lei nº 13.966/19.",
          "Temos o compromisso de buscar referências adequadas ao seu modelo de negócio, empregando a experiência dos profissionais envolvidos e tendo como referência também o seu nicho de mercado. Assim, procuramos entender o contexto e as principais demandas da sua marca. É mais do que oferecer um serviço: é desenvolver um trabalho assertivo e qualificado, com foco em resultados.",
          "Nossa atuação vai além da formatação e da criação do modelo de franquias: temos o propósito de contribuir para que o seu negócio se torne sustentável e lucrativo. Para isso, contamos com equipe própria, especializada e multidisciplinar, com competências em finanças, estratégias, processos, marketing, sistemas de informação e governança, que estuda constantemente novas tecnologias, metodologias e tendências do franchising.",
          "Nas primeiras etapas, são definidos os principais pontos estratégicos da estrutura atual que serão replicados para os outros empreendedores. Feito o levantamento detalhado das informações, são elaborados os pontos rentáveis do seu modelo de franquia, essenciais para assegurar o padrão e o posicionamento do investimento total em relação às outras marcas já operantes no franchising.",
        ],
      },
      {
        title: "Etapas",
        numbered: true,
        items: [
          "Análise inicial das características que devem ser avaliadas em todo negócio antes de franquear",
          "Revisão dos documentos empresariais",
          "Revisão de marca junto ao Instituto Nacional da Propriedade Industrial (INPI)",
          "Revisão e adequação do posicionamento de mercado",
          "Construção da modelagem de negócio",
          "Identificação do melhor formato",
          "Adequação das melhores alternativas de remuneração: taxas e royalties",
          "Elaboração do projeto de viabilidade: investimento, projeções de receitas, custos e despesas, prazos de retorno sobre o investimento, entre outros",
          "Adequação da logística",
          "Elaboração da Circular de Oferta de Franquia (COF)",
          "Elaboração do contrato de franquia",
          "Orientação para elaboração dos manuais operacional, de marca e arquitetônico",
          "Plano estratégico de comunicação",
          "Elaboração da matriz estratégica de análise de franqueados",
          "Plano integrado de prospecção de franqueados",
          "Orientações estratégicas, táticas e operacionais de gestão",
        ],
      },
    ],
  },

  // 6 · Governança Corporativa em Empresas Familiares
  {
    lead: "Empresas de controle familiar enfrentam desafios adicionais em relação às demais. A questão central é estabelecer uma disciplina que regule o relacionamento da família com o negócio.",
    blocks: [
      {
        title: "O desafio",
        text: [
          "Quando esse relacionamento não é bem organizado, disputas e conflitos familiares podem ser levados para dentro da empresa e comprometer seu funcionamento, trazendo prejuízos aos resultados. A origem de boa parte dos conflitos está, em geral, no direcionamento dos negócios, na participação em resultados e nas aspirações de poder dos diversos membros da família.",
          "É comum, por exemplo, que herdeiros queiram ocupar cargos na companhia. Sem regras claras, basta que um membro da família ocupe um posto para que os demais sintam que têm o direito de fazer o mesmo.",
          "Um dos propósitos do sistema de governança corporativa é fazer uma distinção clara entre propriedade e gestão. Herdeiros têm direitos como proprietários, mas isso não lhes confere, necessariamente, o direito de serem gestores. Gestão requer competências que não se transferem por laços consanguíneos; por isso, a família precisa organizar seu relacionamento com a empresa por meio de processos disciplinados.",
        ],
      },
      {
        title: "Conselho de família",
        text: [
          "Uma boa prática é a criação de um conselho de família (CF), que não deve ser confundido com o conselho de administração (CA). O CF não integra o sistema de gestão da empresa, como é o caso do CA, mas tem o propósito de organizar as expectativas da família em relação à sociedade. Deve funcionar fora da empresa, como um fórum em que a família discute e resolve temas de conflito, levando posições de consenso à sociedade.",
          "Entre os temas que podem ser tratados estão: critérios para a sucessão e a participação na sociedade, direcionamento geral dos negócios, preservação dos princípios e valores da família, limites entre os interesses da família e da empresa, relacionamento com os demais sócios e critérios para a indicação de membros ao conselho de administração. O grande propósito é fazer da empresa um fator de agregação e fortalecimento dos laços familiares, evitando que conflitos de interesses nos negócios destruam esses laços.",
        ],
      },
      {
        title: "Princípios básicos da governança corporativa",
        items: [
          "Transparência",
          "Equidade",
          "Accountability (prestação de contas)",
          "Responsabilidade corporativa",
        ],
      },
      {
        title: "Principais agentes da governança corporativa",
        items: [
          "Sócios e acionistas (stakeholders)",
          "Conselho de administração",
          "Diretoria",
          "Conselho fiscal",
          "Auditorias independentes",
          "Gestão de riscos e compliance",
          "Ouvidoria",
          "Acordo de sócios e acionistas",
          "Direcionadores estratégicos",
          "Sucessão familiar",
          "Controladoria operacional e estratégica",
          "Código de conduta e ética",
          "Regulamento interno",
          "Manuais de políticas empresariais",
        ],
      },
    ],
  },

  // 7 · Consultoria Financeira e Orçamentária
  {
    lead: "O setor financeiro é o espelho e o cérebro da organização. Reflete todo o desempenho das atividades desenvolvidas e é responsável pelo planejamento financeiro, pela captação e aplicação dos recursos gerados, entre outras funções.",
    blocks: [
      {
        title: "Gestão financeira e orçamentária",
        text: [
          "É responsabilidade do setor financeiro analisar os créditos e os demonstrativos contábeis, avaliar a manutenção de estoques, acompanhar faturamentos e fluxos de caixa, analisar o mercado e sugerir alterações que influenciem o desempenho econômico da companhia.",
          "Uma gestão financeira e orçamentária eficaz permite estabelecer as metas da organização em diferentes áreas, converter o plano de vendas em necessidade de produção e analisar a necessidade de mão de obra. Além disso, detalha os investimentos planejados em função do mercado e da capacidade de produção, projeta as entradas e saídas de caixa e as necessidades de financiamento, e controla os recursos financeiros.",
        ],
      },
      {
        title: "Podemos contribuir",
        items: [
          "Assessoria e implementação de gestão estratégica de fluxo de caixa",
          "Elaboração de orçamento empresarial e controle de custos orçamentários",
          "Implementação e análise de indicadores econômicos e financeiros",
          "Redesenho e melhoria de processos administrativos e financeiros, assim como a manualização de procedimentos",
          "Diagnóstico financeiro e implantação de projetos de redução de custos",
          "Gestão de riscos e apuração de viabilidade econômica e financeira",
          "Implementação de controladoria interna",
          "Desenvolvimento de planos de cobrança de terceiros",
          "Implantação de sistemas de gestão administrativa e financeira",
          "Análise de margem de contribuição por produtos e serviços",
          "Curva ABC: vendas, estoque e margem",
        ],
      },
    ],
  },

  // 8 · Plano de Negócios (Business Plan)
  {
    lead: "A metodologia de Plano de Negócios (Business Plan) da Real Forte Consultoria Empresarial apoia empresários, executivos e empreendedores na tomada de decisão sobre uma oportunidade de negócio: criar um novo negócio, desenvolver um negócio atual, adquirir uma empresa, inovar em tecnologia ou desenvolver um novo produto.",
    blocks: [
      {
        title: "O que o plano demonstra",
        text: [
          "O Plano de Negócios deve refletir a estratégia competitiva a ser implementada e demonstrar por que a oportunidade (ou o novo negócio) é viável e como ela irá gerar retorno e sustentabilidade para os sócios e investidores do projeto.",
        ],
      },
      {
        title: "Como avaliamos a oportunidade",
        numbered: true,
        items: [
          "Avaliação da oportunidade de negócio: que hipóteses sustentam a decisão de investimento?",
          "A ideia de negócio e os fatores críticos para o sucesso",
          "A análise do cenário político, econômico, social, tecnológico e legal e seu impacto no negócio",
          "A análise do potencial de mercado e a identificação dos segmentos de mercado",
          "A seleção do mercado-alvo e a proposição de valor para os clientes",
          "A análise dos concorrentes e das forças competitivas",
          "A definição da estratégia de atuação do empreendimento",
          "Os diferenciais e as vantagens competitivas do negócio",
          "O plano de entrada e desenvolvimento de mercado",
          "O plano de marketing e de vendas",
          "O plano operacional e os processos de negócio",
          "O plano financeiro e a avaliação da atratividade e do retorno sobre o investimento",
          "O plano de acesso a recursos de investidores ou de instituições financeiras e de fomento",
          "A definição da estrutura organizacional que executará a estratégia competitiva",
        ],
      },
    ],
  },

  // 9 · Recursos Humanos
  {
    lead: "Independentemente da atividade, os resultados de qualquer empresa dependem de pessoas. Por isso, a gestão de recursos humanos é uma atividade estratégica para o sucesso do negócio.",
    blocks: [
      {
        title: "Nossas frentes de atuação",
        groups: [
          {
            title: "Pesquisa de clima organizacional",
            text: [
              "O clima organizacional é o ambiente humano dentro do qual as pessoas de uma organização fazem o seu trabalho. Ele não pode ser tocado nem visualizado, mas pode ser percebido e mensurado em seus diversos aspectos.",
              "A pesquisa de clima analisa a organização, seu ambiente e o conjunto de condições que caracterizam o estado de satisfação, insatisfação e motivação dos colaboradores, oferecendo aos gestores uma visão abrangente e identificando as lacunas no relacionamento. Com ela, é possível planejar estrategicamente a área de gestão de pessoas.",
            ],
          },
          {
            title: "Recrutamento e seleção de pessoal",
            text: [
              "O recrutamento é o sistema de informações que atrai candidatos potencialmente qualificados, dos quais serão selecionados os futuros funcionários. A seleção é a escolha da pessoa certa para o cargo certo, com o objetivo de manter ou aumentar a produtividade e os resultados. Enquanto o recrutamento é um processo de coleta de informações, a seleção é um processo de comparação de conhecimentos, habilidades e atitudes (CHA) e de decisão sobre os melhores candidatos.",
              "A Real Forte Consultoria contribui de forma eficiente para a atração de profissionais, conforme o perfil de competência exigido para cada função ou cargo.",
            ],
          },
          {
            title: "Avaliação psicológica",
            text: [
              "Por meio da avaliação psicológica, identificamos o potencial e as competências de cada candidato ou colaborador e a sua adequação ao contexto profissional. Ela dá suporte à decisão sobre admissões, promoções internas, mudanças de função ou transição para outra área de responsabilidade.",
              "Primeiro, analisa-se o meio em que a função será exercida, identificando suas exigências e a carreira associada. Parte-se da experiência profissional, acadêmica e pessoal do avaliado, acrescida de observações em situações simuladas e dos índices de desempenho em tarefas estruturadas de resolução de problemas. Por fim, analisam-se os interesses profissionais e os projetos de carreira, para verificar a compatibilidade com o contexto em análise.",
            ],
          },
          {
            title: "Avaliação de desempenho",
            text: [
              "Ferramenta que ajuda os gestores a conhecer as habilidades e competências dos profissionais da organização. Permite identificar talentos para promoções internas e formação de sucessores, além de fornecer informações relevantes sobre a necessidade de treinamento e desenvolvimento de pessoas.",
              "O processo avalia de forma objetiva e clara, dando ao cliente segurança sobre as competências avaliadas de seus colaboradores.",
            ],
          },
          {
            title: "Plano de cargos e salários",
            text: [
              "A estruturação da política de cargos e salários é uma das mais importantes ações da área de recursos humanos, para:",
            ],
            items: [
              "Consolidar a estrutura organizacional",
              "Definir as principais atribuições e responsabilidades de cada cargo",
              "Estabelecer uma estrutura de remuneração clara para colaboradores e gestores",
              "Definir uma remuneração competitiva para os cargos estratégicos da empresa",
              "Valorizar, estimular e reconhecer os colaboradores",
              "Reduzir conflitos e ações trabalhistas",
              "Garantir maior assertividade no recrutamento e seleção de novos colaboradores",
              "Promover a retenção de talentos",
              "Contribuir para elevar a qualidade do clima organizacional",
            ],
          },
          {
            title: "Treinamento e desenvolvimento",
            text: [
              "Nossos consultores levantam com o cliente quais conhecimentos e habilidades são necessários ao desempenho no cargo, verificam os motivos da diferença entre o desempenho esperado e o real e, se necessário, mapeiam as competências futuras desejadas, a partir da análise de cenários ou dos desempenhos bem-sucedidos de outros colaboradores.",
              "Os conteúdos e métodos de treinamento são elaborados por pessoal especializado, adequados às características dos participantes e da organização, aproveitando os conhecimentos existentes na empresa e os obtidos na prática. Quanto mais próximo da realidade do trabalho, maior a chance de o aprendizado se mostrar no dia a dia. A atuação do gerente e dos colegas deve oferecer as condições materiais e psicossociais para que o treinado aplique de imediato o que aprendeu.",
            ],
          },
          {
            title: "Assessoria em recursos humanos",
            text: [
              "Na maioria dos casos, diretores e proprietários de médias empresas estão mais focados em atividades vitais como finanças, produção e vendas, e a gestão de pessoas fica em segundo plano, restrita às obrigações legais (folha de pagamento e benefícios) e a processos básicos como recrutamento e seleção, insuficientes para obter o máximo de resultados de uma equipe. É comum ver empresas de boa índole acumulando passivo trabalhista por conhecerem a legislação apenas superficialmente ou por não terem implantado corretamente uma política de cargos e salários.",
              "Nossa atenção está sempre nos resultados e no custo-benefício para os clientes, a partir da estruturação consistente de uma política de RH. A chave do sucesso é diagnosticar as reais necessidades de cada cliente e estruturar o seu RH. Resultados se materializam, entre outros parâmetros, na redução do turnover, na elevação da produtividade por funcionário e no aumento da competitividade, que resultam em lucros mais consistentes.",
            ],
          },
        ],
      },
    ],
  },

  // 10 · Cursos e Palestras
  {
    lead: "Capacitação de líderes e equipes com conteúdo prático de gestão.",
    blocks: [
      {
        title: "Temas",
        items: [
          "Planejamento estratégico de negócios",
          "Gestão para resultados",
          "Governança corporativa",
          "Cursos in company",
        ],
      },
    ],
  },
];
