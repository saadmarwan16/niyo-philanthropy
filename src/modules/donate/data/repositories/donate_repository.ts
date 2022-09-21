import handleError from "../../../../shared/errors/handleError";
import donateProvider from "../providers/donate_provider";
import getDonateQuery from "../queries/get_donate_query";

export class DonateRepository {
  create = async (data: string) => {};

  getPage = async () => {
    try {
      const results = await donateProvider.getPage(this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getMany = async (query: string) => {};

  getAll = async () => {};

  update = async (id: string, data: string) => {};

  delete = async (id: string) => {};

  getQuery = () => {
    return getDonateQuery();
  };
}

const donateRepository = new DonateRepository();
export default donateRepository;
