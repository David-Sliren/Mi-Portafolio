function TitleAndParagraph({ title = "", text = "" }) {
  return (
    <>
      <div className={`flex flex-col gap-4 mb-1 transition duration-500 `}>
        <h3 className="text-center text-3xl font-bold">{title}</h3>
        <span className=" scrollbar-hidden w-full  h-30 overflow-hidden ">
          <p className=" text-md text-justify md:text-left">{text}</p>
        </span>
      </div>
    </>
  );
}

export default TitleAndParagraph;

// ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}
