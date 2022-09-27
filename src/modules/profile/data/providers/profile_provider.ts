import http from "../../../../shared/utils/http";
import { ConvertProfileModel } from "../models/profile_model";

export class ProfileProvider {
  getOne = async (token: string, query: string) => {
    const response = await http.get(`users/me?${query}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return ConvertProfileModel.toProfileModel(JSON.stringify(response.data));
  };

  createWalletCheckout = async (token: string, data: string) => {
    const response = await http.post("/receipts", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.checkout_session;
  };

  confirmWalletCheckout = async (token: string, data: string) => {
    const response = await http.post(
      "/receipt/confirm-receipt-checkout",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };

  makeWalletDonation = async (token: string, data: string) => {
    const response = await http.post("/make-wallet-donation", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };
}

const profileProvider = new ProfileProvider();
export default profileProvider;
