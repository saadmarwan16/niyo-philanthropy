import http from "../../../../shared/utils/http";

export class PaymentProvider {
  createWalletCheckout = async (token: string, data: string) => {
    const response = await http.post("/create-wallet-topup-session", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.id as string;
  };

  confirmWalletCheckout = async (id: string) => {};

  createDonationCheckout = async (query: string) => {};

  confirmDonationCheckout = async () => {};

  createSubscriptionCheckout = async (id: string, data: string) => {};

  confirmSubscriptionCheckout = async (id: string) => {};
}

const paymentProvider = new PaymentProvider();
export default paymentProvider;
