import { FunctionComponent, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { object, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IDonateAmountInput } from "../../../shared/types/interface";
import { TDonationAmount } from "../../../shared/types/types";

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
  amount: number().required("Amount field is required"),
}).required();

const OneTimeDonation: FunctionComponent<OneTimeDonationProps> = () => {
  const [donationAmount, setDonationAmount] = useState<TDonationAmount>("10");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IDonateAmountInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 10,
    },
  });
  const onSubmit: SubmitHandler<IDonateAmountInput> = async (data) =>
    console.log(data);

  const updateDonationAmount = (value: TDonationAmount) => {
    if (value !== "Other") {
      setValue("amount", parseInt(value));
    }

    setDonationAmount(value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {amounts.map((amount, index) => (
          <button
            key={index}
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <button className="gap-3 custom-btn-secondary" type="submit">
            Next <BsChevronRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default OneTimeDonation;
