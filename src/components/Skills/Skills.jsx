import React from "react";
import AboutMe from "../about me/AboutMe";
import Plantilla1 from "../001 Plantillas/Plantilla1";
import Icons1 from "../001 Plantillas/Icons1";
import Parrafos from "../001 Plantillas/Parrafos";
import {
  iconsLenguages,
  iconsLibrarys,
  iconsTools,
} from "../../constants/constantsIcons";
import ClasificateSkills from "../001 Plantillas/ClasificateSkills";

function Skills() {
  return (
    <>
      <section>
        <Plantilla1 title="Tecnologias">
          <ClasificateSkills text="Languages ​​and Environments">
            <span className="flex gap-2 w-full">
              {iconsLenguages.map((item) => {
                return (
                  <Icons1
                    key={item.id}
                    className=""
                    size="size-10 w-fit gap-2 "
                    pointerEvents={false}
                  >
                    <img
                      className="size-full py-1"
                      src={item.url}
                      alt={item.name}
                    />
                    <Parrafos>{item.name}</Parrafos>
                  </Icons1>
                );
              })}
            </span>
          </ClasificateSkills>
          <ClasificateSkills text="Frameworks and Libraries">
            <span className="flex flex-wrap  gap-2 w-full ">
              {iconsLibrarys.map((item) => {
                return (
                  <Icons1
                    key={item.id}
                    className="w-fit gap-2 "
                    size="size-10"
                    pointerEvents={false}
                  >
                    <img
                      className="size-full py-1"
                      src={item.url}
                      alt={item.name}
                    />
                    <Parrafos>{item.name}</Parrafos>
                  </Icons1>
                );
              })}
            </span>
          </ClasificateSkills>
          <ClasificateSkills text="Tools">
            <span className="flex gap-2 w-full ">
              {iconsTools.map((item) => {
                return (
                  <Icons1
                    key={item.id}
                    className=""
                    size="size-10 w-fit gap-2"
                    pointerEvents={false}
                  >
                    <img
                      className="size-full py-1"
                      src={item.url}
                      alt={item.name}
                    />
                    <Parrafos>{item.name}</Parrafos>
                  </Icons1>
                );
              })}
            </span>
          </ClasificateSkills>
        </Plantilla1>
      </section>
    </>
  );
}

export default Skills;
