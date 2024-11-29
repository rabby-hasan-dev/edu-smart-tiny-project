'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { CancelIcon, Logo, MenuIcon } from '@/assets/icons';
import BrandLogo from './BrandLogo';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hook';
import { logOut, selectCurrentUser } from '@/lib/redux/features/auth/AuthSlice';

const Navbar = () => {
    const user = useAppSelector(selectCurrentUser);
    const dispatch = useAppDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <nav className='sticky  top-0 z-50 py-10 '>
            <header className=" max-w-screen-[1320px] mx-auto px-6 lg:px-0">
                <div className="container mx-auto flex items-center justify-between ">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button onClick={toggleMenu} className="lg:hidden mr-4">
                            <MenuIcon />
                        </button>
                        <Link href="/">

                            <BrandLogo />
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <nav >
                        <ul className='hidden lg:flex items-center space-x-8 '>
                            <li>

                                <Link href="/" className="text-[#092A67]  text-[20px] font-bold hover:text-[#007bff] ">Home</Link>
                            </li>

                            <li className='group max-lg:border-b max-lg:py-3 relative'>
                                <Link href='#'
                                    className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold lg:hover:fill-[#007bff] block'>Packages<svg
                                        xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000" />
                                    </svg>
                                </Link>
                                <ul
                                    className='absolute shadow-lg bg-white space-y-3 lg:top-6 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                    <li className='border-b py-2 '><Link href='#'
                                        className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold block'>About</Link></li>
                                    <li className='border-b py-2 '><Link href='#'
                                        className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold block'>Contact</Link></li>

                                </ul>
                            </li>
                            <li className='group max-lg:border-b max-lg:py-3 relative'>
                                <Link href='#'
                                    className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold lg:hover:fill-[#007bff] block'>Universities<svg
                                        xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000" />
                                    </svg>
                                </Link>
                                <ul
                                    className='absolute shadow-lg bg-white space-y-3 lg:top-6 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                    <li className='border-b py-2 '><Link href='#'
                                        className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold block'>About</Link></li>
                                    <li className='border-b py-2 '><Link href='#'
                                        className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold block'>Contact</Link></li>

                                </ul>
                            </li>

                            <li>

                                <Link href="/#" className="text-[#092A67] text-[20px] font-bold hover:text-[#007bff] "> About</Link>
                            </li>


                            {
                                user?.email && <li> <Link href="/dashboard" className="text-[#092A67] text-[20px] font-bold hover:text-[#007bff] ">Dashboard</Link></li>

                            }

                        </ul>

                    </nav>
                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {
                            user?.email ? <>
                                <button
                                    onClick={handleLogOut}
                                    className='btn-primary text-xl px-6 py-[10px] '>
                                    logOut
                                </button>

                            </> : <>
                                <Link href='/login' >
                                    <button className='btn-primary text-xl px-6 py-[10px] '>
                                        Login
                                    </button>
                                </Link>
                            </>
                        }

                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'}    max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
                        <button id="toggleClose" onClick={toggleMenu} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full  p-3'>
                            <CancelIcon />
                        </button>

                        <ul
                            className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <li className='mb-6 hidden max-lg:block'>
                                <Link href="/">
                                    <div className='bg-[#B5D336] h-[68px] w-[68px] flex justify-center items-center rounded-full'>
                                        <Logo />
                                    </div>
                                </Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'>
                                <Link href='/'
                                    className='hover:text-blue-600 text-[20px] font-bold text-blue-600 block'>Home</Link>
                            </li>

                            <li className='max-lg:border-b max-lg:py-3'><Link href='#'
                                className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold block'>Packages</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'><Link href='#'
                                className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold block'>Universities</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'><Link href='#'
                                className='hover:text-[#007bff] text-[#092A67] text-[20px] font-bold block'>About</Link>
                            </li>
                        </ul>
                    </div>

                )}



            </header>

        </nav>
    );
};

export default Navbar;