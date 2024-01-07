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
      <div className="mx-auto w-3/4 pt-6 md:w-11/12 xl:w-3/4">
        <div className={`${flexRow}`}>
          <div className="flex justify-around">
            <img src={portret} alt="My portrait" />
          </div>
          <div className="flex items-end justify-around py-6 md:w-1/2 xl:w-3/5 xl:py-20">
            <div className="font-josefin text-xl text-white">
              <p className="text-4xl lg:text-5xl">{t("about.name")}</p>
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
