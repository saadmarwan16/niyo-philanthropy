import handleError from "../../../../shared/errors/handleError";
import { ICreateCheckout } from "../../../../shared/types/interface";
import paymentProvider from "../providers/payment_provider";

export class PaymentRepository {
  createDonationCheckout = async (data: ICreateCheckout) => {
    try {
      const results = await paymentProvider.createDonationCheckout(
        JSON.stringify({ data })
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };

  confirmDonationCheckout = async (checkout_session: string) => {
    try {
      const results = await paymentProvider.confirmDonationCheckout(
        JSON.stringify({ checkout_session })
      );

      return { error: null, results };
    } catch (err) {
      return handleError(err);
    }
  };
}

const paymentRepository = new PaymentRepository();
export default paymentRepository;
