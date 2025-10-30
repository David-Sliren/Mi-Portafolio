import React from "react";
import useObserver from "../../hooks/useObserver";

function Card1({
  children,
  flex = "flex-col items-center gap-5",
  position = "relative",
  padding = "p-6 py-8",
  className = "",
}) {
  const [hijo, isVisible] = useObserver(
    {
      root: null,
      rootMargin: "0px 0px 0px 15px",
      threshold: 0.2,
      delay: 400,
    },
    true
  );
  return (
    <>
      <div
        ref={hijo}
        className={`${position} flex ${flex} ${padding} ${className} bg-[#282727] shadow-md shadow-zinc-800 rounded-2xl w-[90%] h-fit transition duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 "}`}
      >
        {children}
      </div>
    </>
  );
}

export default Card1;
