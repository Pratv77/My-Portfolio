import React, { useState } from "react";
import profileImage from "../../assets/Memoji_1.png";
import { calculateAge } from "./calculateAge";
import earth from "../../assets/earth.gif";
import MyWorld from "./MyWorld";

const MainProfileCard = () => {
  const [isEarthHovered, setIsEarthHovered] = useState(false);
  const [showMyWorld, setShowMyWorld] = useState(false);
  const ageText = calculateAge(new Date("2002-07-02"));

  return (
    <div className="relative h-full grid grid-cols-2 grid-rows-[auto_auto] cursor-default border border-white/25 rounded-lg bg-transparent transition-colors duration-300">
      <div className="row-span-1 grid place-content-center">
        <img
          className="w-[200px] p-2 transition-transform duration-300 hover:scale-110"
          src={profileImage}
          alt="Profile"
        />
      </div>

      <div className="row-span-1 text-white grid place-content-center p-2 mt-4">
        <div>
          <p className="text-sm text-gray-500">Age</p>
          <p className="text-base sm:text-lg font-bold text-gray-300">
            {ageText}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Location</p>
          <p className="text-base sm:text-lg font-bold text-gray-300">
            Toronto, Canada
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Education</p>
          <p className="text-base sm:text-lg font-bold text-gray-300">
            University of Toronto
          </p>
        </div>
      </div>

      <div className="col-span-2 relative overflow-hidden">
        <div className="text-gray-500 text-sm min-[400px]:text-base sm:text-xl px-6 min-[400px]:px-8 mt-2 lg:px-14 2xl:ml-8">
          I'm{" "}
          <span className="text-3xl min-[400px]:text-4xl font-bold sm:text-5xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Pratham
          </span>
          , a developer and Psychology student pursuing{" "}
          <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            behavioral data science
          </span>
          . I build intentional interfaces and apply that same craft to
          understanding and communicating human insights. Learn more{" "}
          <span
            className="underline cursor-pointer transition-all duration-300 hover:text-[#9ca3af]"
            onClick={() => setShowMyWorld(true)}
          >
            here
          </span>
          , or take a look at my&nbsp;
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-all duration-300 hover:text-[#9ca3af]"
          >
            Resume
          </a>
          .
        </div>
      </div>

      <MyWorld isVisible={showMyWorld} onClose={() => setShowMyWorld(false)} />
    </div>
  );
};

export default MainProfileCard;
