import { ErrorModel } from "./error_model";

const getUnexpectedError = (): ErrorModel => {
  return { name: "UnexpectedError", message: "An unexpected error occured" };
};

export default getUnexpectedError;
