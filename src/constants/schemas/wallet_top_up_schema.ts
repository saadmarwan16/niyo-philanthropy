import { object, string, number } from "yup";

const walletTopUpSchema = object({
  email: string().email("Enter a valid email").required("Email is required"),
  amount: number()
    .required("New password is required")
    .min(10, "The amount must be at least $10.00"),
}).required();

export default walletTopUpSchema;
