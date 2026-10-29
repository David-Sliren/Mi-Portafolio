"use client";

import { FormEvent, useState } from "react";
import { LuLoader } from "react-icons/lu";

interface FormProps {
  handler: () => void;
}

const Form = ({ handler }: FormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => null);

      if (res.ok && result?.success) {
        form.reset();
        handler();
      } else {
        setErrorMessage(
          result?.error ||
            "Hubo un problema al enviar el mensaje. Por favor intenta de nuevo."
        );
      }
    } catch (error) {
      console.error("[Form Contact Error]:", error);
      setErrorMessage(
        "No se pudo establecer conexión con el servidor. Revisa tu conexión a internet."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-8 animate-fade-in-up" onSubmit={handleSubmit}>
      {errorMessage && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center justify-between"
        >
          <span>{errorMessage}</span>
          <button
            type="button"
            onClick={() => setErrorMessage(null)}
            className="text-red-400 hover:text-red-200 text-xs font-semibold uppercase tracking-wider ml-4 cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label
            htmlFor="contact-name"
            className="text-[10px] font-bold uppercase tracking-widest text-[#c1c6d6] ml-1 font-inter"
          >
            Nombre
          </label>
          <input
            id="contact-name"
            className="w-full bg-[#1b1c1e] border border-[#414753]/20 focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] rounded-xl p-4 text-[#e3e2e4] placeholder:text-[#c1c6d6]/30 transition-all outline-none disabled:opacity-50"
            placeholder="David Sliren"
            type="text"
            name="name"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="text-[10px] font-bold uppercase tracking-widest text-[#c1c6d6] ml-1 font-inter"
          >
            Correo
          </label>
          <input
            id="contact-email"
            className="w-full bg-[#1b1c1e] border border-[#414753]/20 focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] rounded-xl p-4 text-[#e3e2e4] placeholder:text-[#c1c6d6]/30 transition-all outline-none disabled:opacity-50"
            placeholder="jhojansalazardev@gmail.com"
            type="email"
            name="email"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-[10px] font-bold uppercase tracking-widest text-[#c1c6d6] ml-1 font-inter"
        >
          Mensaje
        </label>
        <textarea
          id="contact-message"
          className="w-full bg-[#1b1c1e] border border-[#414753]/20 focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] rounded-xl p-4 text-[#e3e2e4] placeholder:text-[#c1c6d6]/30 transition-all resize-none outline-none disabled:opacity-50"
          placeholder="Háblame sobre tu proyecto..."
          rows={5}
          name="message"
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      <button
        className="w-full bg-gradient-blue py-5 rounded-xl font-headline font-extrabold text-lg text-white transition-all active:scale-95 shadow-lg shadow-[#0071E3]/20 cursor-pointer hover:animate-jelly disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <LuLoader className="animate-spin text-xl" />
            <span>Enviando mensaje...</span>
          </>
        ) : (
          <span>Enviar Correo</span>
        )}
      </button>
    </form>
  );
};

export default Form;
