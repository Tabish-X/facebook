export default function Container({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <div id={`${name}-container`} className="max-w-sm md:max-w-4xl lg:max-w-5xl m-auto">
      {children}
    </div>
  );
}
