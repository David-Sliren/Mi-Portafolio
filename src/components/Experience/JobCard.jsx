import { LuCircleCheck, LuBriefcaseBusiness, LuTerminal } from "react-icons/lu";

const JobCard = () => {
  return (
    <div className="bg-shark-600/10 rounded-3xl p-8 border border-white/20 hover:border-white/50 transition-all duration-500 group timeline-view animate-range-[entry_10%_cover_40%] animate-fade-in-right">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <LuTerminal color="#abc7ff" className="hidden sm:block" />
            <h3 className="text-2xl font-bold">
              Desarrollador FullStack Javascript
            </h3>
          </div>
          <p className="text-md sm:text-lg text-white/60 font-medium mb-4 flex items-center gap-x-2 ">
            <LuBriefcaseBusiness size={18} className="hidden sm:block" />
            Freelancer profecional independiente / Remoto
          </p>
          <div className="space-y-4 mb-6">
            <p className="text-neutral-500 text-sm font-medium leading-relaxed">
              Desarrollo de aplicaciones web y móviles enfocadas en arquitectura
              escalable, modularidad y experiencia de usuario.
              <br />
              <br />
              Responsabilidades y enfoque técnico:
              <br />
              <br />
              - Construcción de SPAs utilizando React y React Router.
              <br />
              - Desarrollo de aplicaciones móviles con React Native y Expo.
              <br />- Diseño de arquitecturas frontend modulares utilizando
              Zustand (slices).
              <br />- Desarrollo de REST APIs con Node.js, Express y MongoDB.
            </p>
          </div>
          <div className="bg-shark-900/80 p-4 rounded-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-2">
              IMPACTO Y CRECIMIENTO
            </p>
            <ul className="text-sm text-on-surface-variant space-y-2">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-xs mt-1 mr-2 text-primary">
                  <LuCircleCheck size={10} className="text-blue-300" />
                </span>{" "}
                Optimice el estado del lado del cliente en un 40 %, desarrolle
                aplicaciones multiplataforma con exelente rendimiento
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-xs mt-1 mr-2 text-primary">
                  <LuCircleCheck size={10} className="text-blue-300" />
                </span>{" "}
                Domine la lógica del lado del servidor y la persistencia de
                bases de datos mediante MongoDB.
              </li>
            </ul>
          </div>
        </div>
        <div className="shrink-0">
          <span className="text-[10px] font-bold tracking-widest bg-gradient-blue text-shark-200 uppercase px-4 py-2 rounded-full border border-white/50">
            2024 — Present
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
