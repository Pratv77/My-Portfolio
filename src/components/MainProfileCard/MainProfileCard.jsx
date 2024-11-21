import React from "react";
import profileImage from "../../assets/Memoji_1.png";
import { calculateAge } from "./calculateAge";

const MainProfileCard = () => {
  const birthDate = new Date("2002-07-02");
  const ageText = calculateAge(birthDate);

  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 cursor-default border border-white/25 rounded-lg bg-transparent transition-colors duration-300">
      <div className="row-span-1 grid place-content-center">
        <img className="w-[200px] p-2 transform transition-transform duration-300 hover:scale-110 ease-in-out" src={profileImage} />
      </div>
      <div className="row-span-1 text-white grid place-content-center p-2 mt-4">
        <p className="text-md text-gray-500">Age</p>
        <p className="text-lg text-gray-300 font-bold">
          {ageText}
        </p>
        <p className="text-md text-gray-500">Location</p>
        <p className="text-lg text-gray-300 font-bold">Toronto, Canada</p>
        <p className="text-md text-gray-500">Education</p>
        <p className="text-lg text-gray-300 font-bold">University of Toronto</p>
      </div>
      <div className="col-span-2">
        <p className="text-gray-500 text-xl sm:text-2xl px-12 mt-2 lg:px-14 2xl:ml-8">
          I'm <span className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">Pratham</span>, a front-end developer focused on React and blockchain
          technology. I'm also interested in football, gaming, <span className=" hover:text-green-500 transition ease-in-out delay-90">crypto</span>, and
          playing the piano.
        </p>
      </div>
    </div>
  );
};

export default MainProfileCard;
