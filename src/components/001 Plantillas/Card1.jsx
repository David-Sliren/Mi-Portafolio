function Card1({ children, className = "" }) {
  return (
    <>
      <div
        className={`relative bg-[#282727] shadow-md shadow-zinc-800 rounded-2xl  h-fit transition duration-500 ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default Card1;
