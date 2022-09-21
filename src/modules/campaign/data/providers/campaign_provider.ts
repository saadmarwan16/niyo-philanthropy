import http from "../../../../shared/utils/http";
import { ConvertCampaignModel } from "../models/campaign_model";

export class CampaignProvider {
  getOne = async (id: string, query: string) => {
    const response = await http.get(`/campaigns/${id}?${query}`);

    return ConvertCampaignModel.toCampaignModel(JSON.stringify(response.data));
  };
}

const campaignProvider = new CampaignProvider();
export default campaignProvider;
