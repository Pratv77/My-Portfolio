import React, { useState, useEffect } from "react";
import projectsImage from "../../assets/projects.png";
import ProjectsOverlay from "./ProjectsOverlay";

const MainProjectCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  const deltaX = mousePosition.x - containerWidth / 2;
  const deltaY = mousePosition.y - containerHeight / 2;

  const rotateX = isHovering ? 0 : deltaY * 0.0035;
  const rotateY = isHovering ? 0 : -deltaX * 0.0035;


  let baseScale = 1.02;
  if (screenWidth >= 1024 && screenWidth < 1360) {
    baseScale = 0.94;
  }

  let backgroundScale = baseScale;
  if (isHovering) {
    backgroundScale = screenWidth >= 1024 && screenWidth < 1360 ? 1.02 : 1.15;
  }

  const handleCardClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div
        className="h-full w-full rounded-lg border border-white/25 grid place-content-center relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleCardClick}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-2%",
            left: "-2%",
            width: "104%",
            height: "104%",
            backgroundImage: `url(${projectsImage})`,
            backgroundSize: "cover",
            backgroundPosition:
              screenWidth >= 1024 && screenWidth < 1360
                ? "center 40%"
                : "center top",
            backgroundRepeat: "no-repeat",
            transform: `scale(${backgroundScale}) translateX(${(mousePosition.x / containerWidth - 0.5) * 10}px) translateY(${(mousePosition.y / containerHeight - 0.5) * 10}px)`,
            transition: "transform 0.3s ease-out",
            borderRadius: "0.5rem",
            zIndex: 0,
          }}
        />
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none ${
            isHovering ? "opacity-30" : "opacity-0"
          }`}
          style={{ zIndex: 5 }}
        />
        <div className="z-10 text-center" />
      </div>

      <ProjectsOverlay isVisible={showOverlay} onClose={handleCloseOverlay} />
    </>
  );
};

export default MainProjectCard;