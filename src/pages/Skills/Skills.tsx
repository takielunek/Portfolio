import { useTranslation } from "react-i18next";
import Icons from "./Icons";
import Questions from "./Questions";


const Skills = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="bg-burgundy py-10">
        <p className="text-center font-josefin text-3xl text-white">
          {t("skills.skills")}
        </p>
        <div className="mx-auto flex w-5/6 flex-wrap justify-between py-10">
          <Icons />
        </div>
      </div>
      <Questions />
      <hr className="h-[80px] bg-burgundy" />
    </section>
  );
};

export default Skills;
