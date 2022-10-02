import Link from "next/link";
import { FunctionComponent } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Routes from "../../../constants/routes";

interface WalletDonationCompletedModalProps {
  isModalOpen: boolean;
}

const WalletDonationCompletedModal: FunctionComponent<
  WalletDonationCompletedModalProps
> = ({ isModalOpen }) => {
  return (
    <>
      <input
        type="checkbox"
        id="wallet-donation-completed"
        checked={isModalOpen}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="flex flex-col items-center justify-center modal-box">
          <h3 className="text-lg font-bold">Payment Successful</h3>
          <BsFillPatchCheckFill className="text-6xl sm:text-7xl text-primary" />
          <p className="py-4">Your payment was completed successfully</p>
          <div className="modal-action">
            <Link href={Routes.HOME}>
              <a className="custom-btn-secondary">
                Go Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletDonationCompletedModal;
