import { useTranslation } from "react-i18next"; 
import { motion } from "framer-motion";

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <section
      id="para-ti"
      className="max-w-screen-xl mx-auto py-10 md:py-20 px-6 font-poppins mb-35 mt-10"
    >
      {/* Título animado con scroll trigger */}
      <motion.h2
        className="font-semibold text-4xl sm:text-5xl lg:text-[52px] leading-tight mb-10 text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{  amount: 0.3 }} 
      >
        {t("homepage.title")} <br />
        {t("homepage.subtitle")}
      </motion.h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Texto animado con scroll trigger */}
        <motion.div
          className="md:w-1/2 text-left font-semibold text-lg md:text-[24px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          viewport={{  amount: 0.3 }}
        >
          <p className="text-soft-gray mb-8">{t("homepage.description")}</p>
          <p className="text-soft-gray mb-8">{t("homepage.aditional_description")}</p>

          <div className="flex flex-col gap-4">
            {[
              t("homepage.benefit1"),
              t("homepage.benefit2"),
              t("homepage.benefit3"),
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                viewport={{ amount: 0.2 }}
              >
                <motion.img
                  src="Check.png"
                  alt="check"
                  className="w-6 h-6 mt-1 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.15 }}
                  viewport={{ }}
                />
                <p className="text-soft-gray">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagen con animación al hacer scroll */}
        <div className="md:w-1/2 w-full flex justify-center">
          <motion.img
            src="Home-page-img2.png"
            alt={t("homepage.image_alt")}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
