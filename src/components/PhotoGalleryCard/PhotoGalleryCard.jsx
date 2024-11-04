import React, { useState } from "react";

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

const TiltCard = ({ imageSrc, description, bgColor }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = throttle((e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 7;
    const rotateY = (centerX - x) / 7;

    setRotate({ x: rotateX, y: rotateY });
  }, 100);

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="p-4"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
      }}
    >
      <div
        className="relative h-full w-full rounded-xl transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
        style={{ backgroundColor: bgColor }}
      >
        <div className="relative flex h-full w-full select-none items-center justify-center rounded-lg text-sm font-light text-slate-300">
          <div className="text-center">
            <img src={imageSrc} alt={description} className="w-12 h-12 mx-auto mb-2" />
            <p className="text-xs mt-1">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PhotoGalleryCard = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 h-full w-full gap-0">
      {/* Each card is fully independent and customizable */}
      <TiltCard 
        imageSrc="/path/to/github_logo.png" 
        description="GitHub" 
        bgColor="#333" // Dark gray for GitHub
      />

      <TiltCard 
        imageSrc="/path/to/discord_logo.png" 
        description="Discord" 
        bgColor="#7289DA" // Discord blue
      />

      <TiltCard 
        imageSrc="/path/to/twitter_logo.png" 
        description="Twitter" 
        bgColor="#1DA1F2" // Twitter blue
      />

      <TiltCard 
        imageSrc="/path/to/linkedin_logo.png" 
        description="LinkedIn" 
        bgColor="#0077B5" // LinkedIn blue
      />
    </div>
  );
};

export default PhotoGalleryCard;
