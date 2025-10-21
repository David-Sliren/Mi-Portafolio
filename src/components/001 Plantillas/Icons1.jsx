function Icons1({ link = "#", children, className = "", size = "size-8" }) {
  return (
    <>
      <a
        className={`${className} ${size} flex justify-center rounded-md items-center bg-gradient-to-bl from-white/40 to-black/40 text-lg font-bold px-1.5 py-1 hover:scale-110 hover:bg-gradient-to-r transition duration-400;`}
        href={link}
      >
        {children}
      </a>
    </>
  );
}

export default Icons1;
