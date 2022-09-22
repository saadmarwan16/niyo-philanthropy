import type { NextPage } from "next";
import Meta from "../../src/shared/components/Meta";
import Image from "next/image";
import Routes from "../../src/constants/routes";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInputField from "../../src/modules/auth/components/AuthInputField";
import { ILoginInputs } from "../../src/shared/types/interface";
import { useState } from "react";
import authRepository from "../../src/modules/auth/data/repositories/AuthRepository";
import errorToast from "../../src/shared/utils/errorToast";
import { useAuthContext } from "../../src/modules/auth/AuthContext";
import { useRouter } from "next/router";
import loginSchema from "../../src/constants/schemas/login_schema";

interface LoginPageProps {}

const Login: NextPage<LoginPageProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<ILoginInputs> = async (data) => {
    setLoading(true);
    authRepository
      .login(data)
      .then((res) => {
        const { error, results } = res;
        if (error) {
          errorToast(error.name, error.message, "register");
        } else {
          setUser(results);
          reset();
          router.push(Routes.HOME);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Meta titlePrefix="Login" />

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
            <div>
              <p className="mb-2 heading1">Login</p>
              <p className="text-sm text-gray-500">
                Welcome back. Please enter your details
              </p>
            </div>
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-4">
                <AuthInputField
                  error={errors.identifier}
                  label="Email or username"
                  placeholder="Enter your email or username"
                  register={register("identifier")}
                />
                <AuthInputField
                  type="password"
                  error={errors.password}
                  label="Password"
                  placeholder="Enter your password"
                  register={register("password")}
                />
                <div className="flex flex-wrap items-center justify-end">
                {/* <div className="flex flex-wrap items-center justify-between"> */}
                  {/* <div className="form-control">
                    <label className="cursor-pointer label !justify-start gap-3">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-xs md:checkbox-sm"
                        {...register("remember_me")}
                      />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div> */}

                  <Link href={Routes.FORGOT_PASSWORD}>
                    <a className="text-sm text-blue-500 hover:text-blue-800">
                      Forgot Password?
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button
                  className={`custom-btn-secondary ${loading && "loading"}`}
                  type="submit"
                >
                  Login
                </button>
                <button
                  type={"button"}
                  className="gap-6 normal-case btn btn-ghost btn-sm sm:btn-md"
                >
                  <FcGoogle className="text-xl" /> Login with Google
                </button>
              </div>
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <Link href={Routes.REGISTER}>
                  <a className="text-blue-500 hover:text-blue-800">Register</a>
                </Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
