import JobCard from "./JobCard";

function Experience() {
  return (
    <section className="bg-shark-900/40 py-20 scroll-mt-10" id="experience">
      <section className="w-full md:max-w-7xl mx-auto px-2 md:px-8">
        <article className="flex flex-col md:flex-row justify-between items-start mb-15 gap-8 px-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Experiencia
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Mi trayectoria profesional y desarrollo técnico.
            </p>
          </div>
        </article>
        <article className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          <JobCard />
        </article>
      </section>
    </section>
  );
}

export default Experience;
