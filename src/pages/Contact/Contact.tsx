import { useTranslation } from "react-i18next";
import Icons from "./Icons"

const Contact = () => {

  const { t } = useTranslation();

  return (
    <section className="bg-burgundy py-10">
      <div className="font-josefin text-xl text-white">
        <p className="text-center text-3xl">{t("contact.contact")}</p>
        <div className="flex justify-around">
          <div className="pt-10">
           <Icons />
          </div>
        </div>
      </div>

      <hr className="h-[80px] bg-burgundy" />
    </section>
  );
};

export default Contact;
