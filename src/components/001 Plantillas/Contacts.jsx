import { Github, Linkedin, FileUser, Mail } from "lucide-react";
import Icons1 from "../001 Plantillas/Icons1";

function Contacts() {
  return (
    <>
      <article className="flex gap-2 mt-2">
        <Icons1 className="bg-zinc-900 hover:bg-zinc-600">
          <Github />
        </Icons1>

        <Icons1 className="bg-sky-400 hover:bg-sky-600">
          <Linkedin />
        </Icons1>

        <Icons1 className="bg-green-600 hover:bg-green-400">
          <Mail />
        </Icons1>

        <Icons1 className="bg-red-600 hover:bg-red-400">CV</Icons1>
      </article>
    </>
  );
}

export default Contacts;
