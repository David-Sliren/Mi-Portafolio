function Icons1({
  link = "#",
  target = "_blank",
  children,
  className = "",
  size = "size-8",
  gradient = true,
  padding = "px-1.5 py-1",
  pointerEvents = true,
}) {
  return (
    <>
      <a
        className={`  flex justify-center rounded-md items-center  text-lg font-bold  hover:scale-105 hover:bg-gradient-to-r transition duration-500 ${!pointerEvents && "pointer-events-none"} ${gradient && "bg-gradient-to-bl from-white/40 to-black/40"} ${padding} ${size} ${className}`}
        href={link}
        target={target}
      >
        {children}
      </a>
    </>
  );
}

export default Icons1;
