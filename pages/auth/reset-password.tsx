import type { GetServerSideProps, NextPage } from "next";
import Meta from "../../src/shared/components/Meta";
import Image from "next/image";
import Routes from "../../src/constants/routes";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInputField from "../../src/modules/auth/components/AuthInputField";
import { IResetPasswordInputs } from "../../src/shared/types/interface";
import { useMemo, useState } from "react";
import { GiHouseKeys } from "react-icons/gi";
import resetPasswordSchema from "../../src/constants/schemas/reset_password_schema";
import { useRouter } from "next/router";
import authRepository from "../../src/modules/auth/data/repositories/AuthRepository";
import errorToast from "../../src/shared/utils/errorToast";

interface ResetPasswordPageProps {}

const ResetPassword: NextPage<ResetPasswordPageProps> = ({}) => {
  const [isPasswordResetted, setIsPasswordResetted] = useState(false);
  const router = useRouter();
  const code = useMemo(() => {
    if (typeof window !== "undefined") {
      return router.query.code as string;
    }
  }, [router.query.code]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPasswordInputs>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit: SubmitHandler<IResetPasswordInputs> = async (data) => {
    const transformedData = {
      ...data,
      code,
    };

    authRepository.resetPassword(transformedData).then((res) => {
      const { error } = res;
      if (error) {
        errorToast(error.name, error.message, "reset-password");
      } else {
        setIsPasswordResetted(true);
      }
    });
  };

  return (
    <div>
      <Meta titlePrefix="Reset Password" />

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
          <div className="flex flex-col w-full gap-12 sm:w-4/5 md:w-[456px]">
            {!isPasswordResetted && (
              <div>
                <p className="mb-2 heading1">Reset Password</p>
                <p className="text-sm text-gray-500">
                  Hello! Enter your new passwords
                </p>
              </div>
            )}
            {isPasswordResetted ? (
              <div className="flex flex-col items-center gap-2 text-center text-primary">
                <p className="mb-8 text-black heading1">
                  Password Reset Successful
                </p>
                <GiHouseKeys className="text-6xl" />
                <p className="mb-6 font-semibold">
                  Congratulations! You have successfully resetted your password
                </p>
                <p className="text-center text-gray-500">
                  Go to{" "}
                  <Link href={Routes.LOGIN}>
                    <a className="text-blue-500 hover:text-blue-800">Login</a>
                  </Link>
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col gap-4">
                  <AuthInputField
                    type="password"
                    error={errors.password}
                    label="Password"
                    placeholder="Enter your password"
                    register={register("password")}
                  />
                  <AuthInputField
                    type="password"
                    error={errors.passwordConfirmation}
                    label="Confirm password"
                    placeholder="Enter your password again"
                    register={register("passwordConfirmation")}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <button className="custom-btn-secondary" type="submit">
                    Reset
                  </button>
                </div>
                <p className="text-center">
                  Go to{" "}
                  <Link href={Routes.LOGIN}>
                    <a className="text-blue-500 hover:text-blue-800">Login</a>
                  </Link>
                </p>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {},
  };
};

export default ResetPassword;
