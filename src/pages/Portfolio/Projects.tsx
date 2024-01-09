import { useTranslation } from "react-i18next";
import kindergarten from "@/assets/projects/kindergarten.png";
import kindergarten2 from "@/assets/projects/kindergarten2.png";
import shelter from "@/assets/projects/shelter.png";
import dentistry from "@/assets/projects/dentistry.png";
import photography from "@/assets/projects/photography.png";
import shop from "@/assets/projects/shop.png";
import "./index.css";

const Projects = () => {
  const greenTitle = "text-center font-josefin text-3xl font-bold text-green";
  const burgundyTitle =
    "text-center font-josefin text-3xl font-bold text-burgundy";
  const greenText =
    "flex flex-col justify-center font-josefin text-2xl font-bold text-green xs:flex-row ";
  const burgundyText =
    "flex flex-col justify-center font-josefin text-2xl font-bold text-burgundy xs:flex-row ";
  const greenBorder =
    "m-10 rounded-xl border-4 border-green p-10 duration-1000 hover:scale-110";
  const burgundyBorder =
    "m-10 rounded-xl border-4 border-burgundy p-10 duration-1000 hover:scale-110";
  const img = "w-[800px] rounded-xl ";

  const { t } = useTranslation();

  return (
    <>
      {/* kindergarten */}
      <div className="bg-white py-20">
        <p className={`${greenTitle}`}>{t("projects.kindergarten")}</p>
        <div className="flex justify-around">
          <div className={`${greenBorder}`}>
            <img src={kindergarten} alt="" className={`${img}`} />
          </div>
        </div>
        <div className={`${greenText}`}>
          <a
            href="https://github.com/takielunek/Przedszkole_Planeta_Dziecka_Oficjalna_Strona"
            className="greenLine"
          >
            GitHub
          </a>
          <a
            href="https://przedszkole-planeta-dziecka.netlify.app/"
            className="greenLine ml-10"
          >
            {t("projects.website")}
          </a>
        </div>
      </div>
      <hr className="h-10 bg-burgundy" />
      {/* dentistry  */}
      <div className="bg-white py-20">
        <p className={`${burgundyTitle}`}>{t("projects.dentistry")}</p>
        <div className="flex justify-around">
          <div className={`${burgundyBorder}`}>
            <img src={dentistry} alt="" className={`${img}`} />
          </div>
        </div>
        <div className={`${burgundyText}`}>
          <a
            href="https://github.com/takielunek/Zebuszka_Stomatologia"
            className="burgundyLine"
          >
            GitHub
          </a>
          <a
            href="https://zebuszka-stomatologia.vercel.app/"
            className="burgundyLine ml-10"
          >
            {t("projects.website")}
          </a>
        </div>
      </div>
      <hr className="h-10 bg-burgundy" />
      {/* shop  */}
      <div className="bg-white py-20">
        <p className={`${greenTitle}`}>{t("projects.shop")}</p>
        <div className="flex justify-around">
          <div className={`${greenBorder}`}>
            <img src={shop} alt="" className={`${img}`} />
          </div>
        </div>
        <div className={`${greenText}`}>
          <a
            href="https://github.com/takielunek/Sklep_Miodzio"
            className="greenLine"
          >
            GitHub
          </a>
          <a
            href="https://github.com/takielunek/Sklep_Miodzio"
            className="greenLine ml-10"
          >
            {t("projects.website")}
          </a>
        </div>
      </div>
      <hr className="h-10 bg-burgundy" />
      {/* photography  */}
      <div className="bg-white py-20">
        <p className={`${burgundyTitle}`}>{t("projects.kindergarten2")}</p>
        <div className="flex justify-around">
          <div className={`${burgundyBorder}`}>
            <img src={kindergarten2} alt="" className={`${img}`} />
          </div>
        </div>
        <div className={`${burgundyText}`}>
          <a
            href="https://github.com/takielunek/Przedszkole_Planeta_Dziecka?tab=readme-ov-file"
            className="burgundyLine"
          >
            GitHub
          </a>
          <a
            href="https://38-przedszkole-planeta-dziecka-jj66bbx9j-takielunek.vercel.app/"
            className="burgundyLine ml-10"
          >
            {t("projects.website")}
          </a>
        </div>
      </div>
      <hr className="h-10 bg-burgundy" />
      {/* shelter  */}
      <div className="bg-white py-20">
        <p className={`${greenTitle}`}>{t("projects.shelter")}</p>
        <div className="flex justify-around">
          <div className={`${greenBorder}`}>
            <img src={shelter} alt="" className={`${img}`} />
          </div>
        </div>
        <div className={`${greenText}`}>
          <a
            href="https://github.com/takielunek/Dog_shelter"
            className="greenLine"
          >
            GitHub
          </a>
          <a
            href="https://dogs-shelter-inky.vercel.app/"
            className="greenLine ml-10"
          >
            {t("projects.website")}
          </a>
        </div>
      </div>
      <hr className="h-10 bg-burgundy" />
      {/* photography  */}
      <div className="bg-white py-20">
        <p className={`${burgundyTitle}`}>{t("projects.photography")}</p>
        <div className="flex justify-around">
          <div className={`${burgundyBorder}`}>
            <img src={photography} alt="" className={`${img}`} />
          </div>
        </div>
        <div className={`${burgundyText}`}>
          <a
            href="https://github.com/takielunek/Studio_fotograficzne_bootstrap"
            className="burgundyLine"
          >
            GitHub
          </a>
          <a
            href="https://studio-fotograficzne-bootstrap.vercel.app/index.html"
            className="burgundyLine ml-10"
          >
            {t("projects.website")}
          </a>
        </div>
      </div>
      <hr className="h-10 bg-burgundy" />
    </>
  );
};

export default Projects;
