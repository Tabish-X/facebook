import auth from "@/lib/auth";

export default function page({
  searchParams: { email },
}: {
  searchParams: { email: string };
}) {

  return <div>{email}</div>;
}
