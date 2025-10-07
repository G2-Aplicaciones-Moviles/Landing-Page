import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const { t } = useTranslation();
  const nav_items = "hover:cursor-pointer hover:text-gray-600";
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    const newState = !menuOpen;
    setMenuOpen(newState);
    
    document.body.style.overflow = newState ? "hidden" : "auto";
  }

  return (
    <>
      <nav className="fixed top-0 w-full flex items-center justify-between z-50 px-3 py-3 md:py-6 font-medium text-lg md:text-[24px] border-b border-[#E1E1E1] bg-white h-[60px] md:h-[80px]">
        {/* Logo */}
        <a href="/">
          <img
            className="w-32 md:w-48"
            src="Jameo-fit-logo.png"
            alt="Logo"
          />
        </a>

        {/* Links en desktop */}
        <div className="hidden md:flex md:ml-auto md:mr-auto text-xl items-center justify-center gap-10">
          <a className={nav_items} href="#Para-ti">
            {t("navbar.for_you")}
          </a>
          <a className={nav_items} href="#testimonios">
            {t("navbar.testimonials")}
          </a>
          <a className={nav_items} href="#ComoFunciona">
            {t("navbar.how_it_works")}
          </a>
          <a className={nav_items} href="#cta">
            {t("navbar.join")}
          </a>
        </div>

        {/* Botones en desktop */}
        <div className="hidden md:flex mr-4 gap-4 items-center">
          <LanguageSwitcher />
          <a href="https://deploy-appwebs.web.app/sign-in">
            <button className="bg-[#10b34c] text-white rounded-2xl py-1 md:py-2 md:px-3 hover:cursor-pointer">
              {t("navbar.register")}
            </button>
          </a>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="flex md:hidden items-center justify-center focus:outline-none transition-transform hover:scale-110"
          onClick={toggleMenu}
        >
          {/* Imagen para el menú hamburguesa / cerrar */}
          <img
            src={menuOpen ? "menu_cerrar.png" : "menu_hamburguesa.png"}
            alt="Menu"
            className="w-12 h-12"
          />
        </button>
      </nav>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay oscuro */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Menú lateral */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <a href="#Para-ti" className="block hover:text-gray-600" onClick={toggleMenu}>
                {t("navbar.for_you")}
              </a>
              <a href="#testimonios" className="block hover:text-gray-600" onClick={toggleMenu}>
                {t("navbar.testimonials")}
              </a>
              <a href="#ComoFunciona" className="block hover:text-gray-600" onClick={toggleMenu}>
                {t("navbar.how_it_works")}
              </a>
              <a href="#cta" className="block hover:text-gray-600" onClick={toggleMenu}>
                {t("navbar.join")}
              </a>

              <hr className="my-2" />

              <a
                href="https://deploy-appwebs.web.app/sign-in"
                className="block text-[#245e4f] font-bold"
                onClick={toggleMenu}
              >
                {t("navbar.login")}
              </a>
              <a
                href="https://deploy-appwebs.web.app/sign-in"
                className="block text-[#245e4f] font-bold"
                onClick={toggleMenu}
              >
                {t("navbar.register")}
              </a>

              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
