import handleError from "../../../../shared/errors/handleError";
import galleryProvider from "../providers/gallery_provider";
import getGalleryQuery from "../queries/get_gallery_query";

export class GalleryRepository {
  getAll = async () => {
    try {
      const results = await galleryProvider.getAll(this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = () => {
    return getGalleryQuery();
  };
}

const galleryRepository = new GalleryRepository();
export default galleryRepository;
