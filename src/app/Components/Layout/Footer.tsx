import  Link  from 'next/link';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="w-full flex items-center justify-between p-5 ">
        <div className="text-2xl font-bold text-gray-600">Bandage</div>
        <div className="flex items-center gap-2">
                <FaFacebook size={24} fill='#3b82f6' />
          <FaInstagram size={24} fill='#3b82f6' />
          <FaXTwitter size={24} fill='#3b82f6' />
          </div>
      </div>
      <br />
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0 pl-7 ">
          {/* Company Info */}
          <div>
            <h5 className="font-bold text-lg mb-4 ">Company Info</h5>
            <ul className="space-y-2 text-gray-600 font-semibold">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Carrier</Link></li>
              <li><Link href="#" className="hover:underline">We are hiring</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-lg mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-600 font-semibold">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Carrier</Link></li>
              <li><Link href="#" className="hover:underline">We are hiring</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h5 className="font-bold text-lg mb-4">Features</h5>
            <ul className="space-y-2 text-gray-600 font-semibold">
              <li><Link href="#" className="hover:underline">Business Marketing</Link></li>
              <li><Link href="#" className="hover:underline">User Analytic</Link></li>
              <li><Link href="#" className="hover:underline">Live Chat</Link></li>
              <li><Link href="#" className="hover:underline">Unlimited Support</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-bold text-lg mb-4">Resources</h5>
            <ul className="space-y-2 text-gray-600 font-semibold">
              <li><Link href="#" className="hover:underline">IOS & Android</Link></li>
              <li><Link href="#" className="hover:underline">Watch a Demo</Link></li>
              <li><Link href="#" className="hover:underline">Customers</Link></li>
              <li><Link href="#" className="hover:underline">API</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="w-full lg:w-auto">
            <h5 className="font-bold text-lg mb-4">Get In Touch</h5>
            <form className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-auto border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 mt-2 text-sm">Lore imp sum dolor Amit</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-semibold">
            Made With Love By Finland All Right Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-facebook"></i></Link>
            <Link href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-instagram"></i></Link>
            <Link href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-twitter"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
