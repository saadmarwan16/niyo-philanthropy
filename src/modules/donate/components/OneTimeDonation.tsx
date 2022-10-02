import { FunctionComponent, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  ICreateCheckout,
  IDonateAmountInput,
} from "../../../shared/types/interface";
import { TDonationAmount, TPaymentType } from "../../../shared/types/types";
import { useAuthContext } from "../../auth/AuthContext";
import paymentRepository from "../../payment/data/repositories/payment_repository";
import errorToast from "../../../shared/utils/errorToast";
import stripe from "../../../shared/utils/stripe";
import { Campaign } from "../data/models/donate_page_model";
import donationSchema from "../../../constants/schemas/donation_schema";
import amounts from "../../../constants/amounts";
import SelectDonationCampaign from "./SelectDonationCampaign";
import { BASE_URL } from "../../../constants/urls";
import WalletDonationCompletedModal from "./WalletDonationCompletedModal";
import profileRepository from "../../profile/data/repositories/profile_repository";
import AuthModal from "../../auth/components/AuthModal";

interface OneTimeDonationProps {
  campaigns: Campaign[];
}

const OneTimeDonation: FunctionComponent<OneTimeDonationProps> = ({
  campaigns,
}) => {
  const [donationAmount, setDonationAmount] = useState<TDonationAmount>("10");
  const [donationType, setDonationType] = useState<TPaymentType | null>(null);
  const [isCheckoutDonation, setIsCheckoutDonation] = useState(false);
  const [isWalletDonation, setIsWalletDonation] = useState(false);
  const [isWalletDonationModalOpen, setIsWalletDonationModalOpen] =
    useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IDonateAmountInput>({
    resolver: yupResolver(donationSchema),
    defaultValues: {
      email: user?.email,
      amount: 10,
    },
  });
  const onSubmit: SubmitHandler<IDonateAmountInput> = async (data) => {
    if (donationType === "donation") {
      const donationCampaign = campaigns.find(
        (campaign) => campaign.id === data.campaign
      );
      const image = donationCampaign?.image?.url
        ? `${BASE_URL}${donationCampaign.image.url}`
        : null;
      const checkoutData: ICreateCheckout = {
        name:
          donationCampaign?.title ?? "Your donations are always appreciated",
        description:
          "The donations you make can bring about big changes to the lives of others. THANK YOU for support",
        amount: data.amount,
        email: data.email,
        submit_type: "donate",
        payment_type: "donation",
        image_url: image,
        donor: user?.id,
        campaign: data.campaign, 
      };
      setIsCheckoutDonation(true);
      const { error, results } = await paymentRepository.createDonationCheckout(
        checkoutData
      );
      setIsCheckoutDonation(false);
      if (error) {
        errorToast(error.name, error.message, "donation");
      } else {
        stripe.then((res) => {
          res?.redirectToCheckout({
            sessionId: results,
          });
        });
      }
    } else if (donationType === "wallet") {
      if (user) {
        setIsWalletDonation(true);
        profileRepository
          .makeWalletDonation(user.jwt, {
            amount: data.amount,
            campaign: data.campaign,
          })
          .then((res) => {
            const { error } = res;
            if (error) {
              errorToast(error.name, error.message, "donation");
            } else {
              setIsWalletDonationModalOpen(true);
            }
          })
          .finally(() => setIsWalletDonation(false));
      } else {
        setIsAuthModalOpen(true);
      }
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
      <WalletDonationCompletedModal isModalOpen={isWalletDonationModalOpen} />
      <AuthModal
        isModalOpen={isAuthModalOpen}
        setIsModalOpen={() => setIsAuthModalOpen(false)}
      />
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
        <SelectDonationCampaign
          campaigns={campaigns}
          error={errors.campaign}
          register={register("campaign")}
        />
        <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3">
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
          <button type={"submit"}>
            <label
              htmlFor="auth-modal"
              className={`gap-3 custom-btn-secondary-outline btn-outline  ${
                isWalletDonation && "loading"
              }`}
              onClick={() => setDonationType("wallet")}
            >
              Use My Wallet
              <GiWallet />
            </label>
          </button>
          <button
            className={`gap-3 custom-btn-secondary ${
              isCheckoutDonation && "loading"
            }`}
            type={"submit"}
            value="donation"
            onClick={() => setDonationType("donation")}
          >
            Next <BsChevronRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default OneTimeDonation;
