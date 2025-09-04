// src/components/Navbar.jsx
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2a2a2a] text-white px-4 py-2 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="logo.jpg"
          alt="logo"
          className="h-8 w-auto"
        />
        <span className="text-2xl font-bold">PlayVerse</span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 mx-4">
        <input
          type="text"
          placeholder="Find game or genre"
          className="w-full px-4 py-2 rounded-md bg-[#3a3a3a] text-sm text-gray-200 focus:outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Coins */}
        <div className="hidden md:flex items-center space-x-1 text-sm cursor-pointer">
          <FiZap className="text-blue-400" />
          <span>0</span>
        </div>

        {/* User Icon */}
        <FaUserCircle className="text-2xl cursor-pointer" />

        {/* Login Button */}
        <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md text-sm font-semibold">
          Log in
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-200 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#2a2a2a] flex flex-col space-y-2 p-4 md:hidden z-50">
          <input
            type="text"
            placeholder="Find game or genre"
            className="w-full px-4 py-2 rounded-md bg-[#3a3a3a] text-sm text-gray-200 focus:outline-none"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm cursor-pointer">
              <FiZap className="text-blue-400" />
              <span>0</span>
            </div>
            <FaUserCircle className="text-2xl cursor-pointer" />
            <button className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md text-sm font-semibold">
              Log in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

