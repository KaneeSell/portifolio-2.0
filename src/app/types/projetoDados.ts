import ImgEmpresasReact from '@/app/assets/img/Empresas React.png'
import ImgAgendaProMaster from '@/app/assets/img/AgendaProMaster.png'
import ImgCadastrodeUsuario from '@/app/assets/img/Projeto Cadastro de Usuario.png'
import Imgagenda2 from '@/app/assets/img/agenda2.0.png'
import ImgERPLite from '@/app/assets/img/ERP Lite.png'
import { StaticImageData } from 'next/image';

interface projetoDadosInterface {
  projetos: {
    nome: string;
    descricao: string;
    link?: string;
    repo: string;
    status: "Concluido" | "Em Desenvolvimento";
    versao: "FullClient" | "MVP" | "Protótipo";
    imagemCaminho?: string[]
    imagem?: StaticImageData
  }[];
}
export const projetoDados: projetoDadosInterface = {
  projetos: [
    {
      nome: "Login Next",
      descricao:
        "Aplicação simples e funcional de autenticação de usuários utilizando Next.js, validação de token JWT e controle de acesso via API. Ideal para projetos que exigem login seguro e rápido.",
      link: "https://kaneesell-login-next.vercel.app",
      repo: "https://github.com/KaneeSell/empresas-react",
      status: "Concluido",
      versao: "MVP",
      imagemCaminho: ["https://i.imgur.com/vUD7fEv.png"],
    },{
      nome: "Empresas-React",
      descricao:
        "Este é um projeto desenvolvido em React utilizando Bootstrap, Vite, ESLint e TypeScript. O projeto conta com um sistema simples de cadastro de empresas e uma tela de planilhas para download.",
      link: "https://kaneesell.github.io/empresas-react",
      repo: "https://github.com/KaneeSell/empresas-react",
      status: "Concluido",
      versao: "Protótipo",
      imagemCaminho: ["https://i.imgur.com/BnfrGUH.png"],
      imagem: ImgEmpresasReact
    },
    {
      nome: "AgendaProMaster",
      descricao: "É uma página de estudos desenvolvida para simplificar a organização e otimizar o aprendizado. Com um design intuitivo e funcionalidades práticas, ela é a ferramenta ideal para estudantes que buscam eficiência e foco em suas rotinas.",
      link: "https://kaneesell.github.io/AgendaProMaster",
      repo: "https://github.com/KaneeSell/AgendaProMaster",
      status: "Concluido",
      versao: "MVP",
      imagemCaminho: ["https://i.imgur.com/65Ib450.png"],
      imagem: ImgAgendaProMaster
    },
    {
      nome: "Agenda 2.0",
      descricao: "Agenda 2.0 Versão React + TailwindCSS da antiga AgendaProMaster(Bootstrap + HTML5 + CSS3)",
      link: "https://kaneesell.github.io/Agenda-2.0",
      repo: "https://github.com/KaneeSell/Agenda-2.0",
      status: "Em Desenvolvimento",
      versao: "MVP",
      imagemCaminho: ["https://i.imgur.com/sFovr4R.png"],
      imagem: Imgagenda2
    },
    {
      nome: "ERP-Lite",
      descricao: "É um sistema desktop desenvolvido com Electron, React, TypeScript, Bootstrap. O objetivo é facilitar a gestão de entrada e saída de produtos, controle de matéria-prima e geração de relatórios essenciais para a administração do negócio.",
      link: "https://github.com/KaneeSell/ERP-Lite/releases",
      repo: "https://github.com/KaneeSell/ERP-Lite",
      status: "Em Desenvolvimento",
      versao: "Protótipo",
      imagemCaminho: ["https://i.imgur.com/m63lpva.png"],
      imagem: ImgERPLite
    },
    {
      nome: "Projeto-Cadastro-de-Usuario",
      descricao: "Projeto Cadastro de Usuário feito no curso de Desenvolvimento Web Moderno da C0D3R.",
      repo: "https://github.com/KaneeSell/Projeto-Cadastro-de-Usuario",
      status: "Em Desenvolvimento",
      versao: "Protótipo",
      imagemCaminho: ["https://i.imgur.com/OjGBekJ.png"],
      imagem: ImgCadastrodeUsuario
    },
  ],
};
