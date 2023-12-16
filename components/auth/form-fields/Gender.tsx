"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { useState } from "react";
import { FaCircleExclamation, FaCircleQuestion } from "react-icons/fa6";
import { pronouns } from "./map";

export default function Gender({
  errors,
  register,
}: {
  errors: any;
  register: Function;
}) {
  const [customGender, setCustomGender] = useState(false);
  return (
    <div className="">
      <div className="w-full flex items-center justify-between mb-1">
        <label
          htmlFor="birthday"
          className="flex items-center text-xs text-gray-500 gap-1 relative"
        >
          <span>Gender</span>
          <span>
            <FaCircleQuestion />
          </span>
        </label>

        {errors.gender && (
          <span className="text-_error_color text-lg pr-3">
            <FaCircleExclamation />
          </span>
        )}
      </div>
      <div className="flex gap-3">
        <div
          className={`relative w-full bg-white border h-10 flex items-center justify-between rounded-md p-2 outline-none ${
            errors.gender && "border-_error_color"
          }`}
        >
          <label htmlFor="female" className="w-full">
            Female
          </label>
          <input
            type="radio"
            id="female"
            value="female"
            onClick={() => setCustomGender(false)}
            {...register("gender")}
          />
        </div>
        <div
          className={`relative w-full bg-white border h-10 flex items-center justify-between rounded-md p-2 outline-none ${
            errors.gender && "border-_error_color"
          }`}
        >
          <label htmlFor="male" className="w-full">
            Male
          </label>
          <input
            type="radio"
            id="male"
            value="male"
            onClick={() => setCustomGender(false)}
            {...register("gender")}
          />
        </div>
        <div
          className={`relative w-full bg-white border h-10 flex items-center justify-between rounded-md p-2 outline-none ${
            errors.gender && "border-_error_color"
          }`}
        >
          <label htmlFor="custom" className="w-full">
            Custom
          </label>
          <input
            type="radio"
            id="custom"
            value="custom"
            onClick={() => setCustomGender(true)}
            {...register("gender")}
          />
        </div>
      </div>

      {customGender && (
        <>
          <div>
            <select
              name="pronoun"
              id="pronoun"
              className={`mt-4 relative w-full bg-white border h-10 flex items-center justify-center rounded-md p-2 outline-none ${
                errors.pronoun && "border-_error_color"
              }`}
              {...register("pronoun")}
              defaultValue={1}
            >
              <option value="1">
                Select your pronoun
              </option>

              {pronouns.map((data, i) => (
                <option value={data?.value} key={i}>
                  {data?.text}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Your pronoun is visible to everyone
            </p>
          </div>

          <div className="mt-2 relative w-full bg-gray-100 border h-10 flex items-center justify-center rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Gender (optional)"
              className={`w-full h-full outline-none bg-transparent`}
              {...register("gender")}
            />
          </div>
        </>
      )}

      <ErrorMessage
        message={errors.gender?.message || errors?.pronoun?.message}
      />
    </div>
  );
}
