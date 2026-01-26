import { EXPERIENCE } from "../../constants/docsExperiencie";
import ExperiencieItem from "../001 Plantillas/ExperiencieItem";
import Plantilla1 from "../001 Plantillas/Plantilla1";

function Experience() {
  return (
    <Plantilla1 title="Experiencia" className="pt-12">
      <ol class="relative">
        {EXPERIENCE.map((experience, i) => (
          <li key={i}>
            <ExperiencieItem {...experience} />
          </li>
        ))}
      </ol>
    </Plantilla1>
  );
}

export default Experience;
