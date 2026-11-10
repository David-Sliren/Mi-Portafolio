import { StaticImageData } from "next/image";
import type { Localized } from "./constantsIcons";
import englishNV1 from "@/assets/image/certificates/englishNV1.webp";
import englishNV2 from "@/assets/image/certificates/englishNV2.webp";
import responsiveWebDesing from "@/assets/image/certificates/responsiveWebDesing.webp";
import javaScript from "@/assets/image/certificates/javaScript.webp";
import librerias from "@/assets/image/certificates/librerias.webp";
import fullStack from "@/assets/image/certificates/fullStack.webp";
import typeScript from "@/assets/image/certificates/typeScript.webp";
import tanStackQuery from "@/assets/image/certificates/tanStackQuery.webp";
import sql from "@/assets/image/certificates/sql.webp";
import reactRouter from "@/assets/image/certificates/reactRouter.webp";

export interface CertificateItem {
  id: string;
  title: Localized<string>;
  img: string | StaticImageData;
  platform: Localized<string>;
  date: Localized<string>;
  link: string;
}

export const certificateData: CertificateItem[] = [
  {
    id: "sql",
    title: { es: "SQL", en: "SQL" },
    img: sql,
    platform: { es: "Aprende SQL", en: "Aprende SQL" },
    date: { es: "octubre 27 de 2026", en: "October 27, 2026" },
    link: "https://drive.google.com/file/d/1Sjp6mHQ69_0p6VKANlwZaJSaG6q0boeV/view?usp=sharing",
  },
  {
    id: "typescript",
    title: { es: "TypeScript", en: "TypeScript" },
    img: typeScript,
    platform: { es: "University Helsinki", en: "University Helsinki" },
    date: { es: "mayo 28 de 2026", en: "May 28, 2026" },
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/c65a5ced9c79fe1fc5c5abb9ef8a0f94",
  },
  {
    id: "react-router",
    title: {
      es: "React Router: Navegación declarativa y framework",
      en: "React Router: Navegación declarativa y framework",
    },
    img: reactRouter,
    platform: { es: "DevTalles", en: "DevTalles" },
    date: { es: "mayo 28 de 2026", en: "May 28, 2026" },
    link: "https://cursos.devtalles.com/certificates/l1mmm5n7vs",
  },
  {
    id: "tanstack-query",
    title: {
      es: "TanStack Query - Un poderoso gestor de estado asíncrono",
      en: "TanStack Query - Un poderoso gestor de estado asíncrono",
    },
    img: tanStackQuery,
    platform: { es: "DevTalles", en: "DevTalles" },
    date: { es: "mayo 28 de 2026", en: "May 28, 2026" },
    link: "https://cursos.devtalles.com/certificates/igelo7txkh",
  },
  {
    id: "full-stack-development",
    title: { es: "Full Stack Development", en: "Full Stack Development" },
    img: fullStack,
    platform: { es: "University Helsinki", en: "University Helsinki" },
    date: { es: "mayo 6 de 2026", en: "May 6, 2026" },
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/d646f70873e160d582452fda7b57b1ab",
  },
  {
    id: "frontend-libraries",
    title: {
      es: "Front-end Development Libraries",
      en: "Front-end Development Libraries",
    },
    img: librerias,
    platform: { es: "FreeCodeCamp", en: "FreeCodeCamp" },
    date: { es: "Diciembre 26 de 2025", en: "December 26, 2025" },
    link: "https://www.freecodecamp.org/certification/david-sliren/responsive-web-design",
  },
  {
    id: "algorithms-js",
    title: {
      es: "Algorithms JavaScript and Data Structures",
      en: "Algorithms JavaScript and Data Structures",
    },
    img: javaScript,
    platform: { es: "FreeCodeCamp", en: "FreeCodeCamp" },
    date: { es: "Julio 28 de 2025", en: "July 28, 2025" },
    link: "https://www.freecodecamp.org/certification/david-sliren/javascript-algorithms-and-data-structures-v8",
  },
  {
    id: "responsive-web-design",
    title: { es: "Responsive Web Design", en: "Responsive Web Design" },
    img: responsiveWebDesing,
    platform: { es: "FreeCodeCamp", en: "FreeCodeCamp" },
    date: { es: "Enero 27 de 2025", en: "January 27, 2025" },
    link: "https://www.freecodecamp.org/certification/david-sliren/responsive-web-design",
  },
  {
    id: "english-level-2",
    title: {
      es: "ENGLISH DOES WORK - LEVEL 2",
      en: "ENGLISH DOES WORK - LEVEL 2",
    },
    img: englishNV2,
    platform: { es: "SENA", en: "SENA" },
    date: { es: "octubre 13 de 2024", en: "October 13, 2024" },
    link: "https://drive.google.com/file/d/1MHIFmPSc_a-xXes_M3XKJqcSRb6zWTHy/view?usp=sharing",
  },
  {
    id: "english-level-1",
    title: {
      es: "ENGLISH DOES WORK - LEVEL 1",
      en: "ENGLISH DOES WORK - LEVEL 1",
    },
    img: englishNV1,
    platform: { es: "SENA", en: "SENA" },
    date: { es: "mayo 21 de 2024", en: "May 21, 2024" },
    link: "https://drive.google.com/file/d/1jxGoJso8aOpkBlT_FmJ-hfJXIRNoIuaB/view?usp=sharing",
  },
];
