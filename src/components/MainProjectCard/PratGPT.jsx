import React, { useState } from "react";
import { motion } from "framer-motion";
import PratGPTDemo from "../../assets/pratgpt_demo.png";
import GitHubLogo from "../../assets/github.png";

const PratGPT = ({ onBack }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="text-white px-6 py-12 max-w-6xl mx-auto space-y-16 overflow-y-auto h-full relative">
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="max-w-full max-h-[90vh] overflow-auto px-4">
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="mx-auto h-auto w-auto max-h-[90vh] rounded-xl shadow-lg transition-all duration-300"
            />
          </div>
        </div>
      )}

      <motion.div 
        className="space-y-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold">PratGPT Discord Bot</h2>
        <p className="text-neutral-300 max-w-3xl mx-auto">
          PratGPT is a custom AI Discord bot that I built in 2023 using{" "}
          <strong>discord.js</strong> and the <strong>OpenAI API</strong>. It
          was a personal project to help me practice integrating third-party
          APIs and experiment with AI behavior customization. Despite being
          built with an older tech stack, the results were surprisingly
          impactful.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-neutral-300 mt-2 cursor-default">
          {["Node.js", "OpenAI API", "discord.js"].map((tech, index) => (
            <span
              key={index}
              className="bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onBack}
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            ← Back
          </button>
          <a
            href="https://github.com/Pratv77/PratGPT--DB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg transition"
            title="GitHub"
          >
            <img src={GitHubLogo} alt="GitHub" className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-1 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <img
          src={PratGPTDemo}
          alt="Demo conversation"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(PratGPTDemo)}
        />
      </motion.div>

      <motion.div 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h3 className="text-2xl font-semibold">⚙️ Features</h3>
        <ul className="list-disc text-neutral-300 pl-6 space-y-1">
          <li>AI simulation of any personality you define</li>
          <li>Natural, human-like conversations in any Discord server</li>
          <li>Customizable prompt system for flexible personalities</li>
          <li>Simple, lightweight Node.js setup</li>
        </ul>

        <p className="text-neutral-300 ">
          PratGPT has been used in multiple Discord servers, holding
          conversations with over <strong>80 users</strong>. The{" "}
          <strong>modular personality system</strong> lets users completely
          redefine the bot's behavior just by updating the prompt. This makes it
          flexible enough to act like a gamer, mentor, assistant, or a fictional
          character.
        </p>
      </motion.div>

      <motion.div 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <hr className="border-t border-neutral-700 my-8" />
        <h3 className="text-2xl font-semibold">How It Works</h3>
        <p className="text-neutral-300">
          I built PratGPT using <strong>Node.js</strong>,{" "}
          <strong>discord.js</strong>, and <strong>OpenAI's</strong>{" "}
          <em>text-davinci-003</em>. That model was actually quite an older model even at the time I made this project,
          this was to practice using a cheaper model to experiment without overspending. When the bot is mentioned in a server, it
          fetches the previous message (or few), builds a conversation prompt
          using the participants' names and messages, and sends that to OpenAI.
          The AI then responds in character. It simulates dialogue by formatting
          everything to look like natural back-and-forth just like a real
          conversation.
        </p>
        <p className="text-neutral-300">
          I also handled edge cases like filtering out <code>@everyone</code>{" "}
          pings and bot spam, added typing indicators for realism, and designed
          the logic so it could be extended with memory features or command
          triggers later.
        </p>
        <div className="bg-violet-500/20 text-violet-100 text-sm px-4 py-3 rounded-md max-w-fit mx-auto shadow-lg border border-violet-400/30">
          <span className="font-semibold">
            🧠 Fully Programmable Personality:
          </span>{" "}
          You can hardcode PratGPT's voice with your own slang, inside jokes, or
          custom catchphrases using prompt templates.
        </div>
      </motion.div>

      <motion.div 
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <hr className="border-t border-neutral-700 my-8" />
        <h3 className="text-2xl font-semibold">What I Took From This</h3>
        <p className="text-neutral-300">
          Though it started as a learning project, PratGPT ended up being
          genuinely useful. It hosted conversations in various servers and gave
          people a new way to socialize and experiment with AI in real-time.
        </p>
        <p className="text-neutral-300">
          I learned a lot about <strong>async flows</strong>,{" "}
          <strong>API limits</strong>, and{" "}
          <strong>natural language prompt shaping</strong>, it was a solid
          starting point that gave me the momentum to keep building and take on
          more creative projects.
        </p>
        <div className="bg-blue-500/20 text-blue-100 text-sm px-4 py-3 rounded-md max-w-fit mx-auto shadow-lg border border-blue-400/30 mt-4">
          <span className="font-semibold">🎉 Fun Fact:</span> You can chat with
          the upgraded version of this project live on this site. Say hi to PratGPT on the home screen!
        </div>
      </motion.div>
    </div>
  );
};

export default PratGPT;