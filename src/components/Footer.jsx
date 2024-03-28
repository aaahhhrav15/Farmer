import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#160226] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4 text-violet-600">ELECTIFY</h3>
          <p className="text-sm leading-relaxed text-[#63566b]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt arcu vel arcu fermentum, eget accumsan dolor cursus.
            Sed rutrum, turpis ut interdum cursus, eros lorem ultricies velit,
            a commodo erat elit et tortor.
          </p>
        </div>
        <div className="text-white ml-12">
          <h3 className="text-base font-semibold mb-4 ">LOCATION</h3>
          <p className="text-sm text-[#8f7d99]">ElectSmart@gmail.com</p>
          <p className="text-sm mt-2 text-[#8f7d99]">+91 9343847834</p>
          <p className="text-sm mt-2 text-[#8f7d99]">Electify, Vile Parle (East), <br />Mumbai</p>
          <p className="text-sm mt-2 text-[#8f7d99]">CHECK ON MAP</p>
        </div>
        <div className="text-white ml-10">
          <h3 className="text-base font-semibold mb-4 ">SITE LINKS</h3>
          <ul className="text-sm text-[#8f7d99]">
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-400">
                HOME
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-gray-400">
                ABOUT US
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-gray-400">
                CONTACT US
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/faq" className="hover:text-gray-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gray-400">
                PRIVACY POLICY
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-base font-medium mb-4 ">NEWSLETTERS</h3>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="mb-2 p-2 rounded-md bg-[#2c0b42] text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="mb-2 p-2 rounded-md bg-[#2c0b42] text-white placeholder-gray-400"
            />
            <button className="bg-violet-600 text-[#2c0b42] py-2 px-4 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;