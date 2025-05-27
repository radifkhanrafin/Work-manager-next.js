'use client'
import UserContext from '@/context/userContext';
import { deleteTask, getUserTask, updateTaskStatus } from '@/httpsHelper/taskApi';
import React, { useContext, useEffect, useState } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';
import cross from '../../assests/cross.png';
import Image from 'next/image';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import toast from 'daisyui/components/toast';

const ShowUserTask = () => {
    const { user } = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            getUserTask(user._id)
                .then((result) => {
                    console.log(result)
                    setTasks(result || []);
                })
                .catch((error) => {
                    console.error("Failed to fetch tasks:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [user]);

    if (!user || loading) {
        return <LoadingSpinner />;
    }

    const handleDeleteTask = async (id) => {
        try {
            console.log(id)
            const res = await deleteTask(id);
            console.log('Deleted:', res);
            setTasks(tasks => tasks.filter(task => task._id !== id));

        } catch (err) {
            console.error('Failed to delete:', err);
        }
    };

    const handleTaskUpdate = async (id) => {
        console.log(id)
        try {
            const result = await updateTaskStatus(id)
            const updatedTasks = await getUserTask(user._id);
            setTasks(updatedTasks || []);
            toast.success(`${result.message}`)
        } catch (error) {
            toast.success(`${error.message}`)
        }

        console.log(result)
    }


    return (
        <div className="max-w-[60%] mx-auto my-5">
            <h2 className="text-xl font-bold mb-3">Your Total Tasks : {tasks.length}</h2>
            {
                tasks.length === 0 ? (
                    <p> Your No Task Assign on Our Database</p>
                ) : (
                    <ul className="space-y-2">
                        {tasks.map(task => (
                            <li
                                key={task._id}
                                className={`p-3 rounded shadow ${task.status === 'complete' ? 'bg-red-200 text-red-700' : 'bg-gray-200'
                                    }`}
                            >
                                <div className='flex justify-between  items-center'>

                                    <h3 className="font-semibold">{task.title}</h3>

                                    <div className='flex justify-between gap-4 items-center'>
                                        {/* Delete Button with Tooltip */}
                                        <button
                                            onClick={() => handleDeleteTask(task._id)}
                                            title="Delete"
                                            className='border-2 w-6 h-6 rounded-full flex items-center justify-center'
                                        >
                                            <Image src={cross} alt="cross" width={16} height={16} />
                                        </button>

                                        {/* Complete Button with Tooltip */}
                                        <button
                                            onClick={() => handleTaskUpdate(task._id)}
                                            title="Complete"
                                            className="border-2 w-6 h-6 rounded-full flex items-center justify-center"
                                        >
                                            <IoCheckmarkDoneSharp />
                                        </button>
                                    </div>

                                </div>

                                <p>{task.content}</p>
                                <p className="text-sm text-gray-600">
                                    Status: <span className={task.status === 'complete' ? 'text-red-700 font-bold' : ''}>{task.status}</span>
                                </p>
                            </li>
                        ))}
                    </ul>

                )
            }
        </div>
    );
};

export default ShowUserTask;
