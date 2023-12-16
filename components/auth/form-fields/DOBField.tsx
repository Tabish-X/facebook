"use client";

import { useEffect, useState } from "react";
import { FaCircleExclamation, FaCircleQuestion } from "react-icons/fa6";
import ErrorMessage from "../../ErrorMessage";
import { months } from "./map";

export default function DOBField({
  errors,
  register,
}: {
  errors?: any;
  register: Function;
}) {
  let error;
  if (errors.day || errors.month || errors.year) {
    error =
      "It looks like you've entered the wrong info. Please make sure that you use your real date of birth.";
  }
  

  return (
    <div>
      <div className="w-full flex items-center justify-between mb-1">
        <label
          htmlFor="birthday"
          className="flex items-center text-xs text-gray-500 gap-1 relative"
        >
          <span>Date of birth</span>
          <span>
            <FaCircleQuestion />
          </span>
        </label>

        {error && (
          <span className="text-_error_color text-lg pr-3">
            <FaCircleExclamation />
          </span>
        )}
      </div>
      <div className="flex gap-3">
        <DaysOptions error={error} register={register} />
        <MonthsOptions error={error} register={register} />
        <YearsOptions error={error} register={register} />
      </div>

      {<ErrorMessage message={error} />}
    </div>
  );
}

// For days
function DaysOptions({
  error,
  register,
}: {
  error?: string;
  register: Function;
}) {
  const days = [...Array(31)];
  return (
    <select
      id="day"
      className={`relative w-full bg-white border h-10 flex items-center justify-center rounded-md p-2 outline-none ${
        error && "border-_error_color"
      }`}
      {...register("day")}
    >
      {days.map((x, i) => {
        let day = i + 1;
        return (
          <option value={day} key={day}>
            {day}
          </option>
        );
      })}
    </select>
  );
}

//   For months
function MonthsOptions({
  error,
  register,
}: {
  error?: string;
  register: Function;
}) {
  return (
    <select
      name="month"
      id="month"
      className={`relative w-full bg-white border h-10 flex items-center justify-center rounded-md p-2 outline-none ${
        error && "border-_error_color"
      }`}
      {...register("month")}
    >
      {months.map((month, i) => (
        <option value={month} key={i}>
          {month}
        </option>
      ))}
    </select>
  );
}

// For Years
function YearsOptions({
  error,
  register,
}: {
  error?: string;
  register: Function;
}) {
  let currentYear = new Date().getFullYear() - 1905;
  let years = [...Array(118), currentYear];
  years = years.map((x, i) => i + 1905).reverse();

  return (
    <select
      name="year"
      id="year"
      className={`relative w-full bg-white border h-10 flex items-center justify-center rounded-md p-2 outline-none ${
        error && "border-_error_color"
      }`}
      {...register("year")}
    >
      {years.map((year, i) => {
        return (
          <option value={year} key={year}>
            {year}
          </option>
        );
      })}
    </select>
  );
}
