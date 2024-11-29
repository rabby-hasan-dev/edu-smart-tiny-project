
'use client'
import Image from 'next/image';
import React from 'react';

import registerBG from '@/assets/Placeholder Image.png'
import Container from '@/components/UI/Container';
import Link from 'next/link';
import ESForm from '@/components/form/ESForm';
import ESInput from '@/components/form/ESInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { useLoginMutation } from '@/lib/redux/features/auth/AuthApi';
import { useAppDispatch, } from '@/lib/redux/hook';
import { verifyToken } from '@/utils/VerifyToken';
import { setUser, } from '@/lib/redux/features/auth/AuthSlice';
import { useRouter } from 'next/navigation';
import { USER_ROLE } from '@/constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas';



const LoginPage = () => {
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const router = useRouter();



    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading('loading ....')
        try {
            const userInfo = {
                ...data
            }
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res?.data?.token);
            if (user?.role === USER_ROLE.user || user?.role === USER_ROLE.admin || user?.role === USER_ROLE.agent) {
                dispatch(setUser({
                    user: {
                        ...user, name: res?.data?.first_name + '' + res?.data?.last_name
                    }, token: res.data.token
                }));
                toast.success(res?.data?.message, { id: toastId, duration: 2000 });
                router.push('/dashboard')
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.data?.message, { id: toastId, duration: 2000 })

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
                            resolver={zodResolver(loginSchema)}
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
            </Container >
        </section >
    );
};

export default LoginPage;