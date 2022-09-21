import { FunctionComponent } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface AuthInputFieldProps {
  label: string;
  placeholder: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn;
  type?: string;
}

const AuthInputField: FunctionComponent<AuthInputFieldProps> = ({
  label,
  placeholder,
  error,
  register,
  type,
}) => {
  return (
    <div className="w-full form-control">
      <label className="label">
        <span className="font-semibold label-text">{label}</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className={`custom-input ${error?.message && "!border-error"}`}
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

export default AuthInputField;
