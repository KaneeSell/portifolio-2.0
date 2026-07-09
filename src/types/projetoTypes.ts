import { todasTecnologias } from "@/data/tecnologiasDados";
import { StaticImageData } from "next/image";

export type NomeTecnologia =
  (typeof todasTecnologias)[number]["itens"][number]["nome"];

export type ProjetoStatus =
  | "Planejamento"
  | "Em Desenvolvimento"
  | "Concluido"
  | "Descontinuado";
export const todosProjetoStatus: ProjetoStatus[] = [
  "Planejamento",
  "Em Desenvolvimento",
  "Concluido",
  "Descontinuado"
]

export function getCorProjetoStatus({
  status,
  background = true
}: {
  status: ProjetoStatus,
  background?: boolean
}) {
  const bgOrText = background ? "bg-" : "text-"

  switch (status) {
    case "Planejamento":
      return `${bgOrText}sky-500`
    case "Em Desenvolvimento":
      return `${bgOrText}blue-500`
    case "Descontinuado":
      return `${bgOrText}red-500`
    case "Concluido":
      return `${bgOrText}green-500`
    default:
      return `${bgOrText}neutral-500`
  }
}

export type ProjetoVersao = "Planejamento" | "Protótipo" | "MVP" | "Produção";
export const todosProjetoVersao = [
  "Planejamento",
  "Protótipo",
  "MVP",
  "Produção"
]

export function getCorProjetoVersao({
  versao,
  background = true
}: {
  versao: ProjetoVersao,
  background?: boolean
}) {
  const bgOrText = background ? "bg-" : "text-"

  switch (versao) {
    case "Planejamento":
      return `${bgOrText}sky-500`
    case "Protótipo":
      return `${bgOrText}blue-500`
    case "MVP":
      return `${bgOrText}red-500`
    case "Produção":
      return `${bgOrText}green-500`
    default:
      return `${bgOrText}neutral-500`
  }
}

export type ProjetoTipo =
  | "ERP"
  | "SaaS"
  | "Portfolio"
  | "Dashboard"
  | "API"
  | "Desktop"
  | "Landing Page"
  | "Outro";

export type ProjetoTypes = {
  id: number;
  nome: string;
  resumo: string;
  descricao: string;
  desafios?: string;
  solucoes?: string;
  tecnologias?: NomeTecnologia[];
  tipo?: ProjetoTipo;
  status: ProjetoStatus;
  versao: ProjetoVersao;
  destaque?: boolean;
  repositorioPrivado?: boolean;
  link?: string;
  repo?: string;
  inicio?: Date;
  ultimaAtualizacao?: Date;
  equipe?: boolean;
  tamanhoEquipe?: number;
  galeria?: {
    src: string,
    title?: string,
    description?: string
    width?: number,
    height?: number,
  }[];
  imagemPrincipal?: {
    src: string,
    title?: string,
    description?: string,
    width?: number,
    height?: number,
  };
  funcionalidades?: string[];
  competencias?: string[];
  arquitetura?: string[];
  modulos?: string[];
};
