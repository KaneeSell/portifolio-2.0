"use client";
import { projetoDados } from "@/data/projetoData";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { useOpenProject } from "@/store/openProject";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FaCheckCircle, FaExpand, FaLock, FaStar } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import { NomeTecnologia, ProjetoStatus, ProjetoTypes, ProjetoVersao, todosProjetoStatus, todosProjetoVersao } from "@/types/projetoTypes";
import { todasTecnologias } from "@/data/tecnologiasDados";
import { MdFilterAlt, MdFilterAltOff, MdHideImage } from "react-icons/md";
import { FaCircleXmark, FaFilterCircleXmark } from "react-icons/fa6";
import CustomCheckBox from "../button/CustomCheckBox";
import CustomLightBox from "../lightbox/CustomLightBox";
import CustomImage from "../image/CustomImage";

export default function Projetos() {
  const [titleFilter, setTitleFilter] = useState<string>("")
  const [techFilter, setTechFilter] = useState<NomeTecnologia | "all">("all")
  const [statusFilter, setStatusFilter] = useState<ProjetoStatus | "all">("all")
  const [versionFilter, setVersionFilter] = useState<ProjetoVersao | "all">("all")
  const [repoFilter, setRepoFilter] = useState<boolean>(false)
  const [demoFilter, setDemoFilter] = useState<boolean>(false)
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [project, setProject] = useState<ProjetoTypes[]>(projetoDados)
  const setOpenProject = useOpenProject((state) => state.setProject)

  const resetFilters = () => {
    // setShowFilters(false)
    setDemoFilter(false)
    setRepoFilter(false)
    setVersionFilter("all")
    setStatusFilter("all")
    setTechFilter("all")
    setTitleFilter("")
  }

  useEffect(() => {
    let filtered = projetoDados;

    if (titleFilter !== "all") {
      filtered = filtered.filter((proj) =>
        proj.nome?.toLowerCase().includes(titleFilter.toLowerCase())
      );
    }

    if (techFilter !== "all") {
      filtered = filtered.filter((proj) =>
        proj.tecnologias?.includes(techFilter)
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((proj) =>
        proj.status === statusFilter
      );
    }

    if (versionFilter !== "all") {
      filtered = filtered.filter((proj) =>
        proj.versao === versionFilter
      );
    }

    if (repoFilter === true) {
      filtered = filtered.filter((proj) =>
        proj.repo !== undefined
      );
    }

    if (demoFilter === true) {
      filtered = filtered.filter((proj) =>
        proj.link !== undefined
      );
    }

    setProject(filtered);
  }, [techFilter, statusFilter, versionFilter, titleFilter, repoFilter, demoFilter]);

  return (
    <div
      id="projetos"
      className={`
        scroll-m-15 mt-10 px-5 flex flex-col gap-10 w-full
        text-3xl md:text-5xl font-serif font-extrabold
        items-center
        `}
    >
      <div className="flex items-center justify-center flex-col gap-3">
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
        <motion.button
          className="btn primary"
          onClick={() => setShowFilters(!showFilters)}
        >
          <div className="box">
            <motion.span
              key={showFilters ? "hide" : "show"}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              {showFilters ? "Ocultar Filtros" : "Ver Filtros"}
              {showFilters ? <MdFilterAltOff /> : <MdFilterAlt />}
            </motion.span>
          </div>
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        {showFilters && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.4,
            }}
            className={"text-lg font-normal font-sans flex items-center justify-center gap-5 flex-wrap"}>
            <div className="flex flex-row-reverse flex-wrap gap-2 w-full justify-center items-center">
              <button
                onClick={resetFilters}
                className="btn text-nowrap box warning!">
                Resetar filtros
                <FaFilterCircleXmark />
              </button>
              <span className="text-xl flex gap-2 justify-center">
                <label htmlFor="title" className="font-bold">Titulo:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="rounded-full px-2 border"
                  placeholder="Buscar por titulo..."
                  value={titleFilter}
                  onChange={(e) => setTitleFilter(e.target.value as string)} />
              </span>
            </div>
            <span className="text-xl flex gap-2">
              <label htmlFor="tecnology" className="font-bold">Tecnologias:</label>
              <select
                className="border rounded-full w-30 text-center"
                name="tecnology"
                id="tecnology"
                value={techFilter}
                onChange={(e) => {
                  if (e.target.value) setTechFilter(e.target.value as NomeTecnologia | "all")
                }}>
                <option value="all">Todos</option>
                {todasTecnologias.filter(tech => tech.nome !== "Arquitetura & Produto").map(tech => tech.itens.map((item, index) =>
                  <option value={item.nome} key={index}>{item.nome}</option>
                ))}
              </select>
            </span>
            <span className="text-xl flex gap-2">
              <label htmlFor="status" className="font-bold">Status:</label>
              <select
                className="border rounded-full w-30 text-center"
                name="status"
                id="status"
                value={statusFilter}
                onChange={(e) => {
                  if (e.target.value) setStatusFilter(e.target.value as ProjetoStatus | "all")
                }}>
                <option value="all">Todos</option>
                {todosProjetoStatus.map((status, index) =>
                  <option value={status} key={index}>{status}</option>
                )}
              </select>
            </span>
            <span className="text-xl flex gap-2">
              <label htmlFor="version" className="font-bold">Versão:</label>
              <select
                className="border rounded-full w-30 text-center"
                name="version"
                id="version"
                value={versionFilter}
                onChange={(e) => {
                  if (e.target.value) setVersionFilter(e.target.value as ProjetoVersao | "all")
                }}>
                <option value="all">Todos</option>
                {todosProjetoVersao.map((version, index) =>
                  <option value={version} key={index}>{version}</option>
                )}
              </select>
            </span>
            <div className="flex gap-5 w-full items-center justify-center flex-wrap">
              <span
                className="text-xl flex gap-2 items-center cursor-pointer"
              >
                <label htmlFor="repo" className="font-bold" onClick={() => setRepoFilter(!repoFilter)}>
                  Somente com Repositório?
                </label>
                <input type="hidden" id="repo" name="repo" />
                <CustomCheckBox checked={repoFilter} onClick={() => setRepoFilter(!repoFilter)} />
              </span>
              <span
                className="text-xl flex gap-2 items-center cursor-pointer"
              >
                <label htmlFor="repo" className="font-bold" onClick={() => setDemoFilter(!demoFilter)}>
                  Somente com Demonstração?
                </label>
                <input type="hidden" id="repo" name="repo" />
                <CustomCheckBox checked={demoFilter} onClick={() => setDemoFilter(!demoFilter)} />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex w-full gap-5 flex-wrap justify-center items-center">
        <AnimatePresence mode="sync">
          {project.length === 0 && (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: project.length === 0 ? "fit-content" : 0 }}
              transition={{ duration: 0.8, ease: "linear" }}
              className="w-full overflow-hidden whitespace-nowrap font-normal text-2xl"
            >
              Nenhum resultado encontrado...
            </motion.span>
          )}
          {project.map((projeto, index) => (
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              exit={{
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
              text-xl md:text-2xl flex flex-col gap-0.5 h-full sm:h-120 relative
              border rounded-2xl p-3 paper group w-full sm:w-90 ${projeto.destaque && "destaque shadow-2xl shadow-amber-400/60"}
            `}
            >
              <span className="light:group-hover:text-blue-800">{projeto.nome}</span>
              {projeto.destaque && <FaStar className="text-amber-400 absolute top-2 right-2" />}
              <figure className="relative h-full w-full">
                <div
                  className={`
                absolute flex w-full justify-evenly items-center light:text-white
                text-sm top-2 text-nowrap flex-wrap gap-1 z-1
                `}
                >
                  <span
                    className={`
                    px-2 rounded-2xl
                    ${projeto.status === "Descontinuado" && "bg-red-500"}
                    ${projeto.status === "Planejamento" && "bg-blue-500"}
                    ${projeto.status === "Concluido" && "bg-emerald-500"}
                    ${projeto.status === "Em Desenvolvimento" && "bg-yellow-500"}
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
                {projeto.imagemPrincipal ? (
                  <Fragment>
                    <CustomImage
                      galery={projeto.galeria}
                      alt={`Imagem ${projeto.nome}`}
                      img={projeto.imagemPrincipal} />

                  </Fragment>
                ) : (
                  <div className="box h-40 text-lg">
                    Sem Imagem <MdHideImage />
                  </div>
                )}
              </figure>
              <span
                onClick={() => console.log(projeto)}
                className="text-base px-2 font-thin h-full text-sub overflow-y-auto leading-4">
                {projeto.resumo}
              </span>
              <div>
                {projeto.tecnologias && (
                  <div className="text-sm flex flex-wrap gap-1 text-sub group-hover:text-default">
                    Principais Tecnologias:
                    {Array.isArray(projeto.tecnologias) && projeto.tecnologias?.map((tech, index) => (
                      <span className="border px-2 rounded-full"
                        key={index}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <hr />
              <span className="stack-col">
                {projeto.repositorioPrivado && (
                  <button
                    className="btn btn-disabled py-1 w-full"
                    disabled
                  >
                    Repositorio Privado
                    <FaLock />
                  </button>
                )}
                {projeto.repo && (
                  <Link href={projeto.repo} target="_blank" rel="noopener noreferrer nofollow">
                    <button
                      className="btn py-1 w-full"
                    >
                      Repositorio
                    </button>
                  </Link>
                )}
                {projeto.link && (
                  <Link href={projeto.link} target="_blank" rel="noopener noreferrer nofollow">
                    <button
                      className="btn py-1 w-full success"
                    >
                      Demonstração
                    </button>
                  </Link>
                )}
                <button
                  onClick={() => setOpenProject(projeto)}
                  className="btn py-1 w-full primary"
                >
                  Ver Detalhes
                </button>
              </span>
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
