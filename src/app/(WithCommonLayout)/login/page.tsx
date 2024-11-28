
'use client'
import Image from 'next/image';
import React from 'react';

import registerBG from '@/assets/Placeholder Image.png'
import Container from '@/components/UI/Container';
import Link from 'next/link';
import ESForm from '@/components/form/ESForm';
import ESInput from '@/components/form/ESInput';
import CheckboxInput from '@/components/form/ESCheckbox';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/lib/redux/hook';
import { setUser } from '@/lib/redux/features/auth/AuthSlice';
import { useGetAllUniversityQuery } from '@/lib/redux/api/baseApi';

const LoginPage = () => {
    const dispatch = useAppDispatch();

    const { data } = useGetAllUniversityQuery(undefined);

    console.log(data)

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)

        dispatch(setUser({ user: { name: 'rabby' }, token: 'token' }));
    }

    return (
        <section>
            <Container>

                <h4 className='text-4xl text-[#092A67] text-center font-bold mb-12 '>Login To EduSmart</h4>
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
                                <ESInput label='Username/Email' type='text' name='email' placeholder='Jhon doe' />
                                <ESInput label='Enter Password' type='password' name='password' placeholder='1234***' />
                                <CheckboxInput name='agree' label='I agree to the terms and conditions' />
                                <button className='btn-primary py-[17px] px-6 '>Continue to Login</button>
                            </div>
                        </ESForm>
                        <p className="text-center text-lg mt-[66px]  ">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="text-[#092A67] font-bold underline hover:text-blue-700">
                                Sign Up
                            </Link>
                        </p>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LoginPage;