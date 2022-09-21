import type { NextPage } from "next";
import Link from "next/link";
import Routes from "../../src/constants/routes";
import Meta from "../../src/shared/components/Meta";
import Image from "next/image";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthInputField from "../../src/modules/auth/components/AuthInputField";
import { IRegisterInputs } from "../../src/shared/types/interface";
import { useState } from "react";
import authRepository from "../../src/modules/auth/data/repositories/AuthRepository";
import errorToast from "../../src/shared/utils/errorToast";
import { useAuthContext } from "../../src/modules/auth/AuthContext";
import { useRouter } from "next/router";
import registerSchema from "../../src/constants/schemas/register_schema";

interface RegisterPageProps {}

const Register: NextPage<RegisterPageProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuthContext();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegisterInputs>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<IRegisterInputs> = async (data) => {
    setLoading(true);
    authRepository
      .register(data)
      .then((res) => {
        const { error, results } = res;
        if (error) {
          errorToast(error.name, error.message, "register");
          return;
        }

        setUser(results);
        reset();
        router.push(Routes.HOME);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Meta titlePrefix="Register" />

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
              <p className="mb-2 heading1">Register</p>
              <p className="text-sm text-gray-500">
                Welcome. Please enter your details
              </p>
            </div>
            <form
              className="flex flex-col gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-4">
                <AuthInputField
                  error={errors.username}
                  label="Username"
                  placeholder="Choose your username"
                  register={register("username")}
                />
                <AuthInputField
                  error={errors.email}
                  label="Email"
                  placeholder="Enter your email"
                  register={register("email")}
                />
                <AuthInputField
                  type="password"
                  error={errors.password}
                  label="Password"
                  placeholder="Choose your password"
                  register={register("password")}
                />
                <AuthInputField
                  type="password"
                  error={errors.confirm_password}
                  label="Confirm password"
                  placeholder="Enter your password again"
                  register={register("confirm_password")}
                />
              </div>
              <div className="flex flex-col gap-4">
                <button
                  className={`custom-btn-secondary ${loading && "loading"}`}
                  type="submit"
                >
                  Register
                </button>
                <button type={'button'} className="gap-6 normal-case btn btn-ghost btn-sm sm:btn-md">
                  <FcGoogle className="text-xl" /> Register with Google
                </button>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <Link href={Routes.LOGIN}>
                  <a className="text-blue-500 hover:text-blue-800">Login</a>
                </Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
