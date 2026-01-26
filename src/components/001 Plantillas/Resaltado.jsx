import React from "react";

function Resaltado({ children }) {
  return (
    <>
      <strong className="text-sky-500">{children}</strong>
    </>
  );
}

export default Resaltado;
