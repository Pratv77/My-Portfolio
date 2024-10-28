import React from "react";
import ArcBrowswerLogo from "../../assets/Tech Stack Logos/Arc.png";
import vscode from "../../assets/Tech Stack Logos/VSCode.png";
import figma from "../../assets/Tech Stack Logos/figma.png";
import notion from "../../assets/Tech Stack Logos/Notion.png";
import github from "../../assets/Tech Stack Logos/Github.png";
import photoshop from "../../assets/Tech Stack Logos/Photoshop.png";
import background from "../../assets/shattered.png";

const TechStackCard = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-full grid grid-cols-2 bg-blue-500/50 rounded-lg"
    >
      <div className="grid grid-rows-4">
        <p className="text-white/70 text-4xl font-bold mt-2 text-center">Software</p>
        <div className="row-span-3 pl-3 grid grid-rows-3 grid-cols-2">
          <div className="grid grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md" src={ArcBrowswerLogo} />
            <p className="text-md font-bold text-white/70 m-auto ml-2">Arc Browser</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md" src={vscode} />
            <p className="text-md font-bold text-white/70 m-auto ml-2">Visual Studio Code</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md" src={figma} />
            <p className="text-md font-bold text-white/70 m-auto ml-2">Figma</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md" src={notion} />
            <p className="text-md font-bold text-white/70 m-auto ml-2">Notion</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md" src={github} />
            <p className="text-md font-bold text-white/70 m-auto ml-2">GitHub</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] place-content-center">
            <img className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md" src={photoshop} />
            <p className="text-md font-bold text-white/70 m-auto ml-2">Photoshop</p>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4">
        <p className="text-white/70 text-4xl font-bold mt-2 text-center">Tech Stack</p>
      </div>
    </div>
  );
};

export default TechStackCard;
