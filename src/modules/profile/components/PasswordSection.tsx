import { FunctionComponent, useState } from "react";
import ProfileHeading from "./ProfileHeading";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IChangePasswordInputs } from "../../../shared/types/interface";
import InputField from "../../../shared/components/InputField";
import changePasswordSchema from "../../../constants/schemas/change_password_schema";
import { useAuthContext } from "../../auth/AuthContext";
import authRepository from "../../auth/data/repositories/AuthRepository";
import errorToast from "../../../shared/utils/errorToast";
import successToast from "../../../shared/utils/successToast";
import getUnexpectedError from "../../../shared/errors/get_unexpected_error";
import { getDateMMMDDYYYY } from "../../../shared/utils/getFormatedDates";

interface PasswordSectionProps {}

const PasswordSection: FunctionComponent<PasswordSectionProps> = () => {
  const [isChanging, setIsChanging] = useState(false);
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<IChangePasswordInputs>({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<IChangePasswordInputs> = async (data) => {
    if (user) {
      setIsChanging(true);
      authRepository
        .changePassword(user, data)
        .then((res) => {
          const { error } = res;
          if (error) {
            errorToast(error.name, error.message, "change-password");
          } else {
            reset();
            successToast(
              "Change Password",
              "Your password has been changed successfully",
              "change-password"
            );
          }
        })
        .finally(() => setIsChanging(false));
    } else {
      const error = getUnexpectedError();
      errorToast(error.name, error.message, "change-password");
    }
  };
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="heading1">Change Password</h1>
          <p className="text-gray-500">Joined on {getDateMMMDDYYYY(user?.createdAt)}</p>
        </div>
        <button
          className={`custom-btn-secondary !btn-sm ${
            !isDirty && "!btn-disabled"
          } ${isChanging && "loading"}`}
        >
          Change
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <InputField
          error={errors.currentPassword}
          isOptional={false}
          placeholder="Enter your current password here"
          register={register("currentPassword")}
          title="Current Password"
          type="text"
        />
        <InputField
          error={errors.password}
          isOptional={false}
          placeholder="Choose a new password"
          register={register("password")}
          title="New Password"
          type="password"
        />
        <InputField
          error={errors.passwordConfirmation}
          isOptional={false}
          placeholder="Enter your new password again here"
          register={register("passwordConfirmation")}
          title="Confirm Password"
          type="password"
        />
      </div>
    </form>
  );
};

export default PasswordSection;
