import { LuTwitter, LuGithub, LuLinkedin } from "react-icons/lu";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

const listIcon = [
  {
    iconName: LuLinkedin,
    link: "https://www.linkedin.com/in/davidsliren",
    label: "LinkedIn",
  },
  {
    iconName: LuGithub,
    link: "https://github.com/David-Sliren",
    label: "GitHub",
  },
  {
    iconName: FaXTwitter,
    link: "https://x.com/slirendev",
    label: "Twitter",
  },
  {
    iconName: FaTiktok,
    link: "https://www.tiktok.com/@sliren.dev",
    label: "TikTok",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-[#414753]/15 bg-[#121315]">
      <div className="flex flex-col xl:flex-row justify-between items-center max-w-7xl mx-auto gap-y-6 px-8 xl:gap-y-0">
        <div className="flex justify-center items-center gap-2 text-xl font-bold tracking-tighter text-[#e3e2e4] font-headline">
          <span className="bg-gradient-blue bg-clip-text text-transparent">
            Sliren.dev
          </span>
        </div>
        <div className="items-center text-center text-xs tracking-widest uppercase text-[#c1c6d6]">
          © 2026 David Sliren. <br className="sm:hidden" /> Casi todos los
          derechos reservados.
        </div>
        <div className="flex gap-x-5">
          {listIcon.map((item) => {
            return (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 sm:text-[#c1c6d6] hover:text-sky-400/60 transition-colors duration-300 opacity-80 hover:opacity-100  text-xs tracking-widest uppercase"
              >
                {item.iconName ? (
                  <item.iconName className="text-lg" />
                ) : (
                  "errorIcon"
                )}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
