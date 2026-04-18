import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutme from "../../assets/aboutme.png";
import pcsetup from "../../assets/pcsetup.png";
import mirrorpicture from "../../assets/me.png";
import sphere from "../../assets/asciisphere.gif";
import challenger from "../../assets/challenger_logo.png";
import uoft from "../../assets/uoft.png";

const MyWorld = ({ isVisible, onClose }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [enlargedImage, setEnlargedImage] = useState(null);

  useEffect(() => {
    if (isVisible) {
      setIsRendering(true);
      document.body.style.overflow = "hidden";
      setTimeout(() => setFadeIn(true), 10);
    } else {
      setFadeIn(false);
      setTimeout(() => {
        setIsRendering(false);
        document.body.style.overflow = "";
      }, 500);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const onMouseMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 6;
    const rotateY = (centerX - x) / 6;
    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => setRotate({ x: 0, y: 0 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (!isRendering) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] cursor-zoom-out"
          onClick={() => setEnlargedImage(null)}
        >
          <div className="max-w-full max-h-[90vh] overflow-auto px-4">
            <img
              src={enlargedImage}
              alt="Enlarged"
              className="mx-auto h-auto w-auto max-h-[90vh] rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative w-[95%] sm:w-[85%] lg:w-[75%] max-w-5xl max-h-[90vh] overflow-y-auto bg-black border border-gray-700/50 rounded-2xl shadow-2xl transition-all duration-500 transform ${
          fadeIn
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
        data-modal-content
      >
        <div className="relative p-6 sm:p-8 lg:p-12">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full p-1.5 transition-colors"
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

          <div className="flex justify-center items-center gap-6 mb-16">
            <div className="relative group transition-transform duration-300 ease-in-out">
              <img
                src={aboutme}
                alt="About Me"
                className="w-full max-w-lg h-auto object-contain rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition duration-300 ease-in-out"
              />
            </div>
            <img
              src={mirrorpicture}
              alt="Pratham"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl ring-2 ring-blue-500/30 flex-shrink-0"
            />
          </div>

          <div className="space-y-24 text-white">
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-8">
                Who I Am
              </h2>
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1 space-y-4 text-base sm:text-lg leading-relaxed border-l-2 border-blue-500/30 pl-6">
                  <p className="text-gray-200">
                    I'm <strong>Pratham</strong>, a{" "}
                    <span className="text-blue-300 font-medium">
                      Psychology
                    </span>{" "}
                    major with minors in{" "}
                    <span className="text-blue-300 font-medium">
                      Statistics
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-300 font-medium">
                      Mathematical Sciences
                    </span>{" "}
                    at the University of Toronto.
                  </p>
                  <p className="text-gray-300">
                    <strong>Psychology</strong> is the scientific study of the
                    mind and behavior. The deeper I got into it, the more I
                    wanted to go beyond theory and actually measure those
                    patterns in real data. Things like why people make certain
                    decisions, how emotions influence memory, what drives
                    behavior in predictable ways. That's what drew me toward
                    <strong> behavioral data science</strong>, where
                    understanding why people think and act the way they do meets
                    the tools to find meaning in it at scale.
                  </p>
                  <p className="text-gray-300">
                    Outside of academics I stay pretty active. I go to the gym
                    regularly and try to get outside as much as I can whether
                    that's going for walks, playing sports (mainly soccer/golf),
                    or just spending time with friends. Gaming is definitely a
                    big hobby of mine too, I peaked{" "}
                    <span className="text-yellow-400 font-semibold">
                      1245LP Challenger
                    </span>{" "}
                    in{" "}
                    <span className="text-purple-300">League of Legends</span>,
                    love playing games like{" "}
                    <span className="text-purple-300">
                      Red Dead Redemption 1/2
                    </span>
                    , but now just waiting for{" "}
                    <span className="text-purple-300">GTA 6</span>. I also like
                    to read, bouncing between fiction and nonfiction, recently
                    started <span className="text-rose-300">Catch 22</span> by{" "}
                    <span className="italic text-gray-400">Joseph Heller</span>.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="flex flex-row lg:flex-col items-center gap-6">
                    <img
                      src={uoft}
                      alt="University of Toronto"
                      className="w-32 sm:w-40 lg:w-56 h-auto"
                    />
                    <img
                      src={challenger}
                      alt="Promoted to Challenger"
                      className="w-32 sm:w-40 lg:w-72 h-auto rounded-xl shadow-2xl border border-yellow-500/20 cursor-zoom-in"
                      onClick={() => setEnlargedImage(challenger)}
                    />
                  </div>
                </div>
              </div>
            </section>

            <motion.section
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={sectionVariants}
            >
              <h2 className="text-2xl pb-[4px] sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                My Coding Journey
              </h2>
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1 space-y-4 text-base sm:text-lg leading-relaxed border-l-2 border-green-500/30 pl-6">
                  <p className="text-gray-300">
                    Before the age of LLMs, I taught myself through{" "}
                    <strong>YouTube</strong> tutorials,{" "}
                    <strong>freeCodeCamp</strong>, and{" "}
                    <strong>The Odin Project</strong>. I started with small
                    projects and gradually built up to more complex ones. Began
                    with HTML/CSS/JS so I first made a{" "}
                    <a
                      href="https://github.com/Pratv77/WeatherApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 underline hover:text-cyan-200 transition-colors"
                    >
                      weather app
                    </a>
                    , then a{" "}
                    <a
                      href="https://github.com/Pratv77/LoLStats"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 underline hover:text-cyan-200 transition-colors"
                    >
                      League of Legends statistics tracker
                    </a>
                    , then an{" "}
                    <a
                      href="https://github.com/Pratv77/PratGPT--DB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 underline hover:text-cyan-200 transition-colors"
                    >
                      OpenAI powered Discord bot
                    </a>
                    , and so on. Each project pushed me further than the last,
                    and that's how I built the confidence to tackle more
                    complicated challenges and eventually commit to a real
                    stack.
                  </p>

                  <p className="text-gray-300">
                    From there I got pulled into the{" "}
                    <span className="text-emerald-400">Web3</span> and{" "}
                    <span className="text-emerald-400">Blockchain</span> space.
                    The idea of decentralized systems, smart contracts that
                    execute without a middleman, applications that don't rely on
                    a company to function, it all felt like genuinely new
                    territory worth understanding. I did a cohort-based{" "}
                    <strong>Solidity</strong> bootcamp, built and deployed real
                    smart contracts on <strong>Ethereum</strong>, and shipped
                    decentralized applications with a team. It was a different
                    way of thinking about how software could work and I learned
                    a lot from it.
                  </p>

                  <p className="text-gray-300">
                    The further I went, the more I started gravitating toward
                    the data side of things. Web3 is still a space I follow and
                    find interesting, but I kept finding myself more drawn to
                    questions about people, behavior, patterns in how humans
                    think and act.{" "}
                    <span className="text-blue-300">Data science</span> felt
                    like the right tools to actually answer those questions, and
                    between that and everything I was already studying in
                    psychology, the direction became pretty clear. That's where
                    I'm building now.
                  </p>
                </div>

                <motion.div
                  className="flex-shrink-0 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={sectionVariants}
                >
                  <div className="relative">
                    <img
                      src={sphere}
                      alt="ASCII Sphere Animation"
                      className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 select-none pointer-events-none"
                      draggable="false"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={sectionVariants}
            >
              <h2 className="text-2xl pb-[4px] sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                My Setup
              </h2>

              <div className="flex justify-center mb-8">
                <div className="relative max-w-2xl">
                  <img
                    src={pcsetup}
                    alt="My Desk Setup"
                    className="w-full h-auto rounded-xl shadow-2xl border border-gray-700/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <div className="p-3 xs:p-4 sm:p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl border border-gray-600/30 transition-shadow hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-3 xs:mb-4">
                    Hardware
                  </h3>
                  <div className="space-y-2 text-xs xs:text-sm sm:text-base">
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">CPU:</span>
                      <span className="text-gray-200">
                        12th Gen Intel i5-12400F
                      </span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">GPU:</span>
                      <span className="text-gray-200">RTX 3060</span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">RAM:</span>
                      <span className="text-gray-200">32GB DDR4</span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">Storage:</span>
                      <span className="text-gray-200">T7 1TB SSD</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 xs:p-4 sm:p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl border border-gray-600/30 transition-shadow hover:shadow-lg hover:shadow-cyan-500/20">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-3 xs:mb-4">
                    Peripherals
                  </h3>
                  <div className="space-y-2 text-xs xs:text-sm sm:text-base">
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">Monitors:</span>
                      <span className="text-gray-200">
                        (L) 24″ KOORUI E2411K + (M) 27″ MSI G27C4 + (R) 24″
                        Odyssey G3
                      </span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">Keyboard:</span>
                      <span className="text-gray-200">
                        Keychron K8 Wireless
                      </span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">Mouse:</span>
                      <span className="text-gray-200">
                        Razer Deathadder v3 Pro
                      </span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">Audio:</span>
                      <span className="text-gray-200">AirPods Max</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorld;
