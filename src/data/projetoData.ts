import ImgEmpresasReact from "@/assets/img/Empresas React.png";
import ImgAgendaProMaster from "@/assets/img/AgendaProMaster.png";
import ImgCadastrodeUsuario from "@/assets/img/Projeto Cadastro de Usuario.png";
import Imgagenda2 from "@/assets/img/agenda2.0.png";
import ImgERPLite from "@/assets/img/ERP Lite.png";
import ImgLoginNext from "@/assets/img/Login Next.png";
import { ProjetoTypes } from "@/types/projetoTypes";

const templateMinimum: ProjetoTypes = {
  id: 0,
  nome: "",
  resumo: "",
  descricao: `
    Descrição.
    `,
  status: "Concluido",
  versao: "Terminado",
  repositorioPrivado: false,
  repo: "",
  link: "",
  tecnologias: [],
  arquitetura: [],
  competencias: [],
  desafios: ``,
  solucoes: ``,
  destaque: false,
  equipe: false,
  tamanhoEquipe: undefined,
  tipo: "Outro",
  funcionalidades: [],
  inicio: new Date("2026-05-06"),
  ultimaAtualizacao: new Date("2026-06-02"),
  modulos: [],
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

    destaque: false,

    repo: "https://github.com/KaneeSell/portifolio-2.0",

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
  {
    id: 2,
    nome: "Template-Next",
    resumo: "Template Full Stack desenvolvido para acelerar a criação de aplicações web, oferecendo uma arquitetura pronta, autenticação, persistência de dados e componentes reutilizáveis.",
    descricao: `
    Template Full Stack desenvolvido para servir como base de novos projetos. 
    Possui arquitetura organizada, autenticação com Auth.js, integração com Prisma ORM e 
    PostgreSQL, além de diversos componentes reutilizáveis para acelerar o desenvolvimento 
    e manter consistência entre aplicações.
    `,
    status: "Concluido",
    versao: "Produção",
    repositorioPrivado: true,
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Auth.js / NextAuth",
      "MUI DataGrid",
      "Material UI",
      "Zustand"
    ],
    arquitetura: [
      "Next.js App Router",
      "Proteção de rotas com Auth.js",
      "JWT para autenticação",
      "Prisma ORM para persistência de dados",
      "PostgreSQL como banco de dados",
      "Componentes reutilizáveis",
      "Separação por responsabilidade",
      "Custom Hooks",
      "Gerenciamento de estado",
    ],
    competencias: [
      "Componentização",
      "Hooks customizados",
      "Organização de código",
      "Responsividade",
      "Boas práticas de Front-End",
      "Acessibilidade",
      "Performance",
      "Boas práticas de Back-End",
      "Segurança",
      "Autenticação e Autorização",
      "Persistência de dados",
      "RBAC (Controle de Acesso Baseado em Funções)",
      "Gerenciamento de estado",
    ],
    desafios: "Fazer um template que seja escalável, seguro e de fácil manutenção, permitindo que outros desenvolvedores possam utilizá-lo como base para seus projetos.",
    solucoes: "Cada vez que iniciava um projeto novo eu percebia que estava refazendo a mesma estrutura, então decidi criar um template que pudesse ser utilizado como base para novos projetos, com uma estrutura escalável, segura e de fácil manutenção.",
    destaque: true,
    equipe: false,
    tamanhoEquipe: undefined,
    tipo: "Template",
    funcionalidades: [
      "Autenticação de usuários",
      "Proteção de rotas",
      "Criar cadastro de usuários",
      "Login e Logout",
      "Gerenciar usuários",
      "soft delete de usuários",
    ],
    inicio: new Date("2026-05-06"),
    ultimaAtualizacao: new Date("2026-06-02"),
    modulos: [
      "Página Inicial",
      "Autenticação",
    ],
  },
  {
    id: 3,
    nome: "ERP",
    resumo: "Front-End ERP e Back-End ERP-BackEnd, Web com React e tailwind e Back-End ERP-BackEnd, Back-End em NestJs do projeto ERP, Persistencia em base de dados Postgres e Prisma ORM.",
    descricao: `
    Front-End ERP e Back-End ERP-BackEnd, Web com React e tailwind 
    e Back-End ERP-BackEnd, Back-End em NestJs do projeto ERP, Persistencia 
    em base de dados Postgres e Prisma ORM.
    `,
    status: "Descontinuado",
    versao: "MVP",
    repositorioPrivado: true,
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "NestJS",
      "MUI DataGrid",
      "Material UI",
      "Zustand"
    ],
    arquitetura: [
      "Next.js App Router",
      "Proteção de rotas",
      "JWT para autenticação",
      "PostgreSQL como banco de dados",
      "Componentes reutilizáveis",
      "Separação por responsabilidade",
      "Custom Hooks",
      "Gerenciamento de estado",
    ],
    competencias: [
      "Componentização",
      "Hooks customizados",
      "Organização de código",
      "Responsividade",
      "Boas práticas de Front-End",
      "Acessibilidade",
      "Performance",
      "Boas práticas de Back-End",
      "Segurança",
      "Autenticação e Autorização",
      "Persistência de dados",
      "RBAC (Controle de Acesso Baseado em Funções)",
      "Gerenciamento de estado",
    ],
    desafios: "Fazer um ERP que seja escalável, seguro e de fácil manutenção, permitindo apenas pequenas lojas com gerenciamento simples.",
    solucoes: "Ajudar pequenas lojas a gerenciar seu negócio de forma fácil, com um ERP que seja escalável, seguro e de fácil manutenção.",
    destaque: false,
    equipe: false,
    tamanhoEquipe: undefined,
    tipo: "ERP",
    funcionalidades: [
      "Autenticação de usuários",
      "Proteção de rotas",
      "Criar cadastro de usuários",
      "Login e Logout",
      "Gerenciar usuários",
      "soft delete de usuários",
      "Gerenciamento de entidades",
      "Gerenciamento de produtos",
      "Gerenciamento de estoque",
      "Relatórios simples de movimento de estoque",
    ],
    inicio: new Date("2026-07-31"),
    ultimaAtualizacao: new Date("2025-12-06"),
    modulos: [
      "Página Inicial",
      "Autenticação",
      "Gerenciamento de usuários",
      "Gerenciamento de entidades",
      "Gerenciamento de produtos",
      "Gerenciamento de estoque",
      "Gerenciamento de movimento de estoque",
      "Relatórios",
    ],
  },
]