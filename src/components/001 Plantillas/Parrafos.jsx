import React from "react";

function Parrafos({
  className = "text-white text-md text-shadow-2xs text-shadow-black",
  children,
}) {
  return (
    <>
      <p className={className}>{children}</p>
    </>
  );
}

export default Parrafos;
