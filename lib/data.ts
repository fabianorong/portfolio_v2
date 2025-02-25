import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import treineImg from "@/public/treineapp.png";
import pandaImg from "@/public/pandacare.png";

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
    title: "Assistente de Marketing Digital",
    location: "Grupo Noma",
    description:
      "Desenvolvi e implementei estratégias de marketing digital, combinando criação de conteúdo, gestão de mídias sociais e design gráfico para fortalecer a identidade da marca.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },

  {
    title: "Designer Gráfico",
    location: "Fora das Pistas & UFSC Titans",
    description:
      "Durante três anos, criei identidades visuais e materiais gráficos impactantes, além de orientar designers juniores e contribuir para a consolidação das marcas.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },

  {
    title: "Graduação em Engenharia de Alimentos",
    location: "UFSC, Brasil",
    description:
      "Desenvolvi habilidades como aprendizado autodidata, resolução de problemas e trabalho em equipe. Onde tive primeiro contato com programação e me despertou o interesse por tecnologia, levando-me à transição para o desenvolvimento Full-Stack e à pós em Engenharia de Software.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2023",
  },
  {
    title: "Pós-graduação em Engenharia de Software",
    location: "PUC Minas, Brasil",
    description:
      "Aprofundei meus conhecimentos em arquitetura de software, metodologias ágeis e boas práticas de desenvolvimento, aprimorando minha capacidade de criar soluções escaláveis e eficientes.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2025",
  },

  {
    title: "Desenvolvedor Full-Stack Freelance",
    location: "Remoto",
    description:
      "Atuo como Desenvolvedor Freelance Full-Stack e em busca de oportunidades para crescer profissionalmente.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Treine Landing Page",
    description:
      "Página de um aplicativo de treino. Planos personalizados, monitoramento de desempenho e suporte. otimizado para dispositivos móveis e desktop.",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: treineImg,
    link: "https://treineapp.netlify.app/",
  },
  {
    title: "PandaCare",
    description:
      "Site Fullstack, com gestão de pacientes e consultas médicas. *Senha Admin: 1234.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: pandaImg,
    link: "https://panda-healthcare.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "NestJS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "Redux Saga",
  "Express",
  "PostgreSQL",
  "SQL",
  "Python",
  "Framer Motion",
  "Material-UI",
] as const;
