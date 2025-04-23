import React, { useState } from "react";
import PratGPTDemo from "../../assets/pratgpt_demo.png";
import GitHubLogo from "../../assets/github.png";

const PratGPT = ({ onBack }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 px-4 py-10 max-w-4xl mx-auto text-white relative">
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="PratGPT Demo Enlarged"
            className="max-w-5xl max-h-[90vh] rounded-xl shadow-lg transition-all duration-300"
          />
        </div>
      )}

      <h2 className="text-3xl font-bold">🤖 PratGPT Discord Bot</h2>
      <p className="text-neutral-300">
        PratGPT is a custom AI Discord bot built with <strong>discord.js</strong> and powered by <strong>OpenAI</strong>. It lets you bring any personality to life, whether it's a fictional character, a professional mentor, or a comedic alter ego. Just update the prompt, and PratGPT adapts. It's a fun and flexible way to create engaging, personalized interactions on Discord.
      </p>

      <div className="flex gap-4 mt-2">
        <button
          onClick={onBack}
          className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-lg transition"
        >
          ← Back to Projects
        </button>
        <a
          href="https://github.com/Pratv77/PratGPT--DB"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg flex items-center justify-center transition"
        >
          <img src={GitHubLogo} alt="GitHub Repo" className="w-5 h-5" />
        </a>
      </div>

      <img
        src={PratGPTDemo}
        alt="PratGPT Discord Demo"
        className="rounded-xl shadow-lg w-full max-w-2xl cursor-zoom-in"
        onClick={() => setEnlargedImage(PratGPTDemo)}
      />

      <div className="text-left text-neutral-300 space-y-4">
        <h3 className="text-xl font-semibold text-white">✨ Features</h3>
        <ul className="list-disc list-inside">
          <li>AI simulation of any personality you define</li>
          <li>Natural, human-like conversations in any Discord server</li>
          <li>Fully customizable prompt system for limitless personas</li>
          <li>Simple setup, great for entertainment, roleplay, or community support</li>
        </ul>
      </div>

      <p className="text-neutral-300 max-w-xl">
      PratGPT has been actively used across several Discord servers, engaging in meaningful conversations with over <strong>80 users</strong>. Its <strong>modular personality system</strong> allows you to define custom prompts that shape the bot’s behavior and tone, turning it into anything from a casual gaming buddy to a professional advisor or storytelling character. This makes it a valuable tool for <strong>community engagement</strong>, <strong>interactive roleplay</strong>, and even <strong>prototyping AI-powered support agents</strong>. By combining flexible customization with natural conversation flow, PratGPT provides a practical and creative way to enhance social interaction and explore the possibilities of conversational AI in real-world settings.
      </p>
    </div>
  );
};

export default PratGPT;
