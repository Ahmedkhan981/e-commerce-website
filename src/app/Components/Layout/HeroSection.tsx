import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white ">
      <div className="relative w-[500px] h-64 md:h-auto">
        <Image
          src="/couple.png"
          alt="Couple under blanket"
          width={500}
          height={250}
          className=" w-[500px] h-[250px] "
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6 text-center md:text-left">
        <p className="text-gray-500 uppercase">Summer 2020</p>
        <h1 className="text-3xl font-bold mt-2">Part of the Neural Universe</h1>
        <p className="text-gray-700 mt-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <Link href="/buy">
            <button className="flex items-center bg-lightgreen text-white px-4 py-2 rounded-lg hover:bg-greendark"> BUY NOW
            </button>
          </Link>
          <Link href="/read-more">
            <button className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"> READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
