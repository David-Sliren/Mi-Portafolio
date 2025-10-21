import Yo from "../../assets/image/Yo.jpg";
import { Github, Linkedin, FileUser, Mail } from "lucide-react";
import Icons1 from "../001 Plantillas/Icons1";

function Presentation() {
  return (
    <>
      <div className="overflow-hidden rounded-full border-dotted border-2 border-zinc-600 size-25 hover:scale-110 transition-transform">
        <img className="size-full object-cover" src={Yo} alt="Hola" />
      </div>
      <section className="flex flex-col">
        <h2 className="text-2xl text-sky-500 font-extrabold text-shadow-2xs text-shadow-black">
          David Salazar Andulce
        </h2>
        <h3 className="text-md  font-bold text-shadow-2xs text-shadow-black">
          Desarrolador web |{" "}
          <span className=" text-shadow-2xs text-shadow-black">React</span>
        </h3>

        <article className="flex gap-2 mt-2">
          <Icons1 className="bg-zinc-900 hover:bg-zinc-600">
            <Github />
          </Icons1>

          <Icons1 className="bg-sky-400 hover:bg-sky-600">
            <Linkedin />
          </Icons1>

          <Icons1 className="bg-green-600 hover:bg-green-400">
            <Mail />
          </Icons1>

          <Icons1 className="bg-red-600 hover:bg-red-400">CV</Icons1>
        </article>
      </section>
    </>
  );
}

export default Presentation;
