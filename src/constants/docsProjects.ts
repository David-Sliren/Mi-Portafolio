import type { Localized } from "./constantsIcons";

export interface ProjectItem {
  id: string;
  title: Localized<string>;
  descripcion: Localized<string>;
  platform: Localized<string>;
  stack: string[];
  img: string;
  link: string;
  // Opcionales: úsalos en la tarjeta para reforzar la venta
  resultado?: Localized<string>; // una línea de prueba o resultado
  repo?: string; // enlace al código en GitHub
}

export const projectsData: ProjectItem[] = [
  {
    id: "aleida-contribucion",
    title: { es: "Aleida | Contribución", en: "Aleida | Contribución" },
    descripcion: {
      es: "Familias y comunidades financian juntas el cuidado de un paciente, con inventario de medicinas en tiempo real, conciliación de aportes y roles de acceso (Administrador, Cuidador y Usuario) para que cada peso sea transparente.",
      en: "Familias y comunidades financian juntas el cuidado de un paciente, con inventario de medicinas en tiempo real, conciliación de aportes y roles de acceso (Administrador, Cuidador y Usuario) para que cada peso sea transparente.",
    },
    platform: { es: "Web", en: "Web" },
    stack: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Motion",
      "OpenCode",
    ],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1778212368/Aleida-Contribution_xjbdbg.png",
    link: "https://aleida-contribucion.vercel.app/",
    resultado: { es: "20-30 usuarios activos", en: "20-30 usuarios activos" },
    repo: "https://github.com/David-Sliren/family-contribution",
  },
  {
    id: "renpentain",
    title: { es: "Renpentain", en: "Renpentain" },
    descripcion: {
      es: "App para que no se te olvide nada en el supermercado: organiza listas de compras anticipadas y tus visitas, con persistencia local de tus listas.",
      en: "App para que no se te olvide nada en el supermercado: organiza listas de compras anticipadas y tus visitas, con persistencia local de tus listas.",
    },
    platform: { es: "Móvil", en: "Móvil" },
    stack: [
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "React Router",
      "Motion",
    ],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775803312/0f4a658a-804d-4294-8b3d-43d4839c7cd3.png",
    link: "https://renpentain.uptodown.com/android",
    resultado: { es: "Publicada en Uptodown", en: "Publicada en Uptodown" },
    repo: "https://github.com/David-Sliren/Renpentain",
  },
  {
    id: "chocolate-andalucia",
    title: { es: "Chocolate Andalucía", en: "Chocolate Andalucía" },
    descripcion: {
      es: "Landing page para vender los cupos de un pasadía en la finca de la fábrica Chocolate Andalucía: presenta la experiencia y sus beneficios, con un botón de reserva directo.",
      en: "Landing page para vender los cupos de un pasadía en la finca de la fábrica Chocolate Andalucía: presenta la experiencia y sus beneficios, con un botón de reserva directo.",
    },
    platform: { es: "Web", en: "Web" },
    stack: ["React", "Tailwind CSS", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1785363568/chocolate_andalucia_dwnvni.webp",
    link: "https://chocolate-andaluz.vercel.app/",
  },
  {
    id: "tienda-sliren",
    title: { es: "Tienda Sliren", en: "Tienda Sliren" },
    descripcion: {
      es: "Tienda y portafolio de aplicaciones móviles: permite explorar cada app, ver sus detalles y descargar las versiones estables, nuevas y beta.",
      en: "Tienda y portafolio de aplicaciones móviles: permite explorar cada app, ver sus detalles y descargar las versiones estables, nuevas y beta.",
    },
    platform: { es: "Web", en: "Web" },
    stack: ["React", "Tailwind CSS", "React Router", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775804567/2a18ffe2-0548-42f5-83a5-b89512446b00.png",
    link: "https://sliren-store.vercel.app/",
  },
];
