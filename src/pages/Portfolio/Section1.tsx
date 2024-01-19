import { useTranslation } from "react-i18next";
import kindergarten2 from "@/assets/projects/kindergarten2.png";
import shelter from "@/assets/projects/shelter.png";
import photography from "@/assets/projects/photography.png";

const Section1 = () => {
  const title = "text-center my-3 text-xl";
  const buttonStyle =
    "rounded-xl bg-gray text-white px-2 py-1 mb-4 hover:bg-burgundy duration-300";

  const { t } = useTranslation();

  return (
    <div className="bg-burgundy py-20">
      <div className="mx-auto flex w-4/5 justify-around">
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={kindergarten2} alt="" />
            <p className={`${title}`}>{t("projects.kindergarten")}</p>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/Przedszkole_Planeta_Dziecka?tab=readme-ov-file">
                  GitHub
                </a>
              </button>

              <button className={`${buttonStyle}`}>
                <a href="https://38-przedszkole-planeta-dziecka-jj66bbx9j-takielunek.vercel.app/">
                  {t("projects.website")}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={shelter} alt="" />
            <p className={`${title}`}>{t("projects.shelter")}</p>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/Dog_shelter">GitHub</a>
              </button>

              <button className={`${buttonStyle}`}>
                <a href="https://dogs-shelter-inky.vercel.app/">
                  {t("projects.website")}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={photography} alt="" />
            <p className={`${title}`}>{t("projects.photography")}</p>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/Studio_fotograficzne_bootstrap">
                  GitHub
                </a>
              </button>

              <button className={`${buttonStyle}`}>
                <a href="https://studio-fotograficzne-bootstrap.vercel.app/index.html">
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

export default Section1;
