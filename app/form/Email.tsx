import { useState } from "react";

type EmailInputProps = {
  id?: string;
  name?: string;
  label?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
  onEmailChange?: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  id = "email",
  name = "email",
  label = "Email",
  required = true,
  autoComplete = "off",
  defaultValue = "",
  onEmailChange,
}) => {
  const [email, setEmail] = useState<string>(defaultValue);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (value: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError(null);
    }

    if (onEmailChange) {
      onEmailChange(value);
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
        type="email"
        required={required}
        autoComplete={autoComplete}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        value={email}
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

export default EmailInput;
