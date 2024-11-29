
"use client";
import { DashboardSquareIcon, UserMultipleIcon } from "@/assets/icons";
import Link from "next/link";
import { ReactNode, } from "react";
import { usePathname, useRouter } from "next/navigation"; // Get the current path
import LinkItem from "../_components/UI/LinkeItem";
import DashboardHeader from "../_components/module/DashboardHeader";
import DashboardFooter from "../_components/module/DashboardFooter";
import { closeSidebar, } from "@/lib/redux/features/DashboardSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import BrandLogo from "@/components/UI/BrandLogo";
import { selectCurrentUser } from "@/lib/redux/features/auth/AuthSlice";


export default function Dashboardlayout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const user = useAppSelector(selectCurrentUser);
    if (!user?.email) {
        router.push('/login')

    }
    const dispatch = useAppDispatch();
    const { isSidebarOpen, isCollapsed } = useAppSelector((state) => state.sidebar);
    const pathname = usePathname();



    const links = [
        { href: "/dashboard", label: "Dashboard", icon: <DashboardSquareIcon /> },
        { href: "/dashboard/university", label: "Universities", icon: <DashboardSquareIcon /> },
        { href: "/dashboard/packages", label: "Packages", icon: <DashboardSquareIcon /> },
        { href: "/dashboard/agents", label: "Agents", icon: <UserMultipleIcon color="#ffff" /> },
        { href: "/dashboard/students", label: "Students", icon: <DashboardSquareIcon /> },
        { href: "/dashboard/settings", label: "Settings", icon: <DashboardSquareIcon /> },
        { href: "/dashboard/contact-us", label: "Contact Us", icon: <DashboardSquareIcon /> },
    ];

    return (
        <>
            <div className="flex  w-full h-full">
                {/* Sidebar */}
                <div
                    className={`fixed z-20 inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                md:translate-x-0 md:static md:inset-0 bg-[#092A67] text-white transition-transform duration-300 ease-in-out flex flex-col
                 ${isCollapsed ? "w-[100px]" : "w-[285px]"}
                `}
                >
                    {/* Sidebar Header */}
                    <div className="p-4 mb-[22px] flex items-center border-b border-white">
                        <Link href="/" className="flex items-center space-x-4">
                            <BrandLogo size="48px" />
                            {
                                !isCollapsed && <div>
                                    <h4 className="text-4xl">eduSmart</h4>
                                    <p>Study Abroad Made Easy</p>
                                </div>
                            }

                        </Link>
                    </div>

                    {/* Sidebar Links */}

                    <ul className="">
                        {links.map((link) => (
                            <LinkItem
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                isActive={pathname === link.href}
                                icon={link.icon}
                            />
                        ))}
                    </ul>

                </div>

                {/* Main Content */}
                <div className="flex-grow relative">
                    {/* header */}
                    {/* Circle - Half of it is visible */}
                    <div
                        className="absolute -top-[94px]  right-[17px] w-[289px] h-[289px] rounded-full bg-[#B5D336] opacity-[15%] overflow-hidden"
                        style={{ clipPath: "circle(50% at 50% 50%)" }}
                    >
                        <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-[210px] h-[210px]"></div>
                    </div>


                    <DashboardHeader />


                    {/* Main Content Area */}
                    <div>{children}</div>

                    <DashboardFooter />
                    {/* footer  */}
                </div>

                {/* Overlay for small devices */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
                        onClick={() => dispatch(closeSidebar())}
                    />
                )}
            </div >

        </>
    );
}















