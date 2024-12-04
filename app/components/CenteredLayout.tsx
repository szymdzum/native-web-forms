type CenteredLayoutProps = {
  children: React.ReactNode;
  className?: string;
}

const CenteredLayout = ({ children, className = "" }: CenteredLayoutProps) => {
  return (
    <main className="min-h-screen grid place-items-center">
      <section className={`w-full max-w-md p-8 ${className}`}>
        {children}
      </section>
    </main>
  );
};

export default CenteredLayout;