import Image from "next/image";
import { useTranslations } from "next-intl";
import Yo from "../../assets/image/Yo.webp";

const AboutMe = () => {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8  min-h-dvh pt-32 pb-22"
    >
      <div className="grid grid-col-1 lg:grid-cols-12 gap-16 items-center xl:px-0 content-center justify-items-center">
        <div className="col-span-full text-center  lg:col-span-8">
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-tight timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both uppercase">
            {t("title")}{" "}
            <span className="bg-gradient-blue text-transparent bg-clip-text timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
              {t("titleAccent")}
            </span>
            .
          </h2>
          <p className="text-stone-300/85 text-left text-xs md:text-lg font-body leading-relaxed max-w-4xl mb-12 mx-auto timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            {t("p1")}
            <br />
            <br />
            {t("p2")}
            <br />
            <br />
            {t("p3")}
            <br />
            <br />
            {t("p4")}
          </p>
          <div className="flex items-center space-x-8 justify-center">
            <div className="flex flex-col timeline-view animate-range-flash-entry animate-fade-blur animate-fill-mode-both">
              <span className="text-3xl font-headline font-bold text-on-surface">
                {t("metrics.yearsValue")}
              </span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                {t("metrics.yearsLabel")}
              </span>
            </div>
            <div className="w-px h-10 bg-gradient-blue" />
            <div className="flex flex-col timeline-view animate-range-flash-entry animate-fade-blur animate-fill-mode-both">
              <span className="text-3xl font-headline font-bold text-on-surface">
                {t("metrics.projectsValue")}
              </span>
              <span className="text-xs uppercase tracking-widest text-on-surface-variant">
                {t("metrics.projectsLabel")}
              </span>
            </div>
          </div>
        </div>

        <article className="hidden lg:block col-span-full lg:col-span-4 lg:size-80 overflow-hidden timeline-view animate-range-early-entry animate-fade-in-up animate-fill-mode-both mask-img-animate">
          <Image
            src={Yo}
            alt={t("imageAlt")}
            loading="lazy"
            className="size-full object-cover object-top rounded-full"
            height={1024}
            width={500}
          />
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
