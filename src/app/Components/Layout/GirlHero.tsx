"use client"
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const GirlHero: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-blue-500 text-white min-h-screen p-4">
      <div className="md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2">WORK WITH US</h2>
        <h1 className="text-4xl font-bold mb-4">Now Let&apos;s grow Yours</h1>
        <p className="mb-4">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
        </p>
        <button className="flex items-center bg-white text-blue-500 px-4 py-2 rounded">
          Button <FaArrowRight className="ml-2" />
        </button>
      </div>
      <div className="hidden md:block p-4 w-full">
        <Image
          src="/girllogo.png"
          alt="Person"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default GirlHero;
