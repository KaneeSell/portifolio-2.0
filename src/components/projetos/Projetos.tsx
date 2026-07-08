"use client";
import { projetoDados } from "@/data/projetoData";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useOpenProject } from "@/store/openProject";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FaExpand } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";

export default function Projetos() {
  interface imgOpenInterface {
    key: number;
    open: boolean;
  }
  const defaultImgOpen: imgOpenInterface = { key: 0, open: false };
  const [imgOpen, setImgOpen] = useState<imgOpenInterface>(defaultImgOpen);
  const project = useOpenProject((state) => state.project)
  const setProject = useOpenProject((state) => state.setProject)
  const { setLock } = useLockBodyScroll(false)

  useEffect(() => {
    if (imgOpen.open !== defaultImgOpen.open) {
      setLock(true)
    } else {
      setLock(false)
    }
  }, [imgOpen])

  return (
    <div
      id="projetos"
      className={`
        scroll-m-15 mt-10 px-5 flex flex-col gap-10 w-full
        text-3xl md:text-5xl font-serif font-extrabold
        `}
    >
      <motion.h2
        initial={{
          opacity: 0,
          x: -150,
        }}
        whileInView={{
          opacity: 1,
          transition: { ease: "easeOut", duration: 0.6, times: [0.4] },
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
      >
        Projetos
      </motion.h2>
      <div className="flex w-full gap-5 flex-wrap justify-center items-center">
        {projetoDados.map((projeto, index) => (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              transition: { ease: "easeOut", duration: 0.6, times: [0.4] },
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
            }}
            key={index}
            className={`
              text-xl md:text-2xl flex flex-col gap-2 w-full sm:w-70 lg:w-100 h-full sm:h-100 lg:h-120
              border-1 rounded-2xl p-3 paper group
            `}
          >
            <span>{projeto.nome}</span>
            <figure className="relative h-full lg:h-50">
              <div
                className={`
                absolute flex w-full justify-evenly items-center light:text-white
                text-sm lg:text-base top-2 text-nowrap flex-wrap gap-1 z-1
                `}
              >
                <span
                  className={`
                    px-2 rounded-2xl
                    ${projeto.status === "Descontinuado" && "bg-red-500"}
                    ${projeto.status === "Planejamento" && "bg-blue-500"}
                    ${projeto.status === "Concluido" && "bg-emerald-500"}
                    ${projeto.status === "Em Desenvolvimento" && "bg-yellow-500"}
                    ${projeto.status === "MVP" && "bg-purple-500"}
                  `}
                >
                  {projeto.status}
                </span>
                <span
                  className={`
                    px-2 rounded-2xl
                    ${projeto.versao === "Planejamento" && "bg-slate-500"}
                    ${projeto.versao === "Protótipo" && "bg-orange-500"}
                    ${projeto.versao === "MVP" && "bg-blue-500"}
                    ${projeto.versao === "Produção" && "bg-emerald-500"}
                  `}
                >
                  {projeto.versao}
                </span>
              </div>
              {projeto.imagem && projeto.imagemCaminho && (
                <Fragment>
                  <div className="relative group/img flex justify-center items-center cursor-pointer border-2 border-transparent hover:border-white">
                    <Image
                      alt={`Imagem ${projeto.nome}`}
                      src={projeto.imagem}
                      onClick={() => setImgOpen({ key: index, open: true })}
                      className="group-hover:brightness-80"
                    />
                    <FaExpand className="hidden group-hover/img:flex absolute" />
                  </div>
                  <Lightbox
                    open={
                      imgOpen.key === index && imgOpen.open === true
                        ? true
                        : false
                    }
                    close={() => setImgOpen(defaultImgOpen)}
                    slides={projeto.imagemCaminho.map((img) => ({ src: img }))}
                    render={{
                      buttonPrev:
                        projeto.imagemCaminho.length <= 1
                          ? () => null
                          : undefined,
                      buttonNext:
                        projeto.imagemCaminho.length <= 1
                          ? () => null
                          : undefined,
                    }}
                  />
                </Fragment>
              )}
            </figure>
            <span className="text-base px-2 md:text:lg h-full text-gray-400 group-hover:text-white light:group-hover:text-black light:text-gray-700 overflow-y-auto">
              {projeto.resumo}
            </span>
            <hr />
            <span className="flex w-full flex-col gap-1 text-white text-lg lg:text-xl text-center justify-center">
              {projeto.repo && (
                <Link href={projeto.repo} target="_blank" rel="noopener noreferrer nofollow">
                  <button
                    className="text-gray-300 hover:text-white bg-neutral-700 px-2 w-full py-0.5 hover:bg-neutral-600 rounded-md hover:cursor-pointer"
                  >
                    Repositorio
                  </button>
                </Link>
              )}
              {projeto.link && (
                <Link href={projeto.link} target="_blank" rel="noopener noreferrer nofollow">
                  <button
                    className="text-gray-300 hover:text-white bg-green-600 px-2 w-full py-0.5 hover:bg-green-500 rounded-md hover:cursor-pointer"
                  >
                    Demonstração
                  </button>
                </Link>
              )}
              <button
                onClick={() => setProject(projeto)}
                className="text-gray-300 hover:text-white bg-sky-600 w-full px-2 py-0.5 hover:bg-sky-500 rounded-md hover:cursor-pointer"
              >
                Ver Detalhes
              </button>
            </span>
          </motion.span>
        ))}
      </div>
    </div>
  );
}
