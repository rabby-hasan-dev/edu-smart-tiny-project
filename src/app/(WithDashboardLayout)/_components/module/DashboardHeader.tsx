'use client'
import { DwonArrowIcon, MailIcon, NotificationIcon } from '@/assets/icons';
import Avatar from '../UI/Avater';
import SelectDropdown from '../UI/Dropdwon';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hook';
import { toggleCollapse, } from '@/lib/redux/features/DashboardSlice';


const DashboardHeader = () => {
    const dispatch = useAppDispatch();
    const { isCollapsed } = useAppSelector((state) => state.sidebar);
    return (
        <div >
            {/* Header Bar */}
            <header className="w-full absolute  bg-white shadow-md flex justify-between items-center px-4 py-3 md:px-6 md:py-4">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <button
                        className="p-2 bg-gray-800 text-white rounded focus:outline-none"
                        onClick={() => dispatch(toggleCollapse())}
                    >
                        {isCollapsed ? "☰" : "✕"}
                    </button>
                    <button className="btn-primary py-2 px-4 text-sm md:py-3 md:px-[25px]">
                        Visit Website
                    </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    {/* Mail Icon */}
                    <button className="relative">
                        <MailIcon className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700" />
                    </button>

                    {/* Notifications */}
                    <button className="relative">
                        <NotificationIcon className="w-6 h-6 md:w-[30px] md:h-[30px] text-gray-700" />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            3
                        </span>
                    </button>

                    {/* Profile Avatar */}
                    <div className="relative flex items-center">
                        <Avatar src="/path-to-image.jpg" alt="User Avatar" size={40} />
                    </div>

                    {/* Dropdown */}
                    <SelectDropdown
                        trigger={
                            <span className="flex text-sm md:text-base text-gray-700 cursor-pointer">
                                Andrew Smith <DwonArrowIcon />
                            </span>
                        }
                        options={[
                            { label: "Profile", onClick: () => window.location.href = "/#" },
                            { label: "Settings", onClick: () => window.location.href = "/#" },
                            { label: "Logout", onClick: () => console.log("Logout clicked") },
                        ]}
                    />
                </div>
            </header>
        </div>
    );
};

export default DashboardHeader;