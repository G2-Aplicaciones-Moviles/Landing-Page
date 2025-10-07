import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ParaTi = () => {
  const { t } = useTranslation();

  
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="Para-ti"
      className="max-w-screen-xl mx-auto font-poppins mb-20 px-6 scroll-mt-30"
    >
      {/* Título animado */}
      <motion.h2
        className="font-semibold text-3xl md:text-5xl pb-12 md:pb-20 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} 
      >
        {t("for_you.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-20 md:gap-x-32">
        {[ 
          { img: "WorldIcon.png", title: t("for_you.benefit1"), desc: t("for_you.benefit1_desc") },
          { img: "ViewIcon.png", title: t("for_you.benefit2"), desc: t("for_you.benefit2_desc") },
          { img: "UserIcon.png", title: t("for_you.benefit3"), desc: t("for_you.benefit3_desc") },
          { img: "HeartIcon.png", title: t("for_you.benefit4"), desc: t("for_you.benefit4_desc") },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
            viewport={{ amount: 0.2 }} // 
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-12 h-12 mr-6 mt-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.05 + i * 0.15 }}
              viewport={{ amount: 0.2 }}
            />
            <div>
              <p className="text-2xl md:text-[32px] font-semibold pb-2">{item.title}</p>
              <p className="text-soft-gray text-lg md:text-[24px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ParaTi;
