export interface ProjectItem {
  title: string;
  descripcion: string;
  platform: string;
  stack: string[];
  img: string;
  link: string;
}

export const projectsData: ProjectItem[] = [
  {
    title: "Aleida | Contribución",
    descripcion:
      "Aplicación web que permite a una comunidad o grupo familiar financiar colectivamente los gastos de un paciente, monitorear en tiempo real sus medicamentos y gestionar los pagos de sus cuidadores con roles de acceso transparentes.",
    platform: "Web",
    stack: ["Next.js", "MongoDB", "Mongoose", "Tailwindcss", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1778212368/Aleida-Contribution_xjbdbg.png",
    link: "https://aleida-contribucion.vercel.app/",
  },
  {
    title: "Renpentain",
    descripcion:
      "Aplicación móvil diseñada para simplificar y organizar las listas de compras y las visitas al supermercado de forma eficiente.",
    platform: "Móvil",
    stack: ["React", "Tailwindcss", "TanStack-Query", "React-Router", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775803312/0f4a658a-804d-4294-8b3d-43d4839c7cd3.png",
    link: "https://renpentain.uptodown.com/android",
  },
  {
    title: "Chocolate Andalucia",
    descripcion:
      "Landing page para aumentar las ventas de los cupos de una pasadía en la finca de la fábrica chocolate andaluz",
    platform: "Web",
    stack: ["React", "Tailwindcss", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1785363568/chocolate_andalucia_dwnvni.webp",
    link: "https://chocolate-andaluz.vercel.app/",
  },
  {
    title: "Tienda Sliren",
    descripcion:
      "Portafolio interactivo y tienda de aplicaciones, que permite a los usuarios explorar, conocer detalles y descargar las últimas versiones de mis aplicaciones móviles",
    platform: "Web",
    stack: ["React", "Tailwindcss", "React-Router", "Motion"],
    img: "https://res.cloudinary.com/dudiot7uv/image/upload/v1775804567/2a18ffe2-0548-42f5-83a5-b89512446b00.png",
    link: "https://sliren-store.vercel.app/",
  },
];
