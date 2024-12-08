import styles from './Input.module.css'
import { Message } from "./Message";
import { Label } from "./Label";
import { useInput } from "./useInput";
import { getMessageId } from "./getMessageId";

type BaseInputProps = Omit<
  React.ComponentProps<"input">,
  "value" | "onChange" | "onBlur" | "aria-invalid" | "aria-describedby"
>;

type InputProps = BaseInputProps & {
  id: string;
  label?: string;
  helper?: string;
  validator?: (value: string) => string | null;
};

/**
 * Base input component with built-in validation, accessibility, and styling
 * - Integrated form validation
 * - Error and helper text support
 * - Accessible ARIA attributes
 * - Consistent styling with error states
 * 
 * @component
 * @param {InputProps} props - Component props
 * @param {string} props.id - Unique identifier for the input
 * @param {string} [props.label] - Input label text
 * @param {string} [props.helper] - Helper text displayed below input
 * @param {Function} [props.validator] - Custom validation function
 * @example
 * <Input
 *   id="username"
 *   label="Username"
 *   helper="Enter your username"
 *   validator={usernameValidator}
 *   required
 * />
 */

const Input = ({
  id,
  label = "",
  name = id,
  type = "text",
  required,
  validator,
  helper,
  autoComplete = "off",
  className,
  ...props
}: InputProps) => {
  const { value, validate, error, clear } = useInput(id, validator);
  const messageId = getMessageId({ error, helper, id });

  return (
    <div className={styles.field}>
      <Label id={id} label={label} />
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onBlur={validate}
        onChange={clear}
        required={required}
        autoComplete={autoComplete}
        className={`${styles.input} ${error ? styles.error : ''} ${className || ''}`}
        aria-invalid={!!error}
        aria-describedby={messageId}
        {...props}
      />
      <Message id={messageId} error={error} helper={helper} />
    </div>
  );
};
Input.displayName = "Input";

export { Input };
export type { InputProps };