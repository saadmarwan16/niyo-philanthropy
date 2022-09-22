import { object, string, ref } from "yup";

const profileUpdataSchema = object({
  full_name: string()
    .required("Full name is required")
    .min(4, "Full name must contain at least 4 characters")
    .max(75, "Full name must contain at most 75 characters"),
  username: string()
    .required("Username is required")
    .min(4, "Username must contain at least 4 characters"),
  email: string().email("Enter a valid email").required("Email is required"),
}).required();

export default profileUpdataSchema;
