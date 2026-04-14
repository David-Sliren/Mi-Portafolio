import { LuCircleArrowOutUpRight } from "react-icons/lu";
import * as iconLibSI from "react-icons/si";
import * as iconLibTb from "react-icons/tb";
import { SkillHash } from "../../constants/constantsIcons";

const ProjectCard = ({
  title,
  description,
  imgSrc,
  imgAlt,
  platform,
  link,
  stack,
}) => {
  return (
    <a href={link} target="_blank">
      <article className="shrink-0 w-[85vw] md:w-[600px] group relative rounded-2xl sm:rounded-[2rem] aspect-square sm:aspect-[16/10] snap-center space-y-4 sm:space-y-0 border border-white/25 sm:border-0 overflow-hidden">
        <img
          alt={imgAlt}
          className="aspect-video sm:absolute sm:inset-0 sm:w-full sm:h-full object-center object-cover transition-transform duration-1000 group-hover:scale-110"
          src={imgSrc}
        />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:z-2" />
        <div className=" sm:absolute inset-x-6 bottom-6 flex justify-between items-end">
          <div className="flex justify-between items-center sm:bg-white/4 p-6 sm:rounded-2xl sm:border sm:border-white/10 w-full  backdrop-blur-3xl">
            <div>
              <h3 className="font-headline text-2xl font-extrabold text-white mb-1">
                {title}
              </h3>
              <p className="text-white/60 text-xs mt-1 leading-snug line-clamp-2 max-w-[80%]">
                {description}
              </p>
            </div>
            <span className="text-[10px] font-black tracking-widest bg-primary text-on-primary px-3 py-1.5 rounded-full uppercase border border-white/20 bg-gradient-blue">
              {platform}
            </span>
          </div>
        </div>
        <div className="hidden absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:flex items-center justify-center z-10 backdrop-blur-xl">
          <a
            href={link}
            target="_blank"
            className="bg-white/5 px-8 py-4 rounded-full font-headline font-bold text-white flex items-center space-x-2 border border-white/20 backdrop-blur-3xl cursor-pointer z-10 hover:bg-white/10 hover:animate-jelly"
          >
            <span>Ver proyecto</span>
            <span className=" text-sm">
              <LuCircleArrowOutUpRight />
            </span>
          </a>
          <span className="absolute bottom-2 grid grid-cols-5 gap-y-2  w-11/12 max-h-[38%] min-h-[30%] py-2 place-items-center overflow-x-hidden scrollbar-hidden z-0 ">
            {stack.map((item) => {
              const iconName = SkillHash.get(item);
              const IconComponent = iconLibSI[iconName] || iconLibTb[iconName];
              return IconComponent ? (
                <IconComponent key={item} className="text-2xl" />
              ) : (
                <span key={item}>error</span>
              );
            })}
          </span>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
