"use client";
import UserContext from '@/context/userContext';
import { loginUser } from '@/httpsHelper/loginApi';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        email: "",
        password: '',
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const result = await loginUser(formData)
            console.log(result)
            if (result.status == 200) {
                setUser(result.user)
                toast.success(`${result.message}`, {
                    position: 'top-right',
                    autoClose: 2000
                })
                router.push('/')
            }
            else if (result.status == 401) {
                toast.error(`${result.message}`, {
                    position: 'top-right',
                    autoClose: 2000
                })
            }
            else if (result.status == 404) {
                toast.error(`${result.message}`, {
                    position: 'top-right',
                    autoClose: 2000
                })
            }



        } catch (error) {
            console.log(error.message)
        }

    };

    return (
        <div className='  mt-12'>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-200 p-8 rounded-md" >

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                email: event.target.value
                            })
                        }}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@workmanager.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                password: event.target.value
                            })
                        }}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Login
                </button>
            </form>

        </div>
    );
};

export default Login;
