'use clinet'


export default function DashboardPage() {
    return (
        <section className="mx-[30px] mt-7 mb-[26px] ">
            <header className="mb-[23px] ">
                <h2 className="text-primary text-[28px]">Add New University</h2>
                <p className="text-primary">Note: Star (*) marked fields are required to fill.</p>
            </header>

            <article className="bg-[#F0F5FC] pt-[23px] pl-[29px] pr-[33px] pb-[57px] rounded-xl ">
                <form>
                    {/* Profile Card Section */}
                    <section
                        aria-labelledby="profile-card"
                        className="w-1/2 ml-[41px] "
                    >
                        <h3 className="text-primary text-[18px] font-bold mb-2">Profile Picture</h3>
                        <div className="max-w-sm w-full space-y-3 bg-[#E9F1FA] p-6 rounded-xl border border-[#092A67]  flex flex-col items-center">
                            <div className=" w-full h-64 bg-gray-200 rounded-[10px] overflow-hidden">
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
                        <div className="max-w-sm w-full space-y-3 mt-6">
                            {/* File Upload Section */}
                            <div>
                                <h4 className="text-[18px] text-primary font-bold mb-2 ">SSM File Upload</h4>
                                <div className="w-full">
                                    <label htmlFor="image-upload" className="w-full flex items-center justify-center border border-[#092A67] border-dashed  py-[11px] rounded-md cursor-pointer">
                                        {/* Upload Icon  */}

                                        <span className="text-[18px] ml-[10px] text-primary ">Upload Media</span>
                                    </label>
                                    <input id="image-upload" type="file" accept="image/*" className="hidden" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[18px] text-primary font-bold mb-2 ">Govt. File Upload</h4>
                                <div className="w-full">
                                    <label htmlFor="image-upload" className="w-full flex items-center justify-center border border-[#092A67] border-dashed  py-[11px] rounded-md cursor-pointer">
                                        {/* Upload Icon  */}

                                        <span className="text-[18px] ml-[10px] text-primary ">Upload Media</span>
                                    </label>
                                    <input id="image-upload" type="file" accept="image/*" className="hidden" />
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Info Section */}
                    <section
                        aria-labelledby="university-info"
                        className="w-1/2"
                    >
                        <h3 className="sr-only">University Information</h3>
                        <div>
                            {/* Add university info input fields here */}
                        </div>
                    </section>
                </form>
            </article>
        </section>

    );
}
