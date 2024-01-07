import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";


type Form = {
  name: string;
  phone: number;
  email: string;
  message: string;
};


const ContactForm = () => {
  const style = "border-[3px] border-burgundy my-4 rounded-xl";
  const input = "w-[100%] outline-none";
  const { t } = useTranslation();



   const { register, handleSubmit, errors } = useForm<Form>();

   const onSubmit = handleSubmit((data) => {
     alert(JSON.stringify(data));
   });



  return (
    <div className="py-20 font-josefin text-xl">
      <p className="pb-10 text-center text-3xl text-burgundy">
        {t("contact.message")}
      </p>
      <form
        action="https://formsubmit.co/karolina.anna.jesionek@gmail.com"
        method="POST"
        onSubmit={onSubmit}
      >
        <div className="mx-auto w-11/12 xl:w-3/5">
          <div className={`${style} p-2`}>
            {" "}
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              className={`${input}`}
              placeholder={t("contact.placeholder1")}
            />{" "}
            {errors.name && <span>{t("contact.placeholder1Error")}</span>}
          </div>
          <div className={`${style} p-2`}>
            {" "}
            <input
              {...register("phone", { required: true })}
              name="phone"
              className={`${input}`}
              placeholder={t("contact.placeholder2")}
            />{" "}
            {errors.phone && <span>{t("contact.placeholder2Error")}</span>}
          </div>
          <div className={`${style} p-2`}>
            {" "}
            <input
              type="text"
              {...register("email", { required: true })}
              name="email"
              className={`${input}`}
              placeholder={t("contact.placeholder3")}
            />{" "}
            {errors.email && <span>{t("contact.placeholder3Error")}</span>}
          </div>
          <div className={`${style} p-2 pb-0`}>
            <textarea
              {...register("message", { required: true })}
              name="message"
              className={`${input}`}
              placeholder={t("contact.placeholder4")}
            />
            {errors.message && <span>{t("contact.placeholder4Error")}</span>}
          </div>
        </div>
        <div className=" flex justify-around">
          <div
            className={`${style} bg-burgundy py-2 px-20 text-white duration-300 hover:bg-white hover:text-burgundy`}
          >
            <button type="submit">Wyślij</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
