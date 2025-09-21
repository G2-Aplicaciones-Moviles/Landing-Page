import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section
      id="cta"
      className="bg-white px-6 py-20 md:my-30 lg:px-30 flex flex-col md:flex-row items-center justify-center gap-6 scroll-mt-30"
    >
      
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} 
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          {t("cta.title")}
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.3 }}
        >
          {t("cta.description")}
        </motion.p>

        {/* Logos de App Store y Google Play*/ }
        <motion.div
          className="flex gap-3 mt-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.img
            src="appstore.png"
            alt={t("cta.app_store")}
            className="h-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ amount: 0.3 }}
          />
          <motion.img
            src="googleplay.png"
            alt={t("cta.google_play")}
            className="h-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ amount: 0.3 }}
          />
        </motion.div>
      </motion.div>

    
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ amount: 0.3 }}
      >
        <img src="qr.png" alt={t("cta.qr_alt")} className="w-40 h-40" />
      </motion.div>
    </section>
  );
};

export default CTA;
