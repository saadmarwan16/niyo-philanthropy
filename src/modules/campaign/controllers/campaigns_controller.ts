import { ErrorModel } from "../../../shared/errors/error_model";
import { CampaignsModel } from "../data/models/campaigns_model";
import campaignsRepository from "../data/repositories/campaigns_repository";

export class CampaignsController {
  campaigns: CampaignsModel | null = null;
  error: ErrorModel | null = null;

  create = async (data: string) => {};

  getMany = async (query: string) => {};

  getAll = async () => {
    const { error, results } = await campaignsRepository.getAll();
    this.campaigns = results;
    this.error = error;

    return { error, campaigns: results };
  };
}

const campaignsController = new CampaignsController();
export default campaignsController;
