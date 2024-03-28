import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="bg-[#160226] shadow-lg ">
      <nav className="flex font-semibold justify-between items-center pt-5 w-[92%] mx-auto">
        <div className="pl-10 text-2xl text-white">
          Electify
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
          } md:w-auto w-full flex items-center px-5 bg-[#160226]`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white">
            <li>
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-500">
                Vote Now
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-500">
                Create Election
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
