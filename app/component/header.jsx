"use client"
import UserContext from '@/context/userContext';
import { logOutUser } from '@/httpsHelper/loginApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const header = () => {
    const { user, setUser } = useContext(UserContext);
    
    const [users, setUsers] = useState();
// console.log(user)
    useEffect(() => {
        if (typeof user === 'string' && user.startsWith('<!DOCTYPE html>')) {
            setUsers(undefined);
        } else {
            setUsers(user);
        }
    }, [user]);
    const router = useRouter();
    const handleLogout = async () => {
        console.log("log out")
        try {
            const res = await logOutUser();
            console.log(res);

            toast.success(`${res.message}`)
            setUser(null)
            // Redirect to login or home page
            router.push('/login');
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error(`${error.message}`)
        }
    };

    // console.log(user)
    return (
        <div className='flex justify-between items-center w-[95%] mx-auto px-5 '>
            <div className='text-3xl font-semibold'>Work Manager</div>
            <div className="">
                <ul className="flex justify-center items-center  gap-5 ">
                    <li className='hover:text-blue-600 '> <Link href='/'> Home</Link> </li>
                    <li> <Link href='/add-task'> Add Task</Link> </li>
                    <li> <Link href='/show-task'> Show Task</Link> </li>

                </ul>
            </div>
            <div className=''>
                {
                    users ?
                        <ul className='flex justify-center items-center gap-5 '>
                            <li>
                                <Link href='/profile'>
                                    <img className='w-12 h-12 rounded-full' src={user?.profileURL} alt="profile" />
                                </Link>
                            </li>

                            <button className='cursor-pointer' onClick={handleLogout}>Log Out</button>

                        </ul>
                        :


                        <ul className='flex justify-center items-center gap-5'>
                            <li> <Link href='/login'>Login </Link></li>
                            <li> <Link href='/signup'>Sign Up </Link></li>
                        </ul>}
            </div>
        </div>
    );
};

export default header;