'use client'


import ESForm from "@/components/form/ESForm";
import ESInput from "@/components/form/ESInput";
import SelectInput from "@/components/form/ESSelect";
import TextAreaInput from "@/components/form/ESTexarea";
import { FieldValues, SubmitHandler } from "react-hook-form";


export default function DashboardPage() {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)

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
                <ESForm onSubmit={onSubmit} >

                    <main className="lg:flex">
                        {/* Profile Card Section */}
                        <section aria-labelledby="profile-card" className="w-1/4 mr-[41px] ">
                            <h3 className="text-primary text-[18px] font-bold mb-2">Profile Picture</h3>
                            <div className="max-w-sm w-full space-y-3 bg-[#E9F1FA] p-6 rounded-xl border border-[#092A67]  flex flex-col items-center">
                                <div className=" w-full h-[176px] bg-gray-200 rounded-[10px] overflow-hidden">
                                    {/* image */}
                                </div>
                                <div className="w-full text-center">
                                    <button className=" btn-secondary   ">
                                        Remove
                                    </button>
                                </div>
                                {/* File Upload Section */}
                                <div className="w-full">
                                    <label htmlFor="image-upload" className="w-full flex items-center justify-center border border-[#092A67] border-dashed  py-[11px] rounded-md cursor-pointer">
                                        {/* Upload Icon  */}

                                        <span className="text-[18px] ml-[10px] text-primary ">Upload Media</span>
                                    </label>
                                    <input id="image-upload" type="file" accept="image/*" className="hidden" />
                                </div>

                            </div>

                        </section>

                        {/* Info Section */}
                        <section
                            aria-labelledby="university-info"
                            className="w-3/4 space-y-6"
                        >
                            {/* Add university info input fields here */}
                            <ESInput
                                name="name"
                                label="University Name *"
                                required
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
                                    required
                                    placeholder="Enter Your Address"
                                />
                                <ESInput
                                    name="address_line_2"
                                    label="Address Line 2 *"
                                    required
                                    placeholder="Address Line 2 "
                                />
                            </div>
                            <div className="grid grid-cols-2 w-full  gap-[30px] ">
                                <ESInput
                                    name="code"
                                    label="Official Email*"
                                    required
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
                                    required
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
