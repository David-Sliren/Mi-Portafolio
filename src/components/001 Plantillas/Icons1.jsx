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
        className={`${className} ${size} flex justify-center rounded-md items-center ${gradient && "bg-gradient-to-bl from-white/40 to-black/40"} text-lg font-bold ${padding} hover:scale-110 hover:bg-gradient-to-r transition duration-400 ${!pointerEvents && "pointer-events-none"}`}
        href={link}
        target={target}
      >
        {children}
      </a>
    </>
  );
}

export default Icons1;
