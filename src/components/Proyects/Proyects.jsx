import Icons1 from "../001 Plantillas/Icons1";
import Plantilla1 from "../001 Plantillas/Plantilla1";
import { tecnoligiasIcon, tecnologiasName } from "../Skills/Skills";
import Card1 from "../001 Plantillas/Card1";
import Img1 from "../001 Plantillas/Img1";
import TitleAndParagraph from "../001 Plantillas/TitleAndParagraph";
const img = import.meta.glob("../../assets/image/*.png", {
  eager: true,
  as: "url",
});

const image = Object.values(img);
const proyects = [
  {
    title: "Memorma",
    descripcion:
      "Desarrollé una aplicación de juego de memoria (Memorama) diseñada para ofrecer una experiencia de usuario fluida y demostrar una sólida comprensión de la arquitectura frontend moderna y la persistencia de datos. Este proyecto destaca la capacidad de construir lógica de aplicación compleja (seguimiento de pares, manejo de estado de volteo de cartas y puntuación) con un enfoque en el rendimiento óptimo.",
    seeMore: "",
    tecnologies: ["React", "FireBase", "CSS"],
    link: "https://memoramasimple.netlify.app/",
  },
  {
    title: "Chat Ai",
    descripcion:
      "Desarrollé una interfaz de chat conversacional de alto rendimiento, diseñada para interactuar con un servicio de inteligencia artificial. El foco principal de este proyecto fue la creación de una experiencia de usuario dinámica e intuitiva que simula un entorno de chat en tiempo real. Este desarrollo demuestra la capacidad para gestionar la interacción usuario-sistema de manera eficiente, manteniendo la estructura de la conversación y ofreciendo una presentación visual pulcra.",
    seeMore: "",
    tecnologies: ["React", "CSS"],
    link: "https://chat-ai-p1.netlify.app/",
  },
];

function Proyects() {
  tecnologiasName;
  tecnoligiasIcon;
  const icons = tecnologiasName.map((item, i) => {
    const valor = tecnoligiasIcon[i];

    return [item, valor];
  });

  const icon = new Map(icons);

  return (
    <>
      <Plantilla1 title="Proyectos">
        <article className=" flex flex-col items-center gap-14 perspective-midrange">
          {image.map((item, i) => {
            return (
              <Card1 key={i}>
                <Img1 img={image[i]} />
                <div className=" flex justify-center bg-[#282727] py-0 rounded-t-lg w-full">
                  {proyects[i].tecnologies?.map((item, index) => {
                    return (
                      <Icons1
                        key={index}
                        size="size-10 w-fit"
                        className="bg-transparent"
                        padding="p-0"
                        gradient={false}
                        pointerEvents={false}
                      >
                        <img
                          className="size-full scale-70"
                          src={icon.get(item)}
                        />
                      </Icons1>
                    );
                  })}
                </div>
                <TitleAndParagraph
                  title={proyects[i].title}
                  text={proyects[i].descripcion}
                />

                <Icons1
                  link={proyects[i].link}
                  target="_blank"
                  size="w-60"
                  className="bg-sky-600 font-extrabold py-2"
                  gradient={false}
                >
                  Ver
                </Icons1>
              </Card1>
            );
          })}
        </article>
      </Plantilla1>
    </>
  );
}

export default Proyects;
