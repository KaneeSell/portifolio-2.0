import { NivelTecnologia } from "@/types/tecnologiasTypes";

export function getNivel(progress: number): NivelTecnologia {
  if (progress < 50) return "Fundamentos";
  if (progress < 80) return "Intermediário";
  return "Avançado";
}