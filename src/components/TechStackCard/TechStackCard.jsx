import React from "react";
import Tooltip from "./tooltip.jsx";
// Software Logos
import VivaldiLogo from "../../assets/Tech Stack Logos/Vivaldi.png";
import vscode from "../../assets/Tech Stack Logos/VSCode.png";
import openai from "../../assets/Tech Stack Logos/Openai.png";
import notion from "../../assets/Tech Stack Logos/Notion.png";
import github from "../../assets/Tech Stack Logos/Github.png";
import gimplogo from "../../assets/Tech Stack Logos/GIMPLogo.png";
// Tech Stack Logos
import ViteLogo from "../../assets/Tech Stack Logos/Vite.png";
import TailwindLogo from "../../assets/Tech Stack Logos/Tailwind.png";
import JavaScriptLogo from "../../assets/Tech Stack Logos/Javascript.png";
import ReactLogo from "../../assets/Tech Stack Logos/React.png";
import SolidityLogo from "../../assets/Tech Stack Logos/Solidity.png";
import NextjsLogo from "../../assets/Tech Stack Logos/nextjs.png";
// Background
import background from "../../assets/batthern.png";

const Item = ({ message, src, alt, label }) => (
  <div
    className="
      relative group grid place-content-center items-center
      sm:grid-cols-[auto_1fr]     /* show labels from 640px */
      lg:grid-cols-none           /* hide labels again at 1024px+ */
      min-[1340px]:grid-cols-[auto_1fr]  /* show labels again at 1340px+ */
    "
  >
    <Tooltip
      message={message}
      className="
        block
        sm:hidden          /* hide icon-only when labels show at 640px+ */
        lg:block           /* show icon-only again at 1024px+ */
        min-[1340px]:hidden /* hide icon-only again when labels show at 1340px+ */
      "
    >
      <img
        className="w-[40px] col-span-1 p-1 bg-black/30 rounded-md hover:scale-125 transition ease-in-out"
        src={src}
        alt={alt}
      />
    </Tooltip>

    <p
      className="
        hidden
        sm:block           /* show labels at 640px+ */
        lg:hidden          /* hide labels at 1024px+ */
        min-[1340px]:block /* show labels again at 1340px+ */
        text-base font-semibold text-white/70 ml-2 whitespace-nowrap
      "
    >
      {label}
    </p>
  </div>
);

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
          <Item
            message="Vivaldi Browser"
            src={VivaldiLogo}
            alt="Vivaldi Logo"
            label="Vivaldi"
          />
          <Item
            message="VS Code"
            src={vscode}
            alt="VS Code Logo"
            label="VS Code"
          />
          <Item
            message="OpenAI/Sora"
            src={openai}
            alt="OpenAI Logo"
            label="OpenAI/Sora"
          />
          <Item
            message="Notion"
            src={notion}
            alt="Notion Logo"
            label="Notion"
          />
          <Item
            message="GitHub"
            src={github}
            alt="GitHub Logo"
            label="GitHub"
          />
          <Item
            message="GIMP GNU"
            src={gimplogo}
            alt="GIMP Logo"
            label="GIMP GNU"
          />
        </div>
      </div>

      <div className="grid grid-rows-4">
        <p className="text-white/70 text-3xl sm:text-4xl font-semibold mt-2 text-center">
          Tech Stack
        </p>
        <div className="row-span-3 sm:pl-2 xl:pl-10 grid grid-rows-3 grid-cols-2">
          <Item message="Vite" src={ViteLogo} alt="Vite Logo" label="Vite" />
          <Item
            message="Tailwind CSS"
            src={TailwindLogo}
            alt="Tailwind Logo"
            label="Tailwind"
          />
          <Item
            message="JavaScript"
            src={JavaScriptLogo}
            alt="JavaScript Logo"
            label="Javascript"
          />
          <Item
            message="React"
            src={ReactLogo}
            alt="React Logo"
            label="React"
          />
          <Item
            message="Solidity"
            src={SolidityLogo}
            alt="Solidity Logo"
            label="Solidity"
          />
          <Item
            message="Next.js"
            src={NextjsLogo}
            alt="Next.js Logo"
            label="Next.js"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStackCard;
