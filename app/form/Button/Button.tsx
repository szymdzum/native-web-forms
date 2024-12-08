import type { ButtonHTMLAttributes } from 'react';

/**
 * Props for Button component
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>} Native button attributes
 */
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Button component that extends native button capabilities
 * @param {ButtonProps} props - Component props
 * @returns {JSX.Element} Rendered button
 */
const Button = ({
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white p-2 rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
