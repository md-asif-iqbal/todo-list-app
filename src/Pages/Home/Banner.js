import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import img from "../../image/to-do.png";
const Banner = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div
        class="hero min-h-screen "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class=" w-full">
            <h1 class="mb-5 text-5xl font-bold">To-Do App</h1>
            <p class="mb-5">Welcome to To-Do App</p>
            {user ? (
              <span className="font-bold">This is your Task Table</span>
            ) : (
              <span>Please Login first </span>
            )}
            {user ? (
              <div class="lg:max-w-2xl  mx-auto w-72 lg:w-full">
                <div class="flex flex-col ">
                  <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block lg:min-w-full align-middle">
                      <div class="overflow-hidden ">
                        <table class="lg:min-w-full   divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                          <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                              <th scope="col" class="p-4">
                                <div class="flex items-center">
                                  <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label for="checkbox-all" class="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                Task Name
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                              >
                                Description
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 mx-auto"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 mx-auto"
                              >
                                Edit
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="p-4 w-4">
                                <div class="flex items-center">
                                  <input
                                    id="checkbox-table-1"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label for="checkbox-table-1" class="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Imac 27"
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                Desktop PC
                              </td>
                              <td class="py-4 px-6 text-sm font-medium whitespace-nowrap dark:text-white">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span class="relative">Incomplete</span>
                                </span>
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <a
                                  href="#"
                                  class="text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                  Edit
                                </a>
                              </td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="p-4 w-4">
                                <div class="flex items-center">
                                  <input
                                    id="checkbox-table-2"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label for="checkbox-table-2" class="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                Laptop
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span class="relative">Incomplete</span>
                                </span>
                              </td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="p-4 w-4">
                                <div class="flex items-center">
                                  <input
                                    id="checkbox-table-3"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label for="checkbox-table-3" class="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                iPhone 13 Pro
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                Phone
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span class="relative">Incomplete</span>
                                </span>
                              </td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="p-4 w-4">
                                <div class="flex items-center">
                                  <input
                                    id="checkbox-table-4"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label for="checkbox-table-4" class="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Magic Mouse 2
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                Accessories
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span class="relative">Incomplete</span>
                                </span>
                              </td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td class="p-4 w-4">
                                <div class="flex items-center">
                                  <input
                                    id="checkbox-table-5"
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label for="checkbox-table-5" class="sr-only">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Watch Series 7
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                Accessories
                              </td>
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                  ></span>
                                  <span class="relative">Incomplete</span>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button class="btn btn-primary">
                <Link to="/login">Get Started</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
