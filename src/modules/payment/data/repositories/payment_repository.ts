import getUnexpectedError from "../../../../shared/errors/get_unexpected_error";
import handleError from "../../../../shared/errors/handleError";
import {
  ICreateCheckout,
  ICreateWalletCheckout,
  IWalletTopUp,
} from "../../../../shared/types/interface";
import { UserModel } from "../../../auth/data/models/user_model";
import authProvider from "../../../auth/data/providers/AuthProvider";
import paymentProvider from "../providers/payment_provider";

export class PaymentRepository {
  createWalletCheckout = async (token: string, data: IWalletTopUp) => {
    try {
      const checkoutData: ICreateWalletCheckout = {
        name: "Top up your account balance",
        description:
          "Load money into your account to make donations easier to do. THANK YOU for support",
        amount: data.amount,
        email: data.email,
        mode: "payment",
        submit_type: "pay",
        payment_type: "wallet",
        image_url:
          "https://res.cloudinary.com/dp4gyhksm/image/upload/v1661092230/large_image4_d374ac602d.jpg",
      };

      const results = await paymentProvider.createWalletCheckout(
        token,
        JSON.stringify(checkoutData)
      );
      console.log(results);

      return { error: null, results };
    } catch (err) {
      return { error: getUnexpectedError(), results: null };
    }
  };

  confirmWalletCheckout = async (user: UserModel, data: string) => {
    try {
      const paymentResults = await paymentProvider.confirmWalletCheckout(
        user.jwt,
        data
      );
      console.log("Payment results before: ", paymentResults);
      if (paymentResults) {
        console.log("Payment results after: ", paymentResults);
        const wallet_balance =
          user.wallet_balance + paymentResults.amount_total / 100;
        const results = await authProvider.updateUserInformation(
          user,
          JSON.stringify({ wallet_balance })
        );

        return { error: null, results };
      } else {
        console.log("came here as unexpected");
        return { error: getUnexpectedError(), results: null };
      }
    } catch (err) {
      return handleError(err);
    }
  };

  createDonationCheckout = async (data: ICreateCheckout) => {
    try {
      const results = await paymentProvider.createDonationCheckout(
        JSON.stringify({ data })
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  confirmDonationCheckout = async (checkout_session: string) => {
    try {
      const results = await paymentProvider.confirmDonationCheckout(
        JSON.stringify({ checkout_session })
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  createSubscriptionCheckout = async (id: string, data: string) => {};

  confirmSubscriptionCheckout = async (id: string) => {};

  //   createWalletCheckout = async (data: string) => {
  //     createCheckoutRepository.create({
  //       name: "Top up your account balance",
  //       description:
  //         "Load money into your donation to make donations easier to do. Thank you for support",
  //       amount: 81.29,
  //       email: "mario@email.com",
  //       mode: "payment",
  //       submit_type: "pay",
  //       //   recurring: { interval: "month", interval_count: 1 },
  //       image_url:
  //         "https://res.cloudinary.com/dp4gyhksm/image/upload/v1661092230/large_image4_d374ac602d.jpg",
  //     });
  //   };
}

const paymentRepository = new PaymentRepository();
export default paymentRepository;
