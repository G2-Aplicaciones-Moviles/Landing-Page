import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section
      id="cta"
      className="bg-white px-6 py-20 md:my-30 lg:px-30 flex flex-col md:flex-row items-center justify-center gap-6 scroll-mt-30"
    >
      {/* Bloque de texto, botón y logos */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
        <p className="text-gray-600 mb-6">{t("cta.description")}</p>

      

        <div className="flex gap-3 mt-4 justify-center">
          <img src="appstore.png" alt={t("cta.app_store")} className="h-10" />
          <img src="googleplay.png" alt={t("cta.google_play")} className="h-10" />
        </div>
      </div>

      {/* QR Code */}
      <div className="flex justify-center">
        <img src="qr.png" alt={t("cta.qr_alt")} className="w-40 h-40" />
      </div>
    </section>
  );
};

export default CTA;
