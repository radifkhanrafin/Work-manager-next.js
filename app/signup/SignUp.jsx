"use client";
import { postUser } from '@/httpsHelper/userApi';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: "",
        profileURL: 'https://i.ibb.co/Tx3c8HcX/Whats-App-Image-2025-05-4f4d9df5.jpg',
        password: '',
        about: '',
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        // Handle your API logic here

       try {
        
         const result = await postUser(formData)
        console.log(result)
        toast.success("Signup Successful", {
            position: 'top-right',
            autoClose: 1000
        })

       } catch (error) {
        toast.error(`${error.message}`, {
            position: 'top-right',
            autoClose: 2000
        })
       }
        // redirect('/login')
    };

    return (
        <div className='  mt-12'>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-200 p-8 rounded-md" >
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your Name
                    </label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                name: event.target.value
                            })
                        }}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="work manager"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Choose Profile Photo
                    </label>
                    <input
                        type="file"
                        id="photo"
                        name="profileURL"
                        // value={formData.profileURL}
                        // onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        // placeholder="name@workmanager.com"
                        required
                    />
                </div>
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
                {/* <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div> */}
                <div className="mb-5">
                    <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        About Yourself
                    </label>
                    <textarea
                        type="text"
                        id="about"
                        name="about"
                        value={formData.about}
                        onChange={(event) => {
                            setFormData({
                                ...formData,
                                about: event.target.value
                            })
                        }}
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            name="agreedToTerms"
                            type="checkbox"
                            checked={formData.agreedToTerms}

                            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 
                       focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
                       dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                        />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Register new account
                </button>
            </form>

        </div>
    );
};

export default SignUp;
