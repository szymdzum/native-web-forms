import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Centered = ({ children, className = "" }: PropsWithChildren<Props>) => {
  return (
    <div className="min-h-screen grid place-items-center">
      <section className={`w-full max-w-md p-8 ${className}`}>
        {children}
      </section>
    </div>
  );
};

Centered.displayName = "Centered";
export { Centered };
