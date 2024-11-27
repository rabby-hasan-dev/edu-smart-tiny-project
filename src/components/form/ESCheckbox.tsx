'use client'

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ICheckboxInputProps {
    name: string;
    label: string;
    defaultChecked?: boolean;
    rules?: object;
}

const CheckboxInput: React.FC<ICheckboxInputProps> = ({
    name,
    label,
    defaultChecked = false,
    rules = {},
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext(); // Using useFormContext for nested form handling

    return (
        <div className="space-y-4">
            <label htmlFor={name} className="flex items-center text-[#092A67] text-sm space-x-2">
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultChecked}
                    rules={rules} // Validation rules passed from parent
                    render={({ field }) => (
                        <input
                            {...field}
                            type="checkbox"
                            id={name}
                            className="w-[19px] h-[19px] mr-3 rounded"
                        />
                    )}
                />
                <span className="text-[#092A67] text-sm">{label}</span>
            </label>

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

export default CheckboxInput;
