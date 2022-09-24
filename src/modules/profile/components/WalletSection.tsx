import { yupResolver } from "@hookform/resolvers/yup";
import { FunctionComponent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import walletTopUpSchema from "../../../constants/schemas/wallet_top_up_schema";
import InputField from "../../../shared/components/InputField";
import getUnexpectedError from "../../../shared/errors/get_unexpected_error";
import { IWalletTopUp } from "../../../shared/types/interface";
import errorToast from "../../../shared/utils/errorToast";
import stripe from "../../../shared/utils/stripe";
import { useAuthContext } from "../../auth/AuthContext";
import paymentRepository from "../../payment/data/repositories/payment_repository";
import ProfileHeading from "./ProfileHeading";

interface WalletSectionProps {}

const WalletSection: FunctionComponent<WalletSectionProps> = () => {
  const [shouldShowForm, setShouldShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWalletTopUp>({
    defaultValues: { email: user?.email },
    resolver: yupResolver(walletTopUpSchema),
  });

  const onSubmit: SubmitHandler<IWalletTopUp> = async (data) => {
    if (user) {
      setIsLoading(true);
      const { error, results } = await paymentRepository.createWalletCheckout(
        user.jwt,
        data
      );
      if (error) {
        errorToast(error.name, error.name, "top-up");
      } else {
        stripe
          .then((res) => {
            res?.redirectToCheckout({
              sessionId: results,
            });
          })
          .catch(() => {
            const error = getUnexpectedError();
            errorToast(error.name, error.message, "top-up");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    } else {
      const error = getUnexpectedError();
      errorToast(error.name, error.message, "top-up");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <ProfileHeading
        title="My Wallet"
        description="Save money in your account for faster donations"
      />
      <div>
        <p className="text-gray-500">Account Balance:</p>
        <h3 className="heading3">
          ${user?.wallet_balance?.toFixed(2) ?? "NaN"}
        </h3>
      </div>
      <button
        className="w-40 custom-btn-secondary sm:btn-wide"
        onClick={() => setShouldShowForm(!shouldShowForm)}
      >
        {shouldShowForm ? "Hide Form" : "Top Up Wallet"}
      </button>
      {shouldShowForm && (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-3 md:w-4/5 lg:w-2/3">
            <InputField
              error={errors.email}
              isOptional={false}
              placeholder="Enter your email here"
              register={register("email")}
              title="Email"
              type="text"
              isDisabled={true}
            />
            <InputField
              error={errors.amount}
              isOptional={false}
              placeholder="Enter the amount you want"
              register={register("amount")}
              title="Amount"
              type="number"
              step={0.01}
            />
          </div>
          <button
            className={`w-40 custom-btn-secondary sm:btn-wide ${
              isLoading && "loading"
            }`}
          >
            Top Up
          </button>
        </form>
      )}
    </div>
  );
};

export default WalletSection;
