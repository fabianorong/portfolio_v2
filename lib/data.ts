import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import treineImg from "@/public/treineapp.png";
import pandaImg from "@/public/pandacare.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiências",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Digital Marketing Assistant",
    location: "Grupo Noma",
    description:
      "Auxiliei em estratégias de marketing digital, ganhando experiência em criação de conteúdo e gerenciamento de mídias sociais junto com meu trabalho de design.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },

  {
    title: "Graphic Designer",
    location: "Fora das Pistas & UFSC Titans",
    description:
      "Atuei por 3 anos como designer gráfico, criando elementos visuais e branding para diversas empresas.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },

  {
    title: "Graduated in Food Engineering",
    location: "UFSC, Brazil",
    description:
      "Depois de me formar em Engenharia de Alimentos, decidi fazer a transição de minha carreira para tecnologia. Para isso, iniciei uma pós-graduação em Engenharia de Software e aprofundei meus conhecimentos em desenvolvimento Full-Stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2024",
  },
  {
    title: "Postgraduate in Software Engineering",
    location: "PUC Minas, Brazil",
    description:
      "Atualmente estou cursando pós-graduação em Engenharia de Software. Aprofundando minha compreensão dos processos e metodologias de desenvolvimento de software.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - presente",
  },

  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "Agora estou atuando como desenvolvedor freelance Full-Stack e em busca de oportunidades para crescer profissionalmente.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Treine Landing Page",
    description:
      "Página de um aplicativo de treinamento. Planos de treino personalizados, monitoramento de desempenho e suporte. otimizado para dispositivos móveis e desktop.",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: treineImg,
    link: "https://treineapp.netlify.app/",
  },
  {
    title: "PandaCare",
    description:
      "Site Fullstack, com gestão de pacientes e consultas médicas. Com uma interface intuitiva e foco na praticidade.",
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
