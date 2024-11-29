'use client'

import ESForm from "@/components/form/ESForm";
import ESInput from "@/components/form/ESInput";
import SelectInput from "@/components/form/ESSelect";
import TextAreaInput from "@/components/form/ESTexarea";
import { useAddUinversityMutation } from "@/lib/redux/features/university/universityApi";
import { addUniversitySchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";


export default function DashboardPage() {
    const [addUniversity] = useAddUinversityMutation();
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Get the first file

        if (file) {
            setImageFile(file); // Update file state

            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview(reader.result as string); // Update preview state
            };

            reader.readAsDataURL(file); // Read file as Data URL
        }
    };
    const handleRemoveImage = () => {
        setImagePreview(null)

    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('loading ....')
        const formData = new FormData();
        formData.append('name', data.name); // University Name
        formData.append('description', data.description); // Description
        formData.append('address_line_1', data.address_line_1); // Address Line 1
        formData.append('address_line_2', data.address_line_2); // Address Line 2
        formData.append('code', data.code); // Official Email
        formData.append('country', data.country); // Country
        formData.append('city', data.city); // City
        formData.append('state', data.state); // State
        formData.append('zip', data.zip); // Zip Code

        // Append image file if it's present
        if (imageFile) {
            formData.append('logo', imageFile);
        }

        try {
            const res = await addUniversity(formData).unwrap();
            toast.success(res?.message, { id: toastId, duration: 2000 });
            console.log('Success:', res);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Error:', error);
            toast.error(error?.data?.message, { id: toastId, duration: 2000 })
        }




    }

    const countryOptions = [
        { value: "bd", label: "Bangladesh" },
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "uk", label: "United Kingdom" },
        { value: "in", label: "India" },
        { value: "au", label: "Australia" },
        { value: "de", label: "Germany" },
        { value: "fr", label: "France" },
        { value: "jp", label: "Japan" },
        { value: "sg", label: "Singapore" }
    ]
    const cityOptions = [
        { value: "dhaka", label: "Dhaka" },
        { value: "new_york", label: "New York" },
        { value: "los_angeles", label: "Los Angeles" },
        { value: "london", label: "London" },
        { value: "mumbai", label: "Mumbai" },
        { value: "sydney", label: "Sydney" },
        { value: "berlin", label: "Berlin" },
        { value: "paris", label: "Paris" },
        { value: "tokyo", label: "Tokyo" },
        { value: "singapore", label: "Singapore" }
    ]



    return (
        <section className="mx-[30px] mt-7 mb-[26px] h-full ">
            <header className="mb-[23px]">
                <h2 className="text-primary text-[28px]">Add New University</h2>
                <p className="text-primary">Note: Star (*) marked fields are required to fill.</p>
            </header>

            <article className="bg-[#F0F5FC] pt-[23px] pl-[29px] pr-[33px] pb-[57px] rounded-xl ">
                <ESForm
                    onSubmit={onSubmit}
                    resolver={zodResolver(addUniversitySchema)}
                >

                    <main className="lg:flex">
                        {/* Profile Card Section */}
                        <section aria-labelledby="profile-card" className="lg:w-1/4 mr-[41px] ">
                            <h3 className="text-primary text-[18px] font-bold mb-2">Profile Picture</h3>
                            <div className="max-w-sm w-full space-y-3 bg-[#E9F1FA] p-6 rounded-xl border border-[#092A67]  flex flex-col items-center">
                                <div className=" w-full h-[176px] bg-gray-200 rounded-[10px] overflow-hidden">
                                    {/* image */}
                                    {imagePreview && <div style={{ position: 'relative', height: '400px' }}>
                                        <Image
                                            alt="Mountains"
                                            src={imagePreview}
                                            fill
                                            sizes="(min-width: 808px) 50vw, 100vw"
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                            }}
                                        />
                                    </div>
                                    }


                                </div>
                                <div className="w-full text-center">
                                    <button
                                        onClick={handleRemoveImage}
                                        className=" btn-secondary   ">
                                        Remove
                                    </button>
                                </div>
                                {/* File Upload Section */}
                                <div className="w-full">
                                    <label htmlFor="image-upload" className="w-full flex items-center justify-center border border-[#092A67] border-dashed  py-[11px] rounded-md cursor-pointer">
                                        {/* Upload Icon  */}

                                        <span className="text-[18px] ml-[10px] text-primary ">Upload Media</span>
                                    </label>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleImageChange(e)}
                                    />
                                </div>


                            </div>

                        </section>

                        {/* Info Section */}
                        <section
                            aria-labelledby="university-info"
                            className="lg:w-3/4 space-y-6"
                        >
                            {/* Add university info input fields here */}
                            <ESInput
                                name="name"
                                label="University Name *"

                                placeholder="University of Malaysia"
                            />
                            <TextAreaInput
                                label="Description *"
                                name="description"
                                placeholder="Write description..."
                            />
                            <div className="grid grid-cols-2 w-full  gap-[30px] ">
                                <ESInput
                                    name="address_line_1"
                                    label="Address Line 1 *"

                                    placeholder="Enter Your Address"
                                />
                                <ESInput
                                    name="address_line_2"
                                    label="Address Line 2 *"

                                    placeholder="Address Line 2 "
                                />
                            </div>
                            <div className="grid grid-cols-2 w-full  gap-[30px] ">
                                <ESInput
                                    name="code"
                                    label="Official Email*"

                                    type="email"
                                    placeholder="username@emample.com"
                                />
                                <SelectInput
                                    name="country"
                                    label="Country"
                                    options={countryOptions}
                                    rules={{ required: "country is required" }}
                                />
                            </div>
                            <div className="grid grid-cols-3 w-full  gap-[30px] ">

                                <SelectInput
                                    name="city"
                                    label="City*"
                                    options={cityOptions}
                                    rules={{ required: "city is required" }}
                                />
                                <SelectInput
                                    name="state"
                                    label="State*"
                                    options={countryOptions}
                                    rules={{ required: "State  is required" }}
                                />

                                <ESInput
                                    name="zip"
                                    label="Zip Code*"

                                    placeholder="Enter"
                                />
                            </div>
                            <button type="submit" className="btn-primary py-[17px] px-6">Add University</button>
                        </section>
                    </main>
                </ESForm>

            </article>
        </section>

    );
}
