import { UserModel } from "../../modules/auth/data/models/user_model";
import profileController from "../../modules/profile/controllers/profile_controller";
import getUnexpectedError from "../errors/get_unexpected_error";
import errorToast from "./errorToast";

const deleteProfileImage = async (
  user: UserModel,
  setUser: (user: UserModel) => void
) => {
  const results = await profileController.deleteImage(
    user.profile_image!.id.toString(),
    user
  );
  if (results) {
    setUser(results);
  } else {
    const error = getUnexpectedError();
    errorToast(error.name, error.message, "delete-profile-image");
  }
};

export default deleteProfileImage;
