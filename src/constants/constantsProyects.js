import { utilsUnion } from "../utils/utils";
import { documents } from "./projectsDocs";
const img = import.meta.glob("../assets/image/proyects/*.{png,jpg}", {
  eager: true,
  query: "url",
});

export const projects = utilsUnion({ union: img, organize: documents });
