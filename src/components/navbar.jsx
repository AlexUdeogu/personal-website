import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {


  return (
    <nav className=" font-manrope bg-opacity-80 backdrop-blur-md border border-gray-600 rounded-xl fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 w-[28vw] py-4 px-4 flex flex-col items-center  lg:border-slate-900/10 dark:border-slate-300/[0.06] supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center">
        <Link
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mx-2 cursor-pointer hover:text-red-900 transition duration-200"
        >
          Home
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="mx-2 cursor-pointer hover:text-red-900 transition duration-200"
        >
          About
        </Link>
        <Link
          to="clients"
          spy={true}
          smooth={true}
          offset={-330}
          duration={500}
          className="mx-2 cursor-pointer hover:text-red-900 transition duration-200"
        >
          Tools
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={150}
          duration={500}
          className="mx-2 cursor-pointer hover:text-red-900 transition duration-200"
        >
          Contact
        </Link>
        <button
          className="mx-2 cursor-pointer  hover:text-red-900 transition duration-200"
        >
          Resume
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <p className="text-white">Mobile menu here (optional)</p>
      </div>
    </nav>
  );
};

export default Navbar;
