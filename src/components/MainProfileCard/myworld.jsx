import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutme from "../../assets/aboutme.png";
import pcsetup from "../../assets/pcsetup.png";
import mirrorpicture from "../../assets/me.png";
import sphere from "../../assets/asciisphere.gif";

const MyWorld = ({ isVisible, onClose }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

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
      transition: { duration: 0.8, ease: "easeOut" }
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

          <div className="flex justify-center mb-16">
            <div className="relative group transition-transform duration-300 ease-in-out">
              <img
                src={aboutme}
                alt="About Me"
                className="w-full max-w-lg h-auto object-contain rounded-xl shadow-2xl transform group-hover:scale-[1.02] transition duration-300 ease-in-out"
              />
            </div>
          </div>

          <div className="space-y-24 text-white">
            <section 
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-8">
                Who I Am
              </h2>
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1 space-y-4 text-base sm:text-lg leading-relaxed border-l-2 border-blue-500/30 pl-6">
                  <p className="text-gray-200">
                    Hello again, if you missed it the first time, I'm{" "}
                    <strong>Pratham</strong>. I'm currently majoring in{" "}
                    <span className="text-blue-300 font-medium">
                      Psychology
                    </span>{" "}
                    with minors in{" "}
                    <span className="text-blue-300 font-medium">
                      Computer Science
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-300 font-medium">
                      Statistics
                    </span>{" "}
                    at the University of Toronto.
                  </p>
                  <p className="text-gray-300">
                    I've always had a strong curiosity for how and why things
                    work. <strong>Psychology</strong> lets me explore behavior
                    and decision-making, while <strong>Computer Science</strong>{" "}
                    gives me the tools to build and solve problems logically.{" "}
                    <strong>Statistics</strong> ties them together because in a
                    world driven by data, knowing how to interpret and use it is
                    essential.
                  </p>
                  <p className="text-gray-300">
                    These disciplines push me to think critically, stay
                    analytical, and keep learning. I'm particularly drawn to the
                    fast-paced world of tech, and I love staying up to date with
                    coding trends, especially those related to AI. I'm always
                    trying to learn more, build smarter, and keep an open mind.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={mirrorpicture}
                      alt="Pratham"
                      className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-2xl ring-2 ring-blue-500/30 animate-float"
                    />
                  </div>
                </div>
              </div>
            </section>

            <motion.section 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-2xl pb-[4px] sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-300 to-gray-200 bg-clip-text text-transparent">
                What This Site Is
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed border-l-2 border-gray-500/30 pl-6">
                <p className="text-gray-200">
                  This is my <strong>personal portfolio</strong>, a site I built
                  from scratch to track what I've been working on and learning.
                  Built with <strong>React</strong> and styled with modern
                  design principles, it's completely <strong>responsive</strong>{" "}
                  and optimized for performance.
                </p>
                <p className="text-gray-300">
                  It's a central hub for my projects, experience, and
                  experiments. I'm always improving it, adding new features
                  whenever I come across something cool online that I want to
                  implement or try to recreate.
                </p>
                <p className="text-gray-300">
                  This site exists to showcase my work, document progress, and
                  reflect how I think and build. It's also a testing ground for
                  new ideas and technologies I'm exploring.
                </p>
              </div>
            </motion.section>

            <motion.section 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-2xl pb-[4px] sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                My Coding Journey
              </h2>
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1 space-y-4 text-base sm:text-lg leading-relaxed border-l-2 border-green-500/30 pl-6">
                  <p className="text-gray-200">
                    I've been tech-savvy since childhood, always drawn to
                    computers and naturally gravitating toward gaming. What
                    started as casual play evolved into something deeper when I
                    began modding games and finding ways around developer
                    restrictions. This technical curiosity made coding feel like
                    a natural next step.
                  </p>
                  <p className="text-gray-300">
                    Before the age of ChatGPT and LLMs, I taught myself through{" "}
                    <strong>YouTube tutorials</strong>,
                    <strong> freeCodeCamp</strong>, and{" "}
                    <strong>The Odin Project</strong>, building micro-projects
                    to practice each skill. As I tackled more complex projects,
                    I became deeply embedded in the developer community and
                    discovered my passion for{" "}
                    <span className="text-green-300 font-medium">ML/AI</span>{" "}
                    and
                    <span className="text-green-300 font-medium">
                      {" "}
                      Web3/blockchain
                    </span>
                    .
                  </p>
                  <p className="text-gray-300">
                    Now, with solid frontend and backend skills, I'm focused on
                    making the Web3 world more accessible through clean UIs and
                    intuitive systems that bridge the gap between complex
                    technology and everyday users.
                  </p>
                </div>

                <motion.div 
                  className="flex-shrink-0 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
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
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-2xl pb-[4px] sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                The World of Web3
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed border-l-2 border-orange-500/30 pl-6">
                <p className="text-gray-300">
                  What draws me to Web3 is the <strong>shift in control</strong>
                  . We're moving away from systems where we blindly trust
                  companies to act fairly, toward a model where everything is
                  transparent and verifiable. If a payment's owed, it goes
                  through. If data is recorded, it stays there. No chasing
                  support or dealing with "technical issues." It just works the
                  way it's supposed to.
                </p>
                <p className="text-gray-300">
                  That said, Web3 is still early. High fees, complex interfaces,
                  and smart contract vulnerabilities are real challenges. Some
                  parts still rely on centralized systems, and that tension
                  can't be ignored. But even with its flaws, the idea of giving
                  users direct control over their assets, identity, and data
                  still feels like the right direction.
                </p>
                <p className="text-gray-300">
                  Most platforms today are built on trust you can't verify. You
                  hand over your info and just hope it's handled right.
                  Blockchain shifts that by making systems open, trackable, and
                  harder to manipulate. It <strong>respects the user</strong>{" "}
                  instead of working around them. It's not perfect yet, but it's
                  a space full of potential, and one I'm excited to grow with.
                </p>
              </div>
            </motion.section>

            <motion.section 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-2xl pb-[4px] sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                What I'm Diving Into
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                      AI-powered web experiences, like dynamic interfaces that
                      adapt to users
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Clean, responsive frontend design with smooth animations
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Smart contracts for secure, real-world blockchain
                      applications
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Machine learning to build data-driven systems that solve
                      complex problems
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg italic text-center">
                I'm excited to push these fields further and bring fresh ideas
                to life.
              </p>
            </motion.section>

            <motion.section 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-2xl pb-[4px] sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                My Interests
              </h2>
              <div className="space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed border-l-2 border-yellow-500/30 pl-6">
                <p className="text-gray-200">
                  When I'm not working on something or studying, I'm usually
                  reading, playing soccer, spending time with friends, or
                  watching movies/shows/YouTube. I game casually and
                  competitively, I've peaked at{" "}
                  <span className="text-yellow-300 font-semibold px-2 py-1 bg-yellow-800/30 rounded">
                    700LP Grandmaster
                  </span>{" "}
                  in League of Legends, and I'm a big fan of solo titles like{" "}
                  <em className="text-gray-300">Red Dead Redemption 2</em> and{" "}
                  <em className="text-gray-300">Ghost of Tsushima</em>. I also
                  enjoy playing chess, and getting outside, whether it's biking,
                  going for walks, or getting in a solid workout now and then.
                </p>
              </div>
            </motion.section>

            <motion.section 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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
                        (L) 27″ MSI G27C4 + (R) 24″ Odyssey G3
                      </span>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between">
                      <span className="text-gray-500">Keyboard:</span>
                      <span className="text-gray-200">Ducky One 2 Mini</span>
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