export function PrimaryButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={
        `w-full h-12 bg-_theme_primary_blue px-8 text-xl text-white font-semibold rounded-md ${className}`
      }
    >
      {children}
    </button>
  );
}

export function SignupButton() {
  return (
    <div className="w-full text-center py-3">
      <button className="h-9 w-48 px-8 py-0 bg-_green_dark rounded-md text-white text-lg font-bold tracking-widest hover:opacity-80 transition-opacity">
        Sign Up
      </button>
    </div>
  );
}