import http from "../../../../shared/utils/http";
import { ConvertCampaignsModel } from "../models/campaigns_model";

export class CampaignsProvider {
  getAll = async (query: string) => {
    const response = await http.get(`/campaigns?${query}`);

    return ConvertCampaignsModel.toCampaignsModel(
      JSON.stringify(response.data)
    );
  };
}

const campaignsProvider = new CampaignsProvider();
export default campaignsProvider;
