import JobCard from "./JobCard";

function Experience() {
  return (
    <section className="bg-shark-900/40 py-32" id="experience">
      <section className="max-w-7xl mx-auto px-8">
        <article className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
              Experiencia
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Primeros pasos en mi trayectoria profesional y desarrollo técnico.
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
