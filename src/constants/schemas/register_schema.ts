import { object, string, ref } from "yup";

const registerSchema = object({
  full_name: string()
    .required("Full name is required")
    .min(4, "Full name must contain at least 4 characters")
    .max(75, "Full name must contain at most 75 characters"),
  username: string()
    .required("Username is required")
    .min(4, "Username must contain at least 4 characters"),
  email: string().email("Enter a valid email").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(6, "Password must contain at least 6 characters"),
  confirm_password: string()
    .required("Confirm password is required")
    .oneOf([ref("password")], "Passwords do not match"),
}).required();

export default registerSchema;
