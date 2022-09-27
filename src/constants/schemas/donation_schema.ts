import { object, number, string } from "yup";

const donationSchema = object({
  email: string().email("Enter a valid email").required("Email is required"),
  campaign: number().required("Campaign field is required"),
  amount: number().required("Amount field is required"),
}).required();

export default donationSchema;
