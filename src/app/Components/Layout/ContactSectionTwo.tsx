import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const ContactSectionTwo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">We help small businesses with big ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center -py-6 h-[400px] bg-white p-6 rounded-lg shadow-md">
          <FaPhoneAlt className="text-blue-500 text-4xl mb-4" />
          <p className="text-center mb-2">georgia.young@example.com</p>
          <p className="text-center mb-4">georgia.young@ple.com</p>
          <p className="font-bold mb-4">Get Support</p>
          <Link href="/support"  className="text-blue-500 font-extrabold border board-blue-500 py-2 px-4 rounded-full">Submit Request
          </Link>
        </div>
        <div className="flex flex-col items-center -py-6  h-[400px] bg-slate-900 text-white p-6 rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
          <p className="text-center mb-2">georgia.young@example.com</p>
          <p className="text-center mb-4">georgia.young@ple.com</p>
          <p className="font-bold mb-4">Get Support</p>
          <Link href="/support"  className="text-blue-500 font-extrabold  border border-blue-500 py-2 px-4 rounded-full">Submit Request
          </Link>
        </div>
        <div className="flex flex-col items-center  -py-6  h-[400px] bg-white p-6 rounded-lg shadow-md">
          <FaEnvelope className="text-blue-500 text-4xl mb-4" />
          <p className="text-center mb-2">georgia.young@example.com</p>
          <p className="text-center mb-4">georgia.young@ple.com</p>
          <p className="font-bold mb-4">Get Support</p>
          <Link href="/support"  className="text-blue-500 font-extrabold  border board-blue-500 py-2 px-4 rounded-full">Submit Request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionTwo;
