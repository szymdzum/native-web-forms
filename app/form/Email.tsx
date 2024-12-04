import { ValidationFn } from "./types";
import { useInputValidation } from "./useInputValidation";

type EmailInputProps = {
  validator: ValidationFn;
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
};

const EmailInput = ({
  id = "email",
  name = "email",
  label = "Email",
  required = true,
  autoComplete = "off",
  validator,
}: EmailInputProps) => {
  const { 
    value,
    error,
    validate,
    clearError,
    isDirty,
    isValid,
  } = useInputValidation(validator);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}:
      </label>
      <input
        type="email"
        id={id}
        name={name}
        value={value}
        required={required}
        onBlur={validate}
        onChange={clearError}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={`border rounded px-3 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
