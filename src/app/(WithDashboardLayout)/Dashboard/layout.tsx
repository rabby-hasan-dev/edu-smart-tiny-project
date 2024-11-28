
"use client";
import { ReactNode, useState, } from "react";
import { usePathname } from "next/navigation"; // Get the current path
import Link from "next/link";
import { DashboardSquareIcon, Logo, UserMultipleIcon, } from "@/assets/icons";
import LinkItem from "../_components/UI/LinkeItem";
import DashboardHeader from "../_components/module/DashboardHeader";
import DashboardFooter from "../_components/module/DashboardFooter";


export default function Dashboardlayout({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname(); // Use App Router's usePathname hook


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
            <div className="flex  h-full">
                {/* Sidebar */}
                <div
                    className={` w-[285px] fixed z-20 inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                md:translate-x-0 md:static md:inset-0 bg-[#092A67] text-white transition-transform duration-300 ease-in-out flex flex-col`}
                >
                    {/* Sidebar Header */}
                    <div className="p-4 mb-[22px] flex items-center border-b border-white">
                        <Link href="/" className="flex items-center space-x-4">
                            <div className="bg-[#B5D336] h-12 w-12 flex justify-center items-center rounded-full">
                                <Logo />
                            </div>
                            <div>
                                <h4 className="text-4xl">eduSmart</h4>
                                <p>Study Abroad Made Easy</p>
                            </div>
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
                <div className="flex-grow">
                    {/* header */}
                    <DashboardHeader isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* Main Content Area */}
                    <div>{children}</div>
                    <DashboardFooter />
                    {/* footer  */}
                </div>

                {/* Overlay for small devices */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </div>
        </>
    );
}