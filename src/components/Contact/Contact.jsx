import React from "react";
import Form from "./Form";
import InfoCard from "./InfoCard";
import { useState } from "react";

const Contact = () => {
  const [isClose, setIsClose] = useState(false);

  function handlerIsClose() {
    setIsClose(!isClose);
  }
  return (
    <section id="contact" className="py-28 bg-shark-900/40 h-vh">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-6 text-[#e3e2e4] sm:text-5xl timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            CONSTRUYAMOS ALGO{" "}
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              IMPRESIONANTE
            </span>
            .
          </h2>
          <p className="text-[#c1c6d6] text-lg timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Estoy disponible para proyectos freelance, colaboraciones y
            oportunidades laborales remotas. Si tenés un proyecto en mente o
            querés trabajar juntos, escribime.
          </p>
        </div>
        {isClose ? (
          <InfoCard handler={handlerIsClose} />
        ) : (
          <Form handler={handlerIsClose} />
        )}
      </div>
    </section>
  );
};

export default Contact;
