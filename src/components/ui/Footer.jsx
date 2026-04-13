import React from "react";
import Logo from "../../assets/icons/Personal/icon-512.png";

const listIcon = [
  {
    link: "linkedin.com/in/davidsliren/",
    label: "LinkedIn",
  },
  {
    link: "https://github.com/David-Sliren",
    label: "Github",
  },
  {
    link: "https://x.com/D_Sliren",
    label: "X",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-[#414753]/15 bg-[#121315]">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="flex justify-center items-center gap-2 text-xl font-bold tracking-tighter text-[#e3e2e4] font-headline">
          <span className="bg-gradient-blue bg-clip-text text-transparent">
            Sliren.dev
          </span>
        </div>
        <div className="items-center text-xs tracking-widest uppercase text-[#c1c6d6]">
          © 2025 David Sliren. Casi todos los derechos reservados.
        </div>
        <div className="flex gap-4">
          {listIcon.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              className="text-[#c1c6d6] hover:text-[#0071E3] transition-colors duration-300 opacity-80 hover:opacity-100  text-xs tracking-widest uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
