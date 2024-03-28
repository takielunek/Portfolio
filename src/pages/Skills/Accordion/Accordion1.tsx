import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundDown } from "react-icons/io";

const Accordion = () => {

  const text = "font-josefin text-xl text-burgundy";

  const flex = "flex w-full justify-between";
  const { t } = useTranslation();
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <div className="border-b-[1px] border-ecru">
      <button
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        className={`${flex}`}
      >
        <p
          className={`${
            accordionIsOpen ? "text-2xl font-bold" : "text-xl"
          } p-[10px] font-josefin text-burgundy`}
        >
          {t("skills.question1")}
        </p>
        <p>
          <IoIosArrowRoundDown
            className={`${
              accordionIsOpen ? "rotate-[180deg]" : " rotate"
            } mt-[10px] text-[30px] text-burgundy duration-300`}
          />
        </p>
      </button>
      <div
        className={`${
          accordionIsOpen
            ? "grid-rows-[1fr] py-[18px] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } grid overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className={`${text} overflow-hidden`}>{t("skills.answer1")}</div>
      </div>
    </div>
  );

};

export default Accordion;

