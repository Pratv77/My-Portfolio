import React, { useState } from "react";
import { motion } from "framer-motion";
import ClickboardHero from "../../assets/clickboard_demo.gif";
import ClickboardDemo1 from "../../assets/clickboard_demo_1.png";
import ClickboardDemo2 from "../../assets/clickboard_demo_2.png";
import GitHubLogo from "../../assets/github.png";

const ClickBoard = ({ onBack }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const section = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="text-white px-6 py-12 max-w-6xl mx-auto space-y-16 overflow-y-auto h-full relative">
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
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
        variants={section}
      >
        <h2 className="text-4xl font-bold">ClickBoard Chrome Extension</h2>
        <p className="text-neutral-300 max-w-3xl mx-auto">
          <strong>ClickBoard</strong> is a draggable, resizable Chrome extension
          I built to simplify repetitive copy-paste tasks. While applying for
          internships/jobs, I got tired of constantly switching tabs just to
          grab different links, so I created a lightweight toolbar that keeps up
          to 10 text snippets instantly accessible. With one-click copying,
          everything stays local for privacy and speed, making everyday
          multitasking smoother and faster.
        </p>

        <div className="flex flex-wrap justify-center gap-2 text-sm text-neutral-300 mt-2 cursor-default">
          {[
            "TypeScript",
            "Vite",
            "Chrome Extension (MV3)",
            "React",
            "Tailwind",
          ].map((t) => (
            <span
              key={t}
              className="bg-neutral-800 hover:bg-neutral-700 transition-colors px-3 py-1 rounded-full font-medium"
            >
              {t}
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
            href="https://github.com/Pratv77/ClickBoard-Chrome-Extension"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg transition"
            title="GitHub"
          >
            <img src={GitHubLogo} alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href="https://chromewebstore.google.com/detail/clickboard/pfnpcegnlffchgdgncoohlealddiikde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-lg transition"
            title="Chrome Web Store"
          >
            🔗
          </a>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={section}
      >
        <img
          src={ClickboardHero}
          alt="ClickBoard toolbar hero"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(ClickboardHero)}
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">What It Does</h3>
          <p className="text-neutral-300">
            ClickBoard adds a minimal floating toolbar to any webpage. Save up
            to 10 text snippets like links, emails, or messages, and copy them
            instantly with one click. You can drag, resize, or reset the toolbar
            to fit your workspace. It’s lightweight, distraction-free, and
            always ready when you need it.
          </p>
          <ul className="list-disc text-neutral-300 pl-5 mt-3 space-y-1">
            <li>One-click copy for saved snippets</li>
            <li>Draggable and resizable container with saved state</li>
            <li>Local-only storage (nothing uploaded or synced)</li>
            <li>Keyboard navigation support for fast snippet editing</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={section}
      >
        <img
          src={ClickboardDemo1}
          alt="ClickBoard demo – editing snippets"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(ClickboardDemo1)}
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">⚙️ How I Built It</h3>
          <p className="text-neutral-300">
            I built ClickBoard using React, TypeScript, Tailwind, and Vite, and
            packaged it as a Manifest V3 Chrome Extension. The goal was to
            balance flexibility with simplicity so it felt like a small built-in
            utility rather than another app.
            <br />
            <br />
            Throughout development, I focused on creating smooth and reliable
            interactions. I implemented debounced storage writes to improve
            performance, added resize guards for better control, adjusted
            z-index and shadow layers to prevent site interference, and kept the
            overall footprint light by removing background polling.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
      >
        <div>
          <h3 className="text-2xl font-semibold mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-5 text-neutral-300 space-y-1">
            <li>
              <strong>Job seekers:</strong> keep your LinkedIn, GitHub, and
              portfolio links ready to paste
            </li>
            <li>
              <strong>Developers:</strong> tiny code snippets or API keys (local
              only)
            </li>
            <li>
              <strong>Students:</strong> study notes, references, citations
            </li>
            <li>
              <strong>Pros:</strong> form responses, email templates, ticket
              replies
            </li>
          </ul>
        </div>
        <img
          src={ClickboardDemo2}
          alt="ClickBoard demo – compact toolbar"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(ClickboardDemo2)}
        />
      </motion.div>

      <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
      >
        <h3 className="text-2xl font-semibold">🔒 Privacy & Storage</h3>
        <p className="text-neutral-300">
          All data is stored locally in your browser using{" "}
          <code className="mx-1">chrome.storage.local</code>, so nothing ever
          leaves your device. There are no accounts, no syncing, and no network
          requests, everything stays private by design. This makes ClickBoard
          both lightweight and secure, while keeping your snippets instantly
          available whenever you open a page.
        </p>
      </motion.div>

      <motion.div
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
      >
        <hr className="border-t border-neutral-700 my-8" />
        <h3 className="text-2xl font-semibold">🎨 Design Choices</h3>
        <p className="text-neutral-300">
          Every part of ClickBoard was built with simplicity in mind. Each
          feature had to feel essential, fast, and seamless within the browsing
          experience. Anything that added clutter, lag, or visual noise was left
          out to preserve a clean, focused feel.
        </p>
        <p className="text-neutral-300">
          Subtle shadows, smooth animations, and persistent toolbar state make
          the extension feel integrated rather than layered on top. It’s meant
          to blend into your workflow, not interrupt it.
        </p>
      </motion.div>

      <motion.div
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={section}
      >
        <hr className="border-t border-neutral-700 my-8" />
        <h3 className="text-2xl font-semibold">What I Learned</h3>
        <p className="text-neutral-300">
          Building a small tool still requires careful UX thinking. I had to
          consider resize limits, storage behavior, and how injected elements
          interact with real sites.
        </p>
        <ul className="list-disc pl-5 text-neutral-300 space-y-1">
          <li>Deeper comfort with Chrome storage and MV3 constraints</li>
          <li>Cleaner event handling and state synchronization in React</li>
          <li>Better debugging habits for content scripts and overlays</li>
        </ul>
        <p className="text-neutral-300">
          Most of all, I realized how much impact a simple, focused tool can
          have when it just works. It reminded me that solving a real annoyance
          cleanly is often more satisfying than adding complex features.
        </p>
      </motion.div>
    </div>
  );
};

export default ClickBoard;
