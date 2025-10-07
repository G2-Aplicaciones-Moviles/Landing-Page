import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ComoFunciona = () => {
  const { t } = useTranslation();

  // Variantes para animación de pasos
  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
    }),
  };

  return (
    <section
      id="ComoFunciona"
      className="max-w-screen-xl mx-auto font-poppins mb-20 scroll-mt-30"
    >
      <div className="flex px-5 pt-14 py-14 justify-center">
        <div className="flex flex-wrap">
          <motion.div
            className="bg-sky-green px-8 pt-4 pb-8 rounded-lg overflow-hidden text-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }} 
          >
            <div className="flex flex-wrap justify-center max-w-4xl font-bold">
             
              <motion.div
                className="text-[36px] mt-9 mb-15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ amount: 0.3 }}
              >
                {t("how_it_works.title")}
              </motion.div>

              
              <div className="text-[24px] flex flex-col text-left gap-y-8 mb-9">
                {[t("how_it_works.step1"), t("how_it_works.step2"), t("how_it_works.step3")].map(
                  (step, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={stepVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3 }}
                    >
                      {i + 1}. {step}
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.3 }}
          >
            <div>
              <img src="" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
