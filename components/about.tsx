"use client";

import React from "react";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sobre"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Depois de me formar em{" "}
        <span className="font-bold">Engenharia de Alimentos</span>, descobri
        minha paixão por tecnologia e programação. Continuei meus estudos em{" "}
        <span className="font-bold">Engenharia de Software</span> e concluí
        cursos em{" "}
        <span className="font-bold">
          JavaScript, Python, React.js, and SQL.{" "}
        </span>
        Minha parte favorita da programação é a{" "}
        <span className="italic">resolução de problemas</span>. Eu{" "}
        <span className="underline">amo</span> a sensação de finalmente
        descobrir a solução para o problema. Minhas Stacks principais são{" "}
        <span className="font-bold">React, Next.js, Node.js, NestJS</span>.
        Também sou proficiente em TypeScript, Redux e Prisma. Estou sempre
        ansioso para explorar novas tecnologias.
      </p>

      <p>
        Quando não estou
        <span className="italic"> codando</span>, gosto de trabalhar em projetos
        pessoais, jogar videogames e me manter atualizado sobre as últimas
        tendências tecnológicas. Também tenho experiência em{" "}
        <span className="font-bold">design gráfico</span>, o que aprimora minha
        capacidade de criar experiências de usuário visualmente atraentes.
        Ultimamente, tenho me aprofundado em{" "}
        <span className="font-bold">
          arquitetura de software e design de sistemas
        </span>{" "}
        para refinar ainda mais minhas habilidades de desenvolvimento.
      </p>
    </motion.section>
  );
}
