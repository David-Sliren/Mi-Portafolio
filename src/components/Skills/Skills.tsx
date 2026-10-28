import CardSkill from "./CardSkill";
import { skillCategories } from "../../constants/constantsIcons";

const Skills = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-8" id="skills">
      <h2 className="text-5xl font-bold tracking-tight mb-16 text-center">
        Habilidades{" "}
        <span className="bg-gradient-blue bg-clip-text text-transparent">
          Técnicas
        </span>
      </h2>
      <div className="space-y-14">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="bg-gradient-blue bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest  mb-6">
              {category.title}
            </h3>
            <article className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <CardSkill
                  key={skill.label}
                  title={skill.label}
                  icon={skill.icon}
                />
              ))}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
