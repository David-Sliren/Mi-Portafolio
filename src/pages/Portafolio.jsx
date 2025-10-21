import { useState, useEffect } from "react";
import Presentation from "../components/Presentation/Presentation";
import AboutMe from "../components/about me/AboutMe";
import Skills from "../components/Skills/Skills";
import Proyects from "../components/Proyects/Proyects";

function Portafolio() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full min-h-full">
      <header className="flex gap-4 items-center border-white border-b-2 py-6 px-4">
        <Presentation />
      </header>
      <main className="flex flex-col gap-10 bg-transparent overflow-x-hidden py-4">
        <AboutMe />
        <Skills />
        <Proyects />
      </main>
      <footer className="bg-red-50">Hola soy el footer</footer>
    </div>
  );
}

export default Portafolio;
