"use client";
import { motion } from "motion/react";
import ContainerMiniatura from "../ContainerMiniatura";
import { Fragment, useState } from "react";

interface TecnologiasUsadasProps {
  tecnologiasDados: {
    nome: string;
    itens: {
      nome: string;
      descricao: string;
      icon: string;
      estudando?: boolean;
      nivel: string;
      progress: number;
    }[];
  }[];
}
export default function TecnologiasUsadas(props: TecnologiasUsadasProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
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
        mt-10 px-5 md:max-w-2/3 overflow-y-hidden relative
        `}
      >
        {props.tecnologiasDados.map((item, index) => (
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
                duration: 0.4,
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
            <motion.div
              animate={{
                opacity: isVisible ? 0 : 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.4,
              }}
              className={`
                absolute bottom-0 left-0 w-full h-50
                pointer-events-none bg-gradient-to-t
                from-zinc-950/30 via-zinc-950/10
                light:from-neutral-200/30 
                light:via-neutral-200/10
                to-transparent flex justify-center items-end
              `}
            />
          </Fragment>
        ))}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={`
                mt-5 px-4 py-2 bg-blue-700 text-white ${!isVisible && `animate-pulse`} 
                hover:animate-none hover:cursor-pointer rounded-md hover:bg-blue-600 
                transition-colors z-1 absolute bottom-2
              `}
        >
          {isVisible ? "Ver Menos" : "Ver Mais"}
        </button>
      </motion.article>
    </Fragment>
  );
}
