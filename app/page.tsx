import Auth from "@/components/auth/Auth";

export default async function Home({
  searchParams,
}: {
  searchParams: { form_type: string };
}) {
  
  const isLogin = false;
  if (!isLogin) {
    return <Auth form={searchParams?.form_type} />;
  }
  return <section></section>;
}
