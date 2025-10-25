import React from "react";
import Parrafos from "../001 Plantillas/Parrafos";
import Plantilla1 from "../001 Plantillas/Plantilla1";
import Resaltado from "../001 Plantillas/Resaltado";

function AboutMe() {
  return (
    <>
      <Plantilla1 title="Sobre mi">
        <article className="-mt-2 flex flex-col gap-3">
          <Parrafos>
            Soy un{" "}
            <Resaltado desarrollador web Front-End>
              desarrollador web Front-End
            </Resaltado>{" "}
            con un año de experiencia autodidacta, especializado en la creación
            de interfaces <Resaltado>modernas</Resaltado>,{" "}
            <Resaltado>dinámicas</Resaltado> y <Resaltado>responsive</Resaltado>{" "}
            usando <Resaltado>React</Resaltado> y{" "}
            <Resaltado>Tailwind CSS</Resaltado>.
          </Parrafos>
          <Parrafos>
            Me apasiona transformar ideas en experiencias funcionales, limpias y
            accesibles. Busco un rol <Resaltado>junior</Resaltado> donde pueda
            aplicar mis conocimientos, aprender de un equipo profesional y
            seguir creciendo en un entorno <Resaltado>colaborativo</Resaltado> y{" "}
            <Resaltado>desafiante</Resaltado>.
          </Parrafos>

          <Parrafos>
            <Resaltado>Abierto a oportunidades junior o trainee</Resaltado> en
            desarrollo Front-End, tanto <Resaltado>remotas</Resaltado> como{" "}
            <Resaltado>presenciales</Resaltado>.
          </Parrafos>
        </article>
      </Plantilla1>
    </>
  );
}

export default AboutMe;
