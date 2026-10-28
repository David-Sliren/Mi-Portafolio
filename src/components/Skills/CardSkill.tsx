import { IconType } from "react-icons";

interface CardSkillProps {
  icon: IconType;
  title: string;
}

const CardSkill = ({ icon: Icon, title }: CardSkillProps) => {
  return (
    <div className="bg-surface-container hover:bg-surface-container-high transition-all duration-300 p-8 rounded-3xl flex flex-col items-center text-center group timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
      <span
        className="text-4xl mb-4 text-primary group-hover:scale-110 transition-transform"
        aria-hidden="true"
      >
        {Icon ? <Icon /> : "error"}
      </span>
      <span className="font-headline font-bold text-sm">{title}</span>
    </div>
  );
};

export default CardSkill;
