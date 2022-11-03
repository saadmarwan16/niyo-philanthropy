import { SUCCESS } from "../../../constants/strings";
import imagesProvider from "../providers/images_provider";

export class ImagesRepository {
  create = async (formData: FormData) => {
    try {
      return await imagesProvider.create(formData);
    } catch (_) {
      return null;
    }
  };

  update = async (id: string, formData: FormData) => {
    try {
      await imagesProvider.delete(id);

      return await imagesProvider.create(formData);
    } catch (_) {
      return null;
    }
  };

  delete = async (id: string) => {
    try {
      await imagesProvider.delete(id);

      return SUCCESS;
    } catch (_) {
      return null;
    }
  };
}

const imagesRepository = new ImagesRepository();
export default imagesRepository;
