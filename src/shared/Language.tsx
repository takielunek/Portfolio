import { useTranslation } from "react-i18next";

type Props = {};

const Language = (props: Props) => {
  const buttonStyle =
    "font-normal hover:font-bold font-josefin hover:text-burgundy";

  const { i18n } = useTranslation();
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange("pl")}
        className={`${buttonStyle}`}
      >
        PL
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`${buttonStyle} ml-2`}
      >
        EN
      </button>
    </div>
  );
};

export default Language;
