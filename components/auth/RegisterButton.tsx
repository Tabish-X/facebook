"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function RegisterButton() {
  const searchParam = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    const params = new URLSearchParams(searchParam);
    params.set("form_type", "sign-up")
    replace(`${pathname}?${params.toString()}`);
  }


  return (
    <div className="w-full text-center pt-6 pb-2">
      <button onClick={handleClick} className="w-fit m-auto py-3 px-4 bg-_green text-white text-lg font-semibold rounded-md text-center hover:bg-_green_dark transition-colors duration-150">
        Create new account
      </button>
    </div>
  );
}
