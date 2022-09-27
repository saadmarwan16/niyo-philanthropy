import http from "../../../../shared/utils/http";

export class PaymentProvider {
  createDonationCheckout = async (data: string) => {
    const response = await http.post("/donations", data);

    return response.data.checkout_session as string;
  };

  confirmDonationCheckout = async (data: string) => {
    const response = await http.post("/donations/confirm-donation", data);

    return response.data;
  };
}

const paymentProvider = new PaymentProvider();
export default paymentProvider;
