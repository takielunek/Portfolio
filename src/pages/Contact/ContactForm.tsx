// src/components/EmailForm.tsx
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const style = "border-[3px] border-burgundy my-4 rounded-xl";
  const input = "w-[100%] outline-none";
  const error = "text-red text-base ";
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState,
    reset,
    formState: { errors },
  } = useForm();

  const element = document.getElementById("send");

  const onSubmit = (form_data: any) => {
    try {
      emailjs.send(
        "service_gbrmiht",
        "cv_contact_form",
        form_data,
        "h-88CYxcdOs0ZqeSd"
      );
      console.log("Email sent successfully");
      reset();
      if (element != null) {
        element.style.display = "flex";
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="mx-auto w-11/12 py-10 font-josefin text-xl md:py-20 lg:w-2/3 xl:w-1/2">
      <p className="pb-10 text-center text-3xl text-burgundy">
        {t("contact.message")}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className={`${style} p-2`}>
            {" "}
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              className={`${input}`}
              placeholder={t("contact.placeholder1")}
            />{" "}
          </div>
          {errors?.name && (
            <span className={`${error}`}>{t("contact.placeholder1Error")}</span>
          )}
        </div>

        <div>
          <div className={`${style} p-2`}>
            {" "}
            <input
              type="tel"
              {...register("phone", { required: true })}
              name="phone"
              className={`${input}`}
              placeholder={t("contact.placeholder2")}
            />{" "}
          </div>
          {errors.phone && (
            <span className={`${error}`}>{t("contact.placeholder2Error")}</span>
          )}
        </div>
        <div>
          <div className={`${style} p-2`}>
            {" "}
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              className={`${input}`}
              placeholder={t("contact.placeholder3")}
            />
          </div>
          {errors.email && (
            <span className={`${error}`}>{t("contact.placeholder3Error")}</span>
          )}
        </div>
        <div>
          <div className={`${style} p-2 pb-0`}>
            <textarea
              {...register("message", { required: true })}
              name="message"
              rows={5}
              className={`${input}`}
              placeholder={t("contact.placeholder4")}
            />
          </div>
          {errors.message && (
            <span className={`${error}`}>{t("contact.placeholder4Error")}</span>
          )}
        </div>

        <div className=" flex justify-around">
          <div
            className={`${style} bg-burgundy text-white duration-300 hover:bg-white hover:text-burgundy`}
          >
            <button
              className="py-2 px-20"
              type="submit"
              disabled={formState.isSubmitting}
            >
              {t("contact.send")}
            </button>
          </div>
        </div>
        <div className="hidden justify-around pt-10" id="send">
          <p className="text-2xl text-burgundy">{t("contact.sendMessage")}</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
