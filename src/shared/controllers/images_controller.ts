import imagesRepository from "../data/repositories/images_repository";

export class ImagesController {
  create = async (formData: FormData) => {
    return await imagesRepository.create(formData);
  };

  update = async (id: string, formData: FormData) => {
    return await imagesRepository.update(id, formData);
  };

  delete = async (id: string) => {
    return await imagesRepository.delete(id);
  };
}

const imagesController = new ImagesController();
export default imagesController;
