import { useTranslation } from "react-i18next";
import fauget from "@/assets/projects/fauget.png";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
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
              <div className="relative w-2/3">
                <img src={fauget} alt="" />
                <div className="absolute bottom-[15px] -left-[30px] rounded-r-xl bg-ecru py-[4px] pr-[30px] pl-[50px]">
                  <p className="text-sm font-medium text-white lg:text-base xl:text-lg xxl:text-xl">
                    {t("projects.forPractice")}
                  </p>
                </div>
              </div>

              <div className="flex w-1/3 flex-col justify-around p-[20px]">
                <p className={`${title} text-3xl`}>{t("projects.fauget")}</p>
                <div>
                  <div className="flex flex-col justify-around gap-4 py-[20px]">
                    <button className={`${buttonStyle}`}>
                      <a href="https://github.com/takielunek/Fauget">GitHub</a>
                    </button>
                    <button className={`${buttonStyle}`}>
                      <a href="">{t("projects.website")}</a>
                    </button>
                  </div>
                  <div className="mx-auto flex justify-around py-[20px] ">
                    <IoLogoJavascript className={`${icon}`} />
                    <SiTailwindcss className={`${icon}`} />
                    <SiNextdotjs className={`${icon}`} />
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
              <div className="relative">
                <img src={fauget} alt="" />
                <div className="absolute bottom-0 -left-[30px] rounded-r-xl bg-ecru py-[2px] pl-[20px] pr-[20px] xsss:py-[4px] xsss:pl-[30px] xss:pr-[30px] xss:pl-[50px] xs:bottom-[15px] md:py-[5px]">
                  <p className="text-sm font-medium text-white lg:text-base xl:text-lg xxl:text-xl">
                    {t("projects.forPractice")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-around p-[10px] xs:p-[20px]">
                <p className={`${title} text-xl xs:text-2xl sm:text-3xl`}>
                  {t("projects.fauget")}
                </p>
                <div>
                  <div className="flex flex-col justify-center gap-2 py-[20px] xss:flex-row xs:gap-4">
                    <button
                      className={`${buttonStyle} py-[2px] xsss:py-[3px] xss:w-1/2 xs:py-[4px] sm:py-[5px] md:p-[6px]`}
                    >
                      <a href="https://github.com/takielunek/Fauget">GitHub</a>
                    </button>
                    <button
                      className={`${buttonStyle} py-[2px] xsss:py-[3px] xss:w-1/2 xs:py-[4px] sm:py-[5px] md:p-[6px]`}
                    >
                      <a href="">{t("projects.website")}</a>
                    </button>
                  </div>
                  <div className="mx-auto flex justify-around pb-[10px] ">
                    <IoLogoJavascript className={`${icon}`} />
                    <SiTailwindcss className={`${icon}`} />
                    <SiNextdotjs className={`${icon}`} />
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
