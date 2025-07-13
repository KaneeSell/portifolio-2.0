"use client";
import Article from "../Article";
import {
  backEnd,
  estilizacao,
  framework,
  linguagem,
} from "@/app/types/tecnologiasDados";
import TecnologiasUsadas from "./TecnologiasUsadas";
import { Fragment } from "react";
import { motion } from "motion/react";

export default function SobreMim() {
  const dataAtual = new Date();
  const dataNascimento = new Date("1999-07-10");
  function idadeAtual() {
    if (
      dataNascimento.getMonth() < dataAtual.getMonth() ||
      (dataNascimento.getMonth() <= dataAtual.getMonth() &&
        dataNascimento.getDate() <= dataAtual.getDate())
    ) {
      return dataAtual.getFullYear() - dataNascimento.getFullYear();
    } else {
      return dataAtual.getFullYear() - dataNascimento.getFullYear() - 1;
    }
  }
  return (
    <Fragment>
      <Article id="sobreMim" titulo="Sobre Mim">
        <p>
          Olá! Meu nome é Daniel H. Sell e meu nickname é Kane&apos;e Sell,
          tenho {idadeAtual()} e moro em Jaraguá do Sul.
        </p>
        <p>
          Estudo sobre computação(Hardware e Software) desde 2012, em 2018
          trabalhei com manutenção de computadores, no inicio de 2023 iniciei
          meus estudos em Desenvolvimento de Software.
        </p>
        <p>
          Em Fevereiro de 2023, iniciei o Curso Técnico em Desenvolvimento no
          SENAI-SC, mas optei por interrompê-lo em 2024 para focar em cursos
          mais diretos, que oferecem um aprendizado mais específico e prático do
          que os cursos técnicos e faculdades atuais.
        </p>
        <p>
          Estou pronto para agregar minha experiência e conhecimento em Hardware
          e desenvolvimento de Software a um time.
        </p>
      </Article>
      <article className="flex flex-col justify-center items-center gap-10 mt-10 px-5 md:max-w-2/3">
        <span className="text-start">
          <motion.h3
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1, transition: {ease: 'easeOut', duration: 0.6, times:[0.4]},
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
            }}
          className="text-2xl md:text-4xl font-serif font-semibold text-white">
            Tecnologias que uso frequentemente
          </motion.h3>
          <motion.p
            initial={{
              y: -20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1, transition: {ease: 'easeOut', duration: 0.6, times:[0.4]},
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
            }}
          className="text-sm md:text-base text-gray-300">
            Uso tecnologias focadas para entregar conteúdos incríveis e com alto
            desempenho.
          </motion.p>
        </span>
      </article>
      <TecnologiasUsadas
        tecnologiasDados={[linguagem, framework, estilizacao, backEnd]}
      />
    </Fragment>
  );
}
