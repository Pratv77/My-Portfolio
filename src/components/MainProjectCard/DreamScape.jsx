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
          <div className="max-w-full max-h-[90vh] overflow-auto px-4">
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="mx-auto h-auto w-auto max-h-[90vh] rounded-xl shadow-lg transition-all duration-300"
            />
          </div>
        </div>
      )}

      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold">🌙 DreamScape</h2>
        <p className="text-neutral-300 max-w-3xl mx-auto">
          <strong>DreamScape</strong> is an AI-powered dream interpretation app
          that I built with my team, Julius Henriques, Tejovardhan Nepala, and
          Jahangir Minhas, during <strong>DeerHacks IV 2025</strong>, a 36-hour
          hackathon hosted at the University of Toronto. The theme of the
          hackathon was <em>“Discovery”</em>, and we built a tool that helps
          users understand themselves through their dreams. As a first-time
          hackathon experience, it couldn't have gone better, we won first
          place, and the project was featured in <em>The Medium</em>.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-neutral-300 mt-2 cursor-default">
          {[
            "React",
            "Tailwind CSS",
            "Express.js",
            "Python + NLTK",
            "Google Gemini API",
            "Web Speech API",
          ].map((tech, index) => (
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
            className="bg-white hover:bg-gray-100 text-black font-medium py-2 px-6 rounded-lg transition"
          >
            ← Back to Projects
          </button>
          <a
            href="https://github.com/Pratv77/dreamscape"
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
          <h3 className="text-2xl font-semibold mb-2">Why We Built It</h3>
          <p className="text-neutral-400">
            One of our teammates remembered how his mom used to analyze her
            dreams, and that turned into our core idea: using AI to help people
            find insight through dreams. We kept asking ourselves, how can we
            make dream interpretation actually feel <em>meaningful</em>, instead
            of just vague symbolism? That's where the idea of structured, themed
            interpretations came in: one emotional, one symbolic, and one
            actionable.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">What It Does</h3>
          <p className="text-neutral-400">
            Users type or speak their dream. Then, they choose one of three
            interpretations:
            <ul className="list-disc pl-5 mt-2">
              <li>
                <b>Mind Door:</b> Psychological & emotional breakdown
              </li>
              <li>
                <b>Spirit Door:</b> Symbolic or spiritual interpretation
              </li>
              <li>
                <b>Action Door:</b> Advice or actionable next step tied to the
                dream
              </li>
            </ul>
            Each one uses NLP and Google Gemini to generate responses that are
            brief, specific, and personal.
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
            I speedran the frontend using React and Tailwind. I was spending
            quite some time worrying about perfection until I realized the goal
            was to get a working product fast, then refine. That mindset helped
            a lot. With the help of multiple LLM's, I used the same prompt on
            each model to compare and see which output would provide the best
            results, doing so helped me avoid bugs and generate clean code at a
            very fast rate without overcomplicating anything. Our stack was:
            <br />
            <br />- <b>Frontend:</b> React + Tailwind CSS
            <br />- <b>Backend:</b> Express.js
            <br />- <b>NLP:</b> Python + NLTK
            <br />- <b>AI:</b> Google Gemini
            <br />- <b>Voice Input:</b> Web Speech API
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            We Got to Share Our Journey
          </h3>
          <p className="text-neutral-400">
            After the hackathon wrapped up, we got interviewed by{" "}
            <em>The Medium</em>, the official UTM student publication. They
            asked us about how the idea came together, how we split up the work,
            and what it was like building everything under pressure. We also
            talked about the medieval theme and how we used prompt engineering
            to make the AI responses feel intentional and unique. You can read
            the full article{" "}
            <a
              href="https://themedium.ca/deerhacks-36-hours-of-innovation-connection-and-inspiration/"
              target="_blank"
              className="underline text-blue-400 hover:text-blue-300"
            >
              here
            </a>
            .
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
        <h3 className="text-2xl font-semibold">🙋‍♂️ My Role</h3>
        <p className="text-neutral-300">
          I built the frontend from scratch, designed the layout and animations,
          and handled visual integration. I also helped with storytelling and
          our final Zoom pitch, since a snowstorm hit and we couldn't present in
          person. Instead of staying at the university overnight, we decided to
          work together over Discord from home. It was slightly chaotic, but it
          worked.
        </p>
        <hr className="border-t border-neutral-700 my-8" />
        <h3 className="text-2xl font-semibold">💡 NLP and AI</h3>
        <p className="text-neutral-300">
          This could've been just another ChatGPT-wrapper project, but we used
          Natural Language Processing (NLP) to make sure the AI actually
          understood what mattered in the user's dream. Using NLTK, a Python
          library for working with human language data, we filtered out common
          filler words and pulled out the most important keywords. That way, the
          AI prompt only included the core ideas of the dream. This approach
          made the responses more focused and reduced the chances of AI hallucinations (AI
          making stuff up). Instead of generic or random outputs, users get
          interpretations that actually feel connected to what they experienced.
        </p>
        <hr className="border-t border-neutral-700 my-8" />
        <h3 className="text-2xl font-semibold">The Outcome</h3>
        <p className="text-neutral-300">
          - First Place at DeerHacks IV 2025
          <br />
          - Featured in The Medium
          <br />
          - Functional AI + Voice + UI in under 36 hours
          <br />
          - Judges praised the theme, UX, and creative take
          <br />- Judges referred our team to ICUBE (startup incubator at UTM)
        </p>
        <div className="bg-yellow-300/20 text-yellow-100 text-sm px-4 py-3 rounded-md max-w-fit mx-auto shadow-lg border border-yellow-400/30">
          <span className="font-semibold">✨ Bonus:</span> We won{" "}
          <span className="font-medium text-yellow-50">
            noise cancelling headphones
          </span>{" "}
          for first place! ✨
        </div>

        <hr className="border-t border-neutral-700 my-8" />
        <h3 className="text-2xl font-semibold">What's Next</h3>
        <p className="text-neutral-300">
          We're planning to add a dream journal so users can track and revisit
          past entries, along with sharing features to compare interpretations
          with others. We're also exploring more advanced NLP models to improve
          accuracy and make the insights even more personal. These updates will
          help turn DreamScape into a more complete and meaningful tool for
          self-reflection.
        </p>
      </div>
    </div>
  );
};

export default DreamScape;
