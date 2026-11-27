import React from "react";
import type { StaticImageData } from "next/image";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FiPenTool } from "react-icons/fi";
import cflolImg from "@/public/cflol.png";
import weblolImg from "@/public/weblol.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiências",
    hash: "#experiencias",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const experiencesData = [
  {
    title: "Designer gráfico",
    location: "UFSC Titans, Fora das Pistas e Grupo Noma",
    description:
      "Identidade visual e peças para redes sociais (Figma, Photoshop, Illustrator). É a base de tipografia, cor e layout que hoje uso em interface.",
    icon: React.createElement(FiPenTool),
    date: "set. 2021 – dez. 2023",
  },
  {
    title: "Graduação em Engenharia de Alimentos",
    location: "UFSC",
    description:
      "Onde tive o primeiro contato com programação e decidi migrar para o desenvolvimento.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2023",
  },
  {
    title: "Desenvolvedor front-end · Projetos pessoais",
    location: "Autônomo",
    description:
      "Apps web com React, TypeScript e Material UI, testes E2E com Playwright, APIs REST em Node.js e scripts em Python.",
    icon: React.createElement(CgWorkAlt),
    date: "jan. 2024 – mai. 2025",
  },
  {
    title: "Pós-graduação em Engenharia de Software",
    location: "PUC Minas",
    description:
      "Arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento.",
    icon: React.createElement(LuGraduationCap),
    date: "mar. 2024 – mar. 2025",
  },
  {
    title: "Estagiário front-end",
    location: "Norus · remoto",
    description:
      "382 PRs integrados em 9 repositórios, com CI (lint, testes e build) em todos. Criei cerca de 140 componentes React e escrevi 72 testes E2E em Playwright, em 38 sprints Scrum. Também ajudei o back-end em .NET/C# quando a entrega precisava.",
    icon: React.createElement(CgWorkAlt),
    date: "jun. 2025 – dez. 2026",
  },
  {
    title: "Pós-graduação em Desenvolvimento Full Stack",
    location: "PUC Minas",
    description: "Em andamento, com conclusão prevista para dezembro de 2026.",
    icon: React.createElement(LuGraduationCap),
    date: "mai. 2025 – dez. 2026",
  },
  {
    title: "Desenvolvedor front-end",
    location: "CFLOL",
    description:
      "Site do campeonato de League of Legends de Foz do Iguaçu (16 times, mais de 80 jogadores). 226 commits no primeiro mês, com lint, testes e checagem de arquitetura antes de cada publicação.",
    icon: React.createElement(CgWorkAlt),
    date: "out. 2026 – atual",
  },
] as const;

type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl?: StaticImageData;
  link?: string;
};

export const projectsData: readonly ProjectData[] = [
  {
    title: "CFLOL",
    description:
      "Site do campeonato de LoL de Foz do Iguaçu, com 16 times. Fiz a página de estatísticas em cerca de 2 horas.",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind", "Radix UI"],
    imageUrl: cflolImg,
    link: "https://cflol.com.br/estatisticas",
  },
  {
    title: "WebLol",
    description:
      "Ferramenta tática de LoL para o competitivo. A ideia foi do Bruno; eu construí o site do primeiro commit ao deploy.",
    tags: ["React", "TypeScript", "Vite", "Firebase", "Playwright"],
    imageUrl: weblolImg,
    link: "https://github.com/bsanoli/WebLol",
  },
  {
    title: "App de finanças para casais",
    description:
      "Em desenvolvimento. Sincroniza o cartão pelo Open Finance e junta metas e divisão de contas do casal num dashboard só.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Zod"],
  },
];

export const skillsData = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Next.js",
  "Vite",
  "Tailwind CSS",
  "Radix UI",
  "shadcn/ui",
  "Material UI",
  "Redux",
  "TanStack Query",
  "Zod",
  "Firebase",
  "Node.js",
  "APIs REST",
  "SQL",
  "Python",
  "Playwright",
  "Vitest",
  "Testing Library",
  "Biome",
  "ESLint",
  "Git",
  "GitHub Actions",
  "Docker",
  "Figma",
  "Acessibilidade web",
  "Scrum",
] as const;
