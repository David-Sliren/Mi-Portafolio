import { motion } from "motion/react";

function Plantilla1({ children, title = "", className = "" }) {
  return (
    <>
      <section className={`flex flex-col px-4 w-full h-fit ${className}`}>
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: "backOut",
            },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl text-sky-500 font-bold text-shadow-lg text-shadow-black mb-8"
        >
          {title}
        </motion.h2>

        {children}
      </section>
    </>
  );
}

export default Plantilla1;
