import http from "../../../../shared/utils/http";
import { ConvertUserModel, UserModel } from "../models/user_model";

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

    return ConvertUserModel.toUserModel(
      JSON.stringify({
        ...response.data,
        jwt: authResponse.data.jwt,
      })
    );
  };

  changePassword = async (user: UserModel, data: string) => {
    const response = await http.post("/auth/change-password", data, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    });

    const transformedResponse = {
      ...user,
      jwt: response.data.jwt,
    };

    return ConvertUserModel.toUserModel(JSON.stringify(transformedResponse));
  };

  updateUserInformation = async (user: UserModel, data: string) => {
    const response = await http.put("/users-permissions/users/me", data, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    });

    const transformedResponse = {
      ...response.data,
      jwt: user.jwt,
      role: user.role,
      profile_image: user.profile_image,
    };

    return ConvertUserModel.toUserModel(JSON.stringify(transformedResponse));
  };

  forgotPassword = async (data: string) => {
    await http.post("/auth/forgot-password", data);
  };

  resetPassword = async (data: string) => {
    await http.post("/auth/reset-password", data);
  };
}

const authProvider = new AuthProvider();
export default authProvider;
