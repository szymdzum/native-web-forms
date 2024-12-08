  type FormActionDataProps = {
  data: unknown;
  title?: string;
};

export function FormActionData({ data, title }: FormActionDataProps) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
      {title && (
        <h3 className="mb-2 font-mono text-sm font-semibold text-gray-500">
          {title}
        </h3>
      )}
      <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
