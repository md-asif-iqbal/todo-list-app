import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const NavBar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    navigate("/login");
    localStorage.removeItem("accessToken");
  };
  const navLink = (
    <>
      <Link
        to="/home"
        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
      >
        Home
      </Link>
      <Link
        to="/to-do"
        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
      >
        To-Do
      </Link>
      <Link
        to="/complete-task"
        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
      >
        Completed Task
      </Link>

      <Link
        to="/calender"
        className="block h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
      >
        Calendar
      </Link>
    </>
  );
  return (
    <div className="sticky top-0 z-20 hover:bg-white text-white hover:text-gray-600">
      <header className="shadow-sm bg-opacity-40 backdrop-blur-md ">
        <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
          <div className="flex flex-1 w-0 lg:hidden"></div>

          <div className="flex items-center space-x-4">
            <h1 className="font-bold lg:text-2xl text-3xl md:text-xl lg:ml-4">
              Todo list App
            </h1>
          </div>
          {/* dropdown here on small device */}
          <div className="flex justify-end flex-1 w-0 lg:hidden ml-2">
            <div className="dropdown dropdown-end">
              <label htmlFor="my-modal-3" className="">
                <button
                  className="p-2 text-gray-500 bg-gray-100 hover:bg-rose-500 hover:text-white rounded-full"
                  type="button"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </button>
              </label>
              <ul
                htmlFor="my-modal-3"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <input
                  type="checkbox"
                  htmlFor="my-modal-3"
                  className="modal-toggle"
                />
                <div className="">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <div className="items-center space-y-4 mt-4">
                    <Link
                      className="px-7 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
                      to="/login"
                    >
                      Log in
                    </Link>
                  </div>
                  <div className="items-center space-y-4 mt-4"></div>
                </div>
              </ul>
            </div>
          </div>

          <nav className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0 ">
            {navLink}
          </nav>

          <div className="items-center hidden space-x-4 lg:flex">
            {user ? (
              <button
                onClick={logout}
                className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
              >
                Log out
              </button>
            ) : (
              <Link
                className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
                to="/login"
              >
                Log in
              </Link>
            )}
          </div>
        </div>

        <div className="border-t border-gray-100 lg:hidden">
          <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
            <Link
              to="/home"
              className="block mr-2  h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              Home
            </Link>
            <Link
              to="/to-do"
              className="block h-16 mx-2  leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              To-Do
            </Link>
            <Link
              to="/complete-task"
              className="block mx-2  h-16 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              Complete Task
            </Link>

            <Link
              to="/calender"
              className="block h-16 ml-2 leading-[4rem] border-b-4 border-transparent hover:text-red-700 hover:border-current"
            >
              Calender
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
