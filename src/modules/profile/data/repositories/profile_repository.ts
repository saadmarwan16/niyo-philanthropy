import handleError from "../../../../shared/errors/handleError";
import {
  ICreateWalletCheckout,
  IWalletTopUp,
} from "../../../../shared/types/interface";
import profileProvider from "../providers/profile_provider";
import getProfileQuery from "../queries/get_profile_query";

export class ProfileRepository {
  addImage = async () => {
    await profileProvider.addImage()
  };

  updateImage = async () => {
    await profileProvider.updateImage()
  };

  deleteImage = async () => {
    await profileProvider.deleteImage()
  };

  getOne = async (token: string) => {
    try {
      const results = await profileProvider.getOne(token, this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  createWalletCheckout = async (token: string, data: IWalletTopUp) => {
    const checkoutData: ICreateWalletCheckout = {
      name: "Top up your account balance",
      description:
        "Load money into your account to make donations easier to do. THANK YOU for your support",
      amount: data.amount,
      email: data.email,
      submit_type: "pay",
      payment_type: "wallet",
    };
    try {
      const results = await profileProvider.createWalletCheckout(
        token,
        JSON.stringify({ data: checkoutData })
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  confirmWalletCheckout = async (
    token: string,
    data: { checkout_session: string }
  ) => {
    try {
      const results = await profileProvider.confirmWalletCheckout(
        token,
        JSON.stringify(data)
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  makeWalletDonation = async (
    token: string,
    data: {
      amount: number;
      campaign: number;
    }
  ) => {
    try {
      const results = await profileProvider.makeWalletDonation(
        token,
        JSON.stringify(data)
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = () => {
    return getProfileQuery();
  };
}

const profileRepository = new ProfileRepository();
export default profileRepository;
