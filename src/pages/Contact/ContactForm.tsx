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
  const error = "text-red text-base ";
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className="py-10 font-josefin text-xl md:py-20">
      <p className="pb-10 text-center text-3xl text-burgundy">
        {t("contact.message")}
      </p>
      <form onSubmit={onSubmit}>
        <div className="mx-auto w-11/12 lg:w-2/3">
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
              <span className={`${error}`}>
                {t("contact.placeholder1Error")}
              </span>
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
            {errors?.phone && (
              <span className={`${error}`}>
                {t("contact.placeholder2Error")}
              </span>
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
            {errors?.email && (
              <span className={`${error}`}>
                {t("contact.placeholder3Error")}
              </span>
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
            {errors?.message && (
              <span className={`${error}`}>
                {t("contact.placeholder4Error")}
              </span>
            )}
          </div>
        </div>
        <div className=" flex justify-around">
          <div
            className={`${style} bg-burgundy text-white duration-300 hover:bg-white hover:text-burgundy`}
          >
            <button className="py-2 px-20" type="submit">
              Wyślij
            </button>
          </div>
        </div>
      </form>


    </div>
  );
};

export default ContactForm;
