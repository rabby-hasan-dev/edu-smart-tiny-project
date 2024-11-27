'use client'
import { Controller, useFormContext } from "react-hook-form";


interface ITextAreaProps {
    name: string;
    label: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    defaultValue?: string;
    rules?: object;
}

const TextAreaInput: React.FC<ITextAreaProps> = ({
    name,
    label,
    placeholder = "",
    rows = 4,
    cols = 50,
    defaultValue = "",
    rules = {},
}) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="space-y-4">
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
                    <textarea
                        {...field}
                        id={name}
                        placeholder={placeholder}
                        rows={rows}
                        cols={cols}
                        className="px-4 py-2 text-lg rounded-md text-[#092A67] bg-[#E9F1FA] border border-[#092A67] w-full outline-[#092A67]"
                    />
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

export default TextAreaInput;
