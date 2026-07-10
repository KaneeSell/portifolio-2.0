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
import CustomImage from "../image/CustomImage"
import { getCorProjetoStatus, getCorProjetoVersao } from "@/types/projetoTypes"
import CustomCheckBox from "../button/CustomCheckBox"
import { todasTecnologias } from "@/data/tecnologiasDados"
import { FaLock, FaStar } from "react-icons/fa"

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
        weekday: undefined,
        year: "numeric",
        month: "short",
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
                    <div onClick={(e) => e.stopPropagation()} className={`modal ${project?.destaque && "destaque"}`}>
                        <button
                            className={`
                                absolute top-3 right-5 text-white text-lg font-bold border-2 p-1 
                                rounded-lg bg-red-500 hover:bg-red-600 hover:cursor-pointer
                            `}
                            onClick={() => setProject(null)}>
                            <MdClose />
                        </button>
                        <h2 className="text-3xl font-bold">{project?.nome}</h2>
                        {project?.destaque && <FaStar className="text-amber-400 size-7 absolute top-2 left-2" />}
                        {project?.imagemPrincipal && (
                            <div className="box w-full">
                                <CustomImage
                                    galery={project.galeria}
                                    alt={`Imagem ${project.nome}`}
                                    img={project.imagemPrincipal}
                                    onClick={() => setImgOpen(true)} />
                                <CustomLightBox
                                    images={project.imagemPrincipal}
                                    open={imgOpen}
                                    onClose={() => setImgOpen(false)}
                                />
                            </div>
                        )}
                        <div className="box text-lg justify-evenly w-full">
                            {project.tipo && (
                                <span>
                                    <strong>Tipo:</strong> {project.tipo}
                                </span>
                            )}
                            <span className="box">
                                <strong>{project.equipe ? "Equipe" : "Solo"}</strong> <CustomCheckBox checked={true} />
                            </span>
                            {project.tamanhoEquipe && project.tamanhoEquipe > 0 && (
                                <span>
                                    <strong>Tamanho da Equipe:</strong> {project.tamanhoEquipe}
                                </span>
                            )}
                        </div>
                        <div className="box text-lg justify-evenly w-full">
                            <span className="box">
                                <strong>Status:</strong>
                                <p className={`${getCorProjetoStatus({ status: project.status })} rounded-full px-2`}>{project.status}</p>
                            </span>
                            <span className="box">
                                <strong>Versão:</strong>
                                <p className={`${getCorProjetoVersao({ versao: project.versao })} rounded-full px-2`}>{project.versao}</p>
                            </span>
                        </div>
                        <div className="box text-lg justify-evenly w-full">
                            <span>
                                <strong>Data de Início:</strong> {project.inicio?.toLocaleDateString("pt-BR", dateOptions)}
                            </span>
                            <span>
                                <strong>Última Atualização:</strong> {project.ultimaAtualizacao?.toLocaleDateString("pt-BR", dateOptions)}
                            </span>
                        </div>
                        {project.tecnologias && (
                            <span className="box w-full flex-col text-lg">
                                <p><strong>Tecnologias: </strong></p>
                                <span className="box">
                                    {project.tecnologias.map((tech, index) => {
                                        const findTech = todasTecnologias.map(stack => {
                                            const findedTechs = stack.itens.find(techItem => techItem.nome === tech)
                                            return findedTechs
                                        })
                                        const techIcon = findTech.filter(tech => tech?.icon).map(tech => tech?.icon)
                                        const techName = findTech.filter(tech => tech?.nome).map(tech => tech?.nome)

                                        return (
                                            <span key={index} className="box">
                                                <i className={`${techIcon}`}></i>
                                                {techName}{(index + 1) !== project.tecnologias?.length ? ", " : "."}
                                            </span>
                                        )
                                    })}
                                </span>
                            </span>
                        )}
                        <span className="box gap-0">
                            <p className="text-lg"><strong>Descrição:</strong></p>
                            <p className="text-lg font-sans font-thin w-full text-justify">{project?.descricao}</p>
                        </span>
                        {project.funcionalidades && (
                            <span className="box gap-0">
                                <p className="text-lg"><strong>Funcionalidade:</strong></p>
                                <p className="text-lg font-sans text-center">{project.funcionalidades.join(", ")}</p>
                            </span>
                        )}
                        {project.desafios && (
                            <span className="box gap-0">
                                <p className="text-lg"><strong>Desafios:</strong></p>
                                <p className="text-lg font-sans text-center">{project.desafios}</p>
                            </span>
                        )}
                        <div className="box w-full justify-evenly items-start">
                            {project.arquitetura && (
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-lg"><strong>Arquitetura: </strong></p>
                                    <ul className="list-disc">
                                        {project.arquitetura.map((item, index) => <li className="list-item ml-4" key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            )}
                            {project.competencias && (
                                <div className="flex flex-col justify-start items-start">
                                    <p><strong>Competencias: </strong></p>
                                    <ul className="list-disc">
                                        {project.competencias.map((item, index) => <li className="list-item ml-4" key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <span className="box w-full">
                            {project.repo && (
                                <Link href={project.repo} target="_blank" rel="noopener noreferrer nofollow" className={`w-full ${project.link && "md:w-[49%]"}`}>
                                    <button
                                        className="btn w-full"
                                    >
                                        Repositorio
                                    </button>
                                </Link>
                            )}
                            {project.repositorioPrivado && (
                                <div className={`w-full ${project.link && "md:w-[49%]"}`}>
                                    <button
                                        className="btn btn-disabled py-1 w-full"
                                        disabled
                                    >
                                        Repositorio Privado
                                        <FaLock />
                                    </button>
                                </div>
                            )}
                            {project.link && (
                                <Link href={project.link} target="_blank" rel="noopener noreferrer nofollow" className={`w-full ${project.repo || project.repositorioPrivado && "md:w-[49%]"}`}>
                                    <button
                                        className="btn success w-full"
                                    >
                                        Demonstração
                                    </button>
                                </Link>
                            )}
                        </span>
                        <button className="btn w-full error" onClick={() => setProject(null)}>
                            Voltar
                        </button>
                    </div>
                </ motion.div>
            )}
        </AnimatePresence>
    )
}