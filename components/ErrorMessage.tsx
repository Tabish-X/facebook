export default function ErrorMessage({ children, message }: { children?: React.ReactNode,message: any }) {
  return (
    <p className="text-xs text-_error_color mt-1 px-1">
      {message} {children}
    </p>
  );
}
