import React from "react";
import useObserver from "../../hooks/useObserver";

function Img1({ img = "", alt = "" }) {
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
      <figure
        ref={hijo}
        className={` relative overflow-hidden w-full h-full border-2 border-amber-50 rounded-lg before:bg-red-500 transition duration-500 ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}`}
      >
        <img className="size-full object-cover" src={img} alt={alt} />
      </figure>
    </>
  );
}

export default Img1;
