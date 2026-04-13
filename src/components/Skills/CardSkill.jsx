import * as iconLibSI from "react-icons/si";
import * as iconLibTb from "react-icons/tb";

const CardSkill = ({ icon, title }) => {
  const ComponentIcon = iconLibSI[icon] || iconLibTb[icon];
  return (
    <div className="bg-surface-container hover:bg-surface-container-high transition-all duration-300 p-8 rounded-3xl flex flex-col items-center text-center group timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both ">
      <span
        className=" text-4xl mb-4 text-primary group-hover:scale-110 transition-transform"
        data-icon="javascript"
      >
        {ComponentIcon ? <ComponentIcon /> : "Error"}
      </span>
      <span className="font-headline font-bold text-sm">{title}</span>
    </div>
  );
};

export default CardSkill;
