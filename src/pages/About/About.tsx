import { useTranslation } from "react-i18next";
import construction from "@/assets/construction.png";
import website from "@/assets/website.png";
import Header from "./Header";
import "./index.css";


const About = () => {
  const flexRowReverse =
    "flex flex-col-reverse md:flex-row justify-around";
  const flexRow = "flex flex-col md:flex-row justify-around";
  const text =
    "font-josefin text-xl text-burgundy p-3 xs:p-6 md:p-10 border-ecru2 border-b-2 grid content-center ";
const textDiv = "w-5/6 md:w-2/5 mx-auto flex justify-around py-3";

  const { t } = useTranslation();

  return (
    <section>
      <Header />

      <div
        className={`${flexRowReverse} mx-auto w-11/12 py-2 xs:w-3/4 md:w-11/12 md:py-10 xl:w-3/4 `}
      >
        <div className={`${textDiv}`}>
          <p className={`${text} border-l-2`}>{t("about.text1")}</p>
        </div>

        <img src={construction} alt="Construction image" className="md:w-2/5" />
      </div>
      <div className="bg-burgundy py-6 text-center">
        <a
          className="line font-josefin text-2xl text-white"
          href="./src/assets/pdf/Karolina_Jesionek_Resume.pdf"
        >
          {t("about.download")}
        </a>
      </div>
      <div
        className={`${flexRow}  mx-auto w-11/12 py-2 xs:w-3/4 md:w-11/12 md:py-10 xl:w-3/4 `}
      >
        <img src={website} alt="Computer image" className="md:w-2/5 " />
        <div className={`${textDiv}`}>
          <p className={`${text} border-r-2`}>{t("about.text2")}</p>
        </div>
      </div>
      <hr className="h-[80px] bg-burgundy" />
    </section>
  );
};

export default About;
