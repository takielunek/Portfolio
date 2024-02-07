import { useTranslation } from "react-i18next";
import construction from "@/assets/construction.png";
import website from "@/assets/website.png";
import Header from "./Header";
import "./index.css";

const About = () => {
  const flexRowReverse = "flex flex-col-reverse md:flex-row justify-around";
  const flexRow = "flex flex-col md:flex-row justify-around";
  const text =
    "font-josefin text-xl text-burgundy grid w-5/6 md:w-2/5 mx-auto content-center py-6 md:py-0";

  const { t } = useTranslation();

  return (
    <section>
      <Header />

      <div className={`${flexRowReverse}  mx-auto w-3/4 py-2 md:py-10`}>
        <p className={`${text}`}>{t("about.text1")}</p>

        <img
          src={construction}
          alt="Construction image"
          className="w-[500px] md:w-2/5"
        />
      </div>
      <div className="bg-burgundy py-6 text-center">
        <a
          className="line font-josefin text-2xl text-white"
          href="./src/assets/pdf/Karolina_Jesionek_CV_Resume.pdf"
        >
          {t("about.download")}
        </a>
      </div>
      <div className={`${flexRow}  mx-auto w-3/4 py-2 md:py-10`}>
        <img
          src={website}
          alt="Computer image"
          className="w-[500px] md:w-2/5"
        />
        <p className={`${text}`}>{t("about.text2")}</p>
      </div>
      <hr className="h-[80px] bg-burgundy" />
    </section>
  );
};

export default About;
