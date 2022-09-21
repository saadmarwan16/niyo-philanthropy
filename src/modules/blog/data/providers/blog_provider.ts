import http from "../../../../shared/utils/http";
import { ConvertBlogModel } from "../models/blog_model";

export class BlogProvider {
  getOne = async (id: string, query: string) => {
    const response = await http.get(`/blogs/${id}?${query}`);

    return ConvertBlogModel.toBlogModel(JSON.stringify(response.data));
  };
}

const blogProvider = new BlogProvider();
export default blogProvider;
