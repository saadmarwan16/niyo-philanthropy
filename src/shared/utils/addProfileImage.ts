import { UserModel } from "../../modules/auth/data/models/user_model";
import profileController from "../../modules/profile/controllers/profile_controller";
import errorToast from "./errorToast";

const addProfileImage = async (
  files: FileList,
  user: UserModel,
  setUser: (user: UserModel) => void
) => {
  const formData = new FormData();
  formData.append("files", files[0]);
  const { error, results } = await profileController.addImage(formData, user!);
  if (error) {
    errorToast(error.name, error.message, "add-profile-image");
  } else {
    setUser(results);
  }
};

export default addProfileImage;
