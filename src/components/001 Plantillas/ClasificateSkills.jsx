import { motion } from "motion/react";

function ClasificateSkills({ children, text }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: false, amount: 0.8 }}
      className="flex flex-col gap-4 bg-zinc-500/20 rounded-lg p-4 mb-5"
    >
      <h2 className="text-xl text-shadow-md text-shadow-zinc-800 font-semibold">
        {text}
      </h2>
      {children}
    </motion.div>
  );
}

export default ClasificateSkills;
