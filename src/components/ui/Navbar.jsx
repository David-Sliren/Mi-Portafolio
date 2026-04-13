import { useState } from "react";
import { motion } from "motion/react";
import Logo from "../../assets/icons/Personal/icon-512.png";
import { LuX, LuMenu } from "react-icons/lu";
import { useEffect } from "react";

const list = [
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Proyectos" },
  { href: "#education", label: "Educacion" },
  { href: "#about", label: "Sobre mi" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hash, sethash] = useState(window.location.hash);

  function handlerIsMobile() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const handler = () => sethash(window.location.hash);

    addEventListener("popstate", handler);

    return () => removeEventListener("popstate", handler);
  });

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121315]/60 backdrop-blur-xl no-border bg-gradient-to-b from-[#121315] to-transparent mask-img-animate">
      <article className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <a href="#">
          <div className="flex justify-center items-center gap-2 text-xl font-bold tracking-tighter text-[#e3e2e4] font-headline">
            <img className="w-8 aspect-square" src={Logo} alt="Logo personal" />
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Sliren.dev
            </span>
          </div>
        </a>
        <ul className="hidden md:flex items-center lg:gap-1 xl:gap-x-10">
          {list.map((item) => (
            <a href={item.href} key={item.href}>
              <li
                className={`text-[#c1c6d6] hover:text-[#e3e2e4] font-manrope font-bold tracking-tight text-sm hover:bg-[#292a2c]/50 transition-all duration-300 ease-in-out px-3 py-1 rounded-lg cursor-pointer ${item.href == hash && "bg-gradient-blue bg-clip-text text-transparent"}`}
              >
                {item.label}
              </li>
            </a>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden lg:block bg-gradient-blue text-on-primary-container px-6 py-2.5 rounded-full font-headline font-bold text-sm transition-transform duration-300 hover:scale-105"
        >
          Contacto
        </a>
        <button
          onClick={handlerIsMobile}
          className="block md:hidden bg-gradient-blue text-on-primary-container px-6 py-2.5 rounded-full font-headline font-bold text-sm transition-transform duration-300 hover:scale-105"
        >
          {isOpen ? <LuX /> : <LuMenu />}
        </button>
      </article>
      <motion.div
        layout
        className={`flex md:hidden items-center ${isOpen ? "h-fit opacity-100" : "h-0 opacity-0"}`}
      >
        <ul className="grid grid-cols-3 sm:grid-cols-6 gap-x-1 sm:gap-0 pb-2 place-items-center w-full">
          {list.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={handlerIsMobile}
              className="pl-4 w-full"
            >
              <li
                className={`text-[#c1c6d6] hover:text-[#e3e2e4] font-bold tracking-tight text-sm transition-all duration-300 ease-in-out p-1 rounded-lg ${item.href == hash && "bg-gradient-blue bg-clip-text text-transparent"}`}
              >
                {item.label}
              </li>
            </a>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
