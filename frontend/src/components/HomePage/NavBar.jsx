import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  console.log(isLoggedIn);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* App Title */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Comedy App</Link>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/generate-script" className="text-white">Generate Script</Link>
          <Link to="/generate-video" className="text-white">Generate Video</Link>
        </div>

        {/* Login/Signup/Logout */}
        <div className="hidden md:flex space-x-4">
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Login</Link>
              <Link to="/signup" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Sign Up</Link>
            </>
          )}
        </div>

        {/* Hamburger menu for mobile screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <div className="space-y-4">
            <Link to="/" className="block text-white">Home</Link>
            <Link to="/generate-script" className="block text-white">Generate Script</Link>
            <Link to="/generate-video" className="block text-white">Generate Video</Link>
            {isLoggedIn ? (
              <button
                onClick={logout}
                className="block w-full text-left text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="block text-white">Login</Link>
                <Link to="/signup" className="block text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
