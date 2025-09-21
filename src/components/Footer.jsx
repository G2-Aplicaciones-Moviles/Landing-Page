import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-300 text-gray-700 text-sm py-10">
      
      <div className="max-w-screen-xl mx-auto px-6">
       
        <div className="flex flex-col md:flex-row justify-between mb-6">
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {t("footer.social_media")}
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="instagram.png" alt="Instagram" className="w-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="facebook.png" alt="Facebook" className="w-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="youtube.png" alt="Youtube" className="w-10" />
              </a>
            </div>
            <p className="mt-2">
              {t("footer.languages")}: {t("footer.language")}
            </p>
          </div>

          {/* Columna Aprender */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {t("footer.learn")}
            </h3>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">
              {t("footer.articles")}
            </p>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">
              {t("footer.posts")}
            </p>
          </div>

          {/* Columna Compañía */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {t("footer.company")}
            </h3>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">
              {t("footer.contact")}
            </p>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">
              {t("footer.terms")}
            </p>
            <p className="hover:text-gray-900 cursor-pointer transition-colors">
              {t("footer.privacy")}
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="text-xs border-t pt-4">
          {t("footer.support")}{" "}
          <a
            className="text-[#099fe1] underline"
            href="mailto:support@alimentateplus.app"
          >
            {t("footer.email")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
