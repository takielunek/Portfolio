import { useTranslation } from "react-i18next";
import kindergarten2 from "@/assets/projects/kindergarten2.png";
import shelter from "@/assets/projects/shelter.png";
import photography from "@/assets/projects/photography.png";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const Section1 = () => {
  const title = "text-center my-3 text-xl";
  const buttonStyle =
    "rounded-xl bg-green text-white px-2 py-1 mb-4 hover:bg-gray duration-300";
  const icon = "text-[40px] text-gray";

  const { t } = useTranslation();

  return (
    <div className="bg-burgundy py-20">
      <div className="mx-auto flex w-4/5 justify-around">
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={kindergarten2} alt="" />
            <p className={`${title}`}>{t("projects.kindergarten")}</p>
            <div className="mx-auto flex w-2/3 justify-around py-[20px]">
              <IoLogoJavascript className={`${icon}`} />
              <FaCss3Alt className={`${icon}`} />
              <FaHtml5 className={`${icon}`} />
            </div>
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
            <div className="mx-auto flex w-2/3 justify-around py-[20px]">
              <BiLogoTypescript className={`${icon}`} />
              <FaCss3Alt className={`${icon}`} />
              <FaHtml5 className={`${icon}`} />
              <IoLogoJavascript className={`${icon}`} />
            </div>
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
            <div className="mx-auto flex w-2/3 justify-around py-[20px]">
              <IoLogoJavascript className={`${icon}`} />
              <FaCss3Alt className={`${icon}`} />
              <FaHtml5 className={`${icon}`} />
            </div>
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
