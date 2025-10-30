import React from "react";
import useObserver from "../../hooks/useObserver";

function TitleAndParagraph({ title = "", text = "" }) {
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
      <div
        ref={hijo}
        className={` flex flex-col gap-4 mb-1 transition duration-500 ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}`}
      >
        <h3 className="text-center text-3xl font-bold">{title}</h3>
        <span className="scrollbar-hidden overflow-x-hidden w-full h-28">
          <p className=" text-lg text-justify">{text}</p>
        </span>
      </div>
    </>
  );
}

export default TitleAndParagraph;
