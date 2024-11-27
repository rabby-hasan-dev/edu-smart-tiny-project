'use client'

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ISelectInputProps {
    name: string;
    label: string;
    options: { value: string | number; label: string }[];
    defaultValue?: string | number;
    rules?: object;
}

const SelectInput: React.FC<ISelectInputProps> = ({
    name,
    label,
    options,
    defaultValue = "",
    rules = {},
}) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <div>
            {label && (
                <label htmlFor={name} className="mb-2 font-bold text-[20px] block">
                    {label}
                </label>
            )}

            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={rules} // Validation rules passed from parent
                render={({ field }) => (
                    <select
                        {...field}
                        id={name}
                        className="px-4 py-4 text-lg rounded-md text-[#092A67] bg-[#E9F1FA] border border-[#092A67] w-full outline-[#092A67]"
                    >
                        <option value="" disabled>
                            Select an option
                        </option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}
            />

            {/* Error Message */}
            {errors[name] && (
                <p className="text-red-500 text-sm mt-1">
                    {/* Accessing the error message properly */}
                    {errors[name]?.message as string || "This field is required"}
                </p>
            )}
        </div>
    );
};

export default SelectInput;


