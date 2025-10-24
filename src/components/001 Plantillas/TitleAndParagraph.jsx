import React from "react";

function TitleAndParagraph({ title = "", text = "" }) {
  return (
    <>
      <div className=" flex flex-col gap-4 mb-1">
        <h3 className="text-center text-3xl font-bold">{title}</h3>
        <span className=" overflow-x-hidden w-full h-28">
          <p className="text-lg text-justify">{text}</p>
        </span>
      </div>
    </>
  );
}

export default TitleAndParagraph;
