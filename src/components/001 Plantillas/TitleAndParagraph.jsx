function TitleAndParagraph({ title = "", text = "" }) {
  return (
    <>
      <div className={` flex flex-col gap-4 mb-1 transition duration-500 `}>
        <h3 className="text-center text-3xl font-bold">{title}</h3>
        <span className="scrollbar-hidden overflow-x-hidden w-full h-28">
          <p className=" text-lg text-justify">{text}</p>
        </span>
      </div>
    </>
  );
}

export default TitleAndParagraph;

// ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}
