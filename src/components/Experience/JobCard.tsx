import { LuCircleCheck, LuBriefcaseBusiness, LuTerminal } from "react-icons/lu";

const achievements = [
  "Desarrollo un sistema de gestión de calificaciones para un profesor independiente que trabaja en varios institutos, centralizando el registro y seguimiento del rendimiento de sus estudiantes.",
  "Construí y mantengo Aleida Contribución, una aplicación web con 20 a 30 usuarios activos, con control de accesos por roles y conciliación financiera.",
  "Reduje en un 40% los re-renders innecesarios con arquitecturas de estado modulares usando Zustand (slices).",
  "Optimicé una SPA con Vite, React y TypeScript hasta un score de 97 en Lighthouse, resolviendo además bugs críticos de navegación en dispositivos móviles.",
  "Garantizo la integridad de los datos en producción con esquemas y validaciones de Mongoose sobre MongoDB.",
  "Publiqué Renpentain, una aplicación móvil de listas de compras disponible en Uptodown.",
];

const JobCard = () => {
  return (
    <div className="bg-shark-600/10 rounded-3xl p-8 border border-white/20 hover:border-white/50 transition-all duration-500 group timeline-view animate-range-[entry_10%_cover_40%] animate-fade-in-right">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <LuTerminal color="#abc7ff" className="hidden sm:block" />
            <h3 className="text-2xl font-bold">Desarrollador Full Stack</h3>
          </div>
          <p className="text-md sm:text-lg text-white/60 font-medium mb-4 flex items-center gap-x-2 ">
            <LuBriefcaseBusiness size={18} className="hidden sm:block" />
            Freelance profesional independiente · Remoto
          </p>
          <div className="space-y-4 mb-6">
            <p className="text-neutral-300 text-sm font-medium leading-relaxed">
              Desde 2024 diseño, desarrollo y despliego aplicaciones web y
              móviles de principio a fin, en proyectos propios y para clientes
              reales: frontend, backend y producción, con JavaScript,
              TypeScript, React, Next.js, Node.js y Python.
            </p>
          </div>
          <div className="bg-shark-900/80 p-2 rounded-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">
              Logros destacados:
            </p>
            <ul className="text-sm text-on-surface-variant space-y-2">
              {achievements.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="material-symbols-outlined text-xs mt-1 mr-2 text-primary">
                    <LuCircleCheck size={10} className="text-blue-300" />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="shrink-0">
          <span className="text-[10px] font-bold tracking-widest bg-gradient-blue text-shark-200 uppercase px-4 py-2 rounded-full border border-white/50">
            2024 — Presente
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
