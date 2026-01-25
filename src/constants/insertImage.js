import { utilsUnion } from "../utils/utils";
import { projectsData } from "./docsProjects";
import { certificateData } from "./docsCertificate";
const projectsImg = import.meta.glob(
  "../assets/image/proyects/*.{png,jpg,jpeg, webp}",
  {
    eager: true,
    query: "url",
  },
);

const certificatesImg = import.meta.glob(
  "../assets/image/certificates/*.{png,jpg,jpeg, webp}",
  {
    eager: true,
    query: "url",
  },
);

export const projects = utilsUnion({
  union: projectsImg,
  organize: projectsData,
});

export const certificates = utilsUnion({
  union: certificatesImg,
  organize: certificateData,
});
