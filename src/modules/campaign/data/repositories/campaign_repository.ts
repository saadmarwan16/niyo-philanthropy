import handleError from "../../../../shared/errors/handleError";
import campaignProvider from "../providers/campaign_provider";
import getCampaignQuery from "../queries/get_campaign_query";

export class CampaignRepository {
  getOne = async (id: string) => {
    try {
      const results = await campaignProvider.getOne(id, this.getQuery());

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = () => {
    return getCampaignQuery();
  };
}

const campaignRepository = new CampaignRepository();
export default campaignRepository;
