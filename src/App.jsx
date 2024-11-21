import React, { useState } from "react";
import "./App.css";
import MainProfileCard from "./components/MainProfileCard/MainProfileCard";
import TechStackCard from "./components/TechStackCard/TechStackCard";
import PratGPTCard from "./components/PratGPTCard/PratGPTCard";
import MainProjectCard from "./components/MainProjectCard/MainProjectCard";
import SocialsCard from "./components/SocialsCard/SocialsCard";
import ContactCard from "./components/ContactCard/ContactCard";
import GIFCard from "./components/GIFCard/GifCard";

import Card from "./components/Card";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [fadeCard, setFadeCard] = useState(false);

  const handleLeaveMessageClick = () => {
    setShowOverlay(true);
    setTimeout(() => setFadeCard(true), 10);
  };

  const handleClose = () => {
    setFadeCard(false);
    setTimeout(() => setShowOverlay(false), 500);
  };

  return (
    <div className="relative min-h-screen p-4 grid place-items-center">
      <div
        className={`w-full max-w-[1600px] grid auto-rows-[225px] grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 transition-all duration-500 ${
          showOverlay ? "blur-sm pointer-events-none opacity-50" : "opacity-100"
        }`}
      >
        <div className="col-span-2 row-span-2 md:col-span-4">
          <Card>
            <MainProfileCard />
          </Card>
        </div>
        <div className="col-span-2 md:col-span-4">
          <Card>
            <TechStackCard />
          </Card>
        </div>
        <div className="col-span-2 row-span-3 md:col-span-4 md:row-span-2">
          <Card>
            <PratGPTCard />
          </Card>
        </div>
        <div className="col-span-2 row-span-2">
          <Card>
            <SocialsCard />
          </Card>
        </div>
        <div className="col-span-2 row-span-2">
          <Card>
            <MainProjectCard />
          </Card>
        </div>
        <div className="col-span-2 md:col-span-2">
          <Card>
            <GIFCard />
          </Card>
        </div>
        <div className="col-span-2 md:col-span-2">
          <Card>
            <ContactCard onClick={handleLeaveMessageClick} />
          </Card>
        </div>
      </div>

      {showOverlay && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500"
          onClick={handleClose}
        >
          <div
            className={`relative bg-white rounded-lg shadow-lg w-11/12 max-w-xl h-[90%] sm:h-[80%] sm:w-11/12 md:w-[500px] lg:w-[600px] lg:h-[500px] p-6 transition-all duration-500 ${
              fadeCard ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ×
            </button>
            {/* Card Content */}
            <div className="flex items-center justify-center text-gray-500 text-2xl">
              New Content Here
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
