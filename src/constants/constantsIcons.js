import { utils } from "../utils/utils";
const lenguages = import.meta.glob("../assets/icons/lenguages/*.svg", {
  eager: true,
  query: "url",
});

const librarys = import.meta.glob("../assets/icons/librarys/*.svg", {
  eager: true,
  query: "url",
});

const tools = import.meta.glob("../assets/icons/tools/*.svg", {
  eager: true,
  query: "url",
});

const lenguagesName = ["HTML", "CSS", "JavaScrpit"];

const librarysName = ["React", "Taildwindcss"];

const toolsName = ["Git", "Vite", "npm"];

export const iconsLibrarys = utils({ url: librarys, value: librarysName });
export const iconsTools = utils({ url: tools, value: toolsName });
export const iconsLenguages = utils({ url: lenguages, value: lenguagesName });
console.log("iconsLenguages: ", iconsLenguages);
