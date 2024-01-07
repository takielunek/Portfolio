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
import { FaWordpress } from "react-icons/fa";
import { SiVite } from "react-icons/si";

const Icons = () => {
  const icon = "text-[30px] md:text-[65px] text-white m-2";

  return (
    <>
      <IoLogoJavascript className={`${icon}`} />
      <SiTypescript className={`${icon}`} />
      <FaReact className={`${icon}`} />
      <SiReactrouter className={`${icon}`} />
      <SiRedux className={`${icon}`} />
      <FaHtml5 className={`${icon}`} />
      <FaCss3 className={`${icon}`} />
      <FaSass className={`${icon}`} />
      <FaBootstrap className={`${icon}`} />
      <SiTailwindcss className={`${icon}`} />
      <SiStyledcomponents className={`${icon}`} />
      <FaGit className={`${icon}`} />
      <FaGithub className={`${icon}`} />
      <FaWordpress className={`${icon}`} />
      <SiVite className={`${icon}`} />
    </>
  );
};

export default Icons;
