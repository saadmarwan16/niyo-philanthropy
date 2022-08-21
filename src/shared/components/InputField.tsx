import { FunctionComponent } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  title: string;
  isOptional: boolean;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  isOptional,
  placeholder,
  title,
  type,
  register,
  error,
}) => {
  return (
    <div className="w-full form-control">
      <label className="label">
        <span className="font-semibold label-text">
          {title}
          {isOptional && (
            <span className="text-sm font-medium text-gray-500">
              (optional)
            </span>
          )}
        </span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className={`custom-input ${error?.message && '!border-error'}`}
        {...register}
      />

      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error.message}</span>
        </label>
      )}
    </div>
  );
};

export default InputField;
