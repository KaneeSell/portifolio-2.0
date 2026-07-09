"use client";

import { motion } from "motion/react";
import ContainerMiniatura from "../ContainerMiniatura";
import { Fragment, useState } from "react";
import { todasTecnologias } from "@/data/tecnologiasDados";

export default function TecnologiasUsadas() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <article className="flex flex-col justify-center items-center gap-10 mt-10 px-5 md:max-w-2/3">
        <span className="text-start">
          <motion.h3
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { ease: "easeOut", duration: 0.6, times: [0.4] },
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
            }}
            className="text-2xl md:text-4xl font-serif font-semibold"
          >
            Tecnologias
          </motion.h3>
          <motion.p
            initial={{
              y: -20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { ease: "easeOut", duration: 0.6, times: [0.4] },
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
            }}
            className="text-sm md:text-base text-gray-300 light:text-gray-700"
          >
            Uso tecnologias focadas para entregar conteúdos incríveis e com alto
            desempenho.
          </motion.p>
        </span>
        <motion.article
          initial={{
            height: 500,
          }}
          animate={{
            height: isVisible ? "auto" : 500,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          className={`
        flex flex-col justify-start items-center gap-5 pb-20
        overflow-y-hidden relative
        `}
        >
          {todasTecnologias.map((item, index) => (
            <Fragment key={index}>
              <motion.h3
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { ease: "easeInOut", duration: 0.6, times: [0.4] },
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.2,
                }}
                className="text-2xl md:text-4xl font-mono font-bold"
              >
                {item.nome}
              </motion.h3>
              <div className="w-full flex flex-wrap justify-center items-center gap-2">
                {item.itens.map((item, index) => (
                  <ContainerMiniatura
                    estudando={item.estudando}
                    key={index}
                    titulo={item.nome}
                    subtitulo={item.descricao}
                    devIcon={item.icon}
                    nivel={item.nivel}
                    progress={item.progress || 0}
                  />
                ))}
              </div>
            </Fragment>
          ))}
          <div
            className={`${isVisible && "hidden"}
            absolute top-95 left-0 w-full h-50
            pointer-events-none bg-linear-to-t
            from-black via-black
            light:from-neutral-200/30 
            light:via-neutral-200/10 z-10
            to-transparent flex justify-center items-end
          `}
          />
          <button
            onClick={() => setIsVisible(!isVisible)}
            className={"btn primary transition-colors z-10 absolute bottom-2"}
          >
            {isVisible ? "Ver Menos" : "Ver Mais"}
          </button>
        </motion.article>
      </article>
    </Fragment>
  );
}
