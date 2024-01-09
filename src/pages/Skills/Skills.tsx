import { useTranslation } from "react-i18next";
import Icons from "./Icons";
import Questions from "./Questions";

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
      <Questions />
      <hr className="h-[80px] bg-burgundy" />
    </section>
  );
};

export default Skills;

