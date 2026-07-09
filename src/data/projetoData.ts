import ImgEmpresasReact from "@/assets/img/Empresas React.png";
import ImgAgendaProMaster from "@/assets/img/AgendaProMaster.png";
import ImgCadastrodeUsuario from "@/assets/img/Projeto Cadastro de Usuario.png";
import Imgagenda2 from "@/assets/img/agenda2.0.png";
import ImgERPLite from "@/assets/img/ERP Lite.png";
import ImgLoginNext from "@/assets/img/Login Next.png";
import { ProjetoTypes } from "@/types/projetoTypes";

export const projetoDados: ProjetoTypes[] = [
  {
    id: 1,
    nome: "Login Next",
    resumo: "Sistema de autenticação com: login, register, rota segura(pos login).",
    descricao:
      "Login Next é um sistema de autenticação com frontend em Next.js, usando React Hook Form e Zod para validações robustas, estilização com Tailwind CSS, e desenvolvimento tipado com TypeScript. A API local do Next.js gerencia a comunicação segura com o backend, protegendo variáveis sensíveis via .env. O backend foi desenvolvido em NestJS, utilizando Prisma ORM com banco PostgreSQL e validação com class-validator. O frontend está hospedado na Vercel, o backend na Render, e o banco de dados via Prisma Cloud.",
    // link: "https://kaneesell-login-next.vercel.app",
    repo: "https://github.com/KaneeSell/Login-Next",
    status: "Descontinuado",
    versao: "MVP",
    imagemCaminho: ["https://i.imgur.com/vUD7fEv.png"],
    imagemPrincipal: ImgLoginNext,
    aprendizados: [
      "Neste projeto, aprendi a integrar autenticação em um aplicativo Next.js usando React Hook Form e Zod para validação de formulários. Também ganhei experiência em proteger variáveis sensíveis com .env, configurar uma API local do Next.js para comunicação segura com o backend, e desenvolver um backend robusto com NestJS, Prisma ORM e PostgreSQL. Além disso, aprendi a hospedar o frontend na Vercel e o backend na Render, utilizando Prisma Cloud para gerenciamento do banco de dados.",
    ],
    arquitetura: [
      "O projeto segue uma arquitetura de aplicação moderna, com um frontend em Next.js que se comunica com um backend em NestJS através de uma API local. O frontend é responsável pela interface do usuário e validação de formulários, enquanto o backend gerencia a lógica de autenticação, acesso ao banco de dados e segurança. O Prisma ORM é utilizado para interagir com o banco PostgreSQL, garantindo uma camada de abstração eficiente e segura. A hospedagem é feita separadamente para frontend e backend, otimizando a performance e escalabilidade do sistema.",
    ],
    modulos: [
      "O projeto é dividido em módulos claros: o módulo de autenticação no backend, que lida com registro, login e gerenciamento de sessões; o módulo de formulários no frontend, que utiliza React Hook Form e Zod para validação; e o módulo de comunicação entre frontend e backend, que garante a segurança e eficiência das requisições. Cada módulo é desenvolvido com TypeScript para garantir tipagem forte e reduzir erros durante o desenvolvimento.",
    ],
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
    ],
    tipo: "SaaS",
    destaque: true,
    repositorioPrivado: false,
    desafios:
      "Um dos principais desafios foi garantir a segurança das variáveis sensíveis e a comunicação segura entre o frontend e o backend. Para isso, utilizei .env para proteger as variáveis e configurei uma API local do Next.js para gerenciar as requisições de forma segura. Outro desafio foi integrar o Prisma ORM com NestJS, garantindo que as operações de banco de dados fossem eficientes e seguras. Além disso, a validação robusta dos formulários com React Hook Form e Zod exigiu uma atenção especial para garantir uma experiência de usuário fluida e sem erros.",
    solucoes:
      "Para resolver os desafios de segurança, utilizei .env para armazenar variáveis sensíveis e configurei a API local do Next.js para gerenciar as requisições de forma segura. Para a integração do Prisma ORM com NestJS, segui as melhores práticas de desenvolvimento, garantindo que as operações de banco de dados fossem eficientes e seguras. Para a validação dos formulários, utilizei React Hook Form em conjunto com Zod, garantindo uma experiência de usuário fluida e sem erros, mesmo em casos de validação complexa.",
    equipe: true,
    tamanhoEquipe: 2,
    funcionalidades: [
      "Registro de usuários",
      "Login e logout",
      "Gerenciamento de sessões",
      "Validação de formulários com feedback em tempo real",
      "Comunicação segura entre frontend e backend",
    ],
    imagem: ImgLoginNext,
    inicio: new Date("2023-01-01"),
    ultimaAtualizacao: new Date("2023-06-01"),
  },
  {
    id: 2,
    nome: "Empresas-React",
    resumo: "",
    descricao:
      "Este é um projeto desenvolvido em React utilizando Bootstrap, Vite, ESLint e TypeScript. O projeto conta com um sistema simples de cadastro de empresas e uma tela de planilhas para download.",
    link: "https://kaneesell.github.io/empresas-react",
    repo: "https://github.com/KaneeSell/empresas-react",
    status: "Concluido",
    versao: "Protótipo",
    imagemCaminho: ["https://i.imgur.com/BnfrGUH.png"],
    imagem: ImgEmpresasReact,
  },
  {
    id: 3,
    nome: "AgendaProMaster",
    resumo: "",
    descricao:
      "É uma página de estudos desenvolvida para simplificar a organização e otimizar o aprendizado. Com um design intuitivo e funcionalidades práticas, ela é a ferramenta ideal para estudantes que buscam eficiência e foco em suas rotinas.",
    link: "https://kaneesell.github.io/AgendaProMaster",
    repo: "https://github.com/KaneeSell/AgendaProMaster",
    status: "Concluido",
    versao: "MVP",
    imagemCaminho: ["https://i.imgur.com/65Ib450.png"],
    imagem: ImgAgendaProMaster,
  },
  {
    id: 4,
    nome: "Agenda 2.0",
    resumo: "",
    descricao:
      "Agenda 2.0 Versão React + TailwindCSS da antiga AgendaProMaster(Bootstrap + HTML5 + CSS3)",
    link: "https://kaneesell.github.io/Agenda-2.0",
    repo: "https://github.com/KaneeSell/Agenda-2.0",
    status: "Em Desenvolvimento",
    versao: "MVP",
    imagemCaminho: ["https://i.imgur.com/sFovr4R.png"],
    imagem: Imgagenda2,
  },
  {
    id: 5,
    nome: "ERP-Lite",
    resumo: "",
    descricao:
      "É um sistema desktop desenvolvido com Electron, React, TypeScript, Bootstrap. O objetivo é facilitar a gestão de entrada e saída de produtos, controle de matéria-prima e geração de relatórios essenciais para a administração do negócio.",
    link: "https://github.com/KaneeSell/ERP-Lite/releases",
    repo: "https://github.com/KaneeSell/ERP-Lite",
    status: "Em Desenvolvimento",
    versao: "Protótipo",
    imagemCaminho: ["https://i.imgur.com/m63lpva.png"],
    imagem: ImgERPLite,
  },
  {
    id: 6,
    nome: "Projeto-Cadastro-de-Usuario",
    resumo: "",
    descricao:
      "Projeto Cadastro de Usuário feito no curso de Desenvolvimento Web Moderno da C0D3R.",
    repo: "https://github.com/KaneeSell/Projeto-Cadastro-de-Usuario",
    status: "Em Desenvolvimento",
    versao: "Protótipo",
    imagemCaminho: ["https://i.imgur.com/OjGBekJ.png"],
    imagem: ImgCadastrodeUsuario,
  },
];