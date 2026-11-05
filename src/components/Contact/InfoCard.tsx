interface InfoCardProps {
  handler: () => void;
}

import { LuCircleCheck } from "react-icons/lu";
import { useTranslations } from "next-intl";

const InfoCard = ({ handler }: InfoCardProps) => {
  const t = useTranslations("contact");

  return (
    <section className="bg-zinc-500/10 flex flex-col justify-center items-center gap-y-8 sm:gap-y-10 h-fit w-full py-20 border border-white/15 rounded-2xl shadow animate-fade-in-down">
      <article>
        <LuCircleCheck className=" text-blue-400/90 text-7xl animate-jelly" />
      </article>
      <article className="flex flex-col justify-center items-center gap-y-6">
        <p className="bg-gradient-blue bg-clip-text text-transparent text-md sm:text-xl text-center font-semibold leading-relaxed">
          {t("confirmation.message")}
        </p>
        <button
          onClick={handler}
          className="bg-gradient-blue px-6 py-3 rounded-lg text-md font-semibold cursor-pointer hover:animate-jelly"
        >
          {t("confirmation.again")}
        </button>
      </article>
    </section>
  );
};

export default InfoCard;
