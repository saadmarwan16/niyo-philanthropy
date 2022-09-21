import { FunctionComponent, useState } from "react";
import InputField from "./InputField";
import { IoIosSend } from "react-icons/io";
import { SubmitHandler, useForm } from "react-hook-form";
import emailController from "../controllers/email_controller";
import { IContactUsInputs } from "../types/interface";
import errorToast from "../utils/errorToast";
import successToast from "../utils/successToast";
import { yupResolver } from "@hookform/resolvers/yup";
import contactUsSchema from "../../constants/schemas/contact_us_schema";

interface ContactUsProps {}

const ContactUs: FunctionComponent<ContactUsProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactUsInputs>({
    resolver: yupResolver(contactUsSchema)
  });

  const onSubmit: SubmitHandler<IContactUsInputs> = async (data) => {
    setIsLoading(true);
    const { error, results } = await emailController.create(data);
    setIsLoading(false);
    if (error) {
      errorToast(
        "An error occurred",
        "Could not send message",
        "message-send-failed"
      );
    }

    if (results) {
      reset();
      successToast(
        "Message sent",
        "Your message was sent successfully",
        "message-send-success"
      );
    }
  };

  return (
    <section className="flex flex-col gap-4 py-16 home-section-horizontal-padding">
      <div>
        <h1 className="heading1">Get in touch</h1>
        <p className="text-sm text-gray-500">We would love to hear from you</p>
      </div>

      <form
        className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          title="First name"
          isOptional={false}
          type="text"
          placeholder="Enter your first name here"
          register={register("first_name")}
          error={errors.first_name}
        />
        <InputField
          title="Last name"
          isOptional={true}
          type="text"
          placeholder="Enter your last name here"
          register={register("last_name")}
          error={errors.last_name}
        />
        <InputField
          title="Email Address"
          isOptional={false}
          type="email"
          placeholder="Enter your email address here"
          register={register("email")}
          error={errors.email}
        />
        <InputField
          title="Phone number"
          isOptional={true}
          type="tel"
          placeholder="Enter your phone number here"
          register={register("phone")}
          error={errors.phone}
        />

        <div>
          <div className="mb-8 form-control">
            <label className="label">
              <span className="font-semibold label-text">Message Body</span>
            </label>
            <textarea
              className={`h-32 custom-textarea ${
                errors.message && "!border-error"
              }`}
              placeholder="Enter your message here"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.message.message}
                </span>
              </label>
            )}
          </div>
          <button
            className={`block gap-3 custom-btn-secondary ${
              isLoading && "loading"
            }`}
          >
            Just Send <IoIosSend className="text-xl" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
