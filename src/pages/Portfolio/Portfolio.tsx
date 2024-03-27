import { useTranslation } from "react-i18next";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section9 from "./Sections/Section9";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="font-josefin">
      <div className="bg-burgundy pt-10">
        <p className="text-center text-3xl text-white">
          {t("projects.projects")}
        </p>
      </div>
      <Section9 />
      <hr className="h-20 bg-white" />
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
