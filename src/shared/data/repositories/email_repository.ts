import { stringify } from "qs";
import handleError from "../../errors/handleError";
import { IContactUsInputs } from "../../types/interface";
import emailProvider from "../providers/email_provider";

export class EmailRepository {
  create = async (data: IContactUsInputs) => {
    try {
      const results: string = (await emailProvider.create(this.getQuery(data)))
        .data;

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  getQuery = (data: IContactUsInputs) => {
    return stringify(data);
  };
}

const emailRepository = new EmailRepository();
export default emailRepository;
