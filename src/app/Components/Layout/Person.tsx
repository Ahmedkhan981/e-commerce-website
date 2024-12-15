import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Person = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Meet Our Team Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Member Cards */}
          {[
            { name: "Person 1", profession: "Designer", image: "/person1.jpeg" },
            { name: "Person 2", profession: "Developer", image: "/person2.jpeg" },
            { name: "Person 3", profession: "Manager", image: "/person3.jpeg" },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md"
            >
              {/* Profile Image */}
              <Image
                src={member.image}
                alt={`${member.name} Photo`}
                width={150}
                height={100}
                className="w-[150px] h-[100px]"
              />
              {/* Name and Profession */}
              <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.profession}</p>
              {/* Social Links */}
              <div className="flex mt-3 space-x-4 ">
                <FaFacebook className="text-lg text-blue-600 cursor-pointer" />
                <FaInstagram className="text-lg text-pink-600 cursor-pointer" />
                <FaTwitter className="text-lg text-blue-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Companies Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Big Companies Are Here</h2>
          <p className="text-gray-600 mb-8">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>

          {/* Company Logos */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
            {["hooli", "lyft","pied-piper", "stripe", "aws", "reddit"].map((company, index) => (
              <Image
                key={index}
                src={`/Svg/${company}.svg`} // Replace with actual logo paths
                alt={`${company} Logo`}
                width={100}
                height={100}
                className="mx-auto w-[100px] h-[100px]"

              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Person;
