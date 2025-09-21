import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion, animate } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.user1.name"),
      text: t("testimonials.user1.text"),
      sub: t("testimonials.user1.sub"),
      img: "profile3.jpg",
    },
    {
      name: t("testimonials.user2.name"),
      text: t("testimonials.user2.text"),
      sub: t("testimonials.user2.sub"),
      img: "profile2.jpg",
    },
    {
      name: t("testimonials.user3.name"),
      text: t("testimonials.user3.text"),
      sub: t("testimonials.user3.sub"),
      img: "profile1.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  // función para mover en círculo
  const move = (direction) => {
    setCurrent((prev) => (prev + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="bg-white py-12 text-center px-6 scroll-mt-30">
      {/* Estrellas decorativas */}
      <div className="text-yellow-500 text-4xl flex justify-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className="animate-subtle drop-shadow-[0_0_6px_#facc15]"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      <p className="font-bold text-lg mb-2">+50,000</p>
      <p className="text-gray-600 mb-10">{t("testimonials.title")}</p>

      {/* Carrusel circular */}
      <div className="flex justify-center items-center gap-4">
        {/* Botón izquierda */}
        <button
          onClick={() => move(-1)}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
        >
          <img src="arrow_left.png" alt="Next" className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4">
          {/* card izquierda */}
          <motion.div
            key={`left-${current}`}
            className="bg-white shadow-md rounded-xl p-6 w-64 border border-gray-100 opacity-50 scale-90 transition-all duration-300"
          >
            <CardContent testimonial={testimonials[(current - 1 + testimonials.length) % testimonials.length]} />
          </motion.div>

          {/* card activa */}
          <motion.div
            key={`center-${current}`}
            layout
            className="bg-white shadow-lg rounded-xl p-6 w-72 border border-gray-100 scale-105 transition-all duration-300"
          >
            <CardContent testimonial={testimonials[current]} />
          </motion.div>

          {/* card derecha */}
          <motion.div
            key={`right-${current}`}
            className="bg-white shadow-md rounded-xl p-6 w-64 border border-gray-100 opacity-50 scale-90 transition-all duration-300"
          >
            <CardContent testimonial={testimonials[(current + 1) % testimonials.length]} />
          </motion.div>
        </div>

        {/* Botón derecha */}
        <button
          onClick={() => move(1)}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
        >
          <img src="arrow_right.png" alt="Next" className="w-4 h-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-gray-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

// Extraemos el contenido de la card para reutilizar
const CardContent = ({ testimonial }) => (
  <>
    <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full mb-4 mx-auto" />
    <p className="font-semibold text-center">{testimonial.name}</p>
    <div className="text-yellow-500 text-sm flex justify-center my-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className="animate-subtle drop-shadow-[0_0_6px_#facc15]"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </div>
    <p className="text-sm italic text-gray-700 text-center">{testimonial.text}</p>
    <p className="text-xs text-gray-500 mt-2 text-center">{testimonial.sub}</p>
  </>
);

export default Testimonials;
