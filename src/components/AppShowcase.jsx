import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AppShowcase = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      id: 1,
      titleKey: "app_showcase.screenshots.home.title",
      image: "/Landing-Page/screenshots/VistaHome.png",
      descriptionKey: "app_showcase.screenshots.home.description"
    },
    {
      id: 2,
      titleKey: "app_showcase.screenshots.goals.title",
      image: "/Landing-Page/screenshots/VistaGoals.png",
      descriptionKey: "app_showcase.screenshots.goals.description"
    },
    {
      id: 3,
      titleKey: "app_showcase.screenshots.meal_plans.title",
      image: "/Landing-Page/screenshots/VistaMealPlans.png",
      descriptionKey: "app_showcase.screenshots.meal_plans.description"
    },
    {
      id: 4,
      titleKey: "app_showcase.screenshots.meal_detail.title",
      image: "/Landing-Page/screenshots/VistaMealPlanDeailed.png",
      descriptionKey: "app_showcase.screenshots.meal_detail.description"
    },
    {
      id: 5,
      titleKey: "app_showcase.screenshots.nutritionists.title",
      image: "/Landing-Page/screenshots/VistaNutricionistas.png",
      descriptionKey: "app_showcase.screenshots.nutritionists.description"
    },
    {
      id: 6,
      titleKey: "app_showcase.screenshots.welcome.title",
      image: "/Landing-Page/screenshots/VistaObjetivos.png",
      descriptionKey: "app_showcase.screenshots.welcome.description"
    },
    {
      id: 7,
      titleKey: "app_showcase.screenshots.tips.title",
      image: "/Landing-Page/screenshots/VistaTips.png",
      descriptionKey: "app_showcase.screenshots.tips.description"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const getVisibleScreenshots = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % screenshots.length;
      visible.push(screenshots[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("app_showcase.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("app_showcase.subtitle")}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Vista anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Screenshots */}
          <div className="flex justify-center items-end gap-8 px-16">
            {getVisibleScreenshots().map((screenshot, idx) => (
              <div
                key={screenshot.id}
                className={`transition-all duration-500 ${
                  idx === 1
                    ? 'scale-110 z-10'
                    : 'scale-90 opacity-60'
                }`}
              >
                <div className="bg-gray-900 rounded-3xl shadow-2xl p-2 border-4 border-gray-800">
                  <div className="w-64 h-[550px] rounded-2xl bg-white overflow-hidden flex items-center justify-center">
                    <img
                      src={screenshot.image}
                      alt={t(screenshot.titleKey)}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        console.error(`Error loading image: ${screenshot.image}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                {idx === 1 && (
                  <div className="text-center mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t(screenshot.titleKey)}
                    </h3>
                    <p className="text-gray-600">
                      {t(screenshot.descriptionKey)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Vista siguiente"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-12">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'w-8'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              style={idx === currentIndex ? { backgroundColor: '#10b34c' } : {}}
              aria-label={`Ir a vista ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;