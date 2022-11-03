import { UserModel } from "../../modules/auth/data/models/user_model";
import profileController from "../../modules/profile/controllers/profile_controller";
import errorToast from "./errorToast";

const updateProfileImage = async (
  files: FileList,
  user: UserModel,
  setUser: (user: UserModel) => void
) => {
  const formData = new FormData();
  formData.append("files", files[0]);
  const { error, results } = await profileController.updateImage(
    user.profile_image!.id.toString(),
    user!,
    formData
  );
  if (error) {
    errorToast(error.name, error.message, "add-profile-image");
  } else {
    setUser(results);
  }
};

export default updateProfileImage;
