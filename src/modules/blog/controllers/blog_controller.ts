import { ErrorModel } from "../../../shared/errors/error_model";
import { BlogModel } from "../data/models/blog_model";
import blogRepository from "../data/repositories/blog_repository";

export class BlogController {
  blog: BlogModel | null = null;
  error: ErrorModel | null = null;

  getOne = async (id: string) => {
    const { error, results } = await blogRepository.getOne(id);
    this.blog = results;
    this.error = error;

    return { error, blog: results };
  };
}

const blogController = new BlogController();
export default blogController;
