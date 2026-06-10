export type NivelTecnologia =
  | "Fundamentos"
  | "Intermediário"
  | "Avançado";
  
export type TecnologiaItemTypes = {
  nome: string;
  descricao: string;
  icon: string;
  nivel: NivelTecnologia;
  progress: number;
  estudando: boolean;
};

export type TecnologiaTypes = {
  nome: string;
  itens: TecnologiaItemTypes[];
};