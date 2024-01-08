import { useTranslation } from "react-i18next";
import Carousel from "./Carousel";
import Projects from "./Projects";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="bg-burgundy py-10">
        <p className="text-center font-josefin text-3xl text-white">
          {t("projects.projects")}
        </p>
        <Carousel />
      </div>
      <Projects />
    </section>
  );
};

export default Portfolio;
