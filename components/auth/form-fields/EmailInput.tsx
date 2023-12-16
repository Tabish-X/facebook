import ErrorMessage from "@/components/ErrorMessage";
import ExcalamationIcon from "../ExcalamationIcon";
import Link from "next/link";

export default function EmailInput({
  register,
  errors,
}: {
  register: Function;
  errors: any;
}) {
  return (
    <div>
      <div
        className={`relative w-full bg-gray-100 border ${
          errors.email && "border-_error_color"
        } h-10 flex items-center justify-center rounded-md px-3 py-2`}
      >
        <input
          type="text"
          placeholder="Mobile number or Email address"
          className={`w-full h-full outline-none bg-transparent`}
          {...register("email")}
        />
        <ExcalamationIcon isError={errors.email} />
      </div>
      <ErrorMessage message={errors.email?.message}>
        {errors.emailDuplicate && errors.email? (
          <Link href="/" className="text-xs hover:underline font-semibold cursor-pointer ">
            CLick to Login
          </Link>
        ): ""}
      </ErrorMessage>
    </div>
  );
}
