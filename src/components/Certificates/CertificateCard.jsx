import React from "react";

const CertificateCard = ({ title, description, place, date, imgsrc }) => {
  return (
    <div className="col-span-full sm:col-span-3 lg:col-span-4 group bg-gradient-blue rounded-xl p-6 border border-outline-variant/10 transition-all duration-300 hover:scale-105 brightness-85 timeline-view animate-range-early-entry animate-fade-in-right">
      <div className="w-full h-20 rounded-lg m-auto mb-6 flex items-center justify-center overflow-hidden">
        <img
          className="size-full object-cover object-top"
          alt={title}
          src={imgsrc}
        />
      </div>
      <h3 className="text-xl font-bold font-headline text-on-surface mb-1">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm mb-8">{description}</p>
      <div className="flex flex-col gap-4 mt-auto">
        <hr />
        <div className="flex justify-between items-center">
          <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
            {place}
          </span>
          <span className="font-label text-[10px] text-primary uppercase tracking-widest">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
