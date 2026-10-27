import CertificateCard from "./CertificateCard";
import { certificateData } from "../../constants/docsCertificate";

const BentoCertificate = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6  lg:grid-cols-12 gap-6">
      {certificateData.map((item) => (
        <CertificateCard
          key={item.title}
          title={item.title}
          imgsrc={item.img}
          place={item.platform}
          date={item.date}
          link={item.link}
        />
      ))}
    </div>
  );
};

const Certificates = () => {
  return (
    <section
      id="education"
      className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen 2xl:px-0"
    >
      <section className="mb-20">
        <div className="flex flex-col gap-2 ">
          <span className="font-label text-primary tracking-[0.2em] text-[10px] uppercase timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Validación Técnica
          </span>
          <h2 className="text-5xl md:text-5xl font-bold font-headline tracking-tighter text-on-surface leading-tight timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Certificaciones{" "}
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Profesionales
            </span>
          </h2>
        </div>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg text-on-surface-variant font-body timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Acreditaciones oficiales que respaldan mi experiencia técnica.
          </p>
        </div>
      </section>
      <BentoCertificate />
    </section>
  );
};

export default Certificates;
