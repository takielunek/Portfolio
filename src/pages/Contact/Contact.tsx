import { useTranslation } from "react-i18next";
import Icons from "./Icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="bg-burgundy py-10 font-josefin text-xl text-white">
        <p className="text-center text-3xl">{t("contact.contact")}</p>
        <div className="pt-10">
          <Icons />
        </div>
      </div>
      <ContactForm />
      <hr className="h-[80px] bg-burgundy" />
    </section>
  );
};

export default Contact;
