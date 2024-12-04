const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateEmail = (value: string): string | null => {
  if (!value) {
    return "Email is required";
  }

  if (!EMAIL_REGEX.test(value)) {
    return "Please enter a valid email address";
  }

  return null;
};

// Stricter version that enforces some additional rules
export const validateEmailStrict = (value: string): string | null => {
  if (!value) {
    return "Email is required";
  }

  if (value.length > 254) {
    return "Email is too long";
  }

  if (value.startsWith(".") || value.endsWith(".")) {
    return "Email cannot start or end with a dot";
  }

  if (!EMAIL_REGEX.test(value)) {
    return "Please enter a valid email address";
  }

  // Check for consecutive dots
  if (value.includes("..")) {
    return "Email cannot contain consecutive dots";
  }

  return null;
};

// Version that also checks common disposable email domains
export const emailWithDomain = (value: string): string | null => {
  const basicValidation = validateEmail(value);
  if (basicValidation) {
    return basicValidation;
  }

  const disposableDomains = ["tempmail.com", "throwaway.com"];
  const domain = value.split("@")[1].toLowerCase();

  if (disposableDomains.includes(domain)) {
    return "Please use a non-disposable email address";
  }

  return null;
};
