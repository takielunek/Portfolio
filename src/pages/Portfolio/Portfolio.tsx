import { useTranslation } from "react-i18next";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="font-josefin">
      <div className="bg-burgundy pt-10">
        <p className="text-center text-3xl text-white">
          {t("projects.projects")}
        </p>
      </div>
      <Section3 />
      <hr className="h-20 bg-white" />
      <Section2 />
      <hr className="h-20 bg-white" />
      <Section1 />
      <hr className="h-20 bg-white" />
      <div className="bg-burgundy py-10"></div>
    </section>
  );
};

export default Portfolio;
