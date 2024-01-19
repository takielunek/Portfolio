import { useTranslation } from "react-i18next";
import IT from "@/assets/projects/IT.png";

const Section3 = () => {
  const title = "text-center my-3 text-xl";
  const buttonStyle =
    "rounded-xl bg-gray text-white px-2 py-1 mb-4 hover:bg-burgundy duration-300";

  const { t } = useTranslation();

  return (
    <div className="bg-burgundy py-20">
      <div className="mx-auto flex w-4/5 justify-around">
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={IT} alt="" />
            <p className={`${title}`}>{t("projects.accounts")}</p>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/KsiegowoscIT.pl">
                  GitHub
                </a>
              </button>
              <button className={`${buttonStyle}`}>
                <a href="https://ksiegowosc-it-pl.vercel.app/">
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

export default Section3;
