import React from "react";

function Resaltado({ children }) {
  return (
    <>
      <span className="text-sky-500 font-bold">{children}</span>
    </>
  );
}

export default Resaltado;
