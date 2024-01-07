import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";

const Icons = () => {
  const style = "flex flex-row py-4";
  const text = "grid content-center ml-2 md:ml-8 text-base md:text-xl";
  const icon = "text-[18px] xxs:text-[25px] md:text-[35px]";
  const { t } = useTranslation();

  return (
    <div className="w-10/12 mx-auto flex flex-col xs:flex-row xs:w-11/12 justify-around lg:w-2/3">
      <div>
        <div className={`${style}`}>
          <FaPhone className={`${icon}`} />
          <a className={`${text}`} href="tel:+48737161885">
            +48 737 161 885
          </a>
        </div>
        <div className={`${style}`}>
          <MdEmail className={`${icon}`} />
          <a
            className={`${text}`}
            href="mailto:karolina.anna.jesionek@gmail.com"
          >
            karolina.anna.jesionek@gmail.com
          </a>
        </div>
        <div className={`${style}`}>
          <FaGithub className={`${icon}`} />
          <a
            className={`${text}`}
            href="https://github.com/takielunek?tab=repositories"
          >
            GitHub
          </a>
        </div>
      </div>
      <div>
        <div className={`${style}`}>
          <FaLinkedin className={`${icon}`} />
          <a
            className={`${text}`}
            href="https://www.linkedin.com/in/karolina-jesionek-frontend-developer/"
          >
            LinkedIn
          </a>
        </div>
        <div className={`${style}`}>
          <FaFacebook className={`${icon}`} />
          <a
            className={`${text}`}
            href="https://www.facebook.com/karolka.jesionek/"
          >
            Facebook
          </a>
        </div>
        <div className={`${style}`}>
          <PiMapPinFill className={`${icon}`} />
          <p className={`${text}`}>{t("contact.map")}</p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
