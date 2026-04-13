import CardSkill from "./CardSkill";
import { SkillsIcons } from "../../constants/constantsIcons";

function Skills() {
  return (
    <>
      <section className=" py-32 max-w-7xl mx-auto px-8" id="skills">
        <h2 className="text-5xl font-bold tracking-tight mb-16 text-center">
          Habilidades{" "}
          <span className="bg-gradient-blue bg-clip-text text-transparent">
            Tecnicas
          </span>
        </h2>
        <article className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SkillsIcons.map((item) => (
            <CardSkill
              key={item.label}
              title={item.label}
              icon={item.iconName}
            />
          ))}
        </article>
      </section>{" "}
    </>
  );
}

export default Skills;
