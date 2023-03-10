import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div className='py-20'>
            <div className='w-3/12 mx-auto bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-3xl text-center text-gray-900'>Register</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Type Your Full Name"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="Type your email"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            required={true}
                        />
                    </div>

                    <Button type="submit">
                        Register
                    </Button>
                </form>

            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
                <h2 className='font-semibold text-xl text-gray-900'>You have an account <Link to="/login" className='text-blue-700'>Login here</Link></h2>
                <h3 className='text-xl'>Or</h3>
                <h3 className='text-xl'>Sign up with</h3>
                <div className='my-2'>
                    <span className='text-3xl cursor-pointer '><FcGoogle></FcGoogle></span>
                </div>
            </div>
        </div>
    );
};

export default Register;