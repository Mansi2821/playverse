"use client";
import React from "react";
import {
  FaRocket,
  FaGhost,
  FaChess,
  FaTable,
  FaQuestionCircle,
  FaBook,
  FaGraduationCap,
  FaHeart,
  FaSmile,
  FaFutbol,
  FaUsers,
  FaDice,
  FaBaby,
  FaBomb,
  FaRunning,
  FaMap,
  FaFemale,
  FaCreditCard,
  FaMask,
  FaGamepad,
  FaCar,
  FaCircle,
  FaCrown,
  FaCoins,
  FaPuzzlePiece,
  FaStar,
  FaChild,
} from "react-icons/fa";

const categories = [
  { name: "New", icon: <FaRocket /> },
  { name: "Horror", icon: <FaGhost /> },
  { name: "Strategy", icon: <FaChess /> },
  { name: "Board", icon: <FaTable /> },
  { name: "Quiz", icon: <FaQuestionCircle /> },
  { name: "Novels", icon: <FaBook /> },
  { name: "Popular", icon: <FaHeart /> },
  { name: "Casual", icon: <FaSmile /> },
  { name: "Sports", icon: <FaFutbol /> },
  { name: "Two players", icon: <FaUsers /> },
  { name: ".io Games", icon: <FaDice /> },
  { name: "Educational", icon: <FaGraduationCap /> },
  { name: "Action", icon: <FaBomb /> },
  { name: "Arcade", icon: <FaRunning /> },
  { name: "Adventure", icon: <FaMap /> },
  { name: "For girls", icon: <FaFemale /> },
  { name: "Card", icon: <FaCreditCard /> },
  { name: "For babies", icon: <FaBaby /> },
  { name: "For boys", icon: <FaMask /> },
  { name: "Simulators", icon: <FaGamepad /> },
  { name: "Racing", icon: <FaCar /> },
  { name: "Bubble shooters", icon: <FaCircle /> },
  { name: "Match 3", icon: <FaPuzzlePiece /> },
  { name: "Puzzles", icon: <FaPuzzlePiece /> },
  { name: "Midcore", icon: <FaStar /> },
  { name: "For kids", icon: <FaChild /> },
  { name: "RPG", icon: <FaCrown /> },
  { name: "Economy", icon: <FaCoins /> },
];

const footerLinks = [
  "User agreement",
  "Privacy policy",
  "Technical Support",
  "Digital Services Act",
];

export default function AllCategories() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#151515] to-[#1e1e1e] text-gray-300 flex flex-col justify-between">
      {/* Content */}
      <div className="px-10 py-8">
        <h1 className="text-white text-xl font-semibold mb-8">All categories</h1>

        <div className="grid grid-cols-4 gap-y-4 gap-x-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 cursor-pointer text-gray-300 hover:text-gray-100 transition"
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="text-sm">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="px-10 py-4 border-t border-gray-700 flex gap-6 text-green-500 text-sm">
        {footerLinks.map((link, i) => (
          <span key={i} className="cursor-pointer hover:underline">
            {link}
          </span>
        ))}
      </footer>
    </div>
  );
}

