import { object, string } from "yup";

const loginSchema = object({
  identifier: string().required("This is a required field"),
  password: string().required("Password is required"),
}).required();

export default loginSchema;
