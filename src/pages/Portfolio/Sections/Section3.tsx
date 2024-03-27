import { useTranslation } from "react-i18next";
import IT from "@/assets/projects/IT.png";
import portfolio from "@/assets/projects/portfolio.png";
import youmoney from "@/assets/projects/youmoney.png";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const Section3 = () => {
  const title = "text-center py-3 text-xl";
  const buttonStyle =
    "rounded-xl bg-green text-white px-2 py-1 mb-4 hover:bg-gray duration-300";
  const icon = "text-[40px] text-gray";


  const { t } = useTranslation();

  return (
    <div className="bg-burgundy py-20">
      <div className="mx-auto flex w-4/5 justify-around">
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <p className={`${title}`}>{t("projects.youmoney")}</p>
            <img src={youmoney} alt="" />
            <div className="mx-auto flex w-1/2 justify-around py-[20px]">
              <IoLogoJavascript className={`${icon}`} />
              <FaCss3Alt className={`${icon}`} />
              <FaHtml5 className={`${icon}`} />
            </div>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/youmoney/tree/master">
                  GitHub
                </a>
              </button>
              <button className={`${buttonStyle}`}>
                <a href="">{t("projects.website")}</a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <p className={`${title}`}>{t("projects.accounts")}</p>
            <img src={IT} alt=""  />
            <div className="mx-auto flex w-1/2 justify-around py-[20px]">
              <IoLogoJavascript className={`${icon}`} />
              <FaCss3Alt className={`${icon}`} />
              <FaHtml5 className={`${icon}`} />
            </div>
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
        <div className="w-1/2 lg:w-1/4 ">
          <div className="bg-white">
            <img src={portfolio} alt="" />
            <p className={`${title}`}>{t("projects.portfolio")}</p>
            <div className="mx-auto flex w-2/3 justify-around py-[20px]">
              <BiLogoTypescript className={`${icon}`} />
              <FaCss3Alt className={`${icon}`} />
              <FaHtml5 className={`${icon}`} />
              <IoLogoJavascript className={`${icon}`} />
            </div>
            <div className="flex justify-center gap-2">
              <button className={`${buttonStyle}`}>
                <a href="https://github.com/takielunek/Portfolio">GitHub</a>
              </button>
              <button className={`${buttonStyle}`}>
                <a href="">{t("projects.website")}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
