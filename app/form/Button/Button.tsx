import styles from './Button.module.css';
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
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
