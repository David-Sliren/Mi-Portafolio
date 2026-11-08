import type { Localized } from "./constantsIcons";
import aleidaContribution from "@/assets/image/proyects/aleidaContribution.webp";
import renpentain from "@/assets/image/proyects/renpentain.webp";
import chocolateAndaluz from "@/assets/image/proyects/chocolateAndaluz.webp";
import tiendaSliren from "@/assets/image/proyects/tiendaSliren.webp";
import { StaticImageData } from "next/image";

export interface ProjectItem {
  id: string;
  title: Localized<string>;
  descripcion: Localized<string>;
  platform: Localized<string>;
  stack: string[];
  img: string | StaticImageData;
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
      en: "Families and communities fund a patient's care together, with real-time medicine inventory, contribution reconciliation and role-based access (Administrator, Caregiver and User) so every peso is transparent.",
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
    img: aleidaContribution,
    link: "https://aleida-contribucion.vercel.app/",
    resultado: { es: "20-30 usuarios activos", en: "20-30 active users" },
    repo: "https://github.com/David-Sliren/family-contribution",
  },
  {
    id: "renpentain",
    title: { es: "Renpentain", en: "Renpentain" },
    descripcion: {
      es: "App para que no se te olvide nada en el supermercado: organiza listas de compras anticipadas y tus visitas, con persistencia local de tus listas.",
      en: "App so you never forget anything at the supermarket: organize shopping lists ahead of time and your visits, with local persistence of your lists.",
    },
    platform: { es: "Móvil", en: "Mobile" },
    stack: [
      "React",
      "Tailwind CSS",
      "TanStack Query",
      "React Router",
      "Motion",
    ],
    img: renpentain,
    link: "https://renpentain.uptodown.com/android",
    resultado: { es: "Publicada en Uptodown", en: "Published on Uptodown" },
    repo: "https://github.com/David-Sliren/Renpentain",
  },
  {
    id: "chocolate-andalucia",
    title: { es: "Chocolate Andalucía", en: "Chocolate Andalucía" },
    descripcion: {
      es: "Landing page para vender los cupos de un pasadía en la finca de la fábrica Chocolate Andalucía: presenta la experiencia y sus beneficios, con un botón de reserva directo.",
      en: "Landing page to sell spots for a day trip at the Chocolate Andalucía factory farm: it presents the experience and its benefits, with a direct booking button.",
    },
    platform: { es: "Web", en: "Web" },
    stack: ["React", "Tailwind CSS", "Motion"],
    img: chocolateAndaluz,
    link: "https://chocolate-andaluz.vercel.app/",
  },
  {
    id: "tienda-sliren",
    title: { es: "Tienda Sliren", en: "Tienda Sliren" },
    descripcion: {
      es: "Tienda y portafolio de aplicaciones móviles: permite explorar cada app, ver sus detalles y descargar las versiones estables, nuevas y beta.",
      en: "Store and portfolio of mobile applications: explore each app, view its details and download stable, new and beta versions.",
    },
    platform: { es: "Web", en: "Web" },
    stack: ["React", "Tailwind CSS", "React Router", "Motion"],
    img: tiendaSliren,
    link: "https://sliren-store.vercel.app/",
  },
];
