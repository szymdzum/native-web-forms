/**
 * Custom hook for input field validation
 * @param validator - Validation function returning error or null
 * @returns Validation state and handlers
 */
import { useState, useCallback, useMemo, useEffect } from "react";
import { InputChange, InputFocus } from "~/form/types/events";
import { Validator } from "../types";
import { useActionData } from "react-router";

type ActionFormData = {
  success: boolean;
  errors?: Record<string, string>;
  data?: Record<string, unknown>;
};

type ValidatorReturn = {
  value: string;
  error: string | null;
  isDirty: boolean;
  isValid: boolean;
  validate: (event: InputFocus) => void;
  clear: (event: InputChange) => void;
};

export const useValidator = (
  fieldName?: string,
  validator?: Validator
): ValidatorReturn => {
  const actionResponse = useActionData<ActionFormData>();
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (
      actionResponse?.errors &&
      fieldName &&
      actionResponse.errors[fieldName]
    ) {
      setError(actionResponse.errors[fieldName]);
      setIsDirty(true);
    }
  }, [actionResponse, fieldName]);

  const validate = useCallback(
    (event: InputFocus) => {
      if (!validator) return;

      const target = event.target;
      const inputValue = target.value.trim();
      const validationError = validator(inputValue);

      if (validationError) {
        setError(validationError);
      } else {
        setError(null);
      }
    },
    [validator]
  );

  // change handler
  const clear = useCallback(
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
    clear,
    isDirty,
    isValid,
  };
};
