import { projetoDados } from "@/app/types/projetoDados";
import Image from "next/image";

export default function Projetos() {
  return (
    <div
      id="projetos"
      className={`
        scroll-m-15 mt-10 px-5 flex flex-col gap-10 w-full
        text-3xl md:text-5xl font-serif font-extrabold
        `}
    >
      <h2>Projetos</h2>
      <div className="flex w-full gap-5 flex-wrap justify-center items-center">
      {projetoDados.projetos.map((projeto, index) => (
        <span key={index} className={`
        text-xl md:text-2xl flex flex-col gap-2 w-70 lg:w-100 h-100 lg:h-110
        border-1 rounded-2xl p-3
        `}>
          <span className="text-white">{projeto.nome}</span>
          <figure className="relative h-30 lg:h-50">
            <div className={`
                absolute flex w-full justify-evenly items-center
                text-sm lg:text-base top-2 text-nowrap flex-wrap gap-1
                `}>
                <span className={`
                    px-2 rounded-2xl
                    ${projeto.status === 'Concluido' && 'bg-green-500'}
                    ${projeto.status === 'Em Desenvolvimento' && 'bg-yellow-500'}
                    `}>
                    {projeto.status}
                </span>
                <span className={`
                    px-2 rounded-2xl
                    ${projeto.versao === 'Protótipo' && 'bg-gray-500'}
                    ${projeto.versao === 'MVP' && 'bg-blue-500'}
                    ${projeto.versao === 'FullClient' && 'bg-purple-500'}
                    `}>
                    {projeto.versao}
                </span>
            </div>
            {projeto.imagem && (
            <Image alt={`Imagem ${projeto.nome}`}
            src={projeto.imagem}/>
            )}
          </figure>
          <span className="text-base md:text:lg h-30 text-white overflow-y-auto">{projeto.descricao}</span>
          <hr />
          <span className="flex flex-col gap-1 text-lg lg:text-xl justify-evenly">
            {projeto.link && (
                <a href={projeto.link} 
                target="_blank" 
                className="bg-sky-500 px-2 py-0.5 hover:bg-sky-600"
                rel="noopener noreferrer">Link do Projeto</a>
            )}
            <a href={projeto.link} 
            target="_blank" 
            className="bg-green-500 px-2 py-0.5 hover:bg-green-600"
            rel="noopener noreferrer">Repo</a>
          </span>
        </span>
      ))}
      </div>
    </div>
  );
}
