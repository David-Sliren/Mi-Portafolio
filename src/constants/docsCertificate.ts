import type { Localized } from "./constantsIcons";

export interface CertificateItem {
  id: string;
  title: Localized<string>;
  img: string;
  platform: Localized<string>;
  date: Localized<string>;
  link: string;
}

export const certificateData: CertificateItem[] = [
  {
    id: "sql",
    title: { es: "SQL", en: "SQL" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1793232908/Captura_desde_2026-10-28_19-14-43_noifxu.png",
    platform: { es: "Aprende SQL", en: "Aprende SQL" },
    date: { es: "octubre 27 de 2026", en: "octubre 27 de 2026" },
    link: "https://drive.google.com/file/d/1Sjp6mHQ69_0p6VKANlwZaJSaG6q0boeV/view?usp=sharing",
  },
  {
    id: "typescript",
    title: { es: "TypeScript", en: "TypeScript" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1780105671/e328f146-4868-4a8e-b2b2-34aea33eb804.png",
    platform: { es: "University Helsinki", en: "University Helsinki" },
    date: { es: "mayo 28 de 2026", en: "mayo 28 de 2026" },
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/c65a5ced9c79fe1fc5c5abb9ef8a0f94",
  },
  {
    id: "react-router",
    title: { es: "React Router: Navegación declarativa y framework", en: "React Router: Navegación declarativa y framework" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1780105537/1d457588-1052-4a9c-bd36-45cd6efbfddd.png",
    platform: { es: "DevTalles", en: "DevTalles" },
    date: { es: "mayo 28 de 2026", en: "mayo 28 de 2026" },
    link: "https://cursos.devtalles.com/certificates/l1mmm5n7vs",
  },
  {
    id: "tanstack-query",
    title: { es: "TanStack Query - Un poderoso gestor de estado asíncrono", en: "TanStack Query - Un poderoso gestor de estado asíncrono" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1780105506/5d158d4c-de05-445c-a9c1-53d8b88ad3d9.png",
    platform: { es: "DevTalles", en: "DevTalles" },
    date: { es: "mayo 28 de 2026", en: "mayo 28 de 2026" },
    link: "https://cursos.devtalles.com/certificates/igelo7txkh",
  },
  {
    id: "full-stack-development",
    title: { es: "Full Stack Development", en: "Full Stack Development" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1778214547/Certificado_parte_-_5_-_Helsinky_University_e6lcbv.png",
    platform: { es: "University Helsinki", en: "University Helsinki" },
    date: { es: "mayo 6 de 2026", en: "mayo 6 de 2026" },
    link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/d646f70873e160d582452fda7b57b1ab",
  },
  {
    id: "frontend-libraries",
    title: { es: "Front-end Development Libraries", en: "Front-end Development Libraries" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775860158/3dc538ae-12bd-4b65-ac2d-ca9d5f73e7c8.png",
    platform: { es: "FreeCodeCamp", en: "FreeCodeCamp" },
    date: { es: "Diciembre 26 de 2025", en: "Diciembre 26 de 2025" },
    link: "https://www.freecodecamp.org/certification/david-sliren/responsive-web-design",
  },
  {
    id: "algorithms-js",
    title: { es: "Algorithms JavaScript and Data Structures", en: "Algorithms JavaScript and Data Structures" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775860249/d7d0948a-ec23-4d70-aae1-0871566bf9c8.png",
    platform: { es: "FreeCodeCamp", en: "FreeCodeCamp" },
    date: { es: "Julio 28 de 2025", en: "Julio 28 de 2025" },
    link: "https://www.freecodecamp.org/certification/david-sliren/javascript-algorithms-and-data-structures-v8",
  },
  {
    id: "responsive-web-design",
    title: { es: "Responsive Web Design", en: "Responsive Web Design" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775860348/7a09c404-0928-4d96-a2e0-8bbf76104948.png",
    platform: { es: "FreeCodeCamp", en: "FreeCodeCamp" },
    date: { es: "Enero 27 de 2025", en: "Enero 27 de 2025" },
    link: "https://www.freecodecamp.org/certification/david-sliren/responsive-web-design",
  },
  {
    id: "english-level-2",
    title: { es: "ENGLISH DOES WORK - LEVEL 2", en: "ENGLISH DOES WORK - LEVEL 2" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1793233787/Captura_desde_2026-10-28_19-29-20_iskhsi.png",
    platform: { es: "SENA", en: "SENA" },
    date: { es: "octubre 13 de 2024", en: "octubre 13 de 2024" },
    link: "https://drive.google.com/file/d/1MHIFmPSc_a-xXes_M3XKJqcSRb6zWTHy/view?usp=sharing",
  },
  {
    id: "english-level-1",
    title: { es: "ENGLISH DOES WORK - LEVEL 1", en: "ENGLISH DOES WORK - LEVEL 1" },
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1793233075/Captura_desde_2026-10-28_19-17-40-1_pgwxxn.png",
    platform: { es: "SENA", en: "SENA" },
    date: { es: "mayo 21 de 2024", en: "mayo 21 de 2024" },
    link: "https://drive.google.com/file/d/1jxGoJso8aOpkBlT_FmJ-hfJXIRNoIuaB/view?usp=sharing",
  },
];
