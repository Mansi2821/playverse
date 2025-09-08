// src/components/Navbar.jsx
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import { IoLogIn, IoHelpCircle } from "react-icons/io5";
import { BsController } from "react-icons/bs";
import { FaGift, FaBox } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coinsOpen, setCoinsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [adsDisabled, setAdsDisabled] = useState(false);

  return (
    <nav className="bg-[#2a2a2a] text-white px-4 py-2 flex items-center justify-between shadow-md relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="logo.jpg" alt="logo" className="h-8 w-auto" />
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
      <div className="flex items-center space-x-4 relative">
        {/* Coins */}
        <div
          className="hidden md:flex items-center space-x-1 text-sm cursor-pointer"
          onClick={() => {
            setCoinsOpen(!coinsOpen);
            setProfileOpen(false);
          }}
        >
          <FiZap className="text-blue-400" />
          <span>0</span>
        </div>

        {/* User Icon */}
        <FaUserCircle
          className="text-2xl cursor-pointer"
          onClick={() => {
            setProfileOpen(!profileOpen);
            setCoinsOpen(false);
          }}
        />

        {/* Log in button */}
        <a
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded-md text-sm font-semibold text-white"
        >
          Log in
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-200 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Coins Popup */}
      {coinsOpen && (
        <div className="absolute top-14 right-20 w-80 bg-[#222] text-white rounded-2xl shadow-lg p-4 z-50 font-sans">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-[15px]">You have ⚡ 0 hops</p>
            <button
              onClick={() => setCoinsOpen(false)}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-[#444] hover:bg-[#555]"
            >
              <span className="text-white text-sm leading-none">✕</span>
            </button>
          </div>

          {/* Info */}
          <div className="bg-[#3a3a3a] rounded-xl p-3 text-sm mb-3">
            <p>
              ⚡ Hops are bonuses on the Playhop service. They can be received by
              participating in various promotions.
            </p>
            <p className="text-green-500 mt-1 cursor-pointer hover:text-green-400">
              Games that take hops
            </p>
          </div>

          {/* Promotions */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-[#3a3a3a] rounded-xl p-3 cursor-pointer hover:text-green-400">
              <FaBox size={20} className="text-green-500" />
              <span className="text-[15px]">Bonuses for any set of hops</span>
            </div>
            <div className="flex items-center gap-3 bg-[#3a3a3a] rounded-xl p-3 cursor-pointer text-gray-400">
              <FaGift size={20} />
              <span className="text-[15px]">
                New promotions are coming soon
              </span>
            </div>
          </div>

          {/* Buy hops */}
          <button className="w-full mt-4 bg-green-500 hover:bg-green-600 py-2 rounded-lg font-semibold text-[15px]">
            Buy Hops
          </button>
        </div>
      )}

      {/* Profile Popup */}
      {profileOpen && (
        <div className="absolute top-14 right-4 w-80 bg-[#222] text-white rounded-2xl shadow-lg p-4 z-50 font-sans">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-[15px]">You have ⚡ 0 hops</p>
            <button
              onClick={() => setProfileOpen(false)}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-[#444] hover:bg-[#555]"
            >
              <span className="text-white text-sm leading-none">✕</span>
            </button>
          </div>

          {/* Green links */}
          <div className="flex gap-3 text-[15px] font-medium text-green-500 mb-3">
            <button className="hover:text-green-400">Top up balance</button>
            <button className="hover:text-green-400">Activate code</button>
          </div>

          {/* Sections */}
          <div className="space-y-3">
            {/* User */}
            <div className="flex items-center gap-3 bg-[#3a3a3a] rounded-xl p-3 cursor-pointer hover:text-green-400">
              <FaUserCircle size={28} />
              <span className="text-[15px]">Anonymous</span>
            </div>

            {/* Game Profile */}
            <div className="flex flex-col bg-[#3a3a3a] rounded-xl p-3 cursor-pointer hover:text-green-400">
              <div className="flex items-center gap-3">
                <BsController size={22} />
                <span className="text-[15px]">Game profile</span>
              </div>
              <div className="flex items-center justify-between ml-9 mt-2 text-sm">
                <span className="text-green-500 leading-snug">
                  Disable ads in all games and the catalog
                </span>
                <button
                  onClick={() => setAdsDisabled(!adsDisabled)}
                  className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                    adsDisabled ? "bg-green-500" : "bg-gray-500"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transform transition ${
                      adsDisabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Login */}
            <div className="flex items-center gap-3 bg-[#3a3a3a] rounded-xl p-3 cursor-pointer hover:text-green-400">
              <IoLogIn size={22} />
              <span className="text-[15px]">Log in</span>
            </div>

            {/* Help */}
            <div className="flex items-center gap-3 bg-[#3a3a3a] rounded-xl p-3 cursor-pointer hover:text-green-400">
              <IoHelpCircle size={22} />
              <span className="text-[15px]">Help</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
