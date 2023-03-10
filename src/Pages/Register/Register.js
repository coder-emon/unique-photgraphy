import React, { useContext } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Context/Auth.Context';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required()
}).required();
const Register = () => {
    const { setUser, signUp, googleSignIn, updateUser, setLoading } = useContext(AuthContext)
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })

    const handleSignUp = (data, e) => {
        setLoading(true)
        signUp(data.email, data.password)
            .then((result) => {
                const user = result.user
                updateUser(data.name)
                    .then(() => {
                        alert("user updated successfully")
                    })
                setUser(user)
            })
            .catch((error) => {
                console.error(error);
            })
        e.target.reset()
        setLoading(false)
    }
    const handleGoogleSignIn = () => {
        setLoading(true)
        googleSignIn()
            .then((result) => {
                const user = result.user
                setUser(user)
            })
            .catch((error) => {
                console.error(error);
            })
        setLoading(false);
    }
    return (
        <div className='py-20'>
            <div className='w-3/12 mx-auto bg-slate-100 p-10 rounded-md shadow-md'>
                <h1 className='font-bold text-3xl text-center text-gray-900'>Register</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSignUp)}>
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
                            {...register('name')}
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
                            {...register('email')}
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
                            {...register('password')}
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
                    <span className='text-3xl cursor-pointer ' onClick={handleGoogleSignIn}><FcGoogle></FcGoogle></span>
                </div>
            </div>
        </div>
    );
};

export default Register;