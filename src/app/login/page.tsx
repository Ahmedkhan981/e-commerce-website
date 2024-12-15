"use client";

import { FaLock, FaUser } from "react-icons/fa";
import Link from "next/link";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
const LoginPage = () => {
  const [changer, setChanger] = useState<boolean>(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center mt-6">
          <h1 className="text-gray-600 font-semibold md:text-4xl text-2xl">Log In</h1>
        </div>
        <p className="text-center text-gray-600 text-sm mt-2">
          Welcome back! Please login to your account.
        </p>

        <form className="px-6 py-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <div className="flex items-center border focus-within:border-black  rounded-lg p-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full outline-none text-gray-700 text-sm"
              />
            </div>
          </div>

          <div className="mb-4   ">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="flex items-center border focus-within:border-black rounded-lg  p-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={changer?"text":"password"}
                id="password"
                placeholder="Enter your password"
                className="w-full outline-none text-gray-700 text-sm"
              />
              <span className="w-auto h-auto" onClick={()=>{
              setChanger(!changer);
            }}>{
              changer
              ?<MdRemoveRedEye className="text-gray-400 mr-2" />:< IoEyeOffSharp className="text-gray-400 mr-2"  />
            }
          </span>
            </div>

          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-gray-600 text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            Don’t have an account?{' '}
            <Link
              href="/signup"
              className="text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
