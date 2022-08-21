import http from "../../utils/http";

export class EmailProvider {
  create = async (query: string) => {
    return http.post(`/emails/send-email?${query}`);
  };
}

const emailProvider = new EmailProvider();
export default emailProvider;
