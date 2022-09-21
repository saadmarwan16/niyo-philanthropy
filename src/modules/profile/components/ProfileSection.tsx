import { FunctionComponent } from "react";
import ProfileHeading from "./ProfileHeading";
import { object, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

interface ProfileSectionProps {}

interface IProfileInputs {
  name: string;
  phone_number: string;
}

const ProfileSection: FunctionComponent<ProfileSectionProps> = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IProfileInputs>({
    // resolver: yupResolver(schema),
    defaultValues: {
      // amount: 10,
    },
  });
  const onSubmit: SubmitHandler<IProfileInputs> = async (data) => {};

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between">
        <ProfileHeading title="Profile" description="Joined on Sep, 01, 2022" />
        <button className="custom-btn-secondary !btn-sm">Save</button>
      </div>

      <div className="w-full form-control">
        <label className="label">
          <span className="font-semibold label-text">Full name</span>
        </label>

        <input
          type={"text"}
          placeholder="Enter your name here"
          className={`custom-input !max-w-md`}
          // className={`custom-input ${error?.message && "!border-error"}`}
          {...register("name")}
        />

        {/* {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </label>
      )} */}
      </div>

      <div className="w-full form-control">
        <label className="label">
          <span className="font-semibold label-text">Phone number</span>
        </label>

        <input
          type={"text"}
          placeholder="Enter your phone number here"
          className={`custom-input !max-w-md`}
          // className={`custom-input ${error?.message && "!border-error"}`}
          {...register("phone_number")}
        />

        {/* {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </label>
      )} */}
      </div>
    </form>
  );
};

export default ProfileSection;
