const NAME_REGEX = /^[A-Za-z\s]+$/;

export const validateName = (value: string): string | null => {
  if (!value.trim()) {
    return "Name is required";
  }

  if (!NAME_REGEX.test(value)) {
    return "Name can only contain letters and spaces";
  }

  return null;
};

// Stricter version that enforces additional rules
export const validateNameStrict = (value: string): string | null => {
  if (!value.trim()) {
    return "Name is required";
  }

  if (value.length > 50) {
    return "Name is too long";
  }

  if (!NAME_REGEX.test(value)) {
    return "Name can only contain letters and spaces";
  }

  // Check for multiple consecutive spaces
  if (value.includes("  ")) {
    return "Name cannot contain consecutive spaces";
  }

  return null;
}; 