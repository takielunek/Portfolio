import { useTranslation } from "react-i18next";
import Icons from "./Icons";
import Accordion1 from "./Accordion/Accordion1";
import Accordion2 from "./Accordion/Accordion2";
import Accordion3 from "./Accordion/Accordion3";
import Accordion4 from "./Accordion/Accordion4";
import Accordion5 from "./Accordion/Accordion5";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="bg-burgundy py-10 ">
        <p className="text-center font-josefin text-3xl text-white">
          {t("skills.skills")}
        </p>
        <Icons />
      </div>
      <div className="mx-auto w-11/12 py-10 lg:w-2/3 xl:w-1/2">
        <p className="pb-10 text-center text-3xl text-burgundy">
          {t("skills.questions")}
        </p>
        <Accordion1 />
        <Accordion2 />
        <Accordion3 />
        <Accordion4 />
        <Accordion5 />
      </div>

      <hr className="h-[80px] bg-burgundy" />
    </section>
  );
};

export default Skills;
