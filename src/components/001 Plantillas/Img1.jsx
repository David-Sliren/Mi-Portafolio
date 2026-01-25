function Img1({ img = "", alt = "" }) {
  return (
    <>
      <figure
        className={` relative overflow-hidden w-full h-full border-2 border-amber-50 rounded-lg before:bg-red-500 transition duration-500 overflow-hidden`}
      >
        <img className="size-full object-cover" src={img} alt={alt} />
      </figure>
    </>
  );
}

export default Img1;

// ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}
