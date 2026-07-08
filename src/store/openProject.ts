import { ProjetoTypes } from '@/types/projetoTypes'
import { create } from 'zustand'

type OpenProject = {
    project: ProjetoTypes | null
    setProject: (project: ProjetoTypes | null) => void
}

export const useOpenProject = create<OpenProject>((set) => ({
    project: null,
    setProject: (project) => set({ project }),
}))