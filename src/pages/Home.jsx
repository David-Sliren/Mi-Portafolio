import Presentation from "../components/Presentation/Presentation";
import AboutMe from "../components/about me/AboutMe";
import Skills from "../components/Skills/Skills";
import Proyects from "../components/Proyects/Proyects";
import Certificates from "../components/Certificates/Certificates";
import Icons1 from "../components/001 Plantillas/Icons1";

import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import Experience from "../components/Experience/Experience";

function Home() {
  return (
    <div className="container">
      <div className="grid grid-rows-[auto_1fr] w-full md:w-[750px] min-h-full mx-auto">
        <header className="flex flex-col gap-2 items-center border-white border-b-2 pb-6">
          <div className="w-full flex gap-4 items-center py-6 px-4 ">
            <Presentation />
          </div>
          <div className="w-full">
            <AboutMe />
          </div>
        </header>
        <main className="flex flex-col gap-15 bg-transparent overflow-x-hidden py-5 pb-10">
          <Experience />
          <Skills />
          <Proyects />
          <Certificates />
        </main>
      </div>
      <footer className="flex flex-col gap-2 items-center bg-zinc-900 p-4 py-6 min-w-full">
        <h2 className="text-2xl text-sky-500 font-bold">Contactame:</h2>
        <Icons1
          className="bg-sky-600 hover:bg-green-400 gap-2"
          link="mailto:jhojansalazar79@gmail.com?subject=Me%20encuentro%20interesado%20en%20contratarte"
          size="w-fit"
          gradient={false}
        >
          <Mail />
          <span>Email</span>
        </Icons1>

        <div className="w-full text-ms text-zinc-500 flex flex-col items-center mt-4">
          <p className="">© 2025 David Sliren.</p>
          Casi todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}

export default Home;
