import { useTranslation } from "react-i18next";
import Section9 from "./Sections/Section9";
import Section8 from "./Sections/Section8";
import Section7 from "./Sections/Section7";
import Section6 from "./Sections/Section6";
import Section5 from "./Sections/Section5";
import Section4 from "./Sections/Section4";
import Section3 from "./Sections/Section3";

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
      <Section8 />
      <hr className="h-20 bg-white" />
      <Section7 />
      <hr className="h-20 bg-white" />
      <Section6 />
      <hr className="h-20 bg-white" />
      <Section5 />
      <hr className="h-20 bg-white" />
      <Section4 />
      <hr className="h-20 bg-white" />
      <Section3 />
      <hr className="h-20 bg-white" />
      <div className="bg-burgundy py-10"></div>
    </section>
  );
};

export default Portfolio;
