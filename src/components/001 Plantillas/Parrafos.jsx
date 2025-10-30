import React from "react";
import useObserver from "../../hooks/useObserver";

function Parrafos({
  className = "text-white text-md text-shadow-2xs text-shadow-black",
  children,
}) {
  const [hijo, isVisible] = useObserver(
    {
      root: null,
      rootMargin: "0px 0px 15px 0px",
      threshold: [0.1, 0.5],
    },
    false
  );
  return (
    <>
      <p
        ref={hijo}
        className={`${className} transition duration-500 ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}`}
      >
        {children}
      </p>
    </>
  );
}

export default Parrafos;
