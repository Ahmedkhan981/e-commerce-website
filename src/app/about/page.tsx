import Image from "next/image";
import MeetTeam from './../Components/Layout/MeetTeam';
import Person from './../Components/Layout/Person';
import GirlHero from './../Components/Layout/GirlHero';

const About = () => {
  return (
    <>
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 text-slate-800">About Us</h2>
            <p className="text-lg mb-6 font-semibold text-gray-400">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
              Get Quote Now
            </button>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <Image
              src="/aboutgirl.png"
              width={500}
              height={100}

              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 ">
          <h3 className="text-xl font-semibold px-6 text-start text-red-500 mb-2">Problems trying</h3>
          <div className="flex  flex-col md:flex-row ">

          <p className="text-lg text-gray-700 font-semibold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 py-8 grid grid-cols-1  md:grid-cols-4 gap-4 text-center">
        <div>
          <h4 className="text-3xl font-bold text-slate-800">15K</h4>
          <p className="text-sm font-semibold text-gray-600">Happy Customers</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-slate-800">150K</h4>
          <p className="text-sm font-semibold text-gray-600">Monthly Visitors</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-slate-800">15</h4>
          <p className="text-sm font-semibold text-gray-600">Countries Worldwide</p>
        </div>
        <div>
          <h4 className="text-3xl font-bold text-slate-800">100+</h4>
          <p className="text-sm font-semibold text-gray-600">Top Partners</p>
        </div>
      </section>
    </div>
    <MeetTeam />
    <Person />
    <GirlHero />
    </>
  );
};

export default About;
