import Image from 'next/image';
import React from 'react';

import registerBG from '@/assets/Placeholder Image.png'
import Container from '@/components/UI/Container';
import Link from 'next/link';

const RegisterPage = () => {
    return (
        <section>
            <Container>

                <h4 className='text-4xl text-[#092A67] text-center font-bold mb-12 '>Register To EduSmart</h4>
                <div className='border bg-[#E9F1FA] border-[#092A67]  rounded-xl lg:flex items-center'>
                    <figure
                        className='flex flex-col w-1/2 '

                    >
                        <Image
                            alt="Mountains"
                            src={registerBG}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </figure>
                    <div className='w-1/2  py-12 px-[82px]  '>

                        <form className='space-y-6'>

                            <div className="w-full ">
                                <label htmlFor="options" className="mb-2 font-bold text-[20px] block">
                                    Select Role
                                </label>
                                <select
                                    id="options"
                                    className="px-4 py-4 text-lg rounded-md text-[#092A67] bg-[#E9F1FA] border border-[#092A67] w-full outline-[#092A67]"
                                >
                                    <option value="" disabled selected>
                                        Student
                                    </option>
                                    <option value="option1"> Student</option>
                                    <option value="option2">Admin</option>
                                    <option value="option3">Employe</option>
                                </select>
                            </div>

                            <div>
                                <label className="mb-2 font-bold text-[20px] block">Username/Email</label>
                                <input type='text' placeholder='Jhon doe'
                                    className="px-4 py-4 text-lg rounded-md text-[#092A67] bg-[#E9F1FA] border border-[#092A67] w-full outline-[#092A67] " />
                            </div>
                            <div>
                                <label className="mb-2 font-bold text-[20px] block">Enter Password</label>
                                <input type='password' placeholder='1234***'
                                    className="px-4 py-4 text-lg rounded-md text-[#092A67] bg-[#E9F1FA] border border-[#092A67] w-full outline-[#092A67] " />
                            </div>
                            <div className="flex items-center">
                                <input id="checkbox1" type="checkbox"
                                    className="w-[19px] h-[19px] mr-3 rounded focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]" />
                                <label htmlFor="checkbox1" className="text-[#092A67] text-sm">I agree to the terms and conditions</label>
                            </div>

                            <button className='btn-primary py-[17px] px-6 '>Continue to Register</button>
                        </form>
                        <p className="text-center text-lg mt-[66px]  ">
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#092A67] font-bold underline hover:text-blue-700">
                                Sign in
                            </Link>
                        </p>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default RegisterPage;