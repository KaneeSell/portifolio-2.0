"use client";
import { motion } from "motion/react";

interface ContainerMiniaturaProps {
  titulo: string;
  subtitulo: string;
  devIcon: string;
  estudando?: boolean;
  nivel: string;
  progress: number;
}
const getProgressColor = (progress: number) => {
if (progress < 30) return "bg-red-500";
if (progress < 50) return "bg-orange-500";
if (progress < 70) return "bg-yellow-500";
if (progress < 85) return "bg-lime-500";
return "bg-green-500";
};

const getProgressColorText = (progress: number) => {
if (progress < 30) return "text-red-700";
if (progress < 50) return "text-orange-700";
if (progress < 70) return "text-yellow-700";
if (progress < 85) return "text-lime-700";
return "text-green-700";
};

export default function ContainerMiniatura(props: ContainerMiniaturaProps) {

  return (
    <motion.span
      initial={{
        scale: 0.5,
        opacity: 0,
      }}
      whileInView={{
        scale: 1,
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
      className={`
        flex gap-2 items-center border-2 rounded-xl py-1 px-4
        text-start group hover:scale-101 transition-transform
        leading-5 cursor-pointer 
        ${/* Dark mode styles */ null}
        bg-gray-900
        hover:border-blue-600 
        hover:bg-blue-950
        border-gray-600 
        ${/* Light mode styles */ null}
        light:bg-neutral-300
        hover:light:border-blue-400 
        light:hover:bg-blue-100
        hover:light:text-blue-700
        `}
    >
      <figure
        className={`
          border-2 border-transparent p-2 rounded-lg 
        ${/* Dark mode styles */ null}
          group-hover:bg-gray-900 bg-gray-950 
          group-hover:border-blue-700 
        ${/* Light mode styles */ null}
          light:group-hover:bg-blue-200 light:bg-neutral-200 
          light:group-hover:border-blue-400 
        `}
      >
        <i
          className={`
            ${props.devIcon}
            colored text-7xl
            `}
        />
      </figure>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <h4 className="font-bold">{props.titulo}</h4>
          {props.estudando && (
            <h4 className="text-blue-500 font-bold">Estudando</h4>
          )}
        </div>
        <h5 className="text-gray-300 light:text-gray-700 group-hover:light:text-blue-400">
          {props.subtitulo}
        </h5>
        <span className={`
            flex items-center gap-1 flex-row text-sm font-bold
          `}>
          Nivel: 
        <p className={`
            ${getProgressColorText(props.progress)}
          `}>
          {props.nivel} ({props.progress}%)
        </p>
        </span>
        <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${props.progress}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className={`
              h-full ${getProgressColor(props.progress)}
            `}
          />
        </div>
      </div>
    </motion.span>
  );
}
