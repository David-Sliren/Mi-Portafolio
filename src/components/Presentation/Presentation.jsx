import { useRef } from "react";
import Yo from "../../assets/image/Yo.jpg";
import Contacts from "../001 Plantillas/Contacts";

function Presentation() {
  // const container = useRef();
  return (
    <>
      <div
        // ref={container}
        className="overflow-hidden rounded-full border-dotted border-2 border-zinc-600 size-25 hover:scale-110 transition-transform"
      >
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

        <Contacts />
      </section>
    </>
  );
}

export default Presentation;
