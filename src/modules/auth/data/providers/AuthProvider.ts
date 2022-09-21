import http from "../../../../shared/utils/http";
import { ConvertAuthModel } from "../models/AuthModel";

export class AuthProvider {
  login = async (data: string) => {
    const response = await http.post("/auth/local", data);

    return ConvertAuthModel.toAuthModel(JSON.stringify(response.data));
  };

  register = async (data: string) => {
    const response = await http.post("/auth/local/register", data);

    return ConvertAuthModel.toAuthModel(JSON.stringify(response.data));
  };

  loginWithGoogle = async (query: string) => {};

  registerWithGoogle = async () => {};

  forgotPassword = async (id: string, data: string) => {};

  resetPassword = async (id: string) => {};
}

const authProvider = new AuthProvider();
export default authProvider;
