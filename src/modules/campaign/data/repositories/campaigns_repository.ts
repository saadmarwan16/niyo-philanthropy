import handleError from "../../../../shared/errors/handleError";
import campaignsProvider from "../providers/campaigns_provider";
import getCampaignsQuery from "../queries/get_campaigns_query";

export class CampaignsRepository {
  getAll = async () => {
    try {
      const results = await campaignsProvider.getAll(this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = () => {
    return getCampaignsQuery();
  };
}

const campaignsRepository = new CampaignsRepository();
export default campaignsRepository;
