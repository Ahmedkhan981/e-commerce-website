"use client"
import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { usePathname } from "next/navigation";
import { BsTwitterX } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [miniHidden, setMiniHidden] = useState<boolean>(false);
const PathName = usePathname();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className={`hidden md:flex text-white text-sm py-2 px-4 justify-between items-center ${PathName != '/'? "bg-green-800":"bg-gray-800 "}`}>
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FaPhoneAlt className="mr-1" /> (225) 555-0118
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-1" /> michelle.rivera@example.com
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <span>Follow Us:</span>
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
          <BsTwitterX />
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl font-bold">Bandage</div>
          </Link>

          {/* Links */}
          <ul className="hidden md:flex space-x-6 font-semibold items-center ">
              <Link href="/" className={`${PathName=="/"?"text-blue-800 underline":"text-gray-700"}`}>
            <li>
                <div>Home</div>
            </li>
              </Link>
              <Link href="/product" className={`${PathName=="/product"?"text-blue-800 underline":"text-gray-700"}`}>
            <li>
                <div>Product</div>
            </li>
              </Link>
              <Link href="/shop" className={`${PathName=="/shop"?"text-blue-800 underline":"text-gray-700"}`}>
            <li>
                <div className="flex items-center">Shop{<IoIosArrowDown />}</div>
            </li>
              </Link>
              <Link href="/pricing" className={`${PathName=="/pricing"?"text-blue-800 underline":"text-gray-700"}`}>
            <li>
                <div>Pricing</div>
            </li>
              </Link>
              <Link href="/about" className={`${PathName=="/about"?"text-blue-800 underline":"text-gray-700"}`}>
            <li>
                <div>About</div>
            </li>
              </Link>
              <Link href="/contact" className={`${PathName=="/contact"?"text-blue-800 underline":"text-gray-700"}`}>
            <li>
                <div>Contact</div>
            </li>
              </Link>
              
              <Link href="/SignUp" className={`text-blue-500 flex items-center underline font-semibold`}>
              <li className="flex items-center">
                <div className="flex items-center">{<IoPersonOutline />}Register/Log in </div>
                </li>
              </Link>
          </ul>

          {/* Icons and Hamburger */}
          <div className="flex items-center space-x-4">
            <span className="hidden md:block text-lg">{<IoSearch size={24} fill="#3b82f6 " onClick={()=>setHidden(!hidden)}/>}</span>
            <Link href="/cart">
            <span className="hidden md:block text-lg">{<MdOutlineShoppingCart size={24} fill="#3b82f6 " />}</span>
            </Link>
            <button
              className="md:hidden text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
{     hidden&&     (  <form className="absolute top-20 right-16 hidden md:block">
              <input type="text" className="text-black hover:outline-none active:outline-none " id="1" placeholder="Search here"  />
            </form >)
            }
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white w-full text-center py-4 text-gray-600 absolute z-10 font-semibold">
 <Link href="/" className={`${PathName=="/"?"text-blue-800 underline":"text-gray-700"}`}>
                <div>Home</div>
              </Link>
              <Link href="/product" className={`${PathName=="/product"?"text-blue-800 underline":"text-gray-700"}`}>
                <div>Product</div>
              </Link>
              <Link href="/shop" className={` flex justify-center items-center  ${PathName=="/shop"?"text-blue-800 underline":"text-gray-700"}`}>
                <div className="flex items-center">Shop{<IoIosArrowDown />}</div>
              </Link>
              <Link href="/pricing" className={`${PathName=="/pricing"?"text-blue-800 underline":"text-gray-700"}`}>
                <div>Pricing</div>
              </Link>
              <Link href="/about" className={`${PathName=="/about"?"text-blue-800 underline":"text-gray-700"}`}>
                <div>About</div>
              </Link>
              <Link href="/contact" className={`${PathName=="/contact"?"text-blue-800 underline":"text-gray-700"}`}>
                <div>Contact</div>
              </Link>


              <Link href="/SignUp" className={` flex items-center justify-center text-blue-500 underline font-semibold`}>
                <div className="items-center flex">{<IoPersonOutline />}Register/Log in </div>
              </Link>
            <Link href="/cart" className=" flex justify-center">
            <span className=" text-lg">{<MdOutlineShoppingCart size={24} fill="#3b82f6 " />}</span>
            </Link>
            <span className=" flex justify-center text-lg"  onClick={()=>setMiniHidden(!miniHidden)} >{<IoSearch size={24} fill="#3b82f6 "/>}
            </span>
            {miniHidden&&(<form className=" block md:hidden">
              <input type="text" className="text-black hover:outline-none active:outline-none " id="2" placeholder="Search here"  />
            </form >)}
          </div>

        )}
      </nav>
    </header>
  );
};

export default Header;
