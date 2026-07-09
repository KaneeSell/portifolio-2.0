import ImgEmpresasReact from "@/assets/img/Empresas React.png";
import ImgAgendaProMaster from "@/assets/img/AgendaProMaster.png";
import ImgCadastrodeUsuario from "@/assets/img/Projeto Cadastro de Usuario.png";
import Imgagenda2 from "@/assets/img/agenda2.0.png";
import ImgERPLite from "@/assets/img/ERP Lite.png";
import ImgLoginNext from "@/assets/img/Login Next.png";
import { ProjetoTypes } from "@/types/projetoTypes";

const templateMinimum = {
  id: 0,
  nome: "",
  resumo: "",
  descricao: "",
  status: "Concluido",
  versao: "MVP",
}

export const projetoDados: ProjetoTypes[] = [
  {
    id: 1,
    nome: "Portfólio 2.0",
    resumo: "Portfólio desenvolvido com Next.js, focado em apresentar projetos, tecnologias e experiências.",
    descricao: `
    Segunda versão do meu portfólio pessoal, criada para substituir a primeira versão e aplicar os conhecimentos adquiridos em React, Next.js e Tailwind CSS.

    Diferente do Portfólio 3.0, este projeto foi desenvolvido sem auxílio de IA durante a implementação, representando minha evolução técnica na época.

    Atualmente os dados permanecem hardcoded por opção, evitando dependência de um banco de dados em nuvem apenas para conteúdo estático.
  `,
    status: "Concluido",
    versao: "Produção",

    tipo: "Portfolio",

    destaque: true,

    repo: "https://github.com/KaneeSell/portifolio-2.0",
    link: "https://...", // caso exista

    galeria: [
      {
        src: "https://i.imgur.com/6iXJRlS.png",
        height: 725,
        width: 1540,
        title: "Tela Inicial Portifólio 2.0",
        description: "Tela inicial do projeto Portifólio 2.0, nessa tela foi focado em manter uma interface agradavel, menu responsivo, menu inferior mobile exclusivo, e botão de download do meu curriculo para facilitar."
      },
      {
        src: "https://imgur.com/vUD7fEv.png",
        title: "teste",
        description: "lorem geafsvc asc as ca "
      }
    ],
    imagemPrincipal: {
      src: "https://i.imgur.com/6iXJRlS.png",
      height: 725,
      width: 1540,
      title: "Tela Inicial Portifólio 2.0",
      description: "Tela inicial do projeto Portifólio 2.0, nessa tela foi focado em manter uma interface agradavel, menu responsivo, menu inferior mobile exclusivo, e botão de download do meu curriculo para facilitar."
    },

    repositorioPrivado: false,

    inicio: new Date("2025-04-01"),
    ultimaAtualizacao: new Date("2026-07-09"),

    equipe: false,
    tamanhoEquipe: undefined,

    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
    ],

    funcionalidades: [
      "Listagem de projetos",
      "Página de experiências",
      "Listagem de tecnologias",
      "Tema claro e escuro",
      "Animações",
      "Layout responsivo",
      "Filtros de projetos",
      "Visualização detalhada dos projetos",
      "Menu responsivo",
      "Menu inferior Mobile",
    ],

    competencias: [
      "Componentização",
      "Hooks customizados",
      "Organização de código",
      "Responsividade",
      "Boas práticas de Front-End",
      "Animações com Motion",
      "Acessibilidade",
      "Performance",
    ],

    arquitetura: [
      "Next.js App Router",
      "Componentes reutilizáveis",
      "Separação por responsabilidade",
      "Custom Hooks",
      "Gerenciamento de estado",
      "Animações Fluidas",
    ],

    desafios: `
    Desenvolver um portfólio escalável, permitindo adicionar dezenas de projetos sem necessidade de alterar a estrutura da aplicação.
  `,

    solucoes: `
    Criação de uma estrutura baseada em objetos tipados, componentes reutilizáveis, filtros dinâmicos e organização modular.
  `,

    modulos: [
      "Página Inicial",
      "Projetos",
      "Tecnologias",
      "Experiências",
      "Contato",
    ],
  },
]
/*
OK portifolio-2.0 - Versão melhorada do primeiro portifólio, usando Next mas sem Back-End
Portifolio - Primeira versão do portifólio, usando Vite, React, Tailwind 
Template-Next - Template Full Stack Atual com: Next.js, Prisma ORM, Postgres, AuthJs + Componentes customizados(Alert, Prompt, Confirm, Modal, Card, dentre outros) 
Template-Next-Auth-MUI-Jest - Template Full Stack do projeto template-next-prisma-auth-mui melhorado com Next, Prisma, AuthJs, MUI e Postgres + Testes em Jest
template-next-prisma-auth-mui - Template Full Stack com Next, Prisma, AuthJs, MUI e Postgres
Login-Next - Front-End do backend-login, Tailwind, React e NextJs
backend-login - Back-End do Login-Next Com autenticação JWT e hash de senha com base de dados Postgres
ERP-BackEnd - Back-End em NestJs do projeto ERP, Persistencia em base de dados Postgres e Prisma ORM
ERP - Front-End ERP Web com React e tailwind e Back-End ERP-BackEnd
ERP-Lite - ERP Software instalável para Front-End com json server para Back-End
json-server - Back-End do ERP-Lite usando arquivo .json como persistencia de dados 
enterprise - ERP de Navegador localstorage refaturado e continuado o GestorPro
GestorPro - ERP de navegador localstorage mas foi descontinuada: HTML, CSS e JS Puro
empresas-react - Teste para empresa react
Funcoes-e-Modularizacao - Prova de Web UX da Faculdade
Agenda-2.0 - Refaturação da AgendaProMaster com react + localstorage
AgendaProMaster- Refaturação da primeira agenda localstorage com bootstrap
Agenda - Primeira Agenda Web Localstorage
Projeto-Cadastro-de-Usuario - Curso Coder
Funcionalidades - Estudo prático
RoadMapC - Prova da Faculdade Web UX com conhecimentos de C ANSI
FisdGame - Projeto da Game JAM, jogo 2D usando Godot Engine

AgendaDeProjetos - Front-End usando Next, Tailwind, foi descontinuado e era Agenda de projetos, login, registro e proteção de rotas funcionando
AgendaDeProjetosBackEnd - Back-End do projeto AgendaDeProjetos, em NestJs + Postgres, Autenticação JWT, parte de projetos: cadastro, edição e leitura

*/