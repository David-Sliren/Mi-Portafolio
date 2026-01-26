import React from "react";
import Parrafos from "../001 Plantillas/Parrafos";
import Plantilla1 from "../001 Plantillas/Plantilla1";
import Resaltado from "../001 Plantillas/Resaltado";

function AboutMe() {
  return (
    <>
      <Plantilla1 title="Sobre mi">
        <article className="-mt-2 flex flex-col gap-3 md:pr-2">
          <Parrafos>
            Hola, soy un desarrollador front-end autodidacta con un año y medio
            de experiencia, especializado en{" "}
            <Resaltado>React y React Native</Resaltado>, cuento con{" "}
            <Resaltado>experiencia practica</Resaltado> en la creación de
            aplicaciones web y móviles modernas de alto rendimiento.{" "}
            <Resaltado>
              Trabajo con Tailwindcss, TanStack Query, Expo y Vite
            </Resaltado>
            , me enfoco totalmente en escribir código limpio y escalable con
            arquitectura sólida y una excelente experiencia de usuario.
          </Parrafos>

          <Parrafos>
            Me apasiona aprender y crear soluciones prácticas.{" "}
            <Resaltado>
              Estoy abierto a oportunidades como desarrollador front-end o móvil
            </Resaltado>
            , tanto de forma remota como presencial.
          </Parrafos>
        </article>
      </Plantilla1>
    </>
  );
}

export default AboutMe;
