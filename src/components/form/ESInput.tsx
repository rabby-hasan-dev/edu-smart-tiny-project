"use client";

import { EyeIcon, EyeOffIcon } from "@/assets/icons";
import { togglePasswordVisibility } from "@/lib/redux/features/PassWordSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
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
  const showPassword = useAppSelector((state) => state.password.showPassword);
  const dispatch = useAppDispatch();
  const inputType = type === "password" && showPassword ? "text" : type;
  return (
    <div>
      {label && (
        <label htmlFor={name} className="mb-2 font-bold text-[20px] block">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...register(name)}
          required={required}
          type={inputType}
          placeholder={placeholder || "Enter text here"}
          aria-invalid={!!errors[name]}
          className="px-4 py-4 text-lg rounded-md text-[#092A67] bg-[#E9F1FA] border border-[#092A67] w-full outline-[#092A67] " />
        {/* Password visibility toggle button */}
        {type === "password" && (
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => dispatch(togglePasswordVisibility())}
          >
            {showPassword ? (
              <span aria-label="Hide password" role="img">
                <EyeIcon />
              </span>
            ) : (
              <span aria-label="Show password" role="img">
                <EyeOffIcon />
              </span>
            )}
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {/* Accessing the error message properly */}
          {errors[name]?.message as string || "This field is required"}
        </p>
      )}
    </div>


  );
}



