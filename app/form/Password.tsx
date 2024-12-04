import { useInputValidation } from "./useInputValidation";
import { ValidationFn } from "./types";

interface PasswordInputProps {
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  validator: ValidationFn;
}

const PasswordInput = ({
  id = "password",
  name = "password",
  label = "Password",
  required = true,
  autoComplete = "off",
  defaultValue = "",
  validator,
}: PasswordInputProps) => {
  const { value, error, validate, clearError, isDirty, isValid } = useInputValidation(validator);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}:
      </label>
      <input
        id={id}
        name={name}
        type="password"
        required={required}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        value={value}
        onBlur={validate}
        onChange={clearError}
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

export default PasswordInput;
