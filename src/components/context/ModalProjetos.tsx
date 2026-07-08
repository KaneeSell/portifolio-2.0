'use client'
import { useOpenProject } from "@/store/openProject"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { Fragment } from "react/jsx-runtime"
import { AnimatePresence, motion } from "motion/react";
import CustomLightBox from "../lightbox/CustomLightBox"
import useLockBodyScroll from "@/hooks/useLockBodyScroll"

export default function ModalProjetos() {
    const project = useOpenProject((state) => state.project)
    const setProject = useOpenProject((state) => state.setProject)
    const [imgOpen, setImgOpen] = useState<boolean>(false);
    const { setLock } = useLockBodyScroll(false)
    
    useEffect(() => {
        if(project !== null) {
            setLock(true)
        } else {
            setLock(false)
        }
    }, [project])

    return (
        <AnimatePresence>
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
                        <p className="text-lg mt-5">{project?.descricao}</p>
                    </div>
                </ motion.div>
            )}
        </AnimatePresence>
    )
}