import type { NextPage } from "next";
import Header from "../src/shared/components/Header";
import Meta from "../src/shared/components/Meta";
import { MdOutlineCancel } from "react-icons/md";

interface PaymentCancelPageProps {}

const PaymentCancel: NextPage<PaymentCancelPageProps> = ({}) => {
  return (
    <div>
      <Meta titlePrefix="Payment Cancel" />

      <div className="flex flex-col w-full min-h-screen">
        <div className="px-4 py-1 text-white md:py-4 bg-primary">
          <Header />
        </div>

        <div className="flex items-center justify-center flex-grow">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <h1 className="heading1">Payment Cancelled</h1>
              <MdOutlineCancel className="text-9xl text-primary" />
            </div>
            <span className="heading3 text-primary">
              Your payment could not complete as it was cancelled
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
