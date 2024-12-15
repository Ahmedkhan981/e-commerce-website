"use client";

import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
const SignUpPage = () => {
    const [changer, setChanger] = useState<boolean>(false);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="flex justify-center mb-6">
          <h1 className="text-gray-600 font-semibold md:text-4xl text-2xl">Sign Up</h1>
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Create an Account
        </h1>
        <form className="space-y-4">
          {/* Username Field */}
          <div className="flex items-center border focus-within:border-black  border-gray-300 rounded-md px-3 py-2">
            <FaUserAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="flex-1 focus:outline-none text-gray-700"
            />
          </div>
          {/* Email Field */}
          <div className="flex items-center border focus-within:border-black border-gray-300 rounded-md px-3 py-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 focus:outline-none text-gray-700"
            />
          </div>
          {/* Password Field */}
          <div className="flex items-center border focus-within:border-black border-gray-300 rounded-md px-3 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={changer?"text":"password"}
              placeholder="Password"
              className="flex-1 focus:outline-none text-gray-700"
            />
                          <span className="w-auto h-auto" onClick={()=>{
                          setChanger(!changer);
                        }}>{
                          changer
                          ?<MdRemoveRedEye className="text-gray-400 mr-2" />:< IoEyeOffSharp className="text-gray-400 mr-2"  />
                        }
                      </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?
          <Link href="/login">
            <span className="text-blue-600 hover:underline">Log In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
