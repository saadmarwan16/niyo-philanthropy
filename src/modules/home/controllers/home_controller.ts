import homeRepository from "../data/repositories/home_repository";

export class HomeController {
  getPage = async () => {
    const { error, results } = await homeRepository.getPage();

    return {
      error,
      results,
    };
  };

  update = async (id: string, data: string) => {};
}

const homeController = new HomeController();
export default homeController;
