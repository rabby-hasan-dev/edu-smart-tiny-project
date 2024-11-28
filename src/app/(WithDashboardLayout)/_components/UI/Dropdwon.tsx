import { useState, ReactNode } from "react";

export default function SelectDropdown({
    trigger,
    options,
}: {
    trigger: ReactNode;
    options: { label: string; onClick: () => void }[];
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                {trigger}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                setIsOpen(false);
                                option.onClick();
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>

    );
}
