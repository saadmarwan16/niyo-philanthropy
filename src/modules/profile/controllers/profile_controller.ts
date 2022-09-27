import profileRepository from "../data/repositories/profile_repository";

export class ProfileController {
  getOne = async (token: string) => {
    const { error, results } = await profileRepository.getOne(token);

    return { error, profile: results };
  };
}

const profileController = new ProfileController();
export default profileController;
