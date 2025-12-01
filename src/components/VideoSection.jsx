import { useState } from "react";
import { motion } from "framer-motion";

const VideoSection = ({ id, title, thumbnailSrc, thumbnailAlt, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const autoplayUrl = `${videoSrc}${
    videoSrc.includes("?") ? "&" : "?"
  }autoplay=1&controls=1&rel=0&modestbranding=1`;

  return (
    <section
      id={id}
      className="max-w-screen-xl mx-auto font-poppins mb-20 px-6 scroll-mt-30"
    >
      <motion.h2
        className="font-semibold text-3xl md:text-5xl pb-12 md:pb-20 text-center"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
      >
        <div className="relative w-full md:w-[85%] lg:w-[75%] aspect-video rounded-2xl overflow-hidden shadow-xl">
          {!isPlaying && (
            <motion.div
              className="absolute inset-0 w-full h-full cursor-pointer"
              onClick={() => setIsPlaying(true)}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <img
                src={thumbnailSrc}
                alt={thumbnailAlt}
                className="w-full h-full object-cover brightness-90"
              />

              <div className="absolute inset-0 bg-black/15"></div>

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

          {isPlaying && (
            <motion.iframe
              className="w-full h-full"
              src={autoplayUrl}
              title={title}
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

export default VideoSection;
