type ColumnProps = {
  children: React.ReactNode;
};

const Column = ({ children }: ColumnProps) => (
  <div className="flex flex-col gap-4">{children}</div>
);

export default Column;
