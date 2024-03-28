import Language from "@/shared/Language";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./index.css";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const desktopNavbar =
    "animation font-josefin hover:font-bold hover:text-burgundy";
  const mobileNavbar = "font-josefin hover:font-bold ";
  const name = "font-josefin text-xl font-bold text-burgundy";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const { t } = useTranslation();

  return (
    <section>
      {isAboveMediumScreens ? (
        <div className={`${flexBetween} mx-auto w-5/6 py-6`}>
          <h1 className={`${name}`}>KAROLINA ANNA JESIONEK</h1>

          <div className={`${flexBetween} gap-8`}>
            <a className={`${desktopNavbar}`} href="/">
              {t("navbar.about")}
            </a>
            <a className={`${desktopNavbar}`} href="/portfolio">
              {t("navbar.portfolio")}
            </a>
            <a className={`${desktopNavbar}`} href="/skills">
              {t("navbar.skills")}
            </a>
            <a className={`${desktopNavbar}`} href="/contact">
              {t("navbar.contact")}
            </a>
          </div>
          <Language />
        </div>
      ) : (
        <div className="mx-auto w-5/6 py-6">
          <div className="flex flex-row justify-between">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
            <Language />
          </div>
          <h1 className={`${name} mt-4 text-center`}>KAROLINA ANNA JESIONEK</h1>
        </div>
      )}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed top-0 bottom-0 w-full bg-burgundy">
          <div className="mx-auto w-5/6 py-6">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
            <div className="flex flex-col items-center gap-10 py-10 text-xl text-white">
              <a className={`${mobileNavbar}`} href="/">
                {t("navbar.about")}
              </a>
              <a className={`${mobileNavbar}`} href="/portfolio">
                {t("navbar.portfolio")}
              </a>
              <a className={`${mobileNavbar}`} href="/skills">
                {t("navbar.skills")}
              </a>
              <a className={`${mobileNavbar}`} href="/contact">
                {t("navbar.contact")}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
