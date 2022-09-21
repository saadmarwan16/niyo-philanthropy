import http from "../../../../shared/utils/http";
import { ConvertBlogsModel } from "../models/blogs_model";

export class BlogsProvider {
  getAll = async (query: string) => {
    const response = await http.get(`/blogs?${query}`);

    return ConvertBlogsModel.toBlogsModel(JSON.stringify(response.data));
  };
}

const blogsProvider = new BlogsProvider();
export default blogsProvider;
