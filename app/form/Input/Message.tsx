type MessageProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  "id" | "role" | "className"
> & {
  id?: string;
  error: string | null;
  helper?: string;
};

/**
 * Form message component for displaying error and helper text
 * - Handles both error and helper text states
 * - Accessible with proper ARIA attributes
 * - Consistent styling for different message types
 *
 * @component
 * @param {MessageProps} props - Component props
 * @param {string} [props.id] - ID for accessibility connection
 * @param {string | null} props.error - Error message to display
 * @param {string} [props.helper] - Helper text to display when no error
 * @returns {JSX.Element} Message component with error or helper text
 * @example
 * <Message
 *   id="id"
 *   error={error}
 *   helper="Enter your email address"
 * />
 */
const Message = ({ id, error, helper }: MessageProps): JSX.Element  => {
  const message = error || helper;

  return (
    <div className="leading-4">
      {message && (
        <span
          id={id}
          role={error ? "alert" : undefined}
          className={`text-xs ${
            error ? "text-red-500" : "text-muted-foreground"
          }`}
        >
          {message}
        </span>
      )}
    </div>
  );
};

Message.displayName = "Message";

export { Message };
export type { MessageProps };
