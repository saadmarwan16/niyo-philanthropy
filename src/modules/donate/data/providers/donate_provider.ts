import http from "../../../../shared/utils/http";
import { ConvertDonatePageModel } from "../models/donate_page_model";

export class DonateProvider {
  getPage = async (query: string) => {
    const response = await http.get(`/donate?${query}`);

    return ConvertDonatePageModel.toDonatePageModel(
      JSON.stringify(response.data)
    );
  };
}

const donateProvider = new DonateProvider();
export default donateProvider;
