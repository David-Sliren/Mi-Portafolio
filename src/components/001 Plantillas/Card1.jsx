import React from "react";

function Card1({
  flex = "flex-col items-center gap-5",
  position = "relative",
  children,
}) {
  return (
    <>
      <div
        className={`${position} flex ${flex} bg-[#282727] shadow-md shadow-zinc-800 p-6 py-8 rounded-2xl w-[90%] h-fit `}
      >
        {children}
      </div>
    </>
  );
}

export default Card1;
