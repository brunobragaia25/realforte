export const NAV = [
  ["Início", "/"],
  ["Empresa", "/empresa"],
  ["Serviços", "/servicos"],
  ["Equipe", "/#equipe"],
  ["Clientes", "/#clientes"],
  ["Depoimentos", "/#depoimentos"],
  ["Contato", "/#contato"],
] as const;

export type NavLabel = (typeof NAV)[number][0];

export const CURRICULO_URL = "http://curriculos.realforteconsultoria.com.br/";
