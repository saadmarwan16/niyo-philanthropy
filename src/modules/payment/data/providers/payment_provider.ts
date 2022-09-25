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

  createDonationCheckout = async (data: string) => {
    const response = await http.post("/donations", data);

    return response.data.checkout_session as string;
  };

  confirmDonationCheckout = async (data: string) => {
    const response = await http.post("/donations/confirm-donation", data);

    return response.data;
  };
}

const paymentProvider = new PaymentProvider();
export default paymentProvider;
