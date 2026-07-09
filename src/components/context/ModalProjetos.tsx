'use client'
import { useOpenProject } from "@/store/openProject"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { Fragment } from "react/jsx-runtime"
import { AnimatePresence, motion } from "motion/react";
import CustomLightBox from "../lightbox/CustomLightBox"
import useLockBodyScroll from "@/hooks/useLockBodyScroll"
import Link from "next/link"

export default function ModalProjetos() {
    const project = useOpenProject((state) => state.project)
    const setProject = useOpenProject((state) => state.setProject)
    const [imgOpen, setImgOpen] = useState<boolean>(false);
    const { setLock } = useLockBodyScroll(false)
    const dateOptions: {
        weekday: "long" | "short" | "narrow" | undefined,
        year: "numeric" | "2-digit" | undefined,
        month: "long" | "short" | "narrow" | "numeric" | "2-digit" | undefined,
        day: "numeric" | "2-digit" | undefined,
    } = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }

    useEffect(() => {
        if (project !== null) {
            setLock(true)
        } else {
            setLock(false)
        }
    }, [project])

    return (
        <AnimatePresence mode="wait">
            {project !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.15,
                    }}
                    className={`
                        flex overflow-hidden
                        w-full h-full z-50 fixed top-0 left-0 bg-black/50 backdrop-blur-sm
                        justify-center items-center
                    `}
                    onClick={() => setProject(null)}>
                    <div onClick={(e) => e.stopPropagation()} className="modal">
                        <button
                            className={`
                                absolute top-3 right-5 text-white text-2xl font-bold border-2 p-1 rounded-lg bg-red-500 hover:bg-red-600 hover:cursor-pointer
                            `}
                            onClick={() => setProject(null)}>
                            <MdClose />
                        </button>
                        <h2 className="text-3xl font-bold">{project?.nome}</h2>
                        {project?.imagem && project?.imagemCaminho && (
                            <Fragment>
                                <Image
                                    alt={`Imagem ${project.nome}`}
                                    src={project.imagem}
                                    className="w-auto h-100 mt-5 rounded-lg hover:cursor-pointer"
                                    onClick={() => setImgOpen(true)}
                                />
                                <CustomLightBox
                                    images={[project.imagem]}
                                    open={imgOpen}
                                    onClose={() => setImgOpen(false)}
                                />
                            </Fragment>
                        )}
                        <div className="box justify-start w-full flex-wrap">
                            <span>
                                <strong>Data de Início:</strong> {project.inicio?.toLocaleDateString("pt-BR", dateOptions)}
                            </span>
                            <span>
                                <strong>Última Atualização:</strong> {project.ultimaAtualizacao?.toLocaleDateString("pt-BR", dateOptions)}
                            </span>
                        </div>
                        <div className="box justify-start w-full flex-wrap">
                            <span>
                                <strong>Status:</strong> {project.status}
                            </span>
                            <span>
                                <strong>Versão:</strong> {project.versao}
                            </span>
                            {project.tipo && (
                                <span>
                                    <strong>Tipo:</strong> {project.tipo}
                                </span>
                            )}
                            {project.equipe && (
                                <span>
                                    <strong>Equipe?</strong> Sim
                                </span>
                            )}
                            {project.tamanhoEquipe && project.tamanhoEquipe > 0 && (
                                <span>
                                    <strong>Tamanho da Equipe:</strong> {project.tamanhoEquipe}
                                </span>
                            )}
                        </div>
                        {project.tecnologias && (
                            <span>
                                <strong>Principais Tecnologias:</strong> {Array.isArray(project.tecnologias) && project.tecnologias?.join(", ")}.
                            </span>
                        )}
                        {project.funcionalidades && (
                            <span>
                                <strong>Funcionalidade:</strong> {project.funcionalidades.join(", ")}.
                            </span>
                        )}
                        <p className="text-lg font-medium font-sans"><strong>Descrição:</strong> {project?.descricao}</p>
                        <p className="text-lg font-medium font-sans"><strong>Arquitetura:</strong> {project?.arquitetura}</p>
                        <p className="text-lg font-medium font-sans"><strong>Desafios:</strong> {project?.desafios}</p>
                        <p className="text-lg font-medium font-sans"><strong>Desafios:</strong> {project?.desafios}</p>
                        <span className="box w-full">
                            {project.repo && (
                                <Link href={project.repo} target="_blank" rel="noopener noreferrer nofollow" className="w-full md:w-[49%]">
                                    <button
                                        className="btn w-full"
                                    >
                                        Repositorio
                                    </button>
                                </Link>
                            )}
                            {project.repositorioPrivado && (
                                <div className="w-full md:w-[49%]">
                                    <button
                                        className="btn w-full"
                                        disabled
                                    >
                                        Repositorio Privado
                                    </button>
                                </div>
                            )}
                            {project.link && (
                                <Link href={project.link} target="_blank" rel="noopener noreferrer nofollow" className="w-full md:w-[49%]">
                                    <button
                                        className="btn success w-full"
                                    >
                                        Demonstração
                                    </button>
                                </Link>
                            )}
                        </span>
                    </div>
                </ motion.div>
            )}
        </AnimatePresence>
    )
}