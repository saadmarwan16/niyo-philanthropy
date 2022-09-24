import http from "../../../../shared/utils/http";
import { ConvertCheckoutSessionModel } from "../models/checkout_session_model";

export class PaymentProvider {
  createWalletCheckout = async (token: string, data: string) => {
    const response = await http.post("/create-wallet-topup-session", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.id as string;
  };

  confirmWalletCheckout = async (token: string, data: string) => {
    const response = await http.post("/confirm-wallet-topup-session", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return ConvertCheckoutSessionModel.toCheckoutSessionModel(
      JSON.stringify(response.data)
    );
  };

  createDonationCheckout = async (query: string) => {};

  confirmDonationCheckout = async () => {};

  createSubscriptionCheckout = async (id: string, data: string) => {};

  confirmSubscriptionCheckout = async (id: string) => {};
}

const paymentProvider = new PaymentProvider();
export default paymentProvider;
