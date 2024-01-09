import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa6"
import Accordion from "./Accordion";


const Questions = () => {
  const text = "font-josefin text-xl w-5/6 text-burgundy";
  const flex = "flex flex-row justify-between";
  const icon = "text-burgundy text-[25px]";
  const position = "grid content-center";
  const border =
    "border-[3px] border-burgundy py-4 px-4 md:px-10 my-4 rounded-xl";
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-11/12 py-10 lg:w-2/3 xl:w-1/2">
      <p className="pb-10 text-center text-3xl text-burgundy">
        {t("skills.questions")}
      </p>

      <Accordion />

      <div className={`${border} ${flex}`}>
        <p className={`${text}`}>{t("skills.question1")}</p>
        <div className={`${position}`}>
          <FaArrowDown className={`${icon}`} />
        </div>
      </div>
      <div className={`${border} ${flex}`}>
        <p className={`${text}`}>{t("skills.question2")}</p>
        <div className={`${position}`}>
          <FaArrowDown className={`${icon}`} />
        </div>
      </div>
      <div className={`${border} ${flex}`}>
        <p className={`${text}`}>{t("skills.question3")}</p>
        <div className={`${position}`}>
          <FaArrowDown className={`${icon}`} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
