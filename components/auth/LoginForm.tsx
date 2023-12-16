import Link from "next/link";
import { PrimaryButton } from "../Buttons";

export default function LoginForm() {
  return (
    <form className="w-full h-auto">
      <div className="relative mb-4">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address or Phone Number"
          className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-black outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out text-base h-12"
        />
      </div>
      <div className="relative mb-4">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-blue-100 focus:border-black outline-none text-gray-800 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out text-base h-12"
        />
      </div>

      <div className="w-full">
        <PrimaryButton>Log in</PrimaryButton>
      </div>

      <div className="my-4 text-center">
        <Link
          href="/forget-password"
          className="text-blue-500 text-sm transition-all duration-100 hover:underline"
        >
          Forgotten password?
        </Link>
      </div>

      <div className="border-b"/>
    </form>
  );
}
