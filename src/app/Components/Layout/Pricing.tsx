"use client"
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from '@mui/material/Button'




const Pricing = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Pricing</h2>
          <p className="text-gray-600 mt-2">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Toggle Section */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-gray-600 ${!isYearly && "font-semibold"}`}>
            Monthly
          </span>
          <button
            className="w-12 h-6 flex items-center rounded-full bg-blue-500 relative transition duration-300"
            onClick={() => setIsYearly(!isYearly)}
          >
            <span
              className={`absolute w-5 h-5 bg-white rounded-full transition-all transform ${
                isYearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-gray-600 ${isYearly && "font-semibold"}`}>
            Yearly
          </span>
          <span className="ml-2 text-blue-500 font-bold bg-blue-100 px-2 py-1 rounded-md text-sm">
            Save 25%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-0 justify-center items-center">
          {/* Free Plan */}
          <div className="w-[280px] md:w-[300px] h-[450px] md:h-[300px]  mt-[0] md:mt-[20px] bg-white border border-blue-400 rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900">FREE</h3>
            <p className="text-gray-600 mt-2">Organize across all apps by hand</p>
            <div className="text-5xl font-bold text-blue-400 mt-4">
              0<span className="text-lg">$</span>
            </div>
            <span className="text-gray-500">Per Month</span>
      <div className="mt-6 flex items-start flex-col">
              <div className="flex items-center justify-center gap-2">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-gray-500 bg-white rounded-full" size={24} />
                <span>1TB Cloud storage</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-gray-500 bg-white rounded-full"  size={24}/>
                <span className="text-start">Email and community support</span>
              </div>
              <div className="flex w-full items-center md:hidden justify-center gap-2 mt-1">
              <Button variant="contained" color="primary">
  Try for free
</Button>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="w-[280px] md:w-[300px] h-[470px] md:h-[320px]  bg-slate-800 border-blue-400 text-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold">STANDARD</h3>
            <p className="mt-2">Organize across all apps by hand</p>
            <div className="text-5xl font-bold mt-4 text-blue-400">
              9.99<span className="text-lg">$</span>
            </div>
            <span className="text-gray-400">Per Month</span>
            <div className="mt-6 flex items-start flex-col">
              <div className="flex items-center justify-center gap-2">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-gray-500 bg-white rounded-full" size={24} />
                <span>1TB Cloud storage</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-gray-500 bg-white rounded-full"  size={24}/>
                <span className="text-start">Email and community 
support
</span>
              </div>
              <div className="flex w-full items-center md:hidden justify-center gap-2 mt-1">
<Button variant="contained" color="primary">
  Try for free
</Button>
              </div>

            </div>
          </div>

          {/* Premium Plan */}
          <div className="w-[280px] md:w-[300px] h-[450px] md:h-[300px] mt-[0] md:mt-[20px] bg-white border border-blue-400 rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900">PREMIUM</h3>
            <p className="text-gray-600 mt-2">Organize across all apps by hand</p>
            <div className="text-5xl font-bold mt-4 text-blue-400">
              19.99<span className="text-lg">$</span>
            </div>
            <span className="text-gray-500">Per Month</span>
      <div className="mt-6 flex items-start flex-col">
              <div className="flex items-center justify-center gap-2">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-green-500 bg-white rounded-full" size={24} />
                <span>Unlimited product updates</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-gray-500 bg-white rounded-full" size={24} />
                <span>1TB Cloud storage</span>
              </div>
              <div className="flex items-center md:hidden justify-center gap-2 mt-1">
                <FaCheckCircle className="text-gray-500 bg-white rounded-full"  size={24}/>
                <span className="text-start">Email and community support</span>
              </div>
              <div className="flex w-full items-center md:hidden justify-center gap-2 mt-1">
<Button variant="contained" color="primary">
  Try for free
</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
