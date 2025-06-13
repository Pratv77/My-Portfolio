import React, { useState } from "react";
import profileImage from "../../assets/Memoji_1.png";
import splashArt from "../../assets/zed.jpeg";
import { calculateAge } from "./calculateAge";
import earth from "../../assets/earth.gif";
import MyWorld from "./MyWorld";

const MainProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEarthHovered, setIsEarthHovered] = useState(false);
  const birthDate = new Date("2002-07-02");
  const ageText = calculateAge(birthDate);
  const [showMyWorld, setShowMyWorld] = useState(false);

  return (
    <div className="relative h-full grid grid-cols-2 grid-rows-2 cursor-default border border-white/25 rounded-lg bg-transparent transition-colors duration-300">
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" />
        <img
          src={splashArt}
          className="w-full h-full object-cover rounded-lg border border-gray-500"
          alt="Zed splash art"
        />
      </div>

      <div className="row-span-1 grid place-content-center relative">
        <img
          className="w-[200px] p-2 transform transition-transform duration-300 hover:scale-110 ease-in-out"
          src={profileImage}
        />
      </div>
      <div className="row-span-1 text-white grid place-content-center p-2 mt-4 relative">
        <p className="text-sm sm:text-md text-gray-500">Age</p>
        <p className="text-base sm:text-lg text-gray-300 font-bold">
          {ageText}
        </p>
        <p className="text-sm sm:text-md text-gray-500">Location</p>
        <p className="text-base sm:text-lg text-gray-300 font-bold">
          Toronto, Canada
        </p>
        <p className="text-sm sm:text-md text-gray-500">Education</p>
        <p className="text-base sm:text-lg text-gray-300 font-bold">
          University of Toronto
        </p>
      </div>
      <div className="col-span-2 relative">
        <p className="text-gray-500 text-base min-[400px]:text-xl sm:text-2xl px-10 min-[400px]:px-12 mt-2 lg:px-14 2xl:ml-8">
          I'm{" "}
          <span className="text-3xl min-[400px]:text-4xl font-bold sm:text-5xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Pratham
          </span>
          , A front-end developer specializing in React and exploring Web3
          tools. I focus on clean builds and solving real problems with tech.
          Check out{" "}
          <span className="relative inline-block align-middle">
            <div
              className={`absolute w-32 h-32 -top-12 -left-12 rounded-full transition-opacity duration-300 ease-in-out z-0 pointer-events-none ${
                isEarthHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background:
                  "radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)",
                backdropFilter: isEarthHovered ? "blur(2px)" : "blur(0px)",
                WebkitBackdropFilter: isEarthHovered
                  ? "blur(2px)"
                  : "blur(0px)",
                mask: "radial-gradient(circle, black 0%, black 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 70%, transparent 100%)",
                WebkitMask:
                  "radial-gradient(circle, black 0%, black 20%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 70%, transparent 100%)",
              }}
            />
            <img
              src={earth}
              alt="Animated Earth"
              className={`w-9 h-9 object-contain cursor-pointer transition-transform duration-300 ease-in-out z-20 relative ${
                isEarthHovered ? "scale-[2.8]" : "scale-100"
              }`}
              onMouseEnter={() => setIsEarthHovered(true)}
              onMouseLeave={() => setIsEarthHovered(false)}
              onClick={() => setShowMyWorld(true)}
            />
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-5 transition-opacity duration-300 ease-in-out pointer-events-none z-30 ${
                isEarthHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`bg-black/80 backdrop-blur-sm border border-gray-600 px-4 py-2 rounded text-white whitespace-nowrap transition-all duration-300 ease-in-out ${
                  isEarthHovered ? "text-base" : "text-sm"
                }`}
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                My World
              </div>
            </div>
          </span>
          , or take a look at my&nbsp;
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-all duration-300 ease-in-out hover:text-[#9ca3af]"
          >
            Resume
          </a>
          .
        </p>
      </div>
      <MyWorld isVisible={showMyWorld} onClose={() => setShowMyWorld(false)} />
    </div>
  );
};

export default MainProfileCard;
