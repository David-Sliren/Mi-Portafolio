import React from "react";

function Plantilla1({ title = "", children }) {
  return (
    <>
      <section className="flex flex-col gap-8 px-4 w-full h-fit">
        <h2 className="text-3xl text-sky-500 font-bold text-shadow-lg text-shadow-black">
          {title}
        </h2>

        {children}
      </section>
    </>
  );
}

export default Plantilla1;
