import React, { useState } from "react";
import githubLogo from "../../assets/github.png";
import discordLogo from "../../assets/discord.png";
import xLogo from "../../assets/x.png";
import linkedinLogo from "../../assets/linkedin.png";

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const TiltCard = ({ imageSrc, description, bgColor, link }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = throttle((e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerX) / 3.5;
    const rotateY = (centerY - x) / 3.5;

    setRotate({ x: rotateX, y: rotateY });
  }, 100);

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
      <div
        className="p-1 h-full w-full"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
        <div
          className="relative h-full w-full rounded-xl transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform border border-white/25 hover:scale-105"
          style={{ backgroundColor: bgColor }}
        >
          <div className="relative flex h-full w-full select-none items-center justify-center rounded-lg text-sm font-light text-slate-300">
            <div className="text-center">
              <img
                src={imageSrc}
                alt={description}
                className="mx-auto mb-2 object-contain"
                style={{ width: "92px", height: "92px" }}
              />
              <p className="text-xs md:text-sm mt-1">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const PhotoGalleryCard = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 h-full w-full gap-0">
      <TiltCard 
        imageSrc={githubLogo} 
        description="GitHub" 
        bgColor="#333"
        link="https://github.com/Pratv77"
      />
      <TiltCard 
        imageSrc={discordLogo} 
        description="PratV" 
        bgColor="#5865f2"
      />
      <TiltCard 
        imageSrc={xLogo} 
        description="Twitter" 
        bgColor="black"
        link="https://x.com/PratGPT"
      />
      <TiltCard 
        imageSrc={linkedinLogo} 
        description="LinkedIn" 
        bgColor="#0a66c2"
        link="https://www.linkedin.com/in/pratv7/"
      />
    </div>
  );
};

export default PhotoGalleryCard;
