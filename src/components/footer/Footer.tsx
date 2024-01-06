import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section className="py-4 ">
      <div className="text-center font-josefin">
        <p>&copy; 2023 Karolina Anna Jesionek | {t("footer")}</p>
      </div>
    </section>
  );
};

export default Footer;
