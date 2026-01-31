import Yo from "../../assets/image/Yo.webp";
import Contacts from "../001 Plantillas/Contacts";
import { motion } from "motion/react";

function Presentation() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: -10,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className={`overflow-hidden rounded-full border-dotted border-2 border-zinc-600 size-25`}
      >
        <img className={`size-full object-cover`} src={Yo} alt="Hola" />
      </motion.div>
      <motion.section
        initial={{
          opacity: 0,
          x: 10,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        className={`flex flex-col `}
      >
        <h2 className="text-2xl text-sky-500 font-extrabold text-shadow-2xs text-shadow-black">
          David Salazar Andulce
        </h2>
        <h3 className="text-md  font-bold text-shadow-2xs text-shadow-black">
          Desarrollador |{" "}
          <span className=" text-shadow-2xs text-shadow-black">
            React | React-Native
          </span>
        </h3>

        <Contacts />
      </motion.section>
    </>
  );
}

export default Presentation;
