import { useTranslation } from "react-i18next";
import portfolio from "@/assets/projects/portfolio.png";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import useMediaQuery from "@/hooks/useMediaQuery";

const Section9 = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)");
  const title = "text-center p-[0px]";
  const buttonStyle =
    " rounded-xl bg-green text-white text-sm lg:text-base xl:text-lg xxl:text-xl py-[2px] border-2 border-green hover:bg-white hover:text-green duration-300";
  const icon = "text-[30px] xss:text-[40px] text-ecru";

  const { t } = useTranslation();

  return (
    <section>
      {isAboveMediumScreens ? (
        <div className="bg-burgundy py-20">
          <div className="mx-auto flex w-3/4 justify-around xxl:w-3/5">
            <div className="flex flex-row bg-white">
              <div className="w-2/3">
                <img src={portfolio} alt="" />
              </div>

              <div className="flex w-1/3 flex-col justify-around p-[20px]">
                <p className={`${title} text-3xl`}>{t("projects.portfolio")}</p>
                <div>
                  <div className="flex flex-col justify-around gap-4 py-[20px]">
                    <button className={`${buttonStyle}`}>
                      <a href="https://github.com/takielunek/Portfolio">
                        GitHub
                      </a>
                    </button>
                    <button className={`${buttonStyle}`}>
                      <a href="">{t("projects.website")}</a>
                    </button>
                  </div>
                  <div className="mx-auto flex justify-around py-[20px] ">
                    <BiLogoTypescript className={`${icon}`} />
                    <SiTailwindcss className={`${icon}`} />
                    <FaReact className={`${icon}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-burgundy py-20">
          <div className="mx-auto flex w-3/4 justify-around xxl:w-3/5">
            <div className="flex flex-col bg-white">
              <div>
                <img src={portfolio} alt="" />
              </div>

              <div className="flex flex-col justify-around p-[10px] xs:p-[20px]">
                <p className={`${title} text-xl xs:text-2xl sm:text-3xl`}>
                  {t("projects.portfolio")}
                </p>
                <div>
                  <div className="flex flex-col justify-center gap-2 py-[20px] xss:flex-row xs:gap-4">
                    <button
                      className={`${buttonStyle} py-[2px] xsss:py-[3px] xss:w-1/2 xs:py-[4px] sm:py-[5px] md:p-[6px]`}
                    >
                      <a href="https://github.com/takielunek/Portfolio">
                        GitHub
                      </a>
                    </button>
                    <button
                      className={`${buttonStyle} py-[2px] xsss:py-[3px] xss:w-1/2 xs:py-[4px] sm:py-[5px] md:p-[6px]`}
                    >
                      <a href="">{t("projects.website")}</a>
                    </button>
                  </div>
                  <div className="mx-auto flex justify-around pb-[10px] ">
                    <BiLogoTypescript className={`${icon}`} />
                    <SiTailwindcss className={`${icon}`} />
                    <FaReact className={`${icon}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Section9;
