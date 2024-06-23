import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="border-b-2 border-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-white text-xl font-bold cursor-pointer">MockAi</div>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            </li>
          </ul>
          <div className="sign-in">
            <Link to="/signin" className="text-white border border-white py-1 px-3 rounded hover:bg-white hover:text-gray-800">Sign In</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
