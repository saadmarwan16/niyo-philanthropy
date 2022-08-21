// import { makeAutoObservable } from "mobx";

import emailRepository from "../data/repositories/email_repository";
import { IContactUsInputs } from "../types/interface";

export class EmailController {
  //   constructor() {
  //     makeAutoObservable(this);
  //   }

  create = async (data: IContactUsInputs) => {
    const { error, results } = await emailRepository.create(data);

    return {
      error,
      results,
    };
  };
}

const emailController = new EmailController();
export default emailController;
