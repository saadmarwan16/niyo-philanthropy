import { FunctionComponent, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { object, number, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ICreateCheckout,
  IDonateAmountInput,
} from "../../../shared/types/interface";
import { TDonationAmount } from "../../../shared/types/types";
import { useAuthContext } from "../../auth/AuthContext";
import paymentRepository from "../../payment/data/repositories/payment_repository";
import errorToast from "../../../shared/utils/errorToast";
import stripe from "../../../shared/utils/stripe";
import InputField from "../../../shared/components/InputField";

interface OneTimeDonationProps {}

const amounts: TDonationAmount[] = [
  "10",
  "20",
  "50",
  "100",
  "250",
  "500",
  "1000",
  "Other",
];

const schema = object({
  email: string().email("Enter a valid email").required("Email is required"),
  amount: number().required("Amount field is required"),
}).required();

const OneTimeDonation: FunctionComponent<OneTimeDonationProps> = () => {
  const [donationAmount, setDonationAmount] = useState<TDonationAmount>("10");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IDonateAmountInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: user?.email,
      amount: 10,
    },
  });
  const onSubmit: SubmitHandler<IDonateAmountInput> = async (data) => {
    const checkoutData: ICreateCheckout = {
      name: "Your donations are always appreciated",
      description:
        "The donations you make can bring about big changes to the lives of others. THANK YOU for support",
      amount: data.amount,
      email: data.email,
      submit_type: "donate",
      payment_type: "donation",
      image_url:
        "https://res.cloudinary.com/dp4gyhksm/image/upload/v1661092230/large_image4_d374ac602d.jpg",
      donor: user?.id,
      campaign: 1,
    };
    setIsLoading(true);
    const { error, results } = await paymentRepository.createDonationCheckout(
      checkoutData
    );
    setIsLoading(false);
    if (error) {
      errorToast(error.name, error.message, "donation");
    } else {
      stripe.then((res) => {
        res?.redirectToCheckout({
          sessionId: results,
        });
      });
    }
  };

  const updateDonationAmount = (value: TDonationAmount) => {
    if (value !== "Other") {
      setValue("amount", parseInt(value));
    }

    setDonationAmount(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="w-full form-control">
          <label className="label">
            <span className="font-semibold label-text">Email</span>
          </label>

          <input
            placeholder="Enter your email here"
            className={`custom-input !bg-base-300 ${
              errors.email?.message && "!border-error"
            }`}
            {...register("email")}
          />

          {errors.email?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.email?.message}
              </span>
            </label>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {amounts.map((amount, index) => (
            <button
              key={index}
              type={"button"}
              className={
                donationAmount === amount
                  ? "custom-btn-secondary"
                  : "custom-btn-secondary-outline"
              }
              onClick={() => updateDonationAmount(amount)}
            >
              {amount !== "Other" && "$"} {amount}
            </button>
          ))}
        </div>
        {donationAmount === "Other" && (
          <div className="w-full mt-2 form-control">
            <label className="label">
              <span className="font-semibold label-text">
                Enter your own amount
              </span>
            </label>

            <input
              type={"number"}
              placeholder="Enter amount here"
              className={`custom-input !bg-base-300 ${
                errors.amount?.message && "!border-error"
              }`}
              {...register("amount")}
            />

            {errors.amount && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.amount.message}
                </span>
              </label>
            )}
          </div>
        )}
        <div className="mt-6">
          <p className="mb-2 font-semibold text-primary">
            Will help provide {watch("amount") * 8} books
          </p>
          <p className="mt-2 font-semibold text-primary">
            Will help provide {watch("amount") * 5} meals
          </p>
          <p className="mt-2 font-semibold text-primary">
            Will help provide {watch("amount") * 1} sanitary pads
          </p>
        </div>
        <div className="flex flex-wrap gap-6 mt-10">
          <button
            className="gap-3 custom-btn-secondary-outline btn-outline"
            type="submit"
          >
            Use My Wallet <GiWallet />
          </button>
          <button
            className={`gap-3 custom-btn-secondary ${isLoading && "loading"}`}
            type="submit"
          >
            Next <BsChevronRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default OneTimeDonation;
