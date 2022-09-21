import { ILoginInputs, IRegisterInputs } from "../../../shared/types/interface";

export class AuthController {
  login = async (data: ILoginInputs) => {};

  register = async (data: IRegisterInputs) => {};

  loginWithGoogle = async (query: string) => {};

  registerWithGoogle = async () => {};

  forgotPassword = async (id: string, data: string) => {};

  resetPassword = async (id: string) => {};
}

const authController = new AuthController();
export default authController;
