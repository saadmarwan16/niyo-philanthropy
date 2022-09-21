import http from "../../../../shared/utils/http";
import { ConvertPageModel } from "../models/home_page_model";

export class HomeProvider {
  getPage = async (query: string) => {
    console.log(query);
    const response = http.get(`/home?${query}`);

    return ConvertPageModel.toHomePageModel(JSON.stringify((await response).data));
  };

  update = async (id: string, data: string) => {};
}

const homeProvider = new HomeProvider();
export default homeProvider;
