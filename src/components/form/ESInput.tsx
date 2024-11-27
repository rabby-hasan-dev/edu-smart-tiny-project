"use client";

import { useFormContext } from "react-hook-form";


interface IProps {
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  placeholder?: string
}

export default function ESInput({

  required = false,
  type = "text",
  label,
  name,
  placeholder
}: IProps) {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-2 font-bold text-[20px] block">
          {label}
        </label>
      )}

      <input
        {...register(name)}
        required={required}
        type={type}
        placeholder={placeholder || "Enter text here"}
        aria-invalid={!!errors[name]}
        className="px-4 py-4 text-lg rounded-md text-[#092A67] bg-[#E9F1FA] border border-[#092A67] w-full outline-[#092A67] " />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {/* Accessing the error message properly */}
          {errors[name]?.message as string || "This field is required"}
        </p>
      )}
    </div>


  );
}


