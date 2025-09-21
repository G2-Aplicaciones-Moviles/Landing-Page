import { useTranslation } from "react-i18next"; // Importa el hook

const ParaTi = () => {
  const { t } = useTranslation(); // Inicializa el hook

  return (
    <section
      id="Para-ti"
      className="max-w-screen-xl mx-auto font-poppins mb-20 px-6 scroll-mt-30"
    >
      <h2 className="font-semibold text-3xl md:text-5xl pb-12 md:pb-20 text-center md:text-left">
        {t("for_you.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-20 md:gap-x-32">
        <div className="flex items-start">
          <img
            src="WorldIcon.png"
            className="w-12 h-12 mr-6 mt-1"
            alt={t("for_you.benefit1")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-semibold pb-2">
              {t("for_you.benefit1")}
            </p>
            <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
              {t("for_you.benefit1_desc")}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <img
            src="ViewIcon.png"
            className="w-14 h-12 mr-6 mt-1"
            alt={t("for_you.benefit2")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-semibold pb-2">
              {t("for_you.benefit2")}
            </p>
            <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
              {t("for_you.benefit2_desc")}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <img
            src="UserIcon.png"
            className="w-12 h-12 mr-6 mt-1"
            alt={t("for_you.benefit3")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-semibold pb-2">
              {t("for_you.benefit3")}
            </p>
            <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
              {t("for_you.benefit3_desc")}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <img
            src="HeartIcon.png"
            className="w-12 h-12 mr-6 mt-1"
            alt={t("for_you.benefit4")}
          />
          <div>
            <p className="text-2xl md:text-[32px] font-semibold pb-2">
              {t("for_you.benefit4")}
            </p>
            <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
              {t("for_you.benefit4_desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaTi;
