import { motion } from "motion/react";
function Card1({ children, className = "" }) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: 40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: false, amount: 0.5, margin: "50px" }}
        transition={{
          duration: 0.5,
          ease: "backOut",
        }}
        className={`relative bg-[#282727] shadow-md shadow-zinc-800 rounded-2xl  h-fit ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
}

export default Card1;
