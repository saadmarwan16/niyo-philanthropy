import { ErrorModel } from "../../../shared/errors/error_model";
import { GalleryModel } from "../data/models/gallery_model";
import galleryRepository from "../data/repositories/gallery_repository";

export class GalleryController {
  gallery: GalleryModel | null = null;
  error: ErrorModel | null = null;

  getAll = async () => {
    const { error, results } = await galleryRepository.getAll();
    this.gallery = results;
    this.error = error;

    return { error, gallery: results };
  };
}

const galleryController = new GalleryController();
export default galleryController;
