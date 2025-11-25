import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MeetTheTeam = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="Meet-the-team"
      className="max-w-screen-xl mx-auto font-poppins mb-20 px-6 scroll-mt-30"
    >
      {/* Título animado */}
      <motion.h2
        className="font-semibold text-3xl md:text-5xl pb-12 md:pb-20 text-center"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        {t("meet_the_team.title")}
      </motion.h2>

      {/* Contenedor del video */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <div className="relative w-full md:w-[85%] lg:w-[75%] aspect-video rounded-2xl overflow-hidden shadow-xl">

          {/* THUMBNAIL + PLAY BUTTON (cuando NO está reproduciendo) */}
          {!isPlaying && (
            <motion.div
              className="absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => setIsPlaying(true)}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {/* Imagen thumbnail */}
              <img
                src="aboutTheTeam.png" 
                alt="Meet the Team Thumbnail"
                className="w-full h-full object-cover brightness-90"
              />

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/15"></div>

              {/* Botón PLAY elegante */}
              <motion.div
                className="absolute inset-0 flex justify-center items-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-white/25 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center border border-white/40 hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIDEO (cuando está reproduciendo) */}
          {isPlaying && (
            <motion.iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/htedBrrCzls?autoplay=1&controls=1&rel=0&modestbranding=1"
              title="About the Team"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            ></motion.iframe>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default MeetTheTeam;
