import http from "../../utils/http";

export class ImagesProvider {
  create = async (formData: FormData) => {
    const response = await http.post("/upload", formData);

    return response.data;
  };

  delete = async (id: string) => {
    await http.delete(`/upload/files/${id}`);
  };
}

const imagesProvider = new ImagesProvider();
export default imagesProvider;
