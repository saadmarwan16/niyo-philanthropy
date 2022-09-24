import type { GetServerSideProps, NextPage } from "next";
import Header from "../src/shared/components/Header";
import Meta from "../src/shared/components/Meta";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";
import Routes from "../src/constants/routes";
import { useCallback, useEffect, useState } from "react";
import { ErrorModel } from "../src/shared/errors/error_model";
import { useRouter } from "next/router";
import paymentRepository from "../src/modules/payment/data/repositories/payment_repository";
import { useAuthContext } from "../src/modules/auth/AuthContext";
import errorToast from "../src/shared/utils/errorToast";
import { TPaymentType } from "../src/shared/types/types";

interface PaymentSuccessPageProps {
  checkout_session: string;
  payment_type: TPaymentType;
}

const PaymentSuccess: NextPage<PaymentSuccessPageProps> = ({
  checkout_session,
  payment_type,
}) => {
  const [error, setError] = useState<ErrorModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  //   const router = useRouter();
  const { user, setUser } = useAuthContext();

  const confirmPayment = useCallback(async () => {
    if (user && checkout_session && payment_type === "wallet") {
      console.log("started processing");
      setIsLoading(true);
      const { error, results } = await paymentRepository.confirmWalletCheckout(
        user,
        JSON.stringify({ checkout_session })
      );
      setIsLoading(false);
      if (error) {
        setError(error);
        errorToast(error.name, error.message, "payment-success");
      } else {
        setUser(results);
      }
    }
  }, []);

  useEffect(() => {
    console.log("use effect");
    confirmPayment();
  }, [confirmPayment]);

  return (
    <div>
      <Meta titlePrefix="Payment Successful" />

      <div className="flex flex-col w-full min-h-screen">
        <div className="px-4 py-1 text-white md:py-4 bg-primary">
          <Header />
        </div>

        <div className="flex items-center justify-center flex-grow">
          {error ? (
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-3">
                <h1 className="heading1">Payment Error</h1>
                <MdOutlineCancel className="text-9xl text-primary" />
              </div>

              <div className="flex flex-col items-center gap-4">
                <span className="heading3 text-primary">
                  We encountered an error while trying to process your payment
                </span>
                <button className="!px-10 sm:!px-12 md:!px-14 custom-btn-secondary">
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <>
              {isLoading ? (
                <div className="flex flex-col items-center gap-12">
                  <h1 className="heading1">Payment Processing</h1>
                  <div className="py-8">
                    <BeatLoader color={"#59C3C3"} size={20} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-12">
                  <div className="flex flex-col items-center gap-3">
                    <h1 className="heading1">Payment Successful</h1>
                    <BsFillPatchCheckFill className="text-9xl text-primary" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <span className="heading3 text-primary">
                      Your payment was completed successfully
                    </span>
                    <Link href={Routes.HOME}>
                      <a className="!px-10 sm:!px-12 md:!px-14 custom-btn-secondary">
                        Go Home
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const checkout_session = query.checkout_session;
  const payment_type = query.payment_type;

  return {
    props: {
      checkout_session,
      payment_type,
    },
  };
};

export default PaymentSuccess;
