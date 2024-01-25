import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowDown } from "react-icons/fa6";

const Accordion = () => {

  const text = "font-josefin text-xl text-burgundy";

  const flex = "flex w-full justify-between";
  const { t } = useTranslation();
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  return (
    <div className="border-b-[1px] border-burgundy">
      <button
        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
        className={`${flex}`}
      >
        <p
          className={`${
            accordionIsOpen ? "text-2xl font-bold" : "text-xl"
          } font-josefin text-burgundy p-[10px]`}
        >
          {t("skills.question1")}
        </p>
        <p>
          <FaArrowDown
            className={`${
              accordionIsOpen ? "rotate-[180deg]" : " rotate"
            } mt-[10px] text-[20px] text-burgundy duration-300`}
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
        <div className={`${text} overflow-hidden`}>{t("skills.question1")}</div>
      </div>
    </div>
  );

};

export default Accordion;

