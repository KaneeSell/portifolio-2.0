"use client";
import Article from "../Article";
import {
  todasTecnologias
} from "@/data/tecnologiasDados";
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
          Olá! Meu nome é Daniel Henrique Sell(Kane&apos;e Sell),
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
          Em Inicio de 2025 Finalizei o curso de Desenvolvimento Web Full Stack
          da Udemy "Desenvolvimento Web Completo 2025 - 20 Cursos + 20 Projetos"
          do professor "Leonardo Moura", onde aprendi a desenvolver aplicações
          web utilizando as tecnologias mais atuais, como React, Next.js,
          Node.js, Express, MongoDB, postgres, entre outras.
        </p>
        <p>
          Em Novembro de 2025, abri MEI e iniciei a trabalhar como freelancer na
          Delly's, atuei como desenvolvedor front-end. Responsabilidades
          incluíram Trabalhar com Next, autenticação de usuários com Authjs,
          integração de APIs, desenvolvimento de interfaces responsivas e
          otimização de desempenho, componentes SSR e CSR, criação de server
          actions e APIs, e colaboração em equipe, controle git e versionamento
          de código, Azure, entre outras tecnologias.
        </p>
        <p>
          Agosto de 2025, iniciei faculdade na Universidade Católica de Santa
          Catarina no curso Bacharelado em Engenharia de Software, mas estou
          visando faculdade EAD para maior flexibilidade de horários.
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
            Tecnologias que uso frequentemente
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
      </article>
      <TecnologiasUsadas
        tecnologiasDados={todasTecnologias}
      />
    </Fragment>
  );
}
