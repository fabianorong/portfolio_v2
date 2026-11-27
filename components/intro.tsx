"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src="/profilepic.png"
                alt="Foto de Fabiano Rong"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Olá, me chamo Fabiano.</span> Sou{" "}
        <span className="font-bold">desenvolvedor front-end</span> e construo
        interfaces com{" "}
        <span className="underline">React, TypeScript e Next.js</span>, como o
        site do campeonato <span className="font-bold">CFLOL</span>, que está
        no ar.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contato"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >
          Entrar em contato{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
          href="/CV.pdf"
          download
        >
          Baixar CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack  "
          href="https://www.linkedin.com/in/fabianorong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack "
          href="https://github.com/fabianorong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
