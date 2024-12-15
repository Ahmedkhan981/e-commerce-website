"use client";
import { NextPage } from 'next';
import Image from 'next/image';

const Banner: NextPage = () => {
  return (
    <>
      <div className="w-full h-auto relative">
        {/* Text overlay */}
        <div className="text-white h-auto md:h-full font-extrabold absolute flex flex-col justify-center p-5">
          <h5 className="text-[8px] md:text-2xl">Summer 2025</h5>
          <br />
          <h1 className="text-2xl md:text-5xl">NEW COLLECTION</h1>
          <br />
          <div className="h-14 w-60">
            <p className="text-[8px] md:text-lg tracking-wider font-semibold">
              We know how large objects will act, but things on a small scale.
            </p>
          </div>
          <br />
          <button className="h-12 w-[150px] mt-4 border border-green-800 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-md hidden md:block">
            Shop Now
          </button>
        </div>
        {/* Banner Image */}
        <Image
          src="/girl-with-bags.jpeg"
          alt="girl"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Editor's Pick Section */}
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <div className="w-full h-auto">
          <h1 className="text-black font-extrabold uppercase tracking-wide text-2xl text-center">
            Editor&apos;s Pick
          </h1>
          <p className="text-gray-400 text-center font-bold">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-1 flex-col md:flex-row">
          {/* Men's Section */}
          <div className="w-[300px] h-[390px] relative">
            <h1
              className="absolute bg-white text-black text-center w-52 h-14 font-extrabold flex justify-center items-center"
              style={{ margin: "280px 0 0 16px" }}
            >
              MEN
            </h1>
            <Image
              src="/teenager.jpeg"
              alt="teenager"
              width={300}
              height={390}
              priority
              className="w-[300px] h-[390px] object-cover"
            />
          </div>

          {/* Women's Section */}
          <div className="w-[300px] md:w-[240px] h-[390px] relative">
            <h1
              className="absolute bg-white text-black text-center w-52 h-14 font-extrabold flex justify-center items-center"
              style={{ margin: "280px 0 0 16px" }}
            >
              WOMEN
            </h1>
            <Image
              src="/girl.jpeg"
              alt="teenager"
              width={240}
              height={390}
              priority
              className="w-[240px] h-[390px] object-cover"
            />
          </div>

          {/* Mixed Section */}
          <div className="w-[300px] md:w-[200px] h-[390px] flex gap-1 flex-col ">
            <div className="w-full h-[195px] relative">
              <h1
              className="absolute bg-white text-black text-center w-40 h-12 font-extrabold flex justify-center items-center"
              style={{ margin: "120px 0 0 8px" }}
            >
              ACCESSORIES
            </h1>
              <Image
                src="/women.jpeg"
                alt="woman"
                width={300}
                height={195}
                priority
                className="w-[300px] h-[195px] object-cover"
              />
            </div>
            <div className="w-full h-[300px] md:h-[195px] relative">
              <h1
              className="absolute bg-white text-black text-center w-40 h-12 font-extrabold flex justify-center items-center"
              style={{ margin: "120px 0 0 8px" }}
            >
              KID
            </h1>
              <Image
                src="/boy.jpeg"
                alt="boy"
                width={300}
                height={195}
                priority
                className="w-[300px] h-[195px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Banner;
