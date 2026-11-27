"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <Wrapper {...wrapperProps}>
        <section
          className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative transition ${
            link ? "hover:bg-gray-200" : ""
          } ${imageUrl ? "sm:pr-8 sm:h-[20rem] sm:group-even:pl-8" : ""}`}
        >
          <div
            className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full ${
              imageUrl ? "sm:max-w-[50%] sm:group-even:ml-[18rem]" : "sm:pr-10"
            }`}
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 mb-4 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`Tela do projeto ${title}`}
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
            />
          )}
        </section>
      </Wrapper>
    </motion.div>
  );
}
