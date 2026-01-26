function Parrafos({ className = "", children }) {
  return (
    <>
      <p
        className={`${className} text-gray-300 text-md transition duration-500 min-w-fit`}
      >
        {children}
      </p>
    </>
  );
}

export default Parrafos;

// ${isVisible ? "opacity-100 translate-Y-0" : "opacity-0 translate-y-10 "}
