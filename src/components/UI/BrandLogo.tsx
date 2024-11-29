import { Logo } from "@/assets/icons";


import React from 'react';

interface BrandLogoProps {
    size?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = '71px' }) => {
    return (
        <div
            className="bg-[#B5D336] relative rounded-full"
            style={{ width: size, height: size }}
        >
            <div className="m-0 p-0 absolute top-0 -left-[8.50px]">
                <Logo />
            </div>
        </div>
    );
};

export default BrandLogo;
