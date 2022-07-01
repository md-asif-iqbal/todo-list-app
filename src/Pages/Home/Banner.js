import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import img from "../../image/to-do.png";
import Loading from "../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
const Banner = () => {
  const [edit, setEdit] = useState(null);
 const nameRef= useRef('')
 const desRef= useRef('')
 

  const [user, loading] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery("data", () =>
    fetch(`http://localhost:8000/task?email=${user.email}`).then((res) =>
      res.json()
    )
  );
  const completeTask = (task) => {
    const id = task._id;
    console.log(id);
    const url = `http://localhost:8000/task/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      
    }).then((data) => {
      console.log(data);
      refetch();
      toast.success(`Congrat's you hove done your task`);
    });
  };

  if (isLoading || loading) {
    return <Loading />;
  }
// Update Here
const onUpdate=async(event)=>{
  event.preventDefault();
  const names = nameRef.current.value;
  const description = desRef.current.value;
    console.log(names);
  const id = edit._id;
 
  const url = `http://localhost:8000/task/${id}`;
  fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data)
  }).then((data) => {
    console.log(data);
    refetch();
    toast.success(`Congrat's your task is updated`);
  });
 
  
}
  // Submit delete here
 const submitDelete=(edit)=>{
  const id = edit._id;
  const url =`http://localhost:8000/task/${id}`;
  fetch(url, {
      method: 'DELETE',
      headers: {
        "content-type": "application/json",
      }
  })
  .then(res => res.json())
  .then(data => {
      toast('Your task is deleted');
      refetch()
      
  })
 }
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" w-full">
            <h1 className="mb-5 text-5xl font-bold">To-Do App</h1>
            <p className="mb-5">Welcome to To-Do App</p>
            {user ? (
              <span className="font-bold">This is your Task Table</span>
            ) : (
              <span>Please Login first </span>
            )}
            {user ? (
              <div className="lg:max-w-2xl  mx-auto w-72 lg:w-full ">
                <div className="flex flex-col ">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block lg:min-w-full align-middle">
                      <div className="overflow-hidden ">
                        <table className="lg:min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                          <thead className="bg-gray-100 dark:bg-gray-700">
                            <tr>
                              <th scope="col" className="p-4">
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label
                                    htmlFor="checkbox-all"
                                    className="sr-only"
                                  >
                                    checkbox
                                  </label>
                                </div>
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                Task Name
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 mx-auto"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 mx-auto"
                              >
                                Edit
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {data.map((task) => (
                              <tr
                                key={task._id}
                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                <td className="p-4 w-4">
                                  <div className="flex items-center">
                                    <input
                                      disabled={task.status}
                                      checked={task.status}
                                      id="checkbox-table-1"
                                      type="checkbox"
                                      onClick={() => completeTask(task)}
                                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                      htmlFor="checkbox-table-1"
                                      className=" sr-only modal-button"
                                    >
                                      checkbox
                                    </label>
                                  </div>
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {task?.name}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  {task?.description}
                                </td>
                                <td className="py-4 px-6 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span
                                      aria-hidden
                                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                    ></span>
                                    <span className="relative">
                                      {task.status
                                        ? `${task.status}`
                                        : "Incomplete"}
                                    </span>
                                  </span>
                                </td>
                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                  <label
                                    onClick={() => setEdit(task)}
                                    htmlFor="my-modal-6"
                                    className="  modal-button text-blue-600 dark:text-blue-500 hover:underline"
                                  >
                                    Edit
                                  </label>
                                </td>
                                <input
                                  type="checkbox"
                                  id="my-modal-6"
                                  class="modal-toggle"
                                />
                                <div class="modal modal-bottom sm:modal-middle">
                                  <div class="modal-box text-black relative">
                                    <label
                                      for="my-modal-6"
                                      class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-green-600"
                                    >
                                      ✕
                                    </label>
                                    <div>
                                    <form onSubmit={onUpdate} class="space-y-4">
                                      
                                      <input 
                                        class="w-full lg:w-3/4 p-3 text-sm border input-accent rounded-lg"
                                        placeholder="text"
                                        type="text"
                                        ref={nameRef}
                                        />
                                  <input 
                                        class="w-full lg:w-3/4 p-3 text-sm border input-accent rounded-lg"
                                        placeholder="text"
                                        type="text"
                                        ref={desRef}
                                        />
                                    
                                    <div class="mt-4">
                                      <button
                                     
                                        type="submit"
                                        class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black hover:bg-green-600 rounded-lg sm:w-auto"
                                      >
                                        <span class="font-medium">
                                          Update Task
                                        </span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          class="w-5 h-5 ml-3"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </form>
                                    </div>
                                    <div class="divider">OR</div>
                                    <button
                                      
                                      
                                      class=" items-center justify-center w-full px-5 py-3 text-white bg-black hover:bg-rose-600 rounded-lg sm:w-auto"
                                    >
                                      <label
                                      for="my-modal-6"
                                      class="inline-flex"
                                      onClick={()=>submitDelete(edit)}
                                    >
                                      <span class="font-medium">
                                        {" "}
                                        Delete Task{" "}
                                      </span>

                                      <svg
                                        class="w-5 h-5 ml-3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"
                                        />
                                      </svg>
                                    </label>
                                      
                                    </button>
                                  </div>
                                </div>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button className="btn btn-primary">
                <Link to="/login">Get Started</Link>
              </button>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Banner;
{
  /* <div class="modal modal-bottom sm:modal-middle text-black  w-72 h-full lg:h-auto lg:w-full">
<div class="modal-box relative lg:mt-28  lg:mb-10 ">
  <label
    for="my-modal-6"
    class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-green-600"
  >
    ✕
  </label>
  <div className="lg:mx-16">
  <div class="form-control lg:w-full  ">
    <label class="label">
      <span class="label-text">Update task name</span>

    </label>
    <input type="text" placeholder="Type here..." class="input input-bordered input-accent w-full max-w-xs" />
    <label class="label">
      <span class="label-text-alt">Old task-name: {edit?.name}</span>
      
    </label>
  </div>
  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Update task description</span>

    </label>
    <input type="text" placeholder="Type here..." class="input input-bordered input-accent w-full max-w-xs" />
    <label class="label">
      <span class="label-text-alt">Old task-description: {edit?.description}</span>
      
    </label>
    <label
      for="my-modal-6"
      class="btn  hover:bg-green-600"
    >
      Update
    </label>
    <div class="divider">OR</div>
    <label
      for="my-modal-6"
      class="btn hover:bg-rose-600  px-10"
    >
      delete
    </label>
  </div>
  </div>



</div>
</div> */
}
