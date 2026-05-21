import Yo from "../../assets/image/Yo.webp";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8  min-h-dvh pt-32 pb-22"
    >
      <div className="grid grid-col-1 lg:grid-cols-12 gap-16 items-center xl:px-0 content-center justify-items-center">
        <div className="col-span-full text-center  lg:col-span-8">
          <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Sobre{" "}
            <span className="bg-gradient-blue text-transparent bg-clip-text timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
              mí
            </span>
            .
          </h1>
          <p className="text-stone-300/85 text-left text-xs md:text-lg font-body leading-relaxed max-w-4xl mb-12 mx-auto timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Desde que descubrí la programación, me enamoré de la libertad de
            crear. Siempre me fascinó la idea de poder transformar una idea en
            algo real, construir desde cero y dar vida a experiencias que antes
            solo existían en la imaginación.
            <br />
            <br />
            Disfruto especialmente diseñar aplicaciones que se sientan
            organizadas, fluidas y agradables de usar. Me interesa la forma en
            que una interfaz, una animación o una arquitectura bien pensada
            pueden hacer que la tecnología deje de sentirse fría y se convierta
            en una extensión natural de las personas.
            <br />
            <br />
            Actualmente desarrollo aplicaciones web y móviles utilizando React,
            Next.js, React Native y Node.js. He trabajado en proyectos con
            arquitecturas modulares, sistemas de estado desacoplados usando
            Zustand y aplicaciones estructuradas bajo modelo cliente-servidor
            con Express y MongoDB.
            <br />
            <br />
            Me apasiona aprender constantemente, resolver problemas complejos y
            mejorar cada detalle de los proyectos que construyo, tanto a nivel
            técnico como visual.
          </p>
          <div className="flex items-center space-x-8 justify-center">
            <div className="flex flex-col timeline-view animate-range-flash-entry animate-fade-blur animate-fill-mode-both">
              <span className="text-3xl font-headline font-bold text-on-surface">
                2+
              </span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                Años de Exp
              </span>
            </div>
            <div className="w-px h-10 bg-gradient-blue" />
            <div className="flex flex-col timeline-view animate-range-flash-entry animate-fade-blur animate-fill-mode-both">
              <span className="text-3xl font-headline font-bold text-on-surface">
                40+
              </span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                Proyectos
              </span>
            </div>
          </div>
        </div>

        <article className="hidden lg:block col-span-full lg:col-span-4 lg:size-80 overflow-hidden timeline-view animate-range-early-entry animate-fade-in-up animate-fill-mode-both timeline-view mask-img-animate">
          <img
            src={Yo}
            alt="imagen"
            className="size-full object-cover object-top rounded-full"
          />
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
