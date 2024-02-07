import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-4 ">
      <div className="text-center font-josefin">
        <p>
          &copy; {currentYear} Karolina Anna Jesionek | {t("footer")}
        </p>
      </div>
    </section>
  );
};

export default Footer;
