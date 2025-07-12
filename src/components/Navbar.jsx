import { useState } from "react";
import { useTranslation } from "react-i18next"; 
import LanguageSwitcher from "./LanguageSwitcher";

const NavBar = () => {
  const { t } = useTranslation();
  const nav_items = "hover:cursor-pointer hover:text-dark-green";
  const [menuOpen, setMenuOpen] = useState(false);

  function toogleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="fixed top-0 w-full flex items-center justify-between z-50 py-10 font-medium text-lg md:text-[24px] border-b border-[#E1E1E1] bg-white h-[80px]">
        <div>
          <a href="/">
            <img
              className="px-3 w-50"
              src="alimentatepluslogo.png"
              alt="Logo"
            />
          </a>
        </div>

        <div className="md:flex md:ml-auto md:mr-auto text-lg hidden items-center justify-center gap-10">
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

        <div className="md:flex hidden mr-10 gap-4 items-center">
          <LanguageSwitcher />
          <a href="https://deploy-appwebs.web.app/sign-in">
            <button className="bg-[#cdffd6] rounded-2xl py-0 md:py-2 md:px-3 hover:cursor-pointer">
              {t("navbar.register")}
            </button>
          </a>
          <a href="https://deploy-appwebs.web.app/sign-in">
            <button className="bg-[#63b663] rounded-2xl md:py-2 md:px-3 hover:cursor-pointer">
              {t("navbar.login")}
            </button>
          </a>
        </div>

        <div className="flex items-center w-10 h-10 md:hidden mr-5">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toogleMenu}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t mt-10 fixed w-full z-50">
          <a
            href="#Para-ti"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {t("navbar.for_you")}
          </a>
          <a
            href="#testimonios"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {t("navbar.testimonials")}
          </a>
          <a
            href="#ComoFunciona"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {t("navbar.how_it_works")}
          </a>
          <a
            href="#cta"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            {t("navbar.join")}
          </a>
          <a
            href="https://deploy-appwebs.web.app/sign-in"
            className="block px-4 py-2 text-[#245e4f] font-bold hover:bg-gray-100"
          >
            {t("navbar.login")}
          </a>
          <a
            href="https://deploy-appwebs.web.app/sign-in"
            className="block px-4 py-2 text-[#245e4f] font-bold hover:bg-gray-100"
          >
            {t("navbar.register")}
          </a>
          <div className="block px-4 py-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
