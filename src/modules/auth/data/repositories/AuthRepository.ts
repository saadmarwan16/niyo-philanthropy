import handleError from "../../../../shared/errors/handleError";
import {
  ILoginInputs,
  IRegisterInputs,
} from "../../../../shared/types/interface";
import authProvider from "../providers/AuthProvider";

export class AuthRepository {
  login = async (data: ILoginInputs) => {
    try {
      const results = await authProvider.login(JSON.stringify(data));

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
      const results = await authProvider.register(JSON.stringify(data));

      return {
        error: null,
        results,
      };
    } catch (err) {
      return handleError(err);
    }
  };

  loginWithGoogle = async (query: string) => {};

  registerWithGoogle = async () => {};

  forgotPassword = async (id: string, data: string) => {};

  resetPassword = async (id: string) => {};
}

const authRepository = new AuthRepository();
export default authRepository;
