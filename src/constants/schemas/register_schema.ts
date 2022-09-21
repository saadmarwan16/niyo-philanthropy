import { object, string, ref } from "yup";

const registerSchema = object({
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
