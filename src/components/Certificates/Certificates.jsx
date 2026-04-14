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
        />
      ))}
    </div>
  );
};

function Certificates() {
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
          <h1 className="text-5xl md:text-5xl font-bold font-headline tracking-tighter text-on-surface leading-tight timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Certificaciones{" "}
            <span className="bg-gradient-blue bg-clip-text text-transparent">
              Profesionales
            </span>
          </h1>
        </div>
        <div className="mt-8 max-w-2xl">
          <p className="text-lg text-on-surface-variant font-body timeline-view animate-range-early-entry animate-fade-blur animate-fill-mode-both">
            Acreditaciones oficiales que respaldan mi experiencia técnica.
          </p>
        </div>
      </section>
      <BentoCertificate />
      {/* <!-- Additional Credentials Section (Minimal List) --> */}
      {/* <div className="mt-32">
        <h2 className="text-2xl font-bold font-headline mb-12 border-l-4 border-primary pl-6">
          Credenciales Adicionales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          <div className="flex gap-4 items-start">
            <span
              className="material-symbols-outlined text-primary mt-1"
              data-icon="terminal"
            >
              terminal
            </span>
            <div>
              <h4 className="font-bold text-on-surface">Algorithmic Toolbox</h4>
              <p className="text-sm text-on-surface-variant">
                University of California San Diego
              </p>
              <p className="text-[10px] font-label text-outline uppercase mt-2">
                ID: UCSD-7729-BX
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span
              className="material-symbols-outlined text-primary mt-1"
              data-icon="database"
            >
              database
            </span>
            <div>
              <h4 className="font-bold text-on-surface">
                Modern Big Data Analysis
              </h4>
              <p className="text-sm text-on-surface-variant">
                IBM Technical Academy
              </p>
              <p className="text-[10px] font-label text-outline uppercase mt-2">
                ID: IBM-2201-KY
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <span
              className="material-symbols-outlined text-primary mt-1"
              data-icon="security"
            >
              security
            </span>
            <div>
              <h4 className="font-bold text-on-surface">
                Offensive Security Certified
              </h4>
              <p className="text-sm text-on-surface-variant">
                TryHackMe Professional Pathway
              </p>
              <p className="text-[10px] font-label text-outline uppercase mt-2">
                ID: THM-4491-OS
              </p>
            </div>
          </div>
        </div> 
      </div> */}
    </section>
  );
}

export default Certificates;
