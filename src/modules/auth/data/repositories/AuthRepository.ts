import handleError from "../../../../shared/errors/handleError";
import {
  ILoginInputs,
  IRegisterInputs,
} from "../../../../shared/types/interface";
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

  loginWithGoogle = async (query: string) => {};

  registerWithGoogle = async () => {};

  forgotPassword = async (id: string, data: string) => {};

  resetPassword = async (id: string) => {};

  getQuery = () => {
    return getUserQuery();
  };
}

const authRepository = new AuthRepository();
export default authRepository;
