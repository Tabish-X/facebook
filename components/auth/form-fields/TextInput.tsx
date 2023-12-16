import React from "react";
import ExcalamationIcon from "../ExcalamationIcon";
import ErrorMessage from "@/components/ErrorMessage";

type props = {
  errors: any;
  register: Function;
  name: string;
  placeholder: string;
};
export default function TextInput({
  errors,
  register,
  name,
  placeholder,
}: props) {
  return (
    <div className="h-fit">
      <div
        className={`relative w-full bg-gray-100 border ${
          errors[name] && "border-_error_color"
        } h-10 flex items-center justify-center rounded-md px-3 py-2`}
      >
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full h-full outline-none bg-transparent`}
          {...register(name)}
        />
        <ExcalamationIcon isError={errors[name]} />
      </div>
      <ErrorMessage message={errors[name]?.message} />
    </div>
  );
}
