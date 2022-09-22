import http from "../../../../shared/utils/http";
import { ConvertGalleryModel } from "../models/gallery_model";

export class GalleryProvider {
  getAll = async (query: string) => {
    const response = await http.get(`/gallery?${query}`);

    return ConvertGalleryModel.toGalleryModel(JSON.stringify(response.data));
  };
}

const galleryProvider = new GalleryProvider();
export default galleryProvider;
