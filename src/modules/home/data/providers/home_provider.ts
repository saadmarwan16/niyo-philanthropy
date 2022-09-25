import http from "../../../../shared/utils/http";
import { ConvertHomeModel } from "../models/home_page_model";

export class HomeProvider {
  getPage = async (query: string) => {
    const response = http.get(`/home?${query}`);

    return ConvertHomeModel.toHomeModel(JSON.stringify((await response).data));
  };

  update = async (id: string, data: string) => {};
}

const homeProvider = new HomeProvider();
export default homeProvider;
