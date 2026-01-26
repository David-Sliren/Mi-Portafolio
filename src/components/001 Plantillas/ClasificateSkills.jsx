import React from "react";

function ClasificateSkills({ children, text }) {
  return (
    <div className="flex flex-col gap-4 bg-zinc-500/20 rounded-lg p-4 mb-5">
      <h2 className="text-xl text-shadow-md text-shadow-zinc-800 font-semibold">
        {text}
      </h2>
      {children}
    </div>
  );
}

export default ClasificateSkills;
