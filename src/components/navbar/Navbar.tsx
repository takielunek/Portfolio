import Language from "@/shared/Language";
import { useTranslation } from "react-i18next";

type Props = {};

const Navbar = (props: Props) => {
 const { t } = useTranslation()

  return (
    <div>
      <Language />
      <h1 className="mess">{t("header.mess")}</h1>
      <div className="description">{t("home.description")}</div>
    </div>
  );
};

export default Navbar;
