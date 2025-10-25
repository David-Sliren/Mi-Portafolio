import { useState, useEffect } from "react";
import Presentation from "../components/Presentation/Presentation";
import AboutMe from "../components/about me/AboutMe";
import Skills from "../components/Skills/Skills";
import Proyects from "../components/Proyects/Proyects";
import Certificates from "../components/Certificates/Certificates";
import Icons1 from "../components/001 Plantillas/Icons1";
import Contacts from "../components/001 Plantillas/Contacts";
import Parrafos from "../components/001 Plantillas/Parrafos";

function Portafolio() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full min-h-full">
      <header className="flex gap-4 items-center border-white border-b-2 py-6 px-4">
        <Presentation />
      </header>
      <main className="flex flex-col gap-15 bg-transparent overflow-x-hidden py-4 pt-5">
        <AboutMe />
        <Skills />
        <Proyects />
        <Certificates />
      </main>
      <footer className="flex flex-col gap-2 items-center bg-zinc-900 p-4 py-6">
        <h2 className="text-2xl text-sky-500 font-bold">Contactame</h2>
        <Contacts />
      </footer>
    </div>
  );
}

export default Portafolio;
