"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPuzzlePiece,
  FaGhost,
  FaGamepad,
  FaCar,
  FaSmile,
  FaChess,
  FaUsers,
  FaTable,
  FaChild,
  FaCreditCard,
  FaFutbol,
  FaFemale,
  FaMap,
  FaDice,
  FaChartLine,
  FaQuestionCircle,
  FaBook,
  FaGraduationCap,
  FaBaby,
  FaTags,
  FaGlobe,
  FaInfoCircle,
  FaList,
  FaHeart,
} from "react-icons/fa";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("All games");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // 🔹 Top section items
  const topItems = [
    { name: "All games", icon: <FaGamepad />, badge: null },
    { name: "New", icon: null, badge: 234 },
    { name: "Popular", icon: <FaHeart />, badge: null },
  ];

  const menuItems = [
    { name: "All categories", icon: <FaList />, link: "/all-categories" }, // ✅ Added link
    { name: "Puzzles", icon: <FaPuzzlePiece /> },
    { name: "Horror", icon: <FaGhost /> },
    { name: "Simulators", icon: <FaGamepad /> },
    { name: "Arcade", icon: <FaGamepad /> },
    { name: "Racing", icon: <FaCar /> },
    { name: "Casual", icon: <FaSmile /> },
    { name: "Strategy", icon: <FaChess /> },
    { name: "Midcore", icon: <FaGamepad /> },
    { name: "Two players", icon: <FaUsers /> },
    { name: "Board", icon: <FaTable /> },
    { name: "For kids", icon: <FaChild /> },
    { name: "Card", icon: <FaCreditCard /> },
    { name: "Bubble shooters", icon: <FaSmile /> },
    { name: "Sports", icon: <FaFutbol /> },
    { name: "For girls", icon: <FaFemale /> },
    { name: "Adventure", icon: <FaMap /> },
    { name: ".io Games", icon: <FaDice /> },
    { name: "Economy", icon: <FaChartLine /> },
    { name: "Quiz", icon: <FaQuestionCircle /> },
    { name: "RPG", icon: <FaGamepad /> },
    { name: "Match 3", icon: <FaPuzzlePiece /> },
    { name: "Novels", icon: <FaBook /> },
    { name: "Educational", icon: <FaGraduationCap /> },
    { name: "For babies", icon: <FaBaby /> },
  ];

  const tags = [
    { name: "browser", count: 12481 },
    { name: "free", count: 12950 },
    { name: "no download", count: 12610 },
    { name: "mobile", count: 12130 },
    { name: "desktop", count: 12477 },
  ];

  const moreItems = [
    "Game catalog",
    "Best 20 Browser Games",
    "About",
    "Developers",
    "Publishers",
    "FAQ",
    "Jobs",
    "Activate code",
    "Help",
    "User agreement",
    "Privacy policy",
  ];

  const languages = ["English", "Hindi", "Spanish", "French", "German"];

  return (
    <aside className="w-60 bg-[#1e1e1e] text-gray-300 h-screen p-4 overflow-y-auto scrollbar-hide">
      
      {/* 🔹 Top Section */}
<ul className="space-y-2 border-b border-gray-700 pb-3">
  {topItems.map((item, index) =>
    item.name === "All games" ? (
      <Link to="/" key={index}>
        <li
          onClick={() => setActiveMenu(item.name)}
          className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition 
            ${
              activeMenu === item.name
                ? "bg-white text-black"
                : "hover:bg-[#2a2a2a] text-gray-300"
            }`}
        >
          <div className="flex items-center space-x-3">
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        </li>
      </Link>
    ) : (
      <li
        key={index}
        onClick={() => setActiveMenu(item.name)}
        className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition 
          ${
            activeMenu === item.name
              ? "bg-white text-black"
              : "hover:bg-[#2a2a2a] text-gray-300"
          }`}
      >
        <div className="flex items-center space-x-3">
          {item.icon && <span className="text-lg">{item.icon}</span>}
          <span className="text-sm font-medium">{item.name}</span>
        </div>
        {item.badge && (
          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
            {item.badge}
          </span>
        )}
      </li>
    )
  )}
</ul>

      {/* 🔹 Categories Section */}
      <ul className="space-y-2 border-b border-gray-700 pb-3 mt-3">
        {menuItems.map((item, index) =>
          item.link ? (
            <Link to={item.link} key={index}>
              <li
                onClick={() => setActiveMenu(item.name)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition 
                ${
                  activeMenu === item.name
                    ? "bg-white text-black"
                    : "hover:bg-[#2a2a2a] text-gray-300"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </li>
            </Link>
          ) : (
            <li
              key={index}
              onClick={() => setActiveMenu(item.name)}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition 
              ${
                activeMenu === item.name
                  ? "bg-white text-black"
                  : "hover:bg-[#2a2a2a] text-gray-300"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </li>
          )
        )}
      </ul>

      {/* 🔹 Tags Section */}
      <div className="mt-4 border-b border-gray-700 pb-3">
        <div className="flex items-center space-x-2 px-3 mb-2 text-gray-400">
          <span>
            <FaTags />
          </span>
          <span className="font-semibold text-sm">All tags</span>
        </div>
        <div className="flex flex-wrap gap-2 px-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-[#2a2a2a] px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-[#3a3a3a] transition"
            >
              <span className="text-gray-300">{tag.name}</span>
              <span className="bg-[#3a3a3a] px-2 py-0.5 rounded-full text-gray-200 text-[10px]">
                {tag.count}
              </span>
            </span>
          ))}
        </div>
        {/* See all button */}
        <div className="flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-[#2a2a2a] cursor-pointer rounded mt-2">
          <span className="text-sm">See all</span>
          <FaChevronRight size={12} />
        </div>
      </div>


      {/* 🔹 Language Section */}
      <div className="mt-4 border-b border-gray-700 pb-3">
        <div
          className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-[#2a2a2a] rounded"
          onClick={() => setLanguageOpen(!languageOpen)}
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <FaGlobe />
            <span className="font-semibold text-sm">Language</span>
          </div>
          {languageOpen ? (
            <FaChevronDown size={12} />
          ) : (
            <FaChevronRight size={12} />
          )}
        </div>
        {languageOpen && (
          <ul className="mt-2 space-y-1">
            {languages.map((lang, idx) => (
              <li
                key={idx}
                className={`px-5 py-1 text-sm rounded cursor-pointer ${
                  selectedLanguage === lang
                    ? "bg-white text-black"
                    : "text-gray-300 hover:bg-[#2a2a2a]"
                }`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 🔹 More Section */}
      <div className="mt-4 border-b border-gray-700 pb-3">
        <div className="flex items-center space-x-2 px-3 mb-2 text-gray-400">
          <span>
            <FaInfoCircle />
          </span>
          <span className="font-semibold text-sm">More</span>
        </div>
        <ul className="space-y-1">
          {moreItems.map((item, idx) => (
            <li
              key={idx}
              className="px-5 py-1 text-sm text-gray-300 hover:bg-[#2a2a2a] rounded cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
