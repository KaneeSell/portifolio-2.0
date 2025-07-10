'use client'
import { motion } from "motion/react";
import ContainerMiniatura from "../ContainerMiniatura";
import { Fragment } from "react";

interface TecnologiasUsadasProps {
  tecnologiasDados: {
    nome: string;
    itens: {
      nome: string;
      descricao: string;
      icon: string;
      estudando?: boolean
    }[];
  }[];
}
export default function TecnologiasUsadas(props: TecnologiasUsadasProps) {
  return (
    <article className="flex flex-col justify-center items-center gap-5 mt-10 px-5 md:max-w-2/3">
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
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
            }}
          className="text-2xl md:text-4xl font-mono font-bold">
            {item.nome}
          </motion.h3>
          <div
            className="w-full flex flex-wrap justify-center items-center gap-2"
          >
            {item.itens.map((item, index) => (
              <ContainerMiniatura
                estudando={item.estudando}
                key={index}
                titulo={item.nome}
                subtitulo={item.descricao}
                clasName={item.icon}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </article>
  );
}
