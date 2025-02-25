"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contato"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Entre em contato</SectionHeading>

      <p className="text-gray-700 -mt-6 ">
        Entre em contato diretamente pelo meu email{" "}
        <a className="underline" href="mailto:example@gmail.com">
          fabiano.rong@gmail.com
        </a>{" "}
        ou através deste formulário.
      </p>

      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("E-mail enviado com sucesso!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack  transition-all "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Seu Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all "
          name="message"
          placeholder="Sua mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
