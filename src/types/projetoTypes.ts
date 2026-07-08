import { todasTecnologias } from "@/data/tecnologiasDados";
import { StaticImageData } from "next/image";

export type NomeTecnologia =
  (typeof todasTecnologias)[number]["itens"][number]["nome"];

export type ProjetoStatus =
  | "Planejamento"
  | "Em Desenvolvimento"
  | "MVP"
  | "Concluido"
  | "Descontinuado";

export type ProjetoVersao = "Planejamento" | "Protótipo" | "MVP" | "Produção";

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
  resumo?: string;
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
  imagem?: StaticImageData;
  imagemCaminho?: string[];
  funcionalidades?: string[];
  aprendizados?: string[];
  arquitetura?: string[];
  modulos?: string[];
  imagemPrincipal?: StaticImageData;
};
