import { FunctionComponent } from "react";
import { useAuthContext } from "../../auth/AuthContext";
import ProfileHeading from "./ProfileHeading";

interface WalletSectionProps {}

const WalletSection: FunctionComponent<WalletSectionProps> = () => {
  const { user } = useAuthContext();

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
      <button className="w-40 custom-btn-secondary sm:btn-wide">
        Top Up Wallet
      </button>
    </div>
  );
};

export default WalletSection;
