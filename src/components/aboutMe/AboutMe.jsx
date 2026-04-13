import Yo from "../../assets/image/Yo.webp";

const AboutMe = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-8  h-dvh pt-32">
      <div className="grid grid-col-1 lg:grid-cols-12 gap-16 items-center xl:px-0 content-center justify-items-center">
        <div className="col-span-full text-center  lg:col-span-8">
          <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Sobre{" "}
            <span className="bg-gradient-blue text-transparent bg-clip-text timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
              mí
            </span>
            .
          </h1>
          <p className="text-stone-300/85 text-xl md:text-2xl font-body leading-relaxed max-w-4xl mb-12 mx-auto timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Desarrollador Full Stack JavaScript con experiencia en aplicaciones
            web y móviles usando React, React Native y Node.js. He construido
            soluciones bajo arquitectura cliente-servidor y aplicaciones móviles
            con estado modular basado en slices utilizando Zustand. Actualmente
            fortaleciendo conocimientos en SQL para implementar persistencia de
            datos.
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
