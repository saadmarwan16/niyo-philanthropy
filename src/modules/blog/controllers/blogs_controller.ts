import { ErrorModel } from "../../../shared/errors/error_model";
import { BlogsModel } from "../data/models/blogs_model";
import blogsRepository from "../data/repositories/blogs_repository";

export class BlogsController {
  blogs: BlogsModel | null = null;
  error: ErrorModel | null = null;

  getAll = async (page?: number) => {
    const { error, results } = await blogsRepository.getAll(page ?? 1);
    this.blogs = results;
    this.error = error;

    return { error, blogs: results };
  };
}

const blogsController = new BlogsController();
export default blogsController;
