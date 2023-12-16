"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FaXmark } from "react-icons/fa6";

export default function CloseForm() {
  const searchParam = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    const params = new URLSearchParams(searchParam);
    params.delete("form_type");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute h-8 w-8 top-2 right-0 text-gray-500 text-2xl"
    >
      <FaXmark />
    </button>
  );
}
