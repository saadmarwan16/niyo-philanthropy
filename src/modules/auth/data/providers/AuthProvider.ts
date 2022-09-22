import http from "../../../../shared/utils/http";
import { ConvertUserModel } from "../models/user_model";

export class AuthProvider {
  login = async (query: string, data: string) => {
    const authResponse = await http.post("/auth/local", data);
    const response = await http.get(
      `/users/${authResponse.data.user.id}?${query}`
    );

    return ConvertUserModel.toUserModel(
      JSON.stringify({
        ...response.data,
        jwt: authResponse.data.jwt,
      })
    );
  };

  register = async (query: string, data: string) => {
    const authResponse = await http.post("/auth/local/register", data);
    const response = await http.get(
      `/users/${authResponse.data.user.id}?${query}`
    );

    console.log({
      ...response.data,
      jwt: authResponse.data.jwt,
    });

    return ConvertUserModel.toUserModel(
      JSON.stringify({
        ...response.data,
        jwt: authResponse.data.jwt,
      })
    );
  };

  loginWithGoogle = async (query: string) => {};

  registerWithGoogle = async () => {};

  forgotPassword = async (id: string, data: string) => {};

  resetPassword = async (id: string) => {};
}

const authProvider = new AuthProvider();
export default authProvider;
