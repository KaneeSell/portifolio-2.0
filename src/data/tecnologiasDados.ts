import { getNivel } from "@/app/lib/progress";
import { TecnologiaTypes } from "@/types/tecnologiasTypes";

export const frontend = {
  nome: "Front-End",
  itens: [
    {
      nome: "React",
      descricao: "Desenvolvimento de interfaces modernas e componentizadas.",
      icon: "devicon-react-plain",
      nivel: getNivel(78),
      progress: 78,
      estudando: false,
    },
    {
      nome: "Next.js",
      descricao: "Framework FullStack com SSR, Server Actions e App Router.",
      icon: "devicon-nextjs-plain",
      nivel: getNivel(82),
      progress: 82,
      estudando: false,
    },
    {
      nome: "HTML5",
      descricao: "Estruturação semântica de aplicações web.",
      icon: "devicon-html5-plain",
      nivel: getNivel(85),
      progress: 85,
      estudando: false,
    },
    {
      nome: "CSS3",
      descricao: "Responsividade, layouts e estilização moderna.",
      icon: "devicon-css3-plain",
      nivel: getNivel(75),
      progress: 75,
      estudando: false,
    },
    {
      nome: "Zustand",
      descricao: "Gerenciamento global de estado.",
      icon: "devicon-zustand-plain colored",
      nivel: getNivel(85),
      progress: 85,
      estudando: false,
    },
    {
      nome: "Context API",
      descricao: "Compartilhamento de estado entre componentes.",
      icon: "devicon-react-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const backend = {
  nome: "Back-End",
  itens: [
    {
      nome: "Node.js",
      descricao: "Execução JavaScript no servidor.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(78),
      progress: 78,
      estudando: false,
    },
    {
      nome: "NestJS",
      descricao: "Arquitetura modular para APIs e sistemas escaláveis.",
      icon: "devicon-nestjs-plain",
      nivel: getNivel(65),
      progress: 65,
      estudando: false,
    },
    {
      nome: "Express",
      descricao: "Construção de APIs REST com Node.js.",
      icon: "devicon-express-original",
      nivel: getNivel(75),
      progress: 75,
      estudando: false,
    },
    {
      nome: "REST API",
      descricao: "Integração entre sistemas e aplicações.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
    {
      nome: "Auth.js / NextAuth",
      descricao: "Autenticação, sessão e autorização.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
    {
      nome: "JWT",
      descricao: "Autenticação baseada em tokens.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(75),
      progress: 75,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const linguagens = {
  nome: "Linguagens",
  itens: [
    {
      nome: "JavaScript",
      descricao: "Principal linguagem utilizada em projetos reais.",
      icon: "devicon-javascript-plain",
      nivel: getNivel(88),
      progress: 88,
      estudando: false,
    },
    {
      nome: "TypeScript",
      descricao: "Tipagem estática para aplicações escaláveis.",
      icon: "devicon-typescript-plain",
      nivel: getNivel(68),
      progress: 68,
      estudando: true,
    },
    {
      nome: "Java",
      descricao: "Base em orientação a objetos e backend.",
      icon: "devicon-java-plain",
      nivel: getNivel(40),
      progress: 40,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const bancoDados = {
  nome: "Banco de Dados",
  itens: [
    {
      nome: "PostgreSQL",
      descricao: "Banco principal utilizado em SaaS e ERP.",
      icon: "devicon-postgresql-plain",
      nivel: getNivel(75),
      progress: 75,
      estudando: true,
    },
    {
      nome: "MySQL",
      descricao: "Banco relacional amplamente utilizado.",
      icon: "devicon-mysql-plain",
      nivel: getNivel(70),
      progress: 70,
      estudando: false,
    },
    {
      nome: "MongoDB",
      descricao: "Banco NoSQL orientado a documentos.",
      icon: "devicon-mongodb-plain",
      nivel: getNivel(60),
      progress: 60,
      estudando: false,
    },
    {
      nome: "Firebird",
      descricao: "Experiência prática em ambientes ERP.",
      icon: "devicon-firebird-plain",
      nivel: getNivel(70),
      progress: 70,
      estudando: false,
    },
    {
      nome: "Prisma ORM",
      descricao: "Modelagem e acesso a dados com TypeScript.",
      icon: "devicon-prisma-original",
      nivel: getNivel(85),
      progress: 85,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const uiux = {
  nome: "UI / UX",
  itens: [
    {
      nome: "Material UI",
      descricao: "Biblioteca de componentes React.",
      icon: "devicon-materialui-plain",
      nivel: getNivel(85),
      progress: 85,
      estudando: false,
    },
    {
      nome: "MUI DataGrid",
      descricao: "Tabelas corporativas avançadas.",
      icon: "devicon-materialui-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
    {
      nome: "Tailwind CSS",
      descricao: "Estilização utilitária moderna.",
      icon: "devicon-tailwindcss-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
    {
      nome: "Bootstrap",
      descricao: "Framework CSS para interfaces rápidas.",
      icon: "devicon-bootstrap-plain",
      nivel: getNivel(70),
      progress: 70,
      estudando: false,
    },
    {
      nome: "Figma",
      descricao: "Prototipação e design de interfaces.",
      icon: "devicon-figma-plain",
      nivel: getNivel(65),
      progress: 65,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const arquitetura = {
  nome: "Arquitetura & Produto",
  itens: [
    {
      nome: "ERP",
      descricao: "Modelagem de processos empresariais.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(88),
      progress: 88,
      estudando: false,
    },
    {
      nome: "SaaS",
      descricao: "Arquitetura cloud-first baseada em assinatura.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: true,
    },
    {
      nome: "Multi-Tenant",
      descricao: "Isolamento e gerenciamento de clientes.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(82),
      progress: 82,
      estudando: false,
    },
    {
      nome: "RBAC",
      descricao: "Controle de acesso por papéis e permissões.",
      icon: "devicon-nodejs-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
    {
      nome: "Modelagem Relacional",
      descricao: "Estruturação de entidades e relacionamentos.",
      icon: "devicon-postgresql-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const infraestrutura = {
  nome: "Infraestrutura",
  itens: [
    {
      nome: "Redis",
      descricao: "Cache e otimização de consultas.",
      icon: "devicon-redis-plain",
      nivel: getNivel(30),
      progress: 30,
      estudando: true,
    },
    {
      nome: "Vercel",
      descricao: "Deploy e hospedagem de aplicações Next.js.",
      icon: "devicon-vercel-original colored",
      nivel: getNivel(75),
      progress: 75,
      estudando: false,
    },
    {
      nome: "Supabase",
      descricao: "Banco e infraestrutura gerenciada.",
      icon: "devicon-supabase-plain",
      nivel: getNivel(70),
      progress: 70,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const qualidade = {
  nome: "Qualidade & Testes",
  itens: [
    {
      nome: "Vitest",
      descricao: "Framework de testes para aplicações JavaScript e TypeScript.",
      icon: "devicon-vitest-plain",
      nivel: getNivel(35),
      progress: 35,
      estudando: true,
    },
    {
      nome: "Testes Unitários",
      descricao: "Validação isolada de funções e regras de negócio.",
      icon: "devicon-javascript-plain",
      nivel: getNivel(40),
      progress: 40,
      estudando: true,
    },
    {
      nome: "Testes E2E",
      descricao: "Validação completa do fluxo da aplicação.",
      icon: "devicon-playwright-plain",
      nivel: getNivel(30),
      progress: 30,
      estudando: true,
    },
  ],
} as const satisfies TecnologiaTypes;

export const ferramentas = {
  nome: "Ferramentas",
  itens: [
    {
      nome: "Git",
      descricao: "Versionamento de código.",
      icon: "devicon-git-plain",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
    {
      nome: "GitHub",
      descricao: "Repositórios, Issues e Milestones.",
      icon: "devicon-github-original",
      nivel: getNivel(80),
      progress: 80,
      estudando: false,
    },
    {
      nome: "Electron",
      descricao: "Aplicações desktop com tecnologias web.",
      icon: "devicon-electron-original",
      nivel: getNivel(75),
      progress: 75,
      estudando: false,
    },
  ],
} as const satisfies TecnologiaTypes;

export const todasTecnologias = [
  arquitetura,
  frontend,
  backend,
  bancoDados,
  linguagens,
  infraestrutura,
  qualidade,
  uiux,
  ferramentas,
] as const satisfies readonly TecnologiaTypes[];
