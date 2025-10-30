import React from "react";
import Plantilla1 from "../001 Plantillas/Plantilla1";
import Card1 from "../001 Plantillas/Card1";
import Icons1 from "../001 Plantillas/Icons1";
import { LinkIcon, Github } from "lucide-react";

const img = import.meta.glob(
  "../../assets/image/certificates/*.{png,jpg,jpeg, webp}",
  {
    eager: true,
    as: "url",
  }
);

const certificates = Object.values(img).reverse();
const certificatesLinks = [
  "https://www.freecodecamp.org/certification/david-sliren/responsive-web-design",
  "https://www.freecodecamp.org/certification/david-sliren/javascript-algorithms-and-data-structures-v8",
].reverse();

function Certificates() {
  return (
    <>
      <section>
        <Plantilla1 title="Certificados">
          <article className="flex flex-col gap-6 items-center w-full">
            {certificates.map((item, index) => {
              return (
                <Card1
                  key={index}
                  padding="p-6"
                  flex="flex flex-col items-start gap-3"
                  className="overflow-hidden"
                >
                  <img src={item} alt="" />

                  <div className="w-full flex gap-2">
                    <Icons1
                      size="w-fit gap-2"
                      padding="p-2"
                      className="bg-zinc-500"
                      link={certificatesLinks[index]}
                    >
                      <LinkIcon />
                      <span className="text-lg">Ver Documento</span>
                    </Icons1>

                    <Icons1
                      className="bg-sky-500 hover:bg-sky-500 grow"
                      link="https://github.com/David-Sliren"
                      size="w-fit gap-2"
                      padding="p-2"
                    >
                      <Github />
                      <span className="text-lg">Mas</span>
                    </Icons1>
                  </div>
                </Card1>
              );
            })}
          </article>
        </Plantilla1>
      </section>
    </>
  );
}

export default Certificates;
