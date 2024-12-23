
import { useAppSelector } from "@/lib/redux/hook";
import Link from "next/link";
import { ReactNode } from "react";

interface LinkItemProps {
    href: string;
    label: string;
    isActive: boolean;
    icon?: ReactNode; // Icon component or element
}

export default function LinkItem({ href, label, isActive, icon }: LinkItemProps) {
    const { isCollapsed } = useAppSelector((state) => state.sidebar);
    return (
        <li className={` ${isActive ? "pl-0 " : 'pl-10'} `}>
            <Link className="hover:text-white transition-colors" href={href}>
                <div className={`flex items-center ${isActive ? "space-y-0 my-3 " : 'space-y-6 my-6'} `}>
                    {!isCollapsed && <p className={` ${isActive ? "w-[15px] h-[52px] mr-[21px] bg-[#B5D336] text-[#092A67] py-[14px] rounded-r-lg " : 'hidden'} `} ></p>}
                    <p className={` flex items-center space-x-2 w-full ${isActive ? "bg-[#B5D336] text-[#092A67] py-[14px] rounded-l-lg" : "text-white"}`}>
                        {icon && <span className={`text-xl  ${isActive ? 'ml-[49px] mr-[26px]' : 'mr-[23px] '} `} >{icon}</span>}
                        {!isCollapsed && <span className="text-xl">{label}</span>}
                    </p>
                </div>
            </Link>
        </li>
    );
}

