import getUnexpectedError from "../../../../shared/errors/get_unexpected_error";
import {
  ICreateCheckout,
  IWalletTopUp,
} from "../../../../shared/types/interface";
import paymentProvider from "../providers/payment_provider";

export class PaymentRepository {
  createWalletCheckout = async (token: string, data: IWalletTopUp) => {
    try {
      const checkoutData: ICreateCheckout = {
        name: "Top up your account balance",
        description:
          "Load money into your account to make donations easier to do. THANK YOU for support",
        amount: data.amount,
        email: data.email,
        mode: "payment",
        submit_type: "pay",
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

  confirmWalletCheckout = async (id: string) => {};

  createDonationCheckout = async (query: string) => {};

  confirmDonationCheckout = async () => {};

  createSubscriptionCheckout = async (id: string, data: string) => {};

  confirmSubscriptionCheckout = async (id: string) => {};
}

const paymentRepository = new PaymentRepository();
export default paymentRepository;
