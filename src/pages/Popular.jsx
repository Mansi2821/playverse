"use client";
import React, { useState } from "react";

// GameCard Component
function GameCard({ title, img, video, tag, rating }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow hover:shadow-green-400/30 transition relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          className="w-full h-56 object-cover"
        />
      ) : (
        <img src={img} alt={title} className="w-full h-56 object-cover" />
      )}

      {tag && (
        <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded">
          {tag}
        </span>
      )}
      {rating && (
        <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {rating}
        </span>
      )}
      <div className="p-3 text-sm font-medium text-white truncate">{title}</div>
    </div>
  );
}

// Main Popular Page
export default function Popular() {
  // ✅ 25 fixed games with names
  const games = [
    { title: "Movie Merge", img: "https://picsum.photos/300/200?1", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 73 },
    { title: "NSR Street Racing", img: "https://picsum.photos/300/200?2", video: "https://www.w3schools.com/html/movie.mp4", rating: 69, tag: "Deal" },
    { title: "Firestone: Online Idle RPG", img: "https://picsum.photos/300/200?3", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 49, tag: "Top" },
    { title: "Pirate Island", img: "https://picsum.photos/300/200?4", video: "https://www.w3schools.com/html/movie.mp4", rating: 53 },
    { title: "Panda Pop", img: "https://picsum.photos/300/200?5", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 65 },
    { title: "Halloween Merge", img: "https://picsum.photos/300/200?6", video: "https://www.w3schools.com/html/movie.mp4", rating: 75, tag: "Top" },
    { title: "Gold for Words", img: "https://picsum.photos/300/200?7", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 58 },
    { title: "Merge Dale", img: "https://picsum.photos/300/200?8", video: "https://www.w3schools.com/html/movie.mp4", rating: 69 },
    { title: "Fishing Anomaly", img: "https://picsum.photos/300/200?9", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 74 },
    { title: "Jewel Quest", img: "https://picsum.photos/300/200?10", video: "https://www.w3schools.com/html/movie.mp4", rating: 89 },
    { title: "Castle Builder", img: "https://picsum.photos/300/200?11", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 67 },
    { title: "Zombie Attack", img: "https://picsum.photos/300/200?12", video: "https://www.w3schools.com/html/movie.mp4", rating: 72 },
    { title: "Farm Heroes", img: "https://picsum.photos/300/200?13", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 83, tag: "Top" },
    { title: "Battle Royale X", img: "https://picsum.photos/300/200?14", video: "https://www.w3schools.com/html/movie.mp4", rating: 92 },
    { title: "Candy Crush Saga", img: "https://picsum.photos/300/200?15", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 88 },
    { title: "Wild West Showdown", img: "https://picsum.photos/300/200?16", video: "https://www.w3schools.com/html/movie.mp4", rating: 74, tag: "Top" },
    { title: "Dragon Quest", img: "https://picsum.photos/300/200?17", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 81 },
    { title: "Galaxy Invaders", img: "https://picsum.photos/300/200?18", video: "https://www.w3schools.com/html/movie.mp4", rating: 79 },
    { title: "Soccer League", img: "https://picsum.photos/300/200?19", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 85 },
    { title: "Car Drift Mania", img: "https://picsum.photos/300/200?20", video: "https://www.w3schools.com/html/movie.mp4", rating: 77 },
    { title: "Royal Match", img: "https://picsum.photos/300/200?21", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 91, tag: "Top" },
    { title: "Space Odyssey", img: "https://picsum.photos/300/200?22", video: "https://www.w3schools.com/html/movie.mp4", rating: 68 },
    { title: "My Cafe World", img: "https://picsum.photos/300/200?23", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 72 },
    { title: "Temple Run X", img: "https://picsum.photos/300/200?24", video: "https://www.w3schools.com/html/movie.mp4", rating: 87 },
    { title: "Fantasy League", img: "https://picsum.photos/300/200?25", video: "https://www.w3schools.com/html/mov_bbb.mp4", rating: 90 },
  ];

  return (
    <main className="bg-[#111] text-white min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">Popular Games</h1>

      {/* Game Grid - fixed 4 per row */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
        {games.map((game, i) => (
          <GameCard key={i} {...game} />
        ))}
      </div>

      {/* Text Section */}
      <div className="max-w-3xl text-gray-300 space-y-5 mb-20">
        <h2 className="text-xl font-semibold">What is popular games?</h2>
        <p>
          In this category, you’ll find a hand-picked selection of the best
          Playhop games. We closely follow the latest in all genres, test them
          out, and bring you the perfect free mobile games. Titles with
          beautiful graphics, addictive gameplay, high ratings, and great
          reviews. Enjoy! As always, you don’t need to register or download
          anything!
        </p>

        <h2 className="text-xl font-semibold">
          Popular games — how do you play?
        </h2>
        <p>
          Free popular mobile games are a great selection, from casual and
          arcade games to strategy and RPGs. There are no universal rules, but
          there is one main advantage: these games work on any device, be it a
          smartphone, tablet, laptop, or desktop. And you don’t need to download
          them or register to start playing. Let’s get this party started!
        </p>

        <h2 className="text-xl font-semibold">Multiplayer popular games</h2>
        <p>
          We can’t decide what the best option is: playing free online games
          with your friends or someone totally new. However, our multiplayer
          mode lets you try both. It’s easy — no downloads since it’s free and
          online!
        </p>

        <h2 className="text-xl font-semibold">
          I want to play free online games with my friends. Can I?
        </h2>
        <p>
          Absolutely — you should! Most of our popular games can be enjoyed
          alone or with your friends. You can play with your favorite people
          right next door or new pals all the way across the globe. And those
          keys aren’t going to press themselves, so what are you waiting for?
        </p>

        <p>
          Discover, play, and enjoy without limits — your next favorite game is
          just one click away!
        </p>
      </div>

      {/* ✅ Footer Links Section */}
<div className="text-green-500 text-sm flex gap-6 flex-wrap mt-10 mb-6">
  <a href="/user-agreement" target="_blank" rel="noopener noreferrer">
    User agreement
  </a>
  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
    Privacy policy
  </a>
  <a href="/technical-support" target="_blank" rel="noopener noreferrer">
    Technical Support
  </a>
  <a href="/digital-services-act" target="_blank" rel="noopener noreferrer">
    Digital Services Act
  </a>
</div>

    </main>
  );
}
