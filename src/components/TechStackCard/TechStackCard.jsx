import React from "react";
// Software Logos
import ArcBrowswerLogo from "../../assets/Tech Stack Logos/Arc.png";
import vscode from "../../assets/Tech Stack Logos/VSCode.png";
import figma from "../../assets/Tech Stack Logos/figma.png";
import notion from "../../assets/Tech Stack Logos/Notion.png";
import github from "../../assets/Tech Stack Logos/Github.png";
import photoshop from "../../assets/Tech Stack Logos/Photoshop.png";
//Tech Stack Logos
import HTMLLogo from "../../assets/Tech Stack Logos/HTML.png";
import TailwindLogo from "../../assets/Tech Stack Logos/Tailwind.png";
import JavaScriptLogo from "../../assets/Tech Stack Logos/Javascript.png";
import ReactLogo from "../../assets/Tech Stack Logos/React.png";
import SolidityLogo from "../../assets/Tech Stack Logos/Solidity.png";
import PostgresqlLogo from "../../assets/Tech Stack Logos/Postgresql.png";
import PhotoShopLogo from "../../assets/Tech Stack Logos/Photoshop.png";
// Background
import background from "../../assets/shattered.png";

const TechStackCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-full grid grid-cols-2 bg-blue-500/50 rounded-lg cursor-default"
    >
      <div className="grid grid-rows-4">
        <p className="text-white/70 text-4xl font-bold mt-2 text-center">Software</p>
        <div className="row-span-3 pl-12 sm:pl-2 xl:pl-10 grid grid-rows-3 grid-cols-2">
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={ArcBrowswerLogo} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Arc Browser</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={vscode} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Visual Studio Code</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={figma} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Figma</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={notion} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Notion</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={github} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">GitHub</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={photoshop} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Photoshop</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4">
        <p className="text-white/70 text-4xl font-bold mt-2 text-center">Tech Stack</p>
        <div className="row-span-3 pl-12 sm:pl-2 xl:pl-10 grid grid-rows-3 grid-cols-2">
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={HTMLLogo} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">HTML</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={TailwindLogo} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Tailwind</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={JavaScriptLogo} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Javascript</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={ReactLogo} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">React</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={SolidityLogo} />
            <p className="hidden sm:block lg:hidden xl:block text-md font-bold text-white/70 m-auto ml-2">Solidity</p>
          </div>
          <div className="grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out" src={PostgresqlLogo} />
            <p className="hidden sm:block lg:hidden xl:block text- font-bold text-white/70 m-auto ml-2">PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
