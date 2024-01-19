import { useTranslation } from "react-i18next";
import kindergarten from "@/assets/projects/kindergarten.png";
import dentistry from "@/assets/projects/dentistry.png";
import shop from "@/assets/projects/shop.png";

const Section2 = () => {
  const title = "text-center my-3 text-xl";
  const buttonStyle =
    "rounded-xl bg-gray text-white px-2 py-1 mb-4 hover:bg-burgundy duration-300";

  const { t } = useTranslation();

  return (
    <div className="bg-burgundy py-20">
      <div className="mx-auto flex w-4/5 justify-around">
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={kindergarten} alt="" />
            <p className={`${title}`}>{t("projects.kindergarten")}</p>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/Przedszkole_Planeta_Dziecka_Oficjalna_Strona">
                  GitHub
                </a>
              </button>

              <button className={`${buttonStyle}`}>
                <a href="https://przedszkole-planeta-dziecka.netlify.app/">
                  {t("projects.website")}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={shop} alt="" />
            <p className={`${title}`}>{t("projects.shop")}</p>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/Sklep_Miodzio">GitHub</a>
              </button>

              <button className={`${buttonStyle}`}>
                <a href="https://sklep-miodzio.vercel.app/">
                  {t("projects.website")}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={dentistry} alt="" />
            <p className={`${title}`}>{t("projects.dentistry")}</p>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/Zebuszka_Stomatologia">
                  GitHub
                </a>
              </button>

              <button className={`${buttonStyle}`}>
                <a href="https://zebuszka-stomatologia.vercel.app/">
                  {t("projects.website")}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
