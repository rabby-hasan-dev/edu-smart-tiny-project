
import BrandLogo from "@/components/UI/BrandLogo";

const DashboardFooter = () => {
    return (
        <footer className="w-full bg-white  py-11 mb-[27px] mx-[30px] mt-[26px] ">
            <div className="lg:flex-row-reverse justify-center items-center">

                <p className="text-[18px] text-primary mr-4">
                    Copyright All Rights Reserved   &copy; {new Date().getFullYear()} .
                </p>
                <div className="flex items-center space-x-2">
                    <BrandLogo size="48px" />
                    <div>
                        <h4 className="text-4xl">eduSmart</h4>
                        <p>Study Abroad Made Easy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DashboardFooter;
