import nookies from "nookies";
import Routes from "../../constants/routes";
import { ConvertUserModel } from "../../modules/auth/data/models/user_model";
import Encryption from "./encryption";

const validateServerUser = async (
  ctx: any,
  callback: (token: string) => any
) => {
  const userString = nookies.get(ctx).user;
  if (!userString) {
    return {
      redirect: {
        destination: Routes.LOGIN,
        permanent: false,
      },
    };
  }

  const user = ConvertUserModel.toUserModel(Encryption.decrypt(userString));

  return await callback(user.jwt);
};

export default validateServerUser;
