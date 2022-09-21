import { ErrorModel } from "../../../shared/errors/error_model";
import { DonatePageModel } from "../data/models/donate_page_model";
import donateRepository from "../data/repositories/donate_repository";

export class DonateController {
  pageData: DonatePageModel | null = null;
  error: ErrorModel | null = null;

  create = async (data: string) => {};

  getPage = async () => {
    const { error, results } = await donateRepository.getPage();
    this.pageData = results;
    this.error = error;

    return { error, results };
  };

  getMany = async (query: string) => {};

  getAll = async () => {};

  update = async (id: string, data: string) => {};

  delete = async (id: string) => {};
}

const donateController = new DonateController();
export default donateController;
