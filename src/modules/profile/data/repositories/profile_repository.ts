import getUnexpectedError from "../../../../shared/errors/get_unexpected_error";
import handleError from "../../../../shared/errors/handleError";
import {
  ICreateWalletCheckout,
  IWalletTopUp,
} from "../../../../shared/types/interface";
import { UserModel } from "../../../auth/data/models/user_model";
import profileProvider from "../providers/profile_provider";
import getProfileQuery from "../queries/get_profile_query";

export class ProfileRepository {
  addImage = async (formData: FormData, user: UserModel) => {
    const imageDetails = await profileProvider.addImage(formData);
    // console.log(imageDetails);
    if (imageDetails) {
      const currentUser: UserModel = {
        ...user,
        profile_image: imageDetails,
      };

      return { error: null, results: currentUser };
    } else {
      return { error: getUnexpectedError(), results: null };
    }
  };

  updateImage = async (id: string, user: UserModel, formData: FormData) => {
    const imageDetails = await profileProvider.updateImage(id, formData);
    if (imageDetails) {
      const currentUser: UserModel = {
        ...user,
        profile_image: imageDetails,
      };

      return { error: null, results: currentUser };
    } else {
      return { error: getUnexpectedError(), results: null };
    }
  };

  deleteImage = async (id: string, user: UserModel) => {
    const results = await profileProvider.deleteImage(id);
    if (results) {
      const currentUser: UserModel = {
        ...user,
        profile_image: null,
      };

      return currentUser;
    } else {
      return null;
    }
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
