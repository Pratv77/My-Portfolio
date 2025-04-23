import React, { useState } from "react";
import DS1 from "../../assets/ds_1.png";
import DS2 from "../../assets/ds_2.png";
import DS3 from "../../assets/ds_3.png";
import DSArticle from "../../assets/article_screenshot.png";
import GitHubLogo from "../../assets/github.png";

const DreamScape = ({ onBack }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <div className="text-white px-6 py-12 max-w-6xl mx-auto space-y-16 overflow-y-auto h-full relative">
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <img
            src={enlargedImage}
            alt="Enlarged"
            className="max-w-5xl max-h-[90vh] rounded-xl shadow-lg transition-all duration-300"
          />
        </div>
      )}

      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold">🌙 DreamScape</h2>
        <p className="text-neutral-300 max-w-3xl mx-auto">
          DreamScape is an AI-powered dream interpretation app developed during <strong>DeerHacks 2025</strong>, the University of Toronto Mississauga's 36-hour hackathon. It blends Natural Language Processing with creative UX to help users interpret their dreams in a structured, meaningful way. The project won <strong>first place</strong> and was featured in an article by <em>The Medium</em>.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onBack}
            className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-lg transition"
          >
            ← Back to Projects
          </button>
          <a
            href="https://github.com/pratvijh/dreamscape"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg transition"
            title="GitHub"
          >
            <img src={GitHubLogo} alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href="https://devpost.com/software/dreamspace"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-lg transition"
            title="DevPost"
          >
            🔗
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={DS1}
          alt="Dream entry screen"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(DS1)}
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">🔮 Inspiration</h3>
          <p className="text-neutral-400">
            The idea stemmed from a team conversation about self-discovery. One teammate recalled his mom’s habit of analyzing dreams, and the team realized dream interpretation perfectly fit the hackathon’s theme of "Discovery." The goal became building a structured dream interpreter using AI.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">🧠 What It Does</h3>
          <p className="text-neutral-400">
            DreamScape lets users enter their dreams by typing or speaking, and then reveals three types of AI-generated interpretations:
            <ul className="list-disc pl-5 mt-2">
              <li><b>Mind Door:</b> Psychological & emotional insights</li>
              <li><b>Spirit Door:</b> Symbolic or spiritual meanings</li>
              <li><b>Action Door:</b> Practical advice or next steps</li>
            </ul>
          </p>
        </div>
        <img
          src={DS2}
          alt="Door selection"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(DS2)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={DS3}
          alt="Interpretation scroll"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(DS3)}
        />
        <div>
          <h3 className="text-2xl font-semibold mb-2">⚙️ How We Built It</h3>
          <p className="text-neutral-400">
            - <b>Frontend:</b> React + Tailwind CSS<br />
            - <b>Backend:</b> Express.js<br />
            - <b>NLP:</b> Python + NLTK<br />
            - <b>AI Model:</b> Google Gemini<br />
            - <b>Voice Input:</b> Web Speech API
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">📸 Featured in The Medium</h3>
          <p className="text-neutral-400">
            Our project was spotlighted in <em>The Medium</em>’s feature article on DeerHacks. The article highlights how we collaborated under pressure, used prompt engineering, and themed the UI around medieval symbolism to make the app more immersive and emotionally resonant. You can visit it <a href="https://themedium.ca/deerhacks-36-hours-of-innovation-connection-and-inspiration/" target="_blank" className="underline text-blue-400 hover:text-blue-300">here</a>.
          </p>
        </div>
        <img
          src={DSArticle}
          alt="Article screenshot"
          className="rounded-xl shadow-lg cursor-zoom-in"
          onClick={() => setEnlargedImage(DSArticle)}
        />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">🙋‍♂️ My Role & Contributions</h3>
        <p className="text-neutral-300">
          I was responsible for leading the entire frontend development of DreamScape, building the user interface and shaping the overall visual theme using React and Tailwind CSS. I implemented the layout, animations, and interactive door navigation system, ensuring it matched our medieval fantasy concept. I also handled visual asset integration and collaborated with the team to prepare and deliver our final demo presentation to the judges.
        </p>

        <h3 className="text-2xl font-semibold">🏆 Highlights</h3>
        <p className="text-neutral-300">
          Our team took home 1st Place at DeerHacks 2025. The project stood out for its immersive, game-like design, intuitive speech-to-text feature, and creative interpretation model. Judges were particularly impressed with the polish and storytelling of the final demo.
        </p>

        <h3 className="text-2xl font-semibold">📈 Future Upgrades</h3>
        <p className="text-neutral-300">
          In future versions, we plan to add a personal dream journal so users can revisit past entries. We're also exploring social features like dream sharing and community interpretation. Deeper symbolic models and refined UI effects are on the roadmap to further elevate the experience.
        </p>
      </div>
    </div>
  );
};

export default DreamScape;
