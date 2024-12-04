/**
 * Custom hook for input field validation
 * @param validateFn - Validation function returning error or null
 * @param initialValue - Optional initial value for the input
 * @returns Validation state and handlers
 */
import { useState, useCallback, useMemo } from "react";
import { InputChange, InputFocus } from "~/types/events";
import { ValidationFn } from "./types";

type InputValidationReturn = {
  value: string;
  error: string | null;
  isDirty: boolean;
  isValid: boolean;
  validate: (event: InputFocus) => void;
  clearError: (event: InputChange) => void;
};

export const useInputValidation = (
  validateFn: ValidationFn,
  initialValue: string = ""
): InputValidationReturn => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  // validation handler
  const validate = useCallback(
    (event: InputFocus) => {
      const target = event.target;
      const inputValue = target.value.trim();
      const validationError = validateFn(inputValue);

      if (validationError) {
        setError(validationError);
      } else {
        setError(null);
      }
    },
    [validateFn]
  );

  // change handler
  const clearError = useCallback(
    (event: InputChange) => {
      const target = event.target;
      const newValue = target.value;
      setValue(newValue);
      setIsDirty(true);

      if (error) {
        setError(null);
      }
    },
    [error]
  );

  // Memoized validity state
  const isValid = useMemo(() => {
    return isDirty && !error && value.length > 0;
  }, [isDirty, error, value]);

  return {
    value,
    error,
    validate,
    clearError,
    isDirty,
    isValid,
  };
};
