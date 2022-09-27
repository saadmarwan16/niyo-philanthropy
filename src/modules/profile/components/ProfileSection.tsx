import { FunctionComponent, useState } from "react";
import ProfileHeading from "./ProfileHeading";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProfileInputs } from "../../../shared/types/interface";
import { useAuthContext } from "../../auth/AuthContext";
import InputField from "../../../shared/components/InputField";
import profileUpdataSchema from "../../../constants/schemas/profile_update_schema";
import { getDateMMMDDYYYY } from "../../../shared/utils/getFormatedDates";
import authRepository from "../../auth/data/repositories/AuthRepository";
import errorToast from "../../../shared/utils/errorToast";
import successToast from "../../../shared/utils/successToast";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";

interface ProfileSectionProps {}

const ProfileSection: FunctionComponent<ProfileSectionProps> = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();
  const { user, setUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IProfileInputs>({
    resolver: yupResolver(profileUpdataSchema),
    defaultValues: {
      full_name: user?.full_name,
      email: user?.email,
      username: user?.username,
    },
  });

  const logout = async () => {
    await destroyCookie(null, "user");
    router.reload();
  };

  const onSubmit: SubmitHandler<IProfileInputs> = async (data) => {
    if (user) {
      setIsUpdating(true);
      authRepository
        .updateUserInformation(user, data)
        .then((res) => {
          const { error, results } = res;
          if (error) {
            errorToast(error.name, error.message, "update-user-data");
          } else {
            setUser(results);
            successToast(
              "Update user",
              "Your user data has been updated successfully",
              "update-user-data"
            );
          }
        })
        .finally(() => setIsUpdating(false));
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <ProfileHeading
          title="Profile"
          description={`Joined on ${getDateMMMDDYYYY(user?.createdAt)}`}
        />
        <div className="flex gap-3">
          <button
            type={"button"}
            className="custom-btn-secondary-outline btn-secondary !btn-sm"
            onClick={logout}
          >
            Logout
          </button>
          <button
            className={`custom-btn-secondary !btn-sm ${
              !isDirty && "!btn-disabled"
            } ${isUpdating && "loading"}`}
          >
            Save
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full gap-3 md:w-4/5 lg:w-2/3">
        <InputField
          error={errors.full_name}
          isOptional={false}
          placeholder="Enter your name here"
          register={register("full_name")}
          title="Full name"
          type="text"
        />
        <InputField
          error={errors.username}
          isOptional={false}
          placeholder="Enter your username here"
          register={register("username")}
          title="Username"
          type="text"
        />
        <InputField
          error={errors.email}
          isOptional={false}
          placeholder="Enter your email address here"
          register={register("email")}
          title="Email"
          type="text"
        />
      </div>
    </form>
  );
};

export default ProfileSection;
