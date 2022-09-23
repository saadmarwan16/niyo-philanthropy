import { SUCCESS } from "../../../../constants/strings";
import handleError from "../../../../shared/errors/handleError";
import {
  IChangePasswordInputs,
  IForgotPasswordInputs,
  ILoginInputs,
  IProfileInputs,
  IRegisterInputs,
  IResetPasswordInputs,
} from "../../../../shared/types/interface";
import { UserModel } from "../models/user_model";
import authProvider from "../providers/AuthProvider";
import getUserQuery from "../queries/get_user_query";

export class AuthRepository {
  login = async (data: ILoginInputs) => {
    try {
      const results = await authProvider.login(
        this.getQuery(),
        JSON.stringify(data)
      );

      return {
        error: null,
        results,
      };
    } catch (err) {
      return handleError(err);
    }
  };

  register = async (data: IRegisterInputs) => {
    try {
      const results = await authProvider.register(
        this.getQuery(),
        JSON.stringify(data)
      );

      return {
        error: null,
        results,
      };
    } catch (err) {
      return handleError(err);
    }
  };

  signInWithGoogle = async (query: string) => {};

  changePassword = async (user: UserModel, data: IChangePasswordInputs) => {
    try {
      const results = await authProvider.changePassword(
        user,
        JSON.stringify(data)
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  updateUserInformation = async (user: UserModel, data: IProfileInputs) => {
    try {
      const results = await authProvider.updateUserInformation(
        user,
        JSON.stringify(data)
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  forgotPassword = async (data: IForgotPasswordInputs) => {
    try {
      await authProvider.forgotPassword(JSON.stringify(data));

      return { error: null, results: SUCCESS };
    } catch (err) {
      return handleError(err);
    }
  };

  resetPassword = async (data: IResetPasswordInputs) => {
    try {
      await authProvider.resetPassword(JSON.stringify(data));

      return { error: null, results: SUCCESS };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = () => {
    return getUserQuery();
  };
}

const authRepository = new AuthRepository();
export default authRepository;
