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

/* --Cuidado-- 
Fijate en que el archivo este bien numerado para que concida con los nombres, la pocision del nombre depende de la posicion del archivo, por esa razon enumere los archivos para que coincidieran con los nombres
*/

const lenguagesName = ["HTML", "CSS", "JavaScrpit"];

const librarysName = [
  "React",
  "React-Native",
  "Expo",
  "Node js",
  "React-Router",
  "TanStack-Query",
  "Tailwindcss",
  "Motion",
  "Firebase",
];

const toolsName = ["Git", "Vite", "npm"];

// Obtendras un array de objectos
export const iconsLibrarys = utils({ url: librarys, value: librarysName });
export const iconsTools = utils({ url: tools, value: toolsName });
export const iconsLenguages = utils({ url: lenguages, value: lenguagesName });

// Obtendras los iconos por nombre, solo bastara escribir el nombre del archivo para obtener el icono
const allIcons = [...iconsLenguages, ...iconsLibrarys, ...iconsTools].map(
  (item) => [item.name, item.url],
);

export const getIcon = new Map(allIcons);
