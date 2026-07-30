import { LuCircleCheck, LuBriefcaseBusiness, LuTerminal } from "react-icons/lu";

const JobCard = () => {
  return (
    <div className="bg-shark-600/10 rounded-3xl p-8 border border-white/20 hover:border-white/50 transition-all duration-500 group timeline-view animate-range-[entry_10%_cover_40%] animate-fade-in-right">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <LuTerminal color="#abc7ff" className="hidden sm:block" />
            <h3 className="text-2xl font-bold">Desarrollador FullStack</h3>
          </div>
          <p className="text-md sm:text-lg text-white/60 font-medium mb-4 flex items-center gap-x-2 ">
            <LuBriefcaseBusiness size={18} className="hidden sm:block" />
            Freelancer profesional
          </p>
          <div className="space-y-4 mb-6">
            <p className="text-neutral-500 text-sm font-medium leading-relaxed">
              Desde 2024, he desarrollado múltiples proyectos personales,
              profesionales y académicos, adquiriendo experiencia en el diseño,
              desarrollo e implementación de aplicaciones web y móviles. He
              trabajado con tecnologías como JavaScript, Typescript, Node.js,
              React.js, React Native, Next.js y MongoDB, aplicando buenas
              prácticas de desarrollo, patrones de diseño y principios de
              arquitectura de software. Cuento con amplia experiencia
              desarrollando software, aunque aún no he trabajado en una empresa
              formalmente.
            </p>
          </div>
          <div className="bg-shark-900/80 p-2 rounded-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">
              Responsabilidades :
            </p>
            <ul className="text-sm text-on-surface-variant space-y-2">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-xs mt-1 mr-2 text-primary">
                  <LuCircleCheck size={10} className="text-blue-300" />
                </span>{" "}
                Participé en el desarrollo de software corporativo,
                implementando nuevas funcionalidades con React.js (frontend) y
                Node.js (backend), junto con MongoDB para gestión de datos.
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-xs mt-1 mr-2 text-primary">
                  <LuCircleCheck size={10} className="text-blue-300" />
                </span>{" "}
                Optimicé procesos, resolví incidencias técnicas y di soporte
                continuo a las historias de usuario en cada sprint, aplicando
                metodologías ágiles (Scrum/Jira) y control de versiones con Git.
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-xs mt-1 mr-2 text-primary">
                  <LuCircleCheck size={10} className="text-blue-300" />
                </span>{" "}
                Contribuí tanto a la mejora de módulos existentes como a la
                creación de nuevos, enfocado en el aprendizaje constante y el
                crecimiento profesional.
              </li>
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
