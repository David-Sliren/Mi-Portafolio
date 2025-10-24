import React from "react";

function Img1({ img = "", alt = "" }) {
  return (
    <>
      <figure className=" relative overflow-hidden w-full h-full border-2 border-amber-50 rounded-lg before:bg-red-500">
        <img className="size-full object-cover" src={img} alt={alt} />
      </figure>
    </>
  );
}

export default Img1;
