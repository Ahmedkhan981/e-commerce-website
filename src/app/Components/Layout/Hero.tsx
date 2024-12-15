"use client"
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <div className="bg-greendark flex flex-col md:flex-row items-center justify-between px-8 md:px-16 ">
      <div className="text-white md:w-1/2">
        <h2 className="text-sm uppercase">Summer 2020</h2>
        <h1 className="text-4xl font-bold mt-2">Vita Classic Product</h1>
        <p className="mt-4">
          We know how large objects will act. We know how are objects will act. We know.
        </p>
        <div className="mt-6 flex items-center">
          <span className="text-2xl font-bold">$16.48</span>
          <Link href="/cart" className="ml-4 bg-lightgreen text-white px-4 py-2 rounded flex items-center font-semibold text-lg">ADD TO CART
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src="/boy-hero.png"
          alt="Vita Classic Product"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Hero;
