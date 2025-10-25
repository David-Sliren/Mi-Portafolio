import React from "react";
import AboutMe from "../about me/AboutMe";
import Plantilla1 from "../001 Plantillas/Plantilla1";
import Icons1 from "../001 Plantillas/Icons1";
import Parrafos from "../001 Plantillas/Parrafos";

// Obtener los iconos
const icons = import.meta.glob("../../assets/icons/*.svg", {
  eager: true,
  as: "url",
});

const allIcons = Object.values(icons);

// Iconos de tecnologias
export const tecnoligiasIcon = allIcons.filter((element, index) => index < 8);

export const tecnologiasName = [
  "HTML",
  "CSS",
  "JavaScrpit",
  "Sass",
  "React",
  "FireBase",
  "TailwindCss",
  "GSAP",
];

// Iconos de herramientas
const herramientasIcon = allIcons.filter((element, index) => index > 7);

const herramientasName = ["Vite", "Git", "npm", "pnpm"];

function Skills() {
  return (
    <>
      <section>
        <Plantilla1 title="Tecnologias">
          <span className="flex flex-wrap gap-2 w-full">
            {tecnoligiasIcon.map((item, i) => {
              return (
                <Icons1
                  key={i}
                  className="grow border-1 border-black bg-sky-600 hover:bg-sky-400"
                  size="size-10 w-fit gap-2"
                  pointerEvents={false}
                >
                  <img
                    className="size-full py-1"
                    src={item}
                    alt={tecnologiasName[i]}
                  />
                  <Parrafos>{tecnologiasName[i]}</Parrafos>
                </Icons1>
              );
            })}
          </span>
          <span className="flex flex-wrap gap-2 w-full mt-4">
            {herramientasIcon.map((item, i) => {
              return (
                <Icons1
                  key={i}
                  className="grow border-1 border-black bg-zinc-800 hover:bg-zinc-600"
                  size="size-10 w-fit gap-2"
                  pointerEvents={false}
                >
                  <img
                    className="size-full py-1"
                    src={item}
                    alt={herramientasName[i]}
                  />
                  <Parrafos>{herramientasName[i]}</Parrafos>
                </Icons1>
              );
            })}
          </span>
        </Plantilla1>
      </section>
    </>
  );
}

export default Skills;
