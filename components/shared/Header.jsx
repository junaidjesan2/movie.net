"use client";

import Link from "next/link";
import React, { useState ,useEffect} from "react";

function Navbar() {
  const [openDrower, setOpenDrower] = useState(false);
  const [admin_email,setAdminEmail]=useState([])

  useEffect(() => {
    const email = localStorage.getItem("email");
    setAdminEmail(email)
  }, []);
  return (
    <>
      <nav className="flex items-center relative justify-between bg-white drop-shadow-sm px-5 py-6 w-full">
        <div>
          <Link href="/" className="text-[#6A64F1] text-xl font-bold">
            Movie.net
          </Link>
        </div>
        <ul
          id="drawer"
          role="menu"
          className="sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0"
        >
          <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
            <Link href="/movies" className="">
              All Movies
            </Link>
          </li>
          {admin_email === "admin@google.dev" ? (
            <div className="flex items-center gap-3">
              <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
                <Link href="/wishList">wish List</Link>
              </li>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
                <Link href="/account/signin" className="">
                  Sign In
                </Link>
              </li>
              <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
                <Link href="/account/signup" className="">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </ul>
        <div className="flex md:hidden gap-3 items-center">
          <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center">
            <button onClick={() => setOpenDrower(true)}>
              <div className="sm:hidden cursor-pointer" id="mobile-toggle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className="dark:stroke-white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </button>
            <Drower openDrower={openDrower} setOpenDrower={setOpenDrower} />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

const Drower = ({ openDrower, setOpenDrower }) => {
  if (!openDrower) {
    return null;
  }
  return (
    <div className="drop-down  w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-3">
      <ul>
        <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400"></li>
        <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
          <Link href="/movies" className="">
            All Movies
          </Link>
        </li>
        {admin_email == "admin@google.dev" ? (
          <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
            <Link href="/wishList">wish List</Link>
          </li>
        ) : (
          <div className="flex items-center gap-3">
            <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
              <Link href="/account/signin" className="">
                Sign In
              </Link>
            </li>
            <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
              <Link href="/account/signup" className="">
                Sign Up
              </Link>
            </li>
          </div>
        )}
        <li
          onClick={() => setOpenDrower(false)}
          className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </span>
          <span> Exit </span>
        </li>
      </ul>
    </div>
  );
};
