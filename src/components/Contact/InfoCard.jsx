import React from "react";
import { LuCircleCheck } from "react-icons/lu";

const InfoCard = ({ handler }) => {
  return (
    <section className="bg-zinc-500/10 flex flex-col justify-center items-center gap-y-10 h-fit w-full py-20 border border-white/15 rounded-2xl shadow animate-fade-in-down">
      <article>
        <LuCircleCheck className=" text-blue-400/90 text-7xl animate-jelly" />
      </article>
      <article className="flex flex-col justify-center items-center gap-y-6">
        <p className="bg-gradient-blue bg-clip-text text-transparent text-xl font-semibold leading-relaxed">
          Gracias, en menos de 24 horas me pondre en contacto contigo
        </p>
        <button
          onClick={handler}
          className="bg-gradient-blue px-6 py-3 rounded-lg text-md font-semibold cursor-pointer hover:animate-jelly"
        >
          Enviar otro correo
        </button>
      </article>
    </section>
  );
};

export default InfoCard;
