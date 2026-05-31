import React from "react";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const CertificateCard = ({ title, description, place, date, imgsrc, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="col-span-full sm:col-span-3 lg:col-span-4 group bg-gradient-blue rounded-xl p-6 border border-outline-variant/10 transition-all duration-300 hover:scale-105 brightness-85 timeline-view animate-range-early-entry animate-fade-in-right overflow-hidden"
    >
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
      <div className="hidden absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:flex items-center justify-center z-10 backdrop-blur-xl">
        <button className="bg-white/5 px-8 py-4 rounded-full font-headline font-bold text-white flex items-center space-x-2 border border-white/20 backdrop-blur-3xl cursor-pointer z-10 hover:bg-white/10 hover:animate-jelly">
          <span>Ver certificado</span>
          <span className=" text-sm">
            <LuCircleArrowOutUpRight />
          </span>
        </button>
      </div>
    </a>
  );
};

export default CertificateCard;
