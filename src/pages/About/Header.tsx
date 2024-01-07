import { useTranslation } from "react-i18next";
import portret from "@/assets/portret.png";

const Header = () => {
  const flexRow = "flex flex-col md:flex-row justify-around";
  const flexRow2 = "flex flex-col xl:flex-row justify-around";

  const button =
    "mx-1 rounded-xl bg-white py-2 px-4 text-burgundy m-1 text-center hover:scale-110 duration-300";
  const { t } = useTranslation();

  return (
    <div className="bg-burgundy">
      <div className="mx-auto w-3/4 pt-6">
        <div className={`${flexRow}`}>
          <img src={portret} alt="My portrait" />
          <div className="flex items-end py-6 md:py-20">
            <div className="font-josefin text-xl text-white">
              <p className="text-3xl">{t("about.name")}</p>
              <p>{t("about.title")}</p>
              <div className={`${flexRow2} py-4`}>
                <a className={`${button}`} href="/portfolio">
                  {t("about.button1")}
                </a>
                <a className={`${button}`} href="/skills">
                  {t("about.button2")}
                </a>
                <a className={`${button}`} href="/contact">
                  {t("about.button3")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
