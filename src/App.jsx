import React, { useState, useEffect } from "react";
import "./App.css";
import MainProfileCard from "./components/MainProfileCard/MainProfileCard";
import TechStackCard from "./components/TechStackCard/TechStackCard";
import PratGPTCard from "./components/PratGPTCard/PratGPTCard";
import MainProjectCard from "./components/MainProjectCard/MainProjectCard";
import SocialsCard from "./components/SocialsCard/SocialsCard";
import ContactCard from "./components/ContactCard/ContactCard";
import GIFCard from "./components/GIFCard/GifCard";

import Card from "./components/Card";
import logo from "./assets/Logo.png";

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Splash screen states
  const [spinStarted, setSpinStarted] = useState(false);
  const [fadeSplash, setFadeSplash] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Main content opacity control
  const [mainVisible, setMainVisible] = useState(false);

  useEffect(() => {
    const spinDelay = 350;
    const spinDuration = 1200;
    const fadeDuration = 700;

    const spinTimer = setTimeout(() => setSpinStarted(true), spinDelay);
    const fadeTimer = setTimeout(() => {
      setFadeSplash(true);
      setMainVisible(true);
    }, spinDelay + spinDuration);
    const hideTimer = setTimeout(
      () => setShowSplash(false),
      spinDelay + spinDuration + fadeDuration
    );

    return () => {
      clearTimeout(spinTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleLeaveMessageClick = () => {
    setShowOverlay(true);
  };

  const handleClose = () => {
    setShowOverlay(false);
    setIsSubmitting(false);
    setIsSent(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/mbljkqpb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setIsSent(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } else {
      alert("There was an error sending your message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-700 ${
            fadeSplash ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className={`w-32 h-32 select-none ${spinStarted ? "spin-in" : ""}`}
            draggable={false}
          />
        </div>
      )}

      <div
        className={`relative min-h-screen p-4 grid place-items-center transition-opacity duration-700 ${
          mainVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`w-full max-w-[1600px] grid auto-rows-[225px] grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 ${
            showOverlay
              ? "blur-sm pointer-events-none opacity-50"
              : "opacity-100"
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
            className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleClose}
          >
            <div
              className="relative bg-black border border-gray-500 rounded-lg shadow-lg w-11/12 max-w-xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                ×
              </button>
              <div className="flex flex-col h-auto max-h-[80vh] overflow-y-auto p-6">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 text-center text-white">
                  Let's have a chat!
                </h2>
                <p className="text-sm lg:text-base text-gray-400 mb-6 text-center">
                  I'm currently open to new opportunities, I'd love to hear from
                  you!
                </p>
                <form
                  action="https://formspree.io/f/mbljkqpb"
                  onSubmit={handleFormSubmit}
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-200 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Name"
                      className="w-full border-b border-gray-500 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-200 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="w-full border-b border-gray-500 bg-transparent text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-200 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Type your message here"
                      className="w-full border-b border-gray-500 bg-transparent placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`w-full py-2 rounded transition ${
                      isSent
                        ? "bg-green-500 text-white"
                        : isSubmitting
                        ? "bg-blue-400 text-white cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSent
                      ? "Sent!"
                      : isSubmitting
                      ? "Sending..."
                      : "Send it my way!"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
