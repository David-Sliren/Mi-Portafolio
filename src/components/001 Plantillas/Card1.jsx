function Card1({
  children,
  flex = "flex-col items-center gap-5",
  position = "relative",
  padding = "p-6 py-8",
  className = "",
}) {
  return (
    <>
      <div
        className={`${position} flex ${flex} ${padding} ${className} bg-[#282727] shadow-md shadow-zinc-800 rounded-2xl w-[90%] h-fit transition duration-500 $`}
      >
        {children}
      </div>
    </>
  );
}

export default Card1;

// {isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 "}
