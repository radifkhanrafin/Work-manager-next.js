"use client"
import Image from 'next/image'
import post from '../../assests/post.svg'
import { useEffect, useState } from 'react';
import { addTaskApi } from '@/httpsHelper/taskApi'; 
import { toast } from 'react-toastify';





const AddTask = () => {
 
  const [task, setTask] = useState({
    title: "",
    content: "",
    userId: "682e2797cd1082cc32b559ea",
    status: "none",

  });

  // console.log(task)


  const handleTaskAdd = async (event) => {
    event.preventDefault();

    try {
      const result = await addTaskApi(task)
      console.log(result)

      toast.success("Task Added Successful", { position: 'top-center',  autoClose: 1000, })
      setTask({
        title: "",
        content: "",
        userId: "",
        status: "none",

      })
    } catch (error) {
      toast.error(`${error.message}`, { position: 'top-center' })
    }


  }
 
 
  return (
    <div>

      <div className=' my-5 bg-gray-200  max-w-[50%] mx-auto px-3 rounded-md py-1   shadow-md'>

        <div className='w-[50%] mx-auto  '>
          <Image
            src={post}
            alt="Post image"

            style={{ width: '50%', height: 'auto', margin: '0 auto', }}
          />
        </div>
        {/* {
          JSON.stringify(task)
        } */}
        <h1 className='text-2xl text-center py-2'>Add your daily task here</h1>
      </div>
      <form onSubmit={handleTaskAdd}>
        <div className=" max-w-[50%] mx-auto  ">

          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-md font-semibold  text-gray-900 dark:text-white">
              Task Title :
            </label>
            <input
              type="title"
              id="title"
              value={task.title}
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value
                })
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // placeholder="Input your task title"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block mb-2 text-md font-semibold  text-gray-900 dark:text-white">
              Task Content :
            </label>
            <textarea
              type="content"
              id="content"
              value={task.content}
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value
                })
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // placeholder="Input your task content"
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor="content" className="block mb-2 text-md font-semibold  text-gray-900 dark:text-white">
              Task Status :
            </label>
            <select id='task_status'
              value={task.status}
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value
                })
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

              <option value='none' disabled >---Select---</option>
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>

            </select>
          </div>
          <div className='flex gap-5 justify-around'>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto
                   px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                   dark:focus:ring-blue-800"
            >
              Submit
            </button>

            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none
                   focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto
                   px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700
                   dark:focus:ring-red-800"
            >
              Clear
            </button>
          </div>
        </div>



      </form>
    </div>
  )
};

export default AddTask;