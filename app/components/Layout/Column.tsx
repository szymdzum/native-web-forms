import { PropsWithChildren } from "react";

const Column = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-4">{children}</div>
);

Column.displayName = "Column";
export { Column };
