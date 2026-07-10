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
    resumo: "Portfólio 2.0 este projeto é esse portifólio que está vendo, então nao coloquei fotos em galeria por esse motivo, focado em apresentar projetos, tecnologias e experiências.",
    descricao: `
    Segunda versão do meu portfólio pessoal, este projeto é esse portifólio que está vendo, então nao coloquei fotos em galeria por esse motivo, criada para substituir a 
    primeira versão e aplicar os conhecimentos adquiridos em React, Next.js e Tailwind CSS.
    Diferente do Portfólio 3.0, este projeto foi desenvolvido sem auxílio de IA durante a implementação, representando minha evolução técnica na época.
    Atualmente os dados permanecem hardcoded por opção, evitando dependência de um banco de dados em nuvem apenas para conteúdo estático.
  `,
    status: "Concluido",
    versao: "Produção",

    tipo: "Portfolio",

    destaque: false,

    repo: "https://github.com/KaneeSell/portifolio-2.0",

    imagemPrincipal: {
      src: "https://i.imgur.com/6iXJRlS.png",
      height: 725,
      width: 1540,
      title: "Tela Inicial Portifólio 2.0",
      description: "Tela inicial do projeto Portifólio 2.0, este projeto é esse portifólio que está vendo, então nao coloquei fotos em galeria por esse motivo, mas nessa tela foi focado em manter uma interface agradavel, menu responsivo, menu inferior mobile exclusivo, e botão de download do meu curriculo para facilitar."
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
    imagemPrincipal: {
      src: "https://i.imgur.com/JZ9mHpa.png",
      title: "Tela inicial do template",
      description: "configuração de rotas publicas em arquivo de configuração, ou seja pode ser publica essa rota, mas inicialmente protegida por login",
    },
    galeria: [
      {
        src: "https://i.imgur.com/JZ9mHpa.png",
        title: "Tela inicial do template",
        description: "configuração de rotas publicas em arquivo de configuração, ou seja pode ser publica essa rota, mas inicialmente protegida por login",
      },
      {
        src: "https://i.imgur.com/quLiIDb.png",
        title: "Tela de login",
        description: "Tela de login do template, com autenticação via Auth.js e proteção de rotas",
      },
      {
        src: "https://i.imgur.com/GgMGRtn.png",
        title: "Configuração de tema",
        description: "Botão flutuante de configuração de tema do template, com opções de tema dark, light e system, Paleta de cores",
      },
      {
        src: "https://i.imgur.com/TV68271.png",
        title: "Tela de dashboard",
        description: "Dashboard template, protegida por padrão do arquivo de config como rota somente admin ou superior, mas pode ser configurada para qualquer tipo de usuário, ou seja, pode ser rota publica também",
      },
      {
        src: "https://i.imgur.com/IDQxrJH.png",
        title: "404 Page Not Found",
        description: "Página de erro 404 do template, com botão de voltar para a página inicial",
      },
      {
        src: "https://i.imgur.com/PxJtOPm.png",
        title: "Tela de Configuração do perfil",
        description: "Página de configuração do perfil do template, funcional alterar nome, foto, emaul e senha, com validação de campos e feedback para o usuário",
      },
      {
        src: "https://i.imgur.com/dyyLFzG.png",
        title: "Tela de Configuração do Sistema user",
        description: "Tela de configurações, aonde não tem campos ainda, somente visual, mas se entrar com conta admin ou dev pode estar alterando acessos dos usuarios, como na foto seguinte da galeria",
      },
      {
        src: "https://i.imgur.com/a7I4bOY.png",
        title: "Tela de Configuração do Sistema dev",
        description: "Caso dev pode estar editando usuarios, configuravel caso queira que admin modifique tambem, mas padrão é dev, podendo ver todos os detalhes do usuario, alterar nivel de acesso(user,admin,dev) e redefinir senha que gera uma senha ramdom",
      },
      {
        src: "https://i.imgur.com/qTdksCw.png",
        title: "Tela de componentes KS-Components",
        description: "Exemplo de uso dos componentes e customosações, como nas fotos seguintes da galeria sera mostrando cada componente do template, com exemplos de uso e customizações",
      },
      {
        src: "https://i.imgur.com/n8EQKF6.png",
        title: "Fallbacks Confirm",
        description: "Alert, Confirm, Prompt, e Mensagem de dialogo",
      },
      {
        src: "https://i.imgur.com/NA4b0vS.png",
        title: "Formulários",
        description: "Modal que exibe um formulario a ser preenchido e retorna esses dados",
      },
      {
        src: "https://i.imgur.com/JM9Iis6.png",
        title: "Navegação",
        description: "Exemplos de navegação lateral do menu lateral",
      },
      {
        src: "https://i.imgur.com/4rUNCzQ.png",
        title: "RKCard",
        description: "Cards customizaveis",
      },
      {
        src: "https://i.imgur.com/TF19KXN.png",
        title: "RKEmptyState",
        description: "componente que mostra mensagem que nao achou dados e com opção de ter botão de ação",
      },
      {
        src: "https://i.imgur.com/ah2kPwE.png",
        title: "RKLandingState",
        description: "Componente para carregamento",
      },
      {
        src: "https://i.imgur.com/klJc75q.png",
        title: "RKBeadcump",
        description: "Componente de navegação",
      },
      {
        src: "https://i.imgur.com/YoJXLKE.png",
        title: "RKSearchBox",
        description: "Componente de caixa de busca",
      },
    ],
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
    imagemPrincipal: {
      src: "https://i.imgur.com/5zWzSLy.png",
      title: "Tela Inicial ERP",
      description: "Notificação superior, menu lateral, tema dark, light e systems, menu mobile",
    },
    galeria: [
      {
        src: "https://i.imgur.com/5zWzSLy.png",
        title: "Tela Inicial ERP",
        description: "Notificação superior, menu lateral, tema dark, light e systems, menu mobile",
      },
      {
        src: "https://i.imgur.com/t7V1Sc9.png",
        title: "Tela inicial visão Mobile",
        description: "Visão responsiva do ERP em modo mobile",
      },
      {
        src: "https://i.imgur.com/AT6fGLy.png",
        title: "Menu Mobile",
        description: "Menu do ERP em visão mobile",
      },
      {
        src: "https://i.imgur.com/KFMZm2l.png",
        title: "Menu Lateral Não Fixo",
        description: "Menu lateral não fixo, com opção de fixar, mas na foto seguinte mostra ele fixo",
      },
      {
        src: "https://i.imgur.com/jPeEDSs.png",
        title: "Menu Lateral Fixo",
        description: "Menu lateral fixo, quando fixa o menu ele passa a dividir a tela em duas partes para nao perder o conteudo e continuar com experiencia do menu sempre aberto",
      },
      {
        src: "https://i.imgur.com/nkF0NPl.png",
        title: "Tela de login",
        description: "Tela de login do ERP usando tema dark",
      },
      {
        src: "https://i.imgur.com/apIFEZl.png",
        title: "Tela inicial Light Theme",
        description: "Tela inicial do ERP usando tema light",
      },
      {
        src: "https://i.imgur.com/hAukNo2.png",
        title: "Notificações Visão Desktop",
        description: "Notificações do ERP em visão desktop",
      },
      {
        src: "https://i.imgur.com/viete7e.png",
        title: "Tela de Entidades",
        description: "Tela de entidades, todas as telas são meio parecidas, foco era ser algo simples de desenvolver e facil de entender, logo tabela com crud para todas as telas foi a melhor opção",
      },
      {
        src: "https://i.imgur.com/zwtfNS0.png",
        title: "Tela de Cadastro de Entidades",
        description: "Tela de cadastro de entidades, algo simples, mas funcional, com validação de campos e feedback para o usuário",
      },
      {
        src: "https://i.imgur.com/zwtfNS0.png",
        title: "Tela de Cadastro de Entidades",
        description: "Tela de cadastro de entidades, algo simples, mas funcional, com validação de campos e feedback para o usuário",
      },
      {
        src: "https://i.imgur.com/Vr2VChx.png",
        title: "Visualização de Produto",
        description: "Tela de Produto, com informações detalhadas do produto, estoque e movimentações, estoque zerado, mas quando tem valor mostra certinho ao usuario",
      },
      {
        src: "https://i.imgur.com/VM1EMfi.png",
        title: "Entrada de Produto",
        description: "Tela de Produto, clicando na na opção de entrada nos botões de ação, podemos dar entrada rapida escolhendo a quantidade e local de estoque, funciona clicando em saida e movimentação a qual é mais completo escolhendo o tipo se entrada ou saida",
      },
      {
        src: "https://i.imgur.com/rXna2Bf.png",
        title: "Tela de Relatorios do Produto",
        description: "Tela de Relatorios do Produto, aonde clicando na ação de relatorio do produto, podemos ver opções de relatorio para os mesmos",
      },
      {
        src: "https://i.imgur.com/XjhYS3B.png",
        title: "Relatorio Geral de Produto",
        description: "Relatorio Geral mostrando entrada e saida do produto, com opção de exportar para PDF e Excel, e também opção de imprimir",
      },
      {
        src: "https://i.imgur.com/te3vV0E.png",
        title: "Tela de Relatorios do Estoque",
        description: "Tela de Relatorios do Estoque, aonde clicando na ação de relatorio do estoque, podemos ver opções de relatorio para os mesmos",
      },
      {
        src: "https://i.imgur.com/wsvQJnp.png",
        title: "Relatorio Geral de Estoque",
        description: "Relatorio Geral mostrando entrada e saida do estoque, com opção de exportar para PDF e Excel, e também opção de imprimir",
      },
      {
        src: "https://i.imgur.com/9feTwCI.png",
        title: "Novo Estoque",
        description: "Novo Estoque, poucos campos para ser agil e rapido",
      },
      {
        src: "https://i.imgur.com/23vdjVt.png",
        title: "Tela de configurações",
        description: "Resetar quantidade produtos: é uma função que criei quando passou a ter esse campo em produto com a quantidade total em cada estoque, configurações de permissão na proxima foto da galeria, configurações avançadas e relatorios era para futuramente ser implantado",
      },
      {
        src: "https://i.imgur.com/I1JzayS.png",
        title: "Tela de configurações de Permissão",
        description: "Somente visualização, mas futuramente era para gerenciar tambem os usuarios, rotas no backend ja estavam criadas",
      },
      {
        src: "https://i.imgur.com/iekrp63.png",
        title: "Tela de configurações de perfil",
        description: "Configurações basicas de perfil como mudar senha e editar usuario(email e nome), e visualização completa do perfil",
      },
    ],
    repositorioPrivado: true,
    tecnologias: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
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
      "Prisma ORM para gerenciamento de dados",
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