"use client"
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function LinkPage() {

  
  return (
    <div className="font-sans min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-slate-600">Start your 14 days free trial</h1>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-lg mb-6">
        Met minim Mollie non desert Alamo est sit aliquey dolor do met sent.
        RELIT official consequent.
      </p>

      {/* Call-to-action Button */}
      <Link href="/signup" className="bg-blue-400 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition">
          Try it free now

      </Link>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <FaTwitter size={24} className="text-blue-400" />
        <FaFacebook size={24} className="text-blue-500" />
        <FaInstagram size={24} className="" />
        <FaLinkedin size={24} className="text-blue-600" />
      </div>
    </div>
  );
}
