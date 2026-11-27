"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "E-mail inválido",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Mensagem inválida",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada");
    return {
      error: "Não foi possível enviar agora. Me mande um e-mail direto.",
    };
  }

  const resend = new Resend(apiKey);

  let data;
  try {
    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "fabianorong@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    if (result.error) {
      console.error("Resend recusou o envio:", result.error);
      return {
        error: "Não foi possível enviar agora. Me mande um e-mail direto.",
      };
    }

    data = result.data;
  } catch (error: unknown) {
    console.error("Falha ao enviar e-mail:", getErrorMessage(error));
    return {
      error: "Não foi possível enviar agora. Me mande um e-mail direto.",
    };
  }

  return {
    data,
  };
};
