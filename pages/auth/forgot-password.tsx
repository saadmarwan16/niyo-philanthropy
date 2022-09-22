import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";
import Image from "next/image";
import Routes from "../../src/constants/routes";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInputField from "../../src/modules/auth/components/AuthInputField";
import { IForgotPasswordInputs } from "../../src/shared/types/interface";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import forgotPasswordSchema from "../../src/constants/schemas/forgot_password_schema";
import authRepository from "../../src/modules/auth/data/repositories/AuthRepository";
import errorToast from "../../src/shared/utils/errorToast";

interface ForgotPasswordPageProps {}

const ForgotPassword: NextPage<ForgotPasswordPageProps> = ({}) => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPasswordInputs>({
    resolver: yupResolver(forgotPasswordSchema),
  });
  const onSubmit: SubmitHandler<IForgotPasswordInputs> = async (data) => {
    setIsLoading(true);
    authRepository
      .forgotPassword(data)
      .then((res) => {
        const { error } = res;
        if (error) {
          errorToast(error.name, error.message, "forgot-password");
        } else {
          setIsEmailSent(true);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <Meta titlePrefix="Forgot Password" />

      <div className="flex flex-col min-h-screen py-4 auth-section-horizontal-padding">
        <header>
          <Link href={Routes.HOME}>
            <a>
              <div className="hidden lg:block">
                <Image
                  src="/logos/logo2.png"
                  width={200}
                  height={70}
                  alt="logo"
                />
              </div>

              <div className="avatar lg:hidden">
                <div className="w-12 sm:w-16">
                  <Image src="/logos/logo1.png" layout="fill" alt="logo" />
                </div>
              </div>
            </a>
          </Link>
        </header>

        <main className="flex flex-col items-center justify-center flex-grow py-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`flex flex-col w-full gap-12 sm:w-4/5 md:w-[456px] ${
                isEmailSent && "items-center"
              }`}
            >
              {!isEmailSent && (
                <div>
                  <p className="mb-2 heading1">Forgot Password?</p>
                  <p className="text-sm text-gray-500">
                    No worries, we&apos;ll send you reset instructions
                  </p>
                </div>
              )}
              {isEmailSent ? (
                <div className="flex flex-col items-center gap-2 text-center text-primary">
                  <p className="mb-8 text-black heading1">
                    Email instructions sent
                  </p>
                  <MdEmail className="text-6xl" />
                  <p className="mb-6 font-semibold">
                    Please follow the instructions we sent to your inbox
                  </p>
                  <p className="text-gray-500">
                    Didn&apos;t receive the email?{" "}
                    {isLoading ? (
                      <span>Resending...</span>
                    ) : (
                      <button
                        type={"submit"}
                        className="text-blue-500 cursor-pointer hover:text-blue-800"
                      >
                        Resend it
                      </button>
                    )}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <AuthInputField
                      error={errors.email}
                      label="Email"
                      placeholder="Enter your email"
                      register={register("email")}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <button
                      className={`custom-btn-secondary ${
                        isLoading && "loading"
                      }`}
                      type="submit"
                    >
                      Send Email
                    </button>
                  </div>
                  <p className="text-center">
                    Go to{" "}
                    <Link href={Routes.LOGIN}>
                      <a className="text-blue-500 hover:text-blue-800">Login</a>
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ForgotPassword;
