import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaApple,
  FaDiscord,
  FaEllipsisH,
  FaTwitch,
} from "react-icons/fa";

export default function LoginSignup() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Background floating icons */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 opacity-30 pointer-events-none">
        {[
          "https://img.icons8.com/color/96/mario.png",
          "https://img.icons8.com/color/96/controller.png",
          "https://img.icons8.com/color/96/ghost.png",
          "https://img.icons8.com/color/96/pacman.png",
          "https://img.icons8.com/color/96/sonic.png",
          "https://img.icons8.com/color/96/nintendo.png",
          "https://img.icons8.com/color/96/joystick.png",
          "https://img.icons8.com/color/96/pokemon.png",
          "https://img.icons8.com/color/96/arcade.png",
          "https://img.icons8.com/color/96/dragon-quest.png",
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="game"
            className={`w-20 h-20 rounded-lg object-cover shadow-lg animate-float${
              (i % 3) + 1
            }`}
          />
        ))}
      </div>

      {/* Center Card */}
      <div className="relative z-10 bg-black/80 backdrop-blur-lg text-white w-[380px] sm:w-[420px] p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,128,0.4)] border border-green-500/20">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://i.ibb.co/VmShj6j/playhop-logo.png"
            alt="Playhop Logo"
            className="h-12 animate-pulse"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-between mb-6 border-b border-gray-700 text-sm font-semibold">
          <button
            className={`w-1/2 pb-2 transition-colors ${
              activeTab === "login"
                ? "text-green-400 border-b-2 border-green-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("login")}
          >
            LOG IN
          </button>
          <button
            className={`w-1/2 pb-2 transition-colors ${
              activeTab === "signup"
                ? "text-green-400 border-b-2 border-green-400"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            SIGN UP
          </button>
        </div>

        {/* Facebook button */}
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-2 rounded-full mb-4 font-semibold transition">
          <FaFacebookF /> LOGIN WITH FACEBOOK
        </button>

        {/* Form */}
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email*"
            className="w-full bg-transparent border border-green-500 rounded-full px-4 py-2 outline-none text-sm focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="password"
            placeholder="Password*"
            className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 outline-none text-sm focus:ring-2 focus:ring-green-400 transition"
          />

          {/* Confirm Password only for signup */}
          {activeTab === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password*"
              className="w-full bg-transparent border border-gray-500 rounded-full px-4 py-2 outline-none text-sm focus:ring-2 focus:ring-green-400 transition"
            />
          )}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black rounded-full py-2 mt-2 font-bold shadow-lg transition"
          >
            {activeTab === "login" ? "LOG IN" : "CREATE ACCOUNT"}
          </button>
        </form>

        {/* Forgot password (only for login) */}
        {activeTab === "login" && (
          <p className="text-xs text-center text-gray-400 mt-3 cursor-pointer hover:underline">
            Forgot your password?
          </p>
        )}

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1 border-gray-700" />
          <span className="px-3 text-gray-500 text-xs">or</span>
          <hr className="flex-1 border-gray-700" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 text-2xl">
          <FaGoogle className="cursor-pointer hover:text-green-400 transition" />
          <FaTwitch className="cursor-pointer hover:text-green-400 transition" />
          <FaApple className="cursor-pointer hover:text-green-400 transition" />
          <FaDiscord className="cursor-pointer hover:text-green-400 transition" />
          <FaEllipsisH className="cursor-pointer hover:text-green-400 transition" />
        </div>
      </div>

      {/* Tailwind animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(10deg); }
        }
        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
