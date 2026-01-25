import Icons1 from "../001 Plantillas/Icons1";
import Plantilla1 from "../001 Plantillas/Plantilla1";
import { getIcon } from "../../constants/constantsIcons";
import Card1 from "../001 Plantillas/Card1";
import Img1 from "../001 Plantillas/Img1";
import TitleAndParagraph from "../001 Plantillas/TitleAndParagraph";
import { projects } from "../../constants/insertImage";

function Proyects() {
  return (
    <>
      <Plantilla1 title="Proyectos">
        <article className=" flex flex-col items-center md:gap-10 md:scroll gap-14 perspective-midrange">
          {projects.map((item, i) => {
            return (
              <Card1
                key={i}
                className="flex flex-col items-center justify-center gap-6 py-6 px-8 w-[90%] sm:w-full sm:flex-row"
              >
                <div className="hobbie flex flex-col gap-6 md:min-w-86">
                  <Img1 img={item.src} />

                  <div className=" flex justify-center bg-[#282727] py-0 rounded-t-lg w-full">
                    {item.tecnologies?.map((item, index) => {
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
                            src={getIcon.get(item)}
                          />
                        </Icons1>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <TitleAndParagraph
                    title={item.title}
                    text={item.descripcion}
                  />

                  <Icons1
                    link={item.link}
                    target="_blank"
                    size="w-full"
                    className="bg-sky-600 font-extrabold py-2"
                    gradient={false}
                  >
                    Ver
                  </Icons1>
                </div>
              </Card1>
            );
          })}
        </article>
      </Plantilla1>
    </>
  );
}

export default Proyects;
