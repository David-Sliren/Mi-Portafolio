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
      "Implementación interactiva del clásico juego de la memoria (Memorama). Desarrollado con el objetivo de reforzar la lógica de manejo de estado, comparación de elementos y temporizadores en JavaScript. Demuestra mi habilidad para crear experiencias de usuario sencillas y funcionales desde cero.",
    seeMore: "",
    tecnologies: ["React", "FireBase", "CSS"],
    link: "https://memoramasimple.netlify.app/",
  },
  {
    title: "Chat Ai",
    descripcion:
      "Desarrollo de una interfaz de usuario interactiva para un sistema de chat basado en IA. El proyecto se centra en la experiencia de usuario y la gestión dinámica del DOM para simular una conversación fluida, manejando entradas de usuario y la presentación de respuestas. Demuestra habilidades en diseño de UI/UX, animación de elementos de chat y lógica de interacción.",
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
      <Plantilla1 title="Proyectos :">
        <article className=" flex flex-col items-center gap-18 mt-10 perspective-midrange">
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
                  text={proyects[1].descripcion}
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
