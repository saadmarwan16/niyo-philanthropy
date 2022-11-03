import imagesController from "../../../../shared/controllers/images_controller";
import http from "../../../../shared/utils/http";
import { ConvertProfileModel } from "../models/profile_model";

export class ProfileProvider {
  addImage = async (formData: FormData) => {
    const results = await imagesController.create(formData);
    if (results) {
      const imageDetails = {
        id: results[0].id,
        url: results[0].url,
      };

      return imageDetails;
    } else {
      return null;
    }
  };

  updateImage = async (id: string, formData: FormData) => {
    const results = await imagesController.update(id, formData);
    if (results) {
      const imageDetails = {
        id: results[0].id,
        url: results[0].url,
      };

      return imageDetails;
    } else {
      return null;
    }
  };

  deleteImage = async (id: string) => {
    return await imagesController.delete(id);
  };

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
