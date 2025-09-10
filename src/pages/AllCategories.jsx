"use client";
import React from "react";
import { motion } from "framer-motion";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AllCategories() {
  return (
    <div className="min-h-screen bg-[#161616] text-gray-300 flex flex-col justify-between font-sans">
      {/* Content */}
      <div className="px-12 py-10">
        <h1 className="text-white text-lg font-medium mb-10">All categories</h1>

        <motion.div
          className="grid grid-cols-4 gap-y-6 gap-x-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-center gap-3 cursor-pointer group transition-all duration-200"
            >
              <span className="text-xl text-gray-400 group-hover:text-green-400 transition-transform transform group-hover:scale-110">
                {cat.icon}
              </span>
              <span className="text-sm text-gray-300 group-hover:text-white">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="px-12 py-5 border-t border-gray-700 flex gap-8 text-green-500 text-sm">
        {footerLinks.map((link, i) => (
          <span
            key={i}
            className="cursor-pointer hover:underline hover:text-green-400 transition-colors duration-200"
          >
            {link}
          </span>
        ))}
      </footer>
    </div>
  );
}
