import handleError from "../../../../shared/errors/handleError";
import blogsProvider from "../providers/blogs_provider";
import getBlogsQuery from "../queries/get_blogs_query";

export class BlogsRepository {
  getAll = async (page: number) => {
    try {
      const results = await blogsProvider.getAll(this.getQuery(page));

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = (page: number) => {
    return getBlogsQuery(page);
  };
}

const blogsRepository = new BlogsRepository();
export default blogsRepository;
