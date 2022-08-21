import { AxiosError } from "axios";
import { ErrorModel } from "./error_model";
import getUnexpectedError from "./get_unexpected_error";

const handleError = (err: any) => {
  if (err instanceof AxiosError) {
    const response = err.response?.data.error;

    const error = {
      name: response.name,
      message: response.message,
    } as ErrorModel;

    return {
      error,
      results: null,
    };
  }

  return { error: getUnexpectedError(), results: null };
};

export default handleError;
