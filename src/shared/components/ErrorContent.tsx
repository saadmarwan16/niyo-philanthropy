import { FunctionComponent } from "react";
import { BiErrorCircle } from "react-icons/bi";

interface ErrorContentProps {
  title: string;
  errorMessage?: string;
  errorName?: string;
  setContent: () => void;
}

const ErrorContent: FunctionComponent<ErrorContentProps> = ({
  title,
  errorMessage,
  errorName,
  setContent,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-2 py-4 text-center">
      <BiErrorCircle className="text-5xl sm:text-6xl md:text-8xl text-error" />
      <p className="custom-heading2 text-error">
        {errorName ?? "An error occured"}
      </p>
      <p>{errorMessage ?? `Cannot find ${title}`}</p>
      <button className="mt-6 btn btn-primary btn-sm" onClick={setContent}>
        Retry
      </button>
    </div>
  );
};

export default ErrorContent;
