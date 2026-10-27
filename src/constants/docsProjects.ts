export interface ProjectItem {
  title: string;
  descripcion: string;
  platform: string;
  stack: string[];
  img: string;
  link: string;
  // Opcionales: úsalos en la tarjeta para reforzar la venta
  resultado?: string; // una línea de prueba o resultado
  repo?: string; // enlace al código en GitHub
}

export const projectsData: ProjectItem[] = [
  {
    title: "Aleida | Contribución",
    descripcion:
      "Familias y comunidades financian juntas el cuidado de un paciente, con inventario de medicinas en tiempo real, conciliación de aportes y roles de acceso (Administrador, Cuidador y Usuario) para que cada peso sea transparente.",
    platform: "Web",
    stack: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Betterauth",
      "TanStack-Query",
      "Zustand",
      "Tailwindcss",
      "Motion",
    ],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1778212368/Aleida-Contribution_xjbdbg.png",
    link: "https://aleida-contribucion.vercel.app/",
    resultado: "20-30 usuarios activos",
    repo: "https://github.com/David-Sliren/family-contribution",
  },
  {
    title: "Renpentain",
    descripcion:
      "App para que no se te olvide nada en el supermercado: organiza listas de compras anticipadas y tus visitas, con persistencia local de tus listas.",
    platform: "Móvil",
    stack: ["React", "Tailwindcss", "TanStack-Query", "React-Router", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775803312/0f4a658a-804d-4294-8b3d-43d4839c7cd3.png",
    link: "https://renpentain.uptodown.com/android",
    resultado: "Publicada en Uptodown",
    repo: "https://github.com/David-Sliren/Renpentain",
  },
  {
    title: "Chocolate Andalucía",
    descripcion:
      "Landing page para vender los cupos de un pasadía en la finca de la fábrica Chocolate Andalucía: presenta la experiencia y sus beneficios, con un botón de reserva directo.",
    platform: "Web",
    stack: ["React", "Tailwindcss", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1785363568/chocolate_andalucia_dwnvni.webp",
    link: "https://chocolate-andaluz.vercel.app/",
  },
  {
    title: "Tienda Sliren",
    descripcion:
      "Tienda y portafolio de aplicaciones móviles: permite explorar cada app, ver sus detalles y descargar las versiones estables, nuevas y beta.",
    platform: "Web",
    stack: ["React", "Tailwindcss", "React-Router", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775804567/2a18ffe2-0548-42f5-83a5-b89512446b00.png",
    link: "https://sliren-store.vercel.app/",
  },
];
