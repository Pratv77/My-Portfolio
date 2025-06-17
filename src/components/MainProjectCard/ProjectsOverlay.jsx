import React, { useState, useEffect, useRef } from "react";
import dreamscape from "../../assets/dreamscape.png";
import lolstatsImage from "../../assets/lolstats.png";
import pratgpt from "../../assets/pratgpt.png";
import githubIcon from "../../assets/github.png";
import DreamScape from "../../components/MainProjectCard/DreamScape";
import PratGPT from "../../components/MainProjectCard/PratGPT";
import LoLStats from "../../components/MainProjectCard/LoLStats";

const ProjectsOverlay = ({ isVisible, onClose }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollResetAnchorRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setIsRendering(true);
      document.body.style.overflow = "hidden";
      setTimeout(() => setFadeIn(true), 10);
    } else {
      setFadeIn(false);
      setTimeout(() => {
        setIsRendering(false);
        setSelectedProject(null);
        document.body.style.overflow = "";
      }, 500);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);
  
  useEffect(() => {
    if (selectedProject !== null) {
      setTimeout(() => {
        scrollResetAnchorRef.current?.focus({ preventScroll: false });
      }, 10);
    }
  }, [selectedProject]);

  const renderProjectComponent = () => {
    switch (selectedProject) {
      case "dreamscape":
        return <DreamScape onBack={() => setSelectedProject(null)} />;
      case "pratgpt":
        return <PratGPT onBack={() => setSelectedProject(null)} />;
      case "lolstats":
        return <LoLStats onBack={() => setSelectedProject(null)} />;
      default:
        return null;
    }
  };

  if (!isRendering) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-95"
        onClick={onClose}
      />

      <div
        key={selectedProject || "default"}
        className={`relative w-[95%] sm:w-[85%] md:w-4/5 lg:max-w-5xl max-h-[85vh] bg-black border border-neutral-800 rounded-xl shadow-xl transition-all duration-500 transform ${
          fadeIn
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        } overflow-hidden flex flex-col`}
      >
        <button
          ref={scrollResetAnchorRef}
          tabIndex="-1"
          className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="px-6 py-4 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            My Projects
          </h2>
          <button
            onClick={onClose}
            className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-full p-1.5 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {selectedProject === null ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                onClick={() => setSelectedProject("dreamscape")}
                className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer max-w-sm mx-auto p-4 flex flex-col gap-4"
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={dreamscape}
                    alt="DreamScape"
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between relative">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-white text-lg font-semibold tracking-tight">
                        DreamScape
                      </h3>
                      <span className="text-xs text-neutral-500">2025</span>
                    </div>
                    <p className="text-sm text-neutral-400 leading-snug">
                      Hackathon-winning app that turns dreams into symbolic
                      insights through interactive, AI-powered analysis.
                    </p>
                  </div>
                  <div className="flex justify-end mt-4 gap-3 text-neutral-500">
                    <a
                      href="https://devpost.com/software/dreamspace"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white transition"
                      title="DevPost"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗
                    </a>
                    <a
                      href="https://github.com/Pratv77/dreamscape"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white transition"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject("pratgpt")}
                className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer max-w-sm mx-auto p-4 flex flex-col gap-4"
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={pratgpt}
                    alt="PratGPT"
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between relative">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-white text-lg font-semibold tracking-tight">
                        PratGPT Discord Bot
                      </h3>
                      <span className="text-xs text-neutral-500">2023</span>
                    </div>
                    <p className="text-sm text-neutral-400 leading-snug">
                      GPT-powered Discord bot that simulates real/customizable
                      personalities and chats like a tailored companion.
                    </p>
                  </div>
                  <div className="flex justify-end mt-4 gap-3 text-neutral-500">
                    <a
                      href="https://github.com/Pratv77/PratGPT--DB"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white transition"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setSelectedProject("lolstats")}
                className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer max-w-sm mx-auto p-4 flex flex-col gap-4"
              >
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={lolstatsImage}
                    alt="LoL Stats"
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between relative">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-white text-lg font-semibold tracking-tight">
                        League of Legends Statistics Tracker
                      </h3>
                      <span className="text-xs text-neutral-500">2023</span>
                    </div>
                    <p className="text-sm text-neutral-400 leading-snug">
                      Riot API-powered tracker that visualizes League match
                      stats, player data, and performance history.
                    </p>
                  </div>
                  <div className="flex justify-end mt-4 gap-3 text-neutral-500">
                    <a
                      href="https://github.com/Pratv77/LoLStats"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white transition"
                      title="GitHub"
                      target="_blank"
                    >
                      <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            renderProjectComponent()
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverlay;
