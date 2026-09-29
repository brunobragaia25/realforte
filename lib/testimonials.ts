export type Testimonial = {
  text: string;
  name: string;
  role: string;
  /** Caminho em /public, ex.: "/images/depoimentos/flavio.jpg". Sem foto, mostra as iniciais. */
  photo?: string;
};

// Adicione novos depoimentos aqui — o carrossel e o contador "01 / N" se ajustam sozinhos.
export const testimonials: Testimonial[] = [
  {
    text: "Sou Cliente da Real Forte Consultoria desde 201X. Durante todo esse tempo, eles sempre foram muito importantes para o Grupo Lima e também para a minha vida pessoal. Quando os resultados desta parceria começaram a aparecer, vários amigos empresários me perguntaram sobre a consultoria. Vou repetir o que eu sempre disse ao contratar a Real Forte, se prepare para trabalhar muito! Mas valerá muito a pena. Porque eles têm qualificação técnica, experiência e, o principal de todos, compromisso com os resultados.",
    name: "Gustavo [sobrenome]",
    role: "Diretor-Presidente do Grupo Lima",
  },
  {
    text: "Gostaria de parabenizar à Real Forte Consultoria por esses 40 anos de mercado, pois o caminho que ela trilhou até agora foi de resultados sólidos. Em todo este tempo de parceria, sempre demonstrou alta qualificação técnica, analítica e empresarial, além de muita objetividade. Contratar a Real Forte é comprometer-se com um futuro de muito trabalho pela frente, mas de muitos resultados também.",
    name: "Flavio Figueiredo Assis",
    role: "Diretor Presidente na Le Card S.A. e Diretor executivo na Financial Contabilidade",
  },
  {
    text: "A Elson's sente-se honrada em fazer parte da história da Real Forte Consultoria. Podemos atestar a competência da empresa e afirmar que esta parceria nos proporciona grandes resultados. Que a nossa parceria se estenda por muitos anos, pois a Real Forte é a parceira ideal para qualquer empresa que deseja prosperar e obter um lugar de maior destaque no mercado.",
    name: "Elson Conde Oliveira",
    role: "Diretor Presidente da Elson's Distribuidora",
  },
  {
    text: "A Elson's está sempre atenta às necessidades de inovação e de adequação ao mercado. Devido a isso, buscamos na Real Forte o parceiro ideal para caminhar neste projeto. O que vimos desde o início foi uma equipe altamente capacitada e dedicada ao nosso negócio. Agradecemos à Real Forte Consultoria pela condução do trabalho com a certeza de que escolhemos o parceiro certo.",
    name: "Valeria Conde Oliveira",
    role: "Diretora Administrativa Financeira da Elson's Distribuidora",
  },
];
