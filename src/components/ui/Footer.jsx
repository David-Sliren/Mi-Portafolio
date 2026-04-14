import * as iconLibLu from "react-icons/lu";
import Logo from "../../assets/icons/Personal/icon-512.png";

const listIcon = [
  {
    iconName: "LuLinkedin",
    link: "https://www.linkedin.com/in/davidsliren/",
    label: "LinkedIn",
  },
  {
    iconName: "LuGithub",
    link: "https://github.com/David-Sliren",
    label: "Github",
  },
  {
    iconName: "LuTwitter",

    link: "https://x.com/D_Sliren",
    label: "Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-[#414753]/15 bg-[#121315]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-y-6 px-8 sm:gap-y-0">
        <div className="flex justify-center items-center gap-2 text-xl font-bold tracking-tighter text-[#e3e2e4] font-headline">
          <span className="bg-gradient-blue bg-clip-text text-transparent">
            Sliren.dev
          </span>
        </div>
        <div className="items-center text-center text-xs tracking-widest uppercase text-[#c1c6d6]">
          © 2025 David Sliren. <br className="sm:hidden" /> Casi todos los
          derechos reservados.
        </div>
        <div className="flex gap-x-5">
          {listIcon.map((item) => {
            const Icon = iconLibLu[item.iconName];
            return (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                className="text-sky-400 sm:text-[#c1c6d6] hover:text-sky-400/60 transition-colors duration-300 opacity-80 hover:opacity-100  text-xs tracking-widest uppercase"
              >
                {Icon ? <Icon className="text-lg" /> : <span>errorIcon</span>}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
