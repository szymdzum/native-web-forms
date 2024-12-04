import { useState } from "react";

interface PasswordInputProps {
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  onPasswordChange?: (password: string) => void;
}

const PasswordInput = ({
  id = "password",
  name = "password",
  label = "Password",
  required = true,
  autoComplete = "off",
  defaultValue = "",
  onPasswordChange,
}: PasswordInputProps) => {
  const [password, setPassword] = useState<string>(defaultValue);
  const [error, setError] = useState<string | null>(null);

  const validatePassword = (value: string): boolean => {
    return value.length >= 8;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);

    if (!validatePassword(value)) {
      setError("Password must be at least 8 characters long.");
    } else {
      setError(null);
    }

    if (onPasswordChange) {
      onPasswordChange(value);
    }
  };

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
        value={password}
        onChange={handleChange}
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
