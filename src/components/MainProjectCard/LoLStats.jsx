import React, { useState } from "react";
import LoLStatsImage from "../../assets/lolstats.png";
import LeagueLogo from "../../assets/league.png";
import GitHubLogo from "../../assets/github.png";

const LoLStats = ({ onBack }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <div className="text-white px-6 py-12 max-w-6xl mx-auto space-y-20 overflow-y-auto h-full relative">
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Enlarged"
            className="max-w-5xl max-h-[90vh] rounded-xl shadow-lg transition-all duration-300"
          />
        </div>
      )}
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold">🧠 LoLStats</h2>
        <p className="text-neutral-300 max-w-3xl mx-auto">
          <strong>LoLStats</strong> is an interactive League of Legends match
          analysis tool that I built early in my web development journey. It uses
          the Riot API to track summoner performance, visualize match history, and
          display ranked statistics. Despite being one of my oldest projects, it
          taught me the foundations of REST APIs, asynchronous JavaScript, and
          structuring dynamic front-end data.
        </p>
        <div className="text-sm text-neutral-300 space-x-2 mt-2 cursor-default">
          <span className="inline-block bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-1 rounded-full font-medium">
            HTML
          </span>
          <span className="inline-block bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-1 rounded-full font-medium">
            CSS
          </span>
          <span className="inline-block bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-1 rounded-full font-medium">
            JavaScript
          </span>
          <span className="inline-block bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-1 rounded-full font-medium">
            Riot Games API
          </span>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={onBack}
            className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-lg transition"
          >
            ← Back to Projects
          </button>
          <a
            href="https://github.com/Pratv77/LoLStats"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg transition"
            title="GitHub"
          >
            <img src={GitHubLogo} alt="GitHub" className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src={LoLStatsImage}
          alt="LoLStats screenshot"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(LoLStatsImage)}
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">What It Does</h3>
          <p className="text-neutral-400">
            Users can search any summoner name to view their profile, ranked
            statistics, and recent match history. Each match entry includes
            champion played, KDA, summoner spells, items, runes, game mode, and
            both team compositions.
          </p>
          <p className="text-neutral-400 mt-4">
            The app makes multiple Riot API calls under the hood and maps raw game
            data to visual components using DOM manipulation and image asset
            mapping.
          </p>
        </div>
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Project Statistics</h3>
        <ul className="inline-block text-left list-disc text-neutral-300 pl-5 space-y-1">
          <li>5 recent matches fetched and rendered dynamically</li>
          <li>20 match IDs pulled via Riot's Match V5 API</li>
          <li>3 Riot API endpoints integrated (Summoner, Ranked Stats, Match History)</li>
          <li>30+ image assets mapped for champions, items, runes, and summoner spells</li>
          <li>50+ DOM elements generated per match using raw JavaScript</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">What I Learned</h3>
          <p className="text-neutral-400">
            This was my first time working with APIs and rendering data
            dynamically. I learned how to parse nested JSON, use query parameters,
            and think through multi-step asynchronous flows. I also figured out
            how to debug layout issues and write cleaner UI logic over time.
          </p>
        </div>
        <img
          src={LeagueLogo}
          alt="League of Legends Developer"
          className="rounded-xl shadow-lg"
        />
      </div>

      <div className="bg-blue-500/20 text-blue-100 text-sm px-4 py-3 rounded-md max-w-fit mx-auto shadow-lg border border-blue-400/30">
        <span className="font-semibold">Note:</span> This project was built before
        I learned React or responsive design best practices. Its a snapshot of my
        earliest coding phase.
      </div>
    </div>
  );
};

export default LoLStats;