import { LuCircleArrowOutUpRight } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* <!-- Background Elements --> */}
      <div className="absolute inset-0 z-0">
        <div className="hidden lg:block absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/60 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-sky-500/40 blur-[100px] rounded-full" />
      </div>
      {/* <!-- Hero Canvas --> */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ">
          {/* <!-- Left Content: Editorial Focus --> */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-3 animate-fade-blur">
              <span className="w-12 h-[1px] bg-gradient-blue"></span>
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold">
                Desarrollador Full Stack
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background animate-fade-blur">
              David {""}
              <span className="bg-gradient-blue bg-clip-text text-transparent">
                Salazar
              </span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed animate-fade-blur">
              Cuento con experiencia en aplicaciones web y móviles.
              Transformando ideas complejas en interfaces refinadas y
              escalables.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a
                href="https://github.com/David-Sliren"
                target="_blank"
                className="px-8 py-4 bg-gradient-blue font-bold rounded-xl flex items-center gap-3 shadow-lg hover:shadow-sky-400/20 transition-all duration-300 group active:scale-95 cursor-pointer animate-fade-blur"
              >
                <span className="">Ver Github</span>
                <span className=" group-hover:translate-x-1 transition-transform">
                  <LuCircleArrowOutUpRight />
                </span>
              </a>
              <a
                href="https://drive.google.com/file/d/1UNqy_s2PlQuyDCE3-GHvXuP2QZqaD8dU/view?usp=sharing"
                target="_blank"
                className="px-8 py-4 bg-neutral-700/20 text-primary font-bold rounded-xl border border-white/20 hover:bg-neutral-700/40 transition-all duration-300 active:scale-95 cursor-pointer animate-fade-blur"
              >
                <span className="font-headline">Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Scroll Indicator --> */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
        <span className="font-label text-[10px] uppercase tracking-widest text-outline/50">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-blue"></div>
      </div>
    </section>
  );
};

export default Hero;
