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
        Me formei em <span className="font-bold">Engenharia de Alimentos</span>{" "}
        e fui <span className="font-bold">designer gráfico</span> antes de
        programar. Desde junho de 2025 trabalho como estagiário front-end num
        time de produto: entreguei{" "}
        <span className="font-bold">382 PRs em 9 repositórios</span>, criei
        cerca de 140 componentes React e escrevi 72 testes E2E em Playwright. O
        dia a dia é{" "}
        <span className="font-bold">
          React, TypeScript, Redux e TanStack Query
        </span>
        , sempre com PR revisado, lint, testes e build no CI antes do merge.
      </p>

      <p>
        Fora do estágio, desenvolvo o site do{" "}
        <span className="font-bold">CFLOL</span>, campeonato de League of
        Legends de Foz do Iguaçu, e o <span className="font-bold">WebLol</span>,
        ferramenta tática de LoL que construí com o Bruno. Uso{" "}
        <span className="italic">IA</span> no desenvolvimento, mas com processo
        em volta: branch por tarefa, testes, revisão visual e build antes de
        publicar. O design me ajuda a entregar telas acessíveis e fiéis ao
        layout. Procuro uma{" "}
        <span className="underline">
          vaga de desenvolvedor front-end júnior
        </span>
        , remota ou em Florianópolis.
      </p>
    </motion.section>
  );
}
