import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ContactSectionOne: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white px-14 mb:px-20">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-5xl text-slate-700 font-bold mb-4">Get in touch today!</h2>
        <p className="text-gray-600 mb-4">We know how large objects will act, but things on a small scale.</p>
        <p className="text-lg mb-2">Phone: +451 215 215</p>
        <p className="text-lg mb-4">Fax: +451 215 215</p>
        <div className="flex space-x-4">
          <Link href="https://twitter.com">
            <FaTwitter size={24} className="text-blue-500" />
          </Link>
          <Link href="https://facebook.com">
            <FaFacebookF size={24} className="text-blue-700" />
          </Link>
          <Link href="https://instagram.com">
            <FaInstagram size={24} className="text-pink-500" />
          </Link>
          <Link href="https://linkedin.com">
            <FaLinkedinIn size={24} className="text-blue-600" />
          </Link>
        </div>
      </div>
      <div className="w-[600px] h-[400px] md:w-1/2">
        <Image
          src="/family.jpg"
          alt="Family shopping"
          width={600}
          height={400}
          priority

          className="w-[600px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default ContactSectionOne;
