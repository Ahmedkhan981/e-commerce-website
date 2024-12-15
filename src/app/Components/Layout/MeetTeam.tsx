"use client"
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const MeetTeam = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Video Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex justify-center">
          <div className="relative">
            {/* Video Image */}
            <Image
            width={800}
            height={100}
              src="/video.jpeg"
              alt="Video Thumbnail"
              className="rounded-lg shadow-lg"
            />
            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlayCircle className="text-blue-500 text-6xl hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MeetTeam;
