import handleError from "../../../../shared/errors/handleError";
import getHomePopulate from "../../queries/getHomePopulate";
import homeProvider from "../providers/home_provider";

export class HomeRepository {
  getPage = async () => {
    try {
      const results = await homeProvider.getPage(this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  update = async (id: string, data: string) => {};

  getQuery = () => {
    return getHomePopulate();
  };
}

const homeRepository = new HomeRepository();
export default homeRepository;
