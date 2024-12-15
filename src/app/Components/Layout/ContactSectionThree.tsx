import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const ContactSectionThree: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <FaArrowDown className="text-blue-500 text-4xl mb-4" />
      <p className="text-gray-700 text-lg mb-2">WE Can&apos;t WAIT TO MEET YOU</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Let&apos;s Talk</h1>
      <Link href="/contact">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg hover:bg-blue-600 transition duration-300">
          Try it free now
        </button>
      </Link>
    </div>
  );
};

export default ContactSectionThree;
