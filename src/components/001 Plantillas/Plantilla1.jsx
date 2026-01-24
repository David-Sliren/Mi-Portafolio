function Plantilla1({ title = "", children }) {
  return (
    <>
      <section
        className={`flex flex-col px-4 w-full h-fit transition duration-600$`}
      >
        <h2 className="text-3xl text-sky-500 font-bold text-shadow-lg text-shadow-black mb-8">
          {title}
        </h2>

        {children}
      </section>
    </>
  );
}

export default Plantilla1;

// {isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}
