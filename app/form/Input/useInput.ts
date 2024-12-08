/**
 * Custom hook for managing form input state and validation
 * @param {string} [fieldId] - Id of the field for server-side validation mapping
 * @param {Validator} [validator] - Client-side validation function
 * @returns {InputHookReturn} Object containing:
 * - value: Current value of the input field
 * - error: Current error message, null if no error exists
 * - validate: Function that validates the input value using the provided validator function
 * - clear: Function that handles input changes, updates the value and clears existing errors
 * - isDirty: Boolean indicating whether the input has been modified by the user
 * - isValid: Boolean indicating whether the input is valid (has been modified, has no errors, and has a value)
 * 
 * @example
 * const { value, error, validate, clear, isDirty, isValid } = useInput(
 *   'email',
 *   (value) => !value.includes('@') ? 'Invalid email' : null
 * );
 */
import { useState, useCallback, useMemo, useEffect } from "react";
import { InputChange, InputFocus } from "@form/types/events";
import { Validator } from "@form/types/inputs";
import { useActionData } from "react-router";

type ActionFormData = {
  success: boolean;
  errors?: Record<string, string>;
  data?: Record<string, unknown>;
};

/**
 * Return type for useInput hook
 */
type InputHookReturn = {
  /** Current value of the input field */
  value: string;
  /** Current error message, null if no error exists */
  error: string | null;
  /** Indicates whether the input has been modified by the user */
  isDirty: boolean;
  /** Indicates whether the input is valid (has been modified, has no errors, and has a value) */
  isValid: boolean;
  /** 
   * Validates the input value using the provided validator function
   * @param event The focus event object
   */
  validate: (event: InputFocus) => void;
  /** 
   * Handles input changes, updates the value and clears existing errors
   * @param event The change event object
   */
  clear: (event: InputChange) => void;
};

export const useInput = (
  fieldId?: string,
  validator?: Validator
): InputHookReturn => {
  const actionResponse = useActionData<ActionFormData>();
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (actionResponse?.errors && fieldId && actionResponse.errors[fieldId]) {
      setError(actionResponse.errors[fieldId]);
      setIsDirty(true);
    }
  }, [actionResponse, fieldId]);

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
