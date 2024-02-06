import { object, string } from "yup";

const contactUsSchema = object({
  first_name: string()
    .required("This is a required field")
    .min(2, "First name must contain at least 2 characters"),
  last_name: string().optional(),
  email: string().email("Enter a valid email").required("Email is required"),
  phone: string().optional(),
  message: string()
    .required("This is a required field")
    .min(15, "Message must contain at least 15 characters"),
}).required();

export default contactUsSchema;
