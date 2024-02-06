import { object, string, ref } from "yup";

const resetPasswordSchema = object({
  password: string()
    .required("Password is required")
    .min(6, "Password must contain at least 6 characters"),
  passwordConfirmation: string()
    .required("Confirm password is required")
    .oneOf([ref("password")], "Passwords do not match"),
}).required();

export default resetPasswordSchema;
