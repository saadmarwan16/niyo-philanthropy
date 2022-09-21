import handleError from "../../../../shared/errors/handleError";
import blogProvider from "../providers/blog_provider";
import getBlogQuery from "../queries/get_blog_query";

export class BlogRepository {
  getOne = async (id: string) => {
    try {
      const results = await blogProvider.getOne(id, this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = () => {
    return getBlogQuery();
  };
}

const blogRepository = new BlogRepository();
export default blogRepository;
