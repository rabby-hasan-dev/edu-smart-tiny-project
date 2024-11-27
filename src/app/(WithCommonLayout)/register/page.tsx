'use client'
import Image from 'next/image';
import React from 'react';

import registerBG from '@/assets/Placeholder Image.png'
import Container from '@/components/UI/Container';
import Link from 'next/link';
import ESForm from '@/components/form/ESForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import ESInput from '@/components/form/ESInput';
import ESSelect from '@/components/form/ESSelect';


const RegisterPage = () => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

        console.log(data)
    }

    return (
        <section>
            <Container>

                <h4 className='text-4xl text-[#092A67] text-center font-bold mb-12 '>Register To EduSmart</h4>
                <div className='border bg-[#E9F1FA] border-[#092A67]  rounded-xl lg:flex items-center'>
                    <figure
                        className='flex flex-col lg:w-1/2 '

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
                    <div className='lg:w-1/2  py-12 px-[82px]  '>
                        <ESForm

                            onSubmit={onSubmit}
                        >
                            <div className='space-y-6'>
                                <ESSelect
                                    name="role"
                                    label="Select your Role"
                                    options={[
                                        { value: "agent", label: "Agent" },
                                        { value: "student", label: "Student" },
                                        { value: "teacher", label: "Teacher" },
                                    ]}
                                    rules={{ required: "role is required" }}
                                />
                                <ESInput label='Username/Email' type='text' name='email' placeholder='Jhon doe' />
                                <ESInput label='Enter Password' type='password' name='password' placeholder='1234***' />

                                <div className="flex items-center">
                                    <input

                                        id="checkbox1" type="checkbox"
                                        className="w-[19px] h-[19px] mr-3 rounded focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]" />
                                    <label htmlFor="checkbox1" className="text-[#092A67] text-sm">I agree to the terms and conditions</label>
                                </div>

                                <button className='btn-primary py-[17px] px-6 '>Continue to Register</button>
                            </div>
                        </ESForm>
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