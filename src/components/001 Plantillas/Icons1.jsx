import useObserver from "../../hooks/useObserver";

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
  const [hijo, isVisible] = useObserver(
    {
      root: null,
      rootMargin: "0px 0px 15px 0px",
      threshold: [0.1, 0.5],
    },
    false
  );
  return (
    <>
      <a
        ref={hijo}
        className={`${className} ${size} flex justify-center rounded-md items-center ${gradient && "bg-gradient-to-bl from-white/40 to-black/40"} text-lg font-bold ${padding} hover:scale-105 hover:bg-gradient-to-r transition duration-500 ${!pointerEvents && "pointer-events-none"} ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}`}
        href={link}
        target={target}
      >
        {children}
      </a>
    </>
  );
}

export default Icons1;
