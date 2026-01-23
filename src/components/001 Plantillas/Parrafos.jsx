function Parrafos({
  className = "text-white text-md text-shadow-2xs text-shadow-black",
  children,
}) {
  return (
    <>
      <p className={`${className} transition duration-500 `}>{children}</p>
    </>
  );
}

export default Parrafos;

// ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}
