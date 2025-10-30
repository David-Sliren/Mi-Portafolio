import React from "react";
import useObserver from "../../hooks/useObserver";

function Plantilla1({ title = "", children }) {
  const [hijo, isVisible] = useObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: [0.2, 0.5],
    },
    true
  );

  // console.log(isVisible);
  return (
    <>
      <section
        ref={hijo}
        className={`flex flex-col gap-8 px-4 w-full h-fit transition duration-700 ease-in-out ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-14 "}`}
      >
        <h2 className="text-3xl text-sky-500 font-bold text-shadow-lg text-shadow-black">
          {title}
        </h2>

        {children}
      </section>
    </>
  );
}

export default Plantilla1;
