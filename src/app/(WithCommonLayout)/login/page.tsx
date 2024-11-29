
'use client'
import Image from 'next/image';
import React from 'react';

import registerBG from '@/assets/Placeholder Image.png'
import Container from '@/components/UI/Container';
import Link from 'next/link';
import ESForm from '@/components/form/ESForm';
import ESInput from '@/components/form/ESInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';

// import { toast } from 'sonner';

// import { setUser } from '@/lib/redux/features/auth/AuthSlice';
// import { useAppDispatch } from '@/lib/redux/hook';

const LoginPage = () => {
    // const dispatch = useAppDispatch();


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // const toastId = toast.loading('loading ....')

        try {

            // const userInfo = {
            //     ...data
            // }

            // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDg4NmQzNDllNWZiOWQ0Y2VmZGI2NyIsImVtYWlsIjoicmFiYnkuNjUzMDFAZ21haWwuY29tIiwicm9sZSI6ImFnZW50IiwiaWF0IjoxNzMyODQ3MDE4LCJleHAiOjE3MzU0MzkwMTh9.dSXrVT1TUOlgznMBtT5SnNYTItt-Yxyc4nDp7u9Q8dA"

            // const userdata = {
            //     "id": "674886d349e5fb9d4cefdb67",
            //     "email": "rabby.65301@gmail.com",
            //     "role": "agent",
            //     "iat": 1732847018,
            //     "exp": 1735439018
            // }
            // dispatch(setUser({ user: userdata, token: token }));





            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
        } catch (error: any) {
            // toast.error(error?.data?.message, { id: toastId, duration: 2000 })

        }

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