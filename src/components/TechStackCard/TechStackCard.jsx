import React from "react";
import Tooltip from "./tooltip.jsx";
// Software Logos
import ArcBrowswerLogo from "../../assets/Tech Stack Logos/Arc.png";
import vscode from "../../assets/Tech Stack Logos/VSCode.png";
import openai from "../../assets/Tech Stack Logos/Openai.png";
import notion from "../../assets/Tech Stack Logos/Notion.png";
import github from "../../assets/Tech Stack Logos/Github.png";
import photoshop from "../../assets/Tech Stack Logos/Photoshop.png";
//Tech Stack Logos
import ViteLogo from "../../assets/Tech Stack Logos/Vite.png";
import TailwindLogo from "../../assets/Tech Stack Logos/Tailwind.png";
import JavaScriptLogo from "../../assets/Tech Stack Logos/Javascript.png";
import ReactLogo from "../../assets/Tech Stack Logos/React.png";
import SolidityLogo from "../../assets/Tech Stack Logos/Solidity.png";
import NextjsLogo from "../../assets/Tech Stack Logos/nextjs.png";
// Background
import background from "../../assets/batthern.png";

const TechStackCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-full grid grid-cols-2 bg-stone-950 rounded-lg cursor-default font-bai-jamjuree border border-white/25"
    >
      <div className="grid grid-rows-4">
        <p className="text-white/70 text-3xl sm:text-4xl font-semibold mt-2 text-center">
          Software
        </p>
        <div className="row-span-3 sm:pl-2 xl:pl-10 grid grid-rows-3 grid-cols-2">
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Arc Browser" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={ArcBrowswerLogo}
                alt="Arc Browser Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Arc Browser
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Visual Studio Code" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={vscode}
                alt="Visual Studio Code Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Visual Studio Code
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="OpenAI/Sora" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={openai}
                alt="Openai Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              OpenAI/Sora
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Notion" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={notion}
                alt="Notion Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Notion
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="GitHub" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={github}
                alt="GitHub Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              GitHub
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Photoshop" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={photoshop}
                alt="Photoshop Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Photoshop
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4">
        <p className="text-white/70 text-3xl sm:text-4xl font-semibold mt-2 text-center">
          Tech Stack
        </p>
        <div className="row-span-3 sm:pl-2 xl:pl-10 grid grid-rows-3 grid-cols-2">
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Vite" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={ViteLogo}
                alt="Vite Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Vite
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Tailwind CSS" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={TailwindLogo}
                alt="Tailwind Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Tailwind
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="JavaScript" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={JavaScriptLogo}
                alt="JavaScript Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Javascript
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="React" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={ReactLogo}
                alt="React Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              React
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Solidity" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={SolidityLogo}
                alt="Solidity Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Solidity
            </p>
          </div>
          <div className="relative group grid sm:grid-cols-[auto_1fr] lg:grid-cols-none xl:grid-cols-[auto_1fr] place-content-center">
            <Tooltip message="Next.js" className="block sm:hidden lg:block xl:hidden">
              <img
                className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
                src={NextjsLogo}
                alt="Nextjs Logo"
              />
            </Tooltip>
            <p className="hidden sm:block lg:hidden xl:block text-base font-semibold text-white/70 m-auto ml-2">
              Next.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;