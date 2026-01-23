import { Github, Linkedin, FileUser, Mail } from "lucide-react";
import Icons1 from "../001 Plantillas/Icons1";

function Contacts() {
  return (
    <>
      <article className="flex gap-2 mt-2">
        <Icons1
          className="bg-zinc-900 hover:bg-zinc-600"
          link="https://github.com/David-Sliren"
        >
          <Github />
        </Icons1>

        <Icons1
          className="bg-sky-400 hover:bg-sky-600"
          link="https://www.linkedin.com/in/davidsliren/"
        >
          <Linkedin />
        </Icons1>

        <Icons1
          className="bg-green-600 hover:bg-green-400"
          link="mailto:jhojansalazar79@gmail.com?subject=Me%20encuentro%20interesado%20en%20contratarte&body=Escribeme.."
        >
          <Mail />
        </Icons1>

        <Icons1
          className="bg-red-600 hover:bg-red-400"
          link="https://drive.google.com/file/d/1c7eJiQqKA8WHf1gSOC8ZKDDitfc3DQzh/view?usp=sharing"
        >
          CV
        </Icons1>
      </article>
    </>
  );
}

export default Contacts;
