"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaBolt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

/* ---------- GAME DATA ---------- */
// For speed, use lightweight 400x225 images & short public videos
const gamesRecommended = [
  { title: "Call of Duty: Mobile", img: "https://picsum.photos/id/1011/400/225", video: "https://www.w3schools.com/html/mov_bbb.mp4", score: 89, special: true },
  { title: "PUBG Mobile", img: "https://picsum.photos/id/1015/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 85, age: "16+" },
  { title: "Free Fire", img: "https://picsum.photos/id/1016/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 82 },
  { title: "Clash of Clans", img: "https://picsum.photos/id/1021/400/225", video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", score: 91, special: true },
  { title: "Minecraft", img: "https://picsum.photos/id/1025/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 94 },
  { title: "Asphalt 9: Legends", img: "https://picsum.photos/id/1031/400/225", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", score: 87, special: true },
  { title: "Need for Speed: No Limits", img: "https://picsum.photos/id/1032/400/225", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", score: 84 },
  { title: "GTA V", img: "https://picsum.photos/id/1033/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 96, age: "16+" },
  { title: "Among Us", img: "https://picsum.photos/id/1041/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 78 },
  { title: "Fortnite", img: "https://picsum.photos/id/1045/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 88 },
  { title: "League of Legends", img: "https://picsum.photos/id/1050/400/225", video: "https://www.w3schools.com/html/mov_bbb.mp4", score: 92, special: true },
  { title: "Valorant", img: "https://picsum.photos/id/1052/400/225", video: "https://media.w3.org/2010/05/bunny/trailer.mp4", score: 90, age: "16+" },
  { title: "CS:GO", img: "https://picsum.photos/id/1053/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 93, special: true },
  { title: "Overwatch 2", img: "https://picsum.photos/id/1055/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 89 },
  { title: "Dota 2", img: "https://picsum.photos/id/1056/400/225", video: "https://media.w3.org/2010/05/video/movie_300.mp4", score: 88 },
  { title: "Apex Legends", img: "https://picsum.photos/id/1062/400/225", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", score: 90, special: true },
  { title: "Cyberpunk 2077", img: "https://picsum.photos/id/1063/400/225", video: "https://www.html5rocks.com/en/tutorials/video/basics/Chrome_ImF.webm", score: 86 },
  { title: "Far Cry 6", img: "https://picsum.photos/id/1065/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 88 },
  { title: "Battlefield V", img: "https://picsum.photos/id/1067/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 85 },
  { title: "Warframe", img: "https://picsum.photos/id/1070/400/225", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", score: 84, special: true },
  { title: "The Witcher 3", img: "https://picsum.photos/id/1072/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 97 },
  { title: "Skyrim", img: "https://picsum.photos/id/1074/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 95 },
  { title: "FIFA 23", img: "https://picsum.photos/id/1080/400/225", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", score: 89 },
  { title: "NBA 2K23", img: "https://picsum.photos/id/1081/400/225", video: "https://www.w3schools.com/html/mov_bbb.mp4", score: 90 },
  { title: "Rocket League", img: "https://picsum.photos/id/1082/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 88 },
];

const gamesTrending = [
  { title: "Honkai: Star Rail", img: "https://picsum.photos/id/200/400/225", video: "https://www.w3schools.com/html/mov_bbb.mp4", score: 87, special: true },
  { title: "Genshin Impact", img: "https://picsum.photos/id/201/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 94 },
  { title: "Roblox", img: "https://picsum.photos/id/202/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 89 },
  { title: "Hades II", img: "https://picsum.photos/id/203/400/225", video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4", score: 91, special: true },
  { title: "Baldur's Gate 3", img: "https://picsum.photos/id/204/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 98 },
  { title: "Resident Evil 4 Remake", img: "https://picsum.photos/id/205/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 96, age: "16+" },
  { title: "Dead Space Remake", img: "https://picsum.photos/id/206/400/225", video: "https://media.w3.org/2010/05/bunny/trailer.mp4", score: 92, age: "16+" },
  { title: "Elden Ring", img: "https://picsum.photos/id/207/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 97 },
  { title: "Hollow Knight: Silksong", img: "https://picsum.photos/id/208/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 93 },
  { title: "Cuphead", img: "https://picsum.photos/id/209/400/225", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", score: 90 },
  { title: "Stardew Valley", img: "https://picsum.photos/id/210/400/225", video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", score: 95, special: true },
  { title: "The Sims 4", img: "https://picsum.photos/id/211/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 88 },
  { title: "Terraria", img: "https://picsum.photos/id/212/400/225", video: "https://www.w3schools.com/html/mov_bbb.mp4", score: 90 },
  { title: "Ori and the Will of the Wisps", img: "https://picsum.photos/id/213/400/225", video: "https://media.w3.org/2010/05/video/movie_300.mp4", score: 94 },
  { title: "Celeste", img: "https://picsum.photos/id/214/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 92 },
  { title: "Undertale", img: "https://picsum.photos/id/215/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 91 },
  { title: "Animal Crossing: NH", img: "https://picsum.photos/id/216/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 93, special: true },
  { title: "Super Mario Odyssey", img: "https://picsum.photos/id/217/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 96 },
  { title: "Zelda: BOTW", img: "https://picsum.photos/id/218/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 99 },
  { title: "Metroid Dread", img: "https://picsum.photos/id/219/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 94 },
  { title: "Kirby and the Forgotten Land", img: "https://picsum.photos/id/220/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 91 },
  { title: "Pikmin 4", img: "https://picsum.photos/id/221/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 90 },
  { title: "Splatoon 3", img: "https://picsum.photos/id/222/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 92 },
  { title: "Bayonetta 3", img: "https://picsum.photos/id/223/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 94 },
  { title: "Xenoblade Chronicles 3", img: "https://picsum.photos/id/224/400/225", video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4", score: 93 },
  { title: "Fire Emblem Engage", img: "https://picsum.photos/id/225/400/225", video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4", score: 91 },
];

// New category
const gamesEsports = Array.from({ length: 22 }, (_, i) => ({
  title: `Esports Game ${i + 1}`,
  img: `https://picsum.photos/id/${300 + i}/400/225`,
  video: "https://www.w3schools.com/html/mov_bbb.mp4",
  score: 80 + (i % 20),
}));

/* ---------- CARD COMPONENT ---------- */
const GameCard = ({ title, img, video, score, age, special }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative transform transition duration-300 hover:scale-[1.03]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative rounded-xl overflow-hidden bg-[#2B2B2F] shadow-md group-hover:shadow-green-500/20">
        {hovered ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[170px] sm:h-[180px] lg:h-[190px] object-cover"
          />
        ) : (
          <img
            src={img}
            alt={title}
            className="w-full h-[170px] sm:h-[180px] lg:h-[190px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <span className="absolute left-2 bottom-2 text-xs font-semibold px-2 py-0.5 rounded bg-[#35C85A] text-white">
          {score}
        </span>
        {age && (
          <span className="absolute right-2 bottom-2 text-[10px] px-1.5 py-0.5 rounded bg-black/70 text-gray-200">
            {age}
          </span>
        )}
        {special && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full flex items-center gap-1 font-semibold shadow-md animate-pulse">
            <FaBolt className="text-sm" /> Hot
          </span>
        )}
      </div>
      <div className="pt-2">
        <h3 className="text-gray-200 text-sm font-medium leading-snug line-clamp-2 group-hover:text-green-400 transition">
          {title}
        </h3>
      </div>
    </div>
  );
};

/* ---------- MAIN COMPONENT ---------- */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="h-screen w-full bg-gradient-to-r from-[#181818] via-[#1F1F1F] to-[#222] text-white ">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6 space-y-10">

        {/* Recommended Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Recommended ({gamesRecommended.length})
          </h2>
          <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gamesRecommended.map((g, i) => (
              <GameCard key={i} {...g} />
            ))}
          </div>
        </section>

        {/* Ad Section 1 */}
        <div className="relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/30 transition h-56">
          <div className="flex flex-col sm:flex-row h-full">
            {/* Left: Car Image */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Daewoo_Gentra_sedan.jpg"
              alt="Ravon Gentra"
              className="h-full w-full sm:w-1/3 object-cover"
            />
            {/* Right: Text + Menu */}
            <div className="flex-1 flex flex-col justify-center px-4 relative">
              <h3 className="text-lg font-semibold">Ravon Gentra</h3>
              <p className="text-sm text-gray-400">1.5 MT</p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition w-fit"
              >
                Learn more
              </a>
              <button
                onClick={() => setMenuOpen(menuOpen === 1 ? null : 1)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white p-1"
              >
                <BsThreeDotsVertical size={18} />
              </button>
              {menuOpen === 1 && (
                <div
                  ref={menuRef}
                  className="absolute top-10 right-2 w-44 bg-[#111] text-white rounded-lg shadow-lg border border-gray-700 z-50"
                >
                  <div className="px-3 py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                    Hide ad
                  </div>
                  <div className="px-3 py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                    Report this ad
                  </div>
                  <div className="px-3 py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                    Why am I seeing this ad?
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-800 cursor-pointer">
                    About this advertiser
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trending Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            New & Trending ({gamesTrending.length})
          </h2>
          <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gamesTrending.map((g, i) => (
              <GameCard key={i} {...g} />
            ))}
          </div>
        </section>

        {/* Ad Section 2 */}
        <div className="relative bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/30 transition h-56">
          <div className="flex flex-col sm:flex-row h-full">
            {/* Left: Car Image */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/2018_Toyota_Camry_SE_front_4.14.18.jpg"
              alt="Toyota Camry"
              className="h-full w-full sm:w-1/3 object-cover"
            />
            {/* Right: Text + Menu */}
            <div className="flex-1 flex flex-col justify-center px-4 relative">
              <h3 className="text-lg font-semibold">Toyota Camry</h3>
              <p className="text-sm text-gray-400">2.5 SE</p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition w-fit"
              >
                Learn more
              </a>
              <button
                onClick={() => setMenuOpen(menuOpen === 2 ? null : 2)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white p-1"
              >
                <BsThreeDotsVertical size={18} />
              </button>
              {menuOpen === 2 && (
                <div
                  ref={menuRef}
                  className="absolute top-10 right-2 w-44 bg-[#111] text-white rounded-lg shadow-lg border border-gray-700 z-50"
                >
                  <div className="px-3 py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                    Hide ad
                  </div>
                  <div className="px-3 py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                    Report this ad
                  </div>
                  <div className="px-3 py-2 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                    Why am I seeing this ad?
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-800 cursor-pointer">
                    About this advertiser
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Esports Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Esports ({gamesEsports.length})
          </h2>
          <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gamesEsports.map((g, i) => (
              <GameCard key={i} {...g} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}














