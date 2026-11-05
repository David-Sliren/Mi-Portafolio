"use client";
import ProjectCard from "./ProjectCard";
import { useTranslations, useLocale } from "next-intl";
import type { Locale } from "../../i18n/routing";
import { projectsData } from "../../constants/docsProjects";

const ProjectsMobile = () => {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;

  return (
    <section
      id="projectsMobile"
      className="block md:hidden w-screen lg:w-full relative h-vh scroll-mt-28"
    >
      <div className=" w-full px-8 flex flex-col md:flex-row justify-between items-center z-10 mb-20">
        <h2 className="text-5xl text-center font-bold tracking-tight uppercase">
          {t("title")}{" "}
          <span className="bg-gradient-blue bg-clip-text text-transparent">
            {t("titleAccent")}
          </span>
        </h2>
        <div className="h-px flex-grow bg-gradient-blue mx-12 hidden md:block"></div>
        <p className="font-medium hidden md:block">{t("range")}</p>
      </div>
      <div
        id="scroll-content"
        className="flex flex-col  gap-4 px-8 py-2 snap-x snap-mandatory scrollbar-hidden overflow-y-hidden"
      >
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title[locale]}
            description={item.descripcion[locale]}
            imgSrc={item.img}
            stack={item.stack}
            link={item.link}
            platform={item.platform[locale]}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsMobile;
