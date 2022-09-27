import handleError from "../../../../shared/errors/handleError";
import donateProvider from "../providers/donate_provider";
import getDonateQuery from "../queries/get_donate_query";

export class DonateRepository {
  getPage = async () => {
    try {
      const results = await donateProvider.getPage(this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = () => {
    return getDonateQuery();
  };
}

const donateRepository = new DonateRepository();
export default donateRepository;
