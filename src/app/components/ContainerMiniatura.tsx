'use client'
import { motion } from "motion/react";

interface ContainerMiniaturaProps {
  titulo: string;
  subtitulo: string;
  clasName: string;
  estudando?: boolean;
}
export default function ContainerMiniatura(props: ContainerMiniaturaProps) {
  return (
    <motion.span
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1, transition: {ease: 'easeOut', duration: 0.6, times:[0.4]},
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
            }}
      className={`
        flex gap-2 items-center border-2 rounded-xl py-1 px-4
        hover:bg-gray-700 cursor-pointer hover:text-black
        border-gray-600 hover:border-gray-600 leading-5
        text-start group
        `}
    >
      <figure className="group-hover:bg-gray-950 bg-gray-600 p-2 rounded-lg">
        <i
          className={`
                ${props.clasName}
                colored text-4xl
                `}
        />
      </figure>
      <div>
        <div className="flex items-center gap-1">
          <h4 className="text-white font-bold">{props.titulo}</h4>
          {props.estudando && <h4 className="text-blue-500 font-bold">Estudando</h4>}
        </div>
        <h5>{props.subtitulo}</h5>
      </div>
    </motion.span>
  );
}
