"use client";
import React from "react";

const games = [
  { title: "Friday Night Funkin Classic", img: "https://picsum.photos/id/1015/800/450", score: 63 },
  { title: "Friday Night Funkin: Sprunki", img: "https://picsum.photos/id/1025/800/450", score: 57 },
  { title: "Braveland Heroes", img: "https://picsum.photos/id/1035/800/450", score: 65 },
  { title: "Standoff Strike 2", img: "https://picsum.photos/id/1045/800/450", score: 68, age: "16+" },
  { title: "FNF vs AmongUs", img: "https://picsum.photos/id/1055/800/450", score: 48 },
  { title: "War The Knights", img: "https://picsum.photos/id/1065/800/450", score: 91 },
  { title: "Granny Original", img: "https://picsum.photos/id/1075/800/450", score: 82 },
  { title: "Deadly Descent", img: "https://picsum.photos/id/1085/800/450", score: 75 },
  { title: "Granny 2 Original", img: "https://picsum.photos/id/1095/800/450", score: 77 },
  { title: "Counter-Terror Strike", img: "https://picsum.photos/id/110/800/450", score: 71 },
  { title: "Shashki On Cars", img: "https://picsum.photos/id/111/800/450", score: 77 },
  { title: "Grand Extreme Racing", img: "https://picsum.photos/id/112/800/450", score: 73 },
  { title: "Plants Vs Zombie Hybrid", img: "https://picsum.photos/id/113/800/450", score: 94 },
  { title: "Moscow Bus Driver", img: "https://picsum.photos/id/114/800/450", score: 74 },
  { title: "Autobahn: M5 Drift", img: "https://picsum.photos/id/115/800/450", score: 69 },
  { title: "Get a cool gun!", img: "https://picsum.photos/id/116/800/450", score: 72 },
  { title: "Fly the plane!", img: "https://picsum.photos/id/117/800/450", score: 71 },
  { title: "Chess with a computer", img: "https://picsum.photos/id/118/800/450", score: 82 },
  { title: "Escape from Barry Prison", img: "https://picsum.photos/id/119/800/450", score: 84 },
  { title: "Fortzone Battle Royale", img: "https://picsum.photos/id/120/800/450", score: 90 },
  { title: "Hazmob FPS", img: "https://picsum.photos/id/121/800/450", score: 82 },
  { title: "Real Racing GT3", img: "https://picsum.photos/id/122/800/450", score: 68 },
  { title: "Fish Eat Getting Big", img: "https://picsum.photos/id/123/800/450", score: 81 },
  { title: "Steal Brainrot Online", img: "https://picsum.photos/id/124/800/450", score: 97 },
  // add as many as you like
];

const GameCard = ({ title, img, score, age }) => (
  <div>
    <div className="relative rounded-xl overflow-hidden bg-[#2B2B2F]">
      <img
        src={img}
        alt={title}
        className="w-full h-[170px] sm:h-[180px] lg:h-[190px] object-cover"
        draggable="false"
      />
      <span className="absolute left-2 bottom-2 text-xs font-semibold px-2 py-0.5 rounded bg-[#35C85A] text-white">
        {score}
      </span>
      {age && (
        <span className="absolute right-2 bottom-2 text-[10px] px-1.5 py-0.5 rounded bg-black/70 text-gray-200">
          {age}
        </span>
      )}
    </div>
    <div className="pt-2">
      <h3 className="text-gray-200 text-sm font-medium leading-snug line-clamp-2">
        {title}
      </h3>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="h-screen w-full bg-[#1F1F23] text-white overflow-y-auto">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-2xl font-semibold mb-4">Recommended</h2>
        <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((g, i) => (
            <GameCard key={i} {...g} />
          ))}
        </div>
      </div>
    </main>
  );
}
