import http from "../../../../shared/utils/http";
import { ConvertDonatePageModel } from "../models/donate_page_model";

export class DonateProvider {
  create = async (data: string) => {};

  getPage = async (query: string) => {
    console.log(query);
    const response = await http.get(`/donate?${query}`);

    return ConvertDonatePageModel.toDonatePageModel(
      JSON.stringify(response.data)
    );
  };

  getMany = async (query: string) => {};

  getAll = async () => {};

  update = async (id: string, data: string) => {};

  delete = async (id: string) => {};
}

const donateProvider = new DonateProvider();
export default donateProvider;
