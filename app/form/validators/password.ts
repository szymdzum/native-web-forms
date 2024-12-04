const PASSWORD_MIN_LENGTH = 4;
const PASSWORD_MAX_LENGTH = 9;

export const passwordLength = (value: string): string | null => {
  if (!value) {
    return "Password is required";
  }

  if (value.length < PASSWORD_MIN_LENGTH) {
    return `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`;
  }

  if (value.length > PASSWORD_MAX_LENGTH) {
    return `Password cannot be longer than ${PASSWORD_MAX_LENGTH} characters`;
  }

  return null;
};

// Optional: A stricter password validator that checks for complexity
export const passwordStrength = (value: string): string | null => {
  const lengthCheck = passwordLength(value);
  if (lengthCheck) {
    return lengthCheck;
  }

  if (!/[A-Z]/.test(value)) {
    return "Password must contain at least one uppercase letter";
  }

  if (!/[a-z]/.test(value)) {
    return "Password must contain at least one lowercase letter";
  }

  if (!/[0-9]/.test(value)) {
    return "Password must contain at least one number";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
    return "Password must contain at least one special character";
  }

  return null;
};
