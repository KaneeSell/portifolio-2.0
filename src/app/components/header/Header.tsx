"use client";
import perfil from "@/app/assets/img/perfil.png";
import { motion } from "motion/react";
import Image from "next/image";
import { MdOutlineSimCardDownload, MdSimCardDownload } from "react-icons/md";

export default function Header() {
  return (
    <header 
    id="inicio"
    className="flex flex-col-reverse scroll-mt-15 md:flex-row max-w-250 justify-between items-center w-full px-5 text-4xl text-start font-extrabold text-white">
      <motion.span
        initial={{
          x: -150,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1, transition:{ease: 'easeOut', duration: 0.6, times: [0.4]},
        }}
        viewport={{
          once: true
        }}
        transition={{
          ease: "easeOut",
          duration: 0.4,
        }}
        className="md:w-3/5 mt-5 md:mt-15"
      >
        <motion.span 
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }} 
          viewport={{
            once: true
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.6
          }}
        className="flex items-center flex-col text-center justify-between h-full md:py-4 gap-5">
          Seja bem vindo ao meu Portifólio!
          <a
          href="./Curriculo Daniel Henrique Sell.pdf"
          download
          className="text-2xl bg-blue-500 rounded-2xl px-5 py-1 group flex items-center gap-3 cursor-pointer hover:bg-blue-600">
            Baixar CV
            <MdOutlineSimCardDownload size={'25px'} className="group-hover:hidden"/>
            <MdSimCardDownload size={'25px'} className="hidden group-hover:flex"/>
            </a>
        </motion.span>
      </motion.span>
      <motion.span
        initial={{
          x: 150,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1, transition: {ease: 'easeOut', duration: 0.6, times: [0.4]},
        }}
        viewport={{
          once: true
        }}
        transition={{
          ease: "easeOut",
          duration: 0.6,
        }}
        className="rounded-full"
      >
        <Image alt="perfil" src={perfil} height={300} className="rounded-4xl" />
      </motion.span>
    </header>
  );
}
