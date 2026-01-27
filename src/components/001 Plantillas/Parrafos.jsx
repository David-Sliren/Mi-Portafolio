import { motion } from "motion/react";

function Parrafos({ className = "", children }) {
  return (
    <>
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          y: {
            duration: 0.6,
          },
        }}
        className={`${className} text-gray-300 text-md min-w-fit`}
      >
        {children}
      </motion.p>
    </>
  );
}

export default Parrafos;
