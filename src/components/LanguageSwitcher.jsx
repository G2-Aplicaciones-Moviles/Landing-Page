import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <img src="WorldIcon.png" alt="Language" className="w-8 h-8" />
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-transparent text-black cursor-pointer outline-none"
      >
        <option value="es" className="text-black">
          Español
        </option>
        <option value="en" className="text-black">
          English
        </option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
