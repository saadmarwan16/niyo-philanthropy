import { UserModel } from "../../auth/data/models/user_model";
import profileRepository from "../data/repositories/profile_repository";

export class ProfileController {
  addImage = async (formData: FormData, user: UserModel) => {
    return await profileRepository.addImage(formData, user);
  };

  updateImage = async (id: string, user: UserModel, formData: FormData) => {
    return await profileRepository.updateImage(id, user, formData);
  };

  deleteImage = async (id: string, user: UserModel) => {
    return await profileRepository.deleteImage(id, user);
  };

  getOne = async (token: string) => {
    const { error, results } = await profileRepository.getOne(token);

    return { error, profile: results };
  };
}

const profileController = new ProfileController();
export default profileController;
