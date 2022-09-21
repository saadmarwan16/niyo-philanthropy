import { ErrorModel } from "../../../shared/errors/error_model";
import { CampaignModel } from "../data/models/campaign_model";
import campaignRepository from "../data/repositories/campaign_repository";

export class CampaignController {
  campaign: CampaignModel | null = null;
  error: ErrorModel | null = null;

  getOne = async (id: string) => {
    const { error, results } = await campaignRepository.getOne(id);
    this.campaign = results;
    this.error = error;

    return { error, campaign: results };
  };
}

const campaignController = new CampaignController();
export default campaignController;
