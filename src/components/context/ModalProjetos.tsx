'use client'
import { useOpenProject } from "@/store/openProject"
import { MdClose } from "react-icons/md"

export default function ModalProjetos() {
    const project = useOpenProject((state) => state.project)
    const setProject = useOpenProject((state) => state.setProject)

    return (
        <div
            className={`
                ${project !== null ? "flex overflow-hidden" : "hidden overflow-auto"}
                w-full h-full z-50 fixed top-0 left-0 bg-black/50 backdrop-blur-sm
                justify-center items-center
            `}
            onClick={() => setProject(null)}>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <button className={`
                    absolute top-3 right-5 text-white text-2xl font-bold border-2 p-1 rounded-lg bg-red-500 hover:bg-red-600 hover:cursor-pointer
                `}
                    onClick={() => setProject(null)}>
                    <MdClose />
                </button>
                <h2 className="text-3xl font-bold">{project?.nome}</h2>
                <p className="text-lg mt-5">{project?.descricao}</p>
            </div>
        </ div>
    )
}