import { object, string, ref } from "yup";

const changePasswordSchema = object({
  currentPassword: string()
    .required("Current password is required")
    .min(6, "Current password must contain at least 6 characters"),
  password: string()
    .required("New password is required")
    .min(6, "New password must contain at least 6 characters"),
  passwordConfirmation: string()
    .required("Confirm password is required")
    .oneOf([ref("password")], "Passwords do not match"),
}).required();

export default changePasswordSchema;
