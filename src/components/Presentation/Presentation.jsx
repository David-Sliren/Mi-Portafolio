import { useRef } from "react";
import Yo from "../../assets/image/Yo.jpg";
import Contacts from "../001 Plantillas/Contacts";
import useObserver from "../../hooks/useObserver";

function Presentation() {
  const [hijo, isVisible] = useObserver(
    {
      root: null,
      rootMargin: "0px 0px 15px 0px",
      threshold: [0.1, 0.5],
    },
    false
  );

  return (
    <>
      <div
        ref={hijo}
        className={`overflow-hidden rounded-full border-dotted border-2 border-zinc-600 size-25 hover:scale-110 transition duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} `}
      >
        <img
          ref={hijo}
          className={`size-full object-cover`}
          src={Yo}
          alt="Hola"
        />
      </div>
      <section
        ref={hijo}
        className={`flex flex-col transition duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 "}`}
      >
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
