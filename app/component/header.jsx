"use client"
import Link from 'next/link';
import React from 'react';

const header = () => {
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
            <div><ul className='flex justify-center items-center gap-5'>
                <li> <Link href='/login'>Login </Link></li> 
                <li> <Link href='/signup'>Sign Up </Link></li> 
            </ul></div>
        </div>
    );
};

export default header;