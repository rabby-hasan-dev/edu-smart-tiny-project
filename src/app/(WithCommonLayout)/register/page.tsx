'use client'
import Image from 'next/image';
import React from 'react';
import registerBG from '@/assets/Placeholder Image.png'
import Container from '@/components/UI/Container';
import Link from 'next/link';
import ESForm from '@/components/form/ESForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import ESInput from '@/components/form/ESInput';
import SelectInput from '@/components/form/ESSelect';
import CheckboxInput from '@/components/form/ESCheckbox';
import { useSignupMutation } from '@/lib/redux/features/auth/AuthApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from '@/schemas';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


const RegisterPage = () => {
    const [register] = useSignupMutation();
    const router = useRouter();
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {


        const formData = new FormData();
        formData.append('role', data.role);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('confirm_password', data.password);

        try {
            const response = await register(formData).unwrap();
            toast.success(response?.data?.message,);
            router.push('/dashboard')
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any

        ) {
            console.error('Error:', error);
            toast.error(error?.data?.message,)
        }


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
                            resolver={zodResolver(registrationSchema)}
                        >
                            <div className='space-y-6'>
                                <SelectInput
                                    name="role"
                                    label="Select your Role"
                                    options={[
                                        { value: "agent", label: "Agent" },
                                        { value: "student", label: "Student" },
                                        { value: "teacher", label: "Teacher" },
                                    ]}
                                    rules={{ required: "role is required" }}
                                />
                                <ESInput label='Username/Email' type='email' name='email' placeholder='Jhon doe' />
                                <ESInput label='Enter Password' type='password' name='password' placeholder='1234***' />
                                <CheckboxInput name='agree' label='I agree to the terms and conditions' />


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