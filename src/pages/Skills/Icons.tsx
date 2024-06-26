import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";

const Icons = () => {
  const icon = "text-[30px] md:text-[35px] text-white m-2";
  const flex = "flex flex-row justify-around"

  return (
    <div className="mx-auto w-11/12 pt-4 xs:py-10 lg:w-2/3 xl:w-1/2 ">
      <div className={`${flex}`}>
        <SiNextdotjs className={`${icon}`} />
        <FaReact className={`${icon}`} />
        <SiReactrouter className={`${icon}`} />
        <SiRedux className={`${icon}`} />
        <IoLogoJavascript className={`${icon}`} />
      </div>
      <div className={`${flex}`}>
        <SiTypescript className={`${icon}`} />
        <FaHtml5 className={`${icon}`} />
        <FaCss3 className={`${icon}`} />
        <FaSass className={`${icon}`} />

        <SiTailwindcss className={`${icon}`} />
      </div>
      <div className={`${flex}`}>
        <FaBootstrap className={`${icon}`} />
        <SiStyledcomponents className={`${icon}`} />
        <FaGit className={`${icon}`} />
        <FaGithub className={`${icon}`} />

        <SiVite className={`${icon}`} />
      </div>
    </div>
  );
};

export default Icons;


