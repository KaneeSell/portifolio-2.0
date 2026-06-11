"use client";
import { projetoDados } from "@/data/projetoData";
import { useOpenProject } from "@/store/openProject";
import { motion } from "motion/react";
import Image from "next/image";
import { Fragment, useState } from "react";
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
              text-xl md:text-2xl flex flex-col gap-2 w-full sm:w-70 lg:w-100 h-full sm:h-100 lg:h-110
              border-1 rounded-2xl p-3 paper
            `}
          >
            <span>{projeto.nome}</span>
            <figure className="relative h-full lg:h-50">
              <div
                className={`
                absolute flex w-full justify-evenly items-center light:text-white
                text-sm lg:text-base top-2 text-nowrap flex-wrap gap-1
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
                  <Image
                    alt={`Imagem ${projeto.nome}`}
                    src={projeto.imagem}
                    onClick={() => setImgOpen({ key: index, open: true })}
                  />
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
            <span className="text-base md:text:lg h-full text-gray-300 light:text-gray-700 overflow-y-auto">
              {projeto.descricao}
            </span>
            <hr />
            <span className="flex w-full flex-col gap-1 text-white text-lg lg:text-xl text-center justify-center">
              <button
                onClick={() => setProject(projeto)}
                className="bg-sky-500 px-2 py-0.5 hover:bg-sky-600 rounded-md hover:cursor-pointer"
              >
                Detalhes
              </button>
            </span>
          </motion.span>
        ))}
      </div>
    </div>
  );
}
